import React, { useCallback, useRef, useState } from "react";
import PurchaseForm from "./Components/PurchaseForm";
import TiketInfo from "./Components/TiketInfo";
import WiningNumberForm from "./Components/WiningNumber";
import Test from "./Test";
import { getLottoNumber } from "./utils/getLottoNumber";

function AppBlock() {
  return <div className="bg-white w-96 h-48 flex rounded-lg"></div>;
}

function App(props) {
  let [tickets, setTickets] = useState(0);
  let inputPrice = useRef();
  const buyLotto = useCallback((e) => {
    console.log(inputPrice);
    console.log(getLottoNumber());
  }, []);
  return (
    <>
      <main className="w-full h-full mx-auto bg-white flex rounded-2xl  flex-col justify-center  sm:items-center shadow-gray-800 shadow-lg  backdrop-blur-xl">
        <h1 className="text-center text-3xl	font-bold ">
          <span role="img" aria-label="good-luck">
            🎱
          </span>
          {" 행운의 로또"}
        </h1>
        <PurchaseForm onClick={buyLotto} onRef={inputPrice}></PurchaseForm>
        <TiketInfo></TiketInfo>
        <WiningNumberForm></WiningNumberForm>
      </main>
    </>
  );
}

export default App;
