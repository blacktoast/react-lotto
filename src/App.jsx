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
  let [tickets, setTickets] = useState();
  let inputPrice = useRef();
  const buyLotto = useCallback((e) => {
    let buyTicketNumber = Math.floor(inputPrice.current.value / 1000);
    let newTickets = [];
    console.log(buyTicketNumber);
    [...Array(buyTicketNumber)].map((_, i) => {
      newTickets.push(getLottoNumber());
    });
    setTickets(newTickets);
  }, []);
  console.log(tickets);

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
