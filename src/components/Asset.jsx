import React, { useState, useEffect, useRef } from 'react';
import AssetList from './AssetList';

const Asset = () => {
  const [assList, setAssList] = useState([]);
  const [assAmount, setAssAmount] = useState("");
  const [assDescription, setAssDescription] = useState("");
  const descriptionRef = useRef(null);

  useEffect(() => {
    const storedAssets = localStorage.getItem("assets");
    if (storedAssets) {
      try {
        setAssList(JSON.parse(storedAssets));
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
        setAssList([]);
      }
    }
  }, []);

  const addAsset = () => {
    console.log("Asset addAsset");
    if (!assDescription || !assAmount) return;

    const newAsset = { id: Date.now(), description: assDescription, amount: parseFloat(assAmount) };

    setAssList((prev) => {
      const updatedList = [...prev, newAsset];
      localStorage.setItem("assets", JSON.stringify(updatedList));
      return updatedList;
    });

    setAssDescription("");
    setAssAmount("");

    descriptionRef.current.focus();
  };

  const totalAssets = assList.reduce((acc, asset) => acc + asset.amount, 0);

  console.log("Asset re-rendered-1");
  const [che, setCh] = useState(0);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Asset Tracker</h2>

      <div className="mb-4">
        <input
          ref={descriptionRef}
          type="text"
          placeholder="Description"
          value={assDescription}
          onChange={(e) => setAssDescription(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="number"
          placeholder="Amount"
          value={assAmount}
          onChange={(e) => setAssAmount(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button onClick={addAsset} className="bg-green-500 text-white p-2 w-full rounded hover:bg-green-600 transition duration-200">
          Add Asset
        </button>
      </div>

      <h3 className="text-lg font-bold mb-2">Total: ${totalAssets.toFixed(2)}</h3>
      <button 
        onClick={() => setCh(che + 1)} 
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 active:bg-blue-700 transition duration-200"
      >
        {che}
      </button>
      <AssetList assList={assList} />
    </div>
  );
}

export default Asset;
