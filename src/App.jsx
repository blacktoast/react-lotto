import React from "react";
import PurchaseForm from "./Components/PurchaseForm";
import TiketInfo from "./Components/TiketInfo";
import WiningNumberForm from "./Components/WiningNumber";
import Test from "./Test";

function AppBlock() {
  return <div className="bg-white w-96 h-48 flex rounded-lg"></div>;
}

function App(props) {
  console.log("objssect");
  return (
    <main className="w-full h-full mx-auto bg-white flex rounded-2xl  flex-col justify-center content-center shadow-gray-800 shadow-lg ">
      <h1 className="text-center text-3xl	font-bold ">
        <span role="img" aria-label="good-luck">
          🎱
        </span>
        {" 행운의 로또"}
      </h1>
      <PurchaseForm></PurchaseForm>
      <TiketInfo></TiketInfo>
      <WiningNumberForm></WiningNumberForm>
    </main>
  );
}

export default App;
