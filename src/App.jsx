import React, { useCallback, useRef, useState } from "react";
import Modal from "./Components/Modal";
import PurchaseForm from "./Components/PurchaseForm";
import TiketInfo from "./Components/TiketInfo";
import WiningNumberForm from "./Components/WiningNumber";
import { getLottoNumber } from "./utils/getLottoNumber";
import { isEmpty } from "./utils/inputUtils";

function AppBlock() {
  return <div className="bg-white w-96 h-48 flex rounded-lg"></div>;
}

function App(props) {
  let [tickets, setTickets] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false);
  let inputPrice = useRef();
  let inputRefWinningNumber = useRef([]);

  const onClickBuyLotto = useCallback((e) => {
    if (isEmpty(inputPrice.current.value)) {
      alert("0원은 구입할 수 없습니다");
    } else if (Math.floor(parseInt(inputPrice.current.value) / 1000) >= 30) {
      alert("30000원 이상은 구입할 수 없습니다");
    } else {
      let buyTicketNumber = Math.floor(
        parseInt(inputPrice.current.value) / 1000
      );
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
      inputPrice.current.value = "0";
    }
  }, []);

  const onClickResultModal = () => {
    setShowResultModal(!showResultModal);
    console.log(inputRefWinningNumber);
  };

  const onClickModalClose = () => {
    setShowResultModal(!showResultModal);
  };
  return (
    <>
      <main className="max-w-screen-sm min-h-screen mx-auto bg-white flex rounded-2xl  flex-col justify-center sm:items-center shadow-gray-800 shadow-lg  backdrop-blur-xl z-0 overflow-y-auto">
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
        <button
          onClick={onClickResultModal}
          className="mt-10 bg-cyan-500/80  text-white w-2/3 mx-16 rounded-lg"
        >
          결과 보기
        </button>
      </main>
      {showResultModal && <Modal onClickModalClose={onClickModalClose} />}
    </>
  );
}

export default App;
