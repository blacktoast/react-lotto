import React, { useCallback, useRef, useState } from "react";
import Modal from "./Components/Modal";
import PurchaseForm from "./Components/PurchaseForm";
import TiketInfo from "./Components/TiketInfo";
import WiningNumberForm from "./Components/WiningNumber";
import { getLottoNumber } from "./utils/getLottoNumber";

function AppBlock() {
  return <div className="bg-white w-96 h-48 flex rounded-lg"></div>;
}

function App(props) {
  let [tickets, setTickets] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false);
  let test = useState("test");
  let inputPrice = useRef();
  let inputRefWinningNumber = useRef([]);

  const onClickBuyLotto = useCallback((e) => {
    let buyTicketNumber = Math.floor(parseInt(inputPrice.current.value) / 1000);
    let newTickets = [];
    console.log(buyTicketNumber);
    [...Array(buyTicketNumber)].map((_, i) => {
      let num = getLottoNumber();
      let newTicket = {
        id: i,
        number: num,
      };
      newTickets.push(newTicket);
    });
    setTickets(newTickets);
    inputPrice.current.value = "";
  }, []);

  console.log(inputRefWinningNumber);

  return (
    <>
      <main className="w-full h-full mx-auto bg-white flex rounded-2xl  flex-col justify-center sm:items-center shadow-gray-800 shadow-lg  backdrop-blur-xl z-0">
        <h1 className="text-center text-3xl	font-bold ">
          <span role="img" aria-label="good-luck">
            🎱
          </span>
          {" 행운의 로또"}
        </h1>
        <PurchaseForm
          onClick={onClickBuyLotto}
          onRef={inputPrice}
        ></PurchaseForm>
        <TiketInfo tickets={tickets}></TiketInfo>
        <WiningNumberForm onRef={inputRefWinningNumber}></WiningNumberForm>
        <button className="mt-10 bg-cyan-500/80  text-white w-2/3 mx-16 rounded-lg">
          결과 보기
        </button>
      </main>
      {showResultModal && <Modal />}
    </>
  );
}

export default App;
