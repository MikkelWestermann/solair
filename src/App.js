import Setup from "./components/setup";
import Temperature from "./components/temperature";

function App() {


  return (
    <div className="relative">
      <h1 className="text-center text-8xl font-bold my-12">SolAir</h1>

      <Temperature />

      <div className="flex p-4 max-w-xl absolute right-5 top-5">
        <Setup />
      </div>
    </div>
  );
}

export default App;
