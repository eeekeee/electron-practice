import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { useStatistics } from "./useStatistics";
import { Chart } from "./Chart";
// import { BaseChart } from "./BaseChart";

function App() {
  const [count, setCount] = useState(0);
  const statistics = useStatistics(10);
  const cpuUsages = useMemo(
    () => statistics.map((stat) => stat.cpuUsage),
    [statistics]
  );

  // useEffect(() => {
  //   const unsub = window.electron.subscribeStatistics((stats) =>
  //     console.log(stats)
  //   );
  //   return unsub;
  // }, []);

  return (
    <>
      <div style={{ height: 120 }}>
        <Chart data={cpuUsages} maxDataPoints={10} />
      </div>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
