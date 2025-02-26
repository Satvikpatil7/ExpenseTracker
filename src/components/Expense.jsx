import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ExpenseList from './ExpenseList';

const Expense = () => {
  console.log("Expense  re-rendered-1");

  // state variables 
  const [expList, setExpList] = useState([]); // list of expenses
  const [expAmount, setExpAmount] = useState(0); // amount 
  const [expDescription, setExpDescription] = useState(""); //  description 
  const descriptionRef = useRef(null); // useRef

  //  side effects in the component.
  // localStorage.
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpList(storedExpenses); //fetched expenses 
    console.log("Expense (useEffect) run-1");
  }, []); //  runs only once when the component mounts.


 //  runs every time expList changes.

  //  unnecessary re-creations.
  const addExpense = useCallback(() => {
    console.log("Expense (useCallback) run");
    if (!expDescription || !expAmount) return; 

    const newExpense = { id: Date.now(), description: expDescription, amount: parseFloat(expAmount) };
    setExpList((prev) => [...prev, newExpense]); // Update 

    setExpDescription(""); 
    setExpAmount(0); // Reset 

    // Focus back on the description input
    descriptionRef.current.focus();
  }, [expDescription, expAmount]); // This runs every time changes

  // calculation of the total expenses.
  const totalExpenses = useMemo(() => {
    console.log("Expense (useMemo) run-1");
    return expList.reduce((acc, expense) => acc + expense.amount, 0); // Calculate the total amount of expenses
  }, [expList]); // This runs every time changes.
  
  const [che,setch]=useState(0); 

  return (
    <div className="p-6 max-w-md mx-auto rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Expense Tracker</h2>

      <div className="mb-4">
        <input
          ref={descriptionRef} // Ref to focus 
          type="text"
          placeholder="Description"
          value={expDescription}
          onChange={(e) => setExpDescription(e.target.value)} 
          className="border p-2 w-full mb-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={expAmount}
          onChange={(e) => setExpAmount(e.target.value)} 
          className="border p-2 w-full mb-2"
        />
        <button onClick={addExpense} className="bg-red-600 text-white p-2 w-full rounded hover:bg-red-700 transition duration-200">
          Add Expense
        </button>
      </div>

      <h3 className="text-lg font-bold mb-2">Total: ${totalExpenses.toFixed(2)}</h3>
      <button 
        onClick={() => setch(che+1)} 
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 active:bg-blue-700 transition duration-200"
      >
        {che}
      </button>
    
      <ExpenseList expList={expList} /> 
    </div>
  );
}

export default Expense;