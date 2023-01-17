import Setup from "./components/setup";
import Temperature from "./components/temperature";
import SetTemp from "./components/set-temp";
import Override from "./components/override";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="relative flex flex-col items-center space-y-12">
      <h1 className="text-center text-8xl font-bold my-12">SolAir</h1>

      <Temperature />

      <SetTemp />

      <Override />

      <div className="flex p-4 max-w-xl absolute right-5 top-5">
        <Setup />
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
