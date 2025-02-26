import React, { useMemo, useState } from 'react';

//  prevent unnecessary re-renders 
// It will only re-render if the props change.
const ExpenseList = React.memo(({ expList = [] }) => {
  console.log("Expense  re-rendered-2");

  
  // useMemo: This hook is used to memoize the rendered list of expenses.
  // It will only recalculate the list when expList changes, improving performance.
  const renderedExpenses = useMemo(() => {
    console.log("Expense (useMemo) run-2");

    return expList.map((expense) => (
      <li key={expense.id} className="flex justify-between border-b p-2">
        <span>{expense.description}</span>
        <span>${expense.amount.toFixed(2)}</span>
      </li>
    ));
  }, [expList]); // Dependencies: This will re-run when expList changes.
  
     const [che,setch]=useState(0); 
   
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Expenses</h3>
      <ul className="border p-2 rounded-md mb-4">
        {expList.length === 0 ? (
          <li className="text-gray-500">No expenses added.</li>
        ) : (
          renderedExpenses // Use the memoized rendered expenses
        )}
      </ul>
      <button 
        onClick={() => setch(che+1)} 
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 active:bg-blue-700 transition duration-200"
      >
        {che}
      </button>
    </div>
    
  );
});

export default ExpenseList;