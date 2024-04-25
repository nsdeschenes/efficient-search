import { useState, useTransition } from "react";

function Transition({ names }: { names: string[] }) {
  const [search, setSearch] = useState("");
  const [, startTransition] = useTransition();
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
          value={search}
          onChange={(e) => {
            const query = e.target.value.toLowerCase();

            setSearch(query);
            startTransition(() => {
              setFilteredNames(
                names.filter((name) => name.toLowerCase().includes(query))
              );
            });
          }}
        />
      </div>
      <ul>
        {displayNames.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </>
  );
}

export default Transition;
