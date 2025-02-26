import React, { useMemo, useState } from 'react';

const AssetList = ({ assList = [] }) => {
  console.log("Asset re-rendered-2");
  const [che, setch] = useState(0);

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Assets</h3>
      <ul className="border p-2 rounded-md">
        {assList.length === 0 ? (
          <li className="text-gray-500">No assets added.</li>
        ) : (
          assList.map((asset) => (
            <li key={asset.id} className="flex justify-between border-b p-2">
              <span>{asset.description}</span>
              <span>${asset.amount.toFixed(2)}</span>
            </li>
          ))
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
};

export default AssetList;
