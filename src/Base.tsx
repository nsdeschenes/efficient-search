import { useState } from "react";

function Base({ names }: { names: string[] }) {
  const [filteredNames, setFilteredNames] = useState<string[]>(names);

  const displayNames = [];
  for (let i = 0; i < 100; i++) {
    displayNames.push(filteredNames[i]);
  }

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            const query = e.target.value.toLowerCase();
            setFilteredNames(
              names.filter((name) => name.toLowerCase().includes(query))
            );
          }}
        />
      </div>
      <ul>
        {displayNames.map((name, i) => {
          return <li key={i}>{name}</li>;
        })}
      </ul>
    </>
  );
}

export default Base;
