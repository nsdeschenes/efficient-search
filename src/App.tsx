import { useState } from "react";
import Base from "./Base";

import { namesArray } from "./data";
import Transition from "./Transition";

type Page = "base" | "transition";

function Content({ page }: { page: Page }) {
  if (page === "base") return <Base names={namesArray} />;

  if (page === "transition") return <Transition names={namesArray} />;

  return <p>Not found</p>;
}

function App() {
  const [page, setPage] = useState<Page>("base");

  return (
    <div>
      <p>Current page: {page}</p>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li>
          <button onClick={() => setPage("base")}>Base</button>
        </li>
        <li>
          <button onClick={() => setPage("transition")}>Transition</button>
        </li>
      </ul>
      <Content page={page} />
    </div>
  );
}

export default App;
