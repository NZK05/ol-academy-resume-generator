import React from "react";

export default function Json() {
  const storedData = Object.entries(localStorage);
  return (
    <>
       <div>
      <h1>Local Storage Data</h1>
      {storedData.length === 0 ? (
        <p>No data in local storage.</p>
      ) : (
        <ul>
          {storedData.map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
}
