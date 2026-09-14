import { useEffect, useState } from "react";

import "./App.css";

const numbers = [
  {
    id: 1,
    name: "João",
  },
  {
    id: 2,
    name: "Maria",
  },
  {
    id: 3,
    name: "Pedro",
  },
  {
    id: 4,
    name: "Ana",
  },
  {
    id: 5,
    name: "Lucas",
  },
];
function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count === 5) {
      clearTimeout(0);
    } else setTimeout(() => setCount(count + 1), 5000);
  });

  return (
    <div className="flex flex-col gap-2 items-center">
      <div>{count}</div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-0.5 items-center w-full justify-center">
          {[1, 2, 3, 4, 5].map((i) => {
            const delay = (i - 1) * 5;

            return (
              <div key={i} className="flex flex-col gap-4 items-center">
                <div className="relative bg-gray-300 h-1 w-36 rounded-2xl overflow-hidden">
                  <div
                    className="h-full bg-gray-400 absolute left-0 top-0 w-full origin-left animate-[progress_5s_linear_forwards]"
                    style={{
                      animationDelay: `${delay}s`,
                      animationFillMode: "backwards",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className=" inline">
          {numbers.find((item) => item.id === count)?.name}
        </div>
      </div>
    </div>
  );
}

export default App;
