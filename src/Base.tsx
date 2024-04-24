import { useState } from "react";

function Base({ names }: { names: string[] }) {
  const [filteredNames, setFilteredNames] = useState<string[]>(names);

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
        {filteredNames.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default Base;
