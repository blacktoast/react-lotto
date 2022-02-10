import React, { useCallback, useState } from "react";

function CommonBtn({ onClick, children }) {
  return (
    <button
      type="button"
      className="bg-cyan-500/80 rounded-md shadow-sm text-white p-1 shadow-zinc-400 mr-2  backdrop-blur-md w-20 flex-1 mt-0"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function PurchaseForm({ onClick, onRef = null }) {
  const [inputPrice, setInputPrice] = useState("");
  const [numberTickets, setNumberTickets] = useState(0);
  const [overPrice, setOverPrice] = useState(0);

  const onChange = (e) => {
    setInputPrice(e.target.value);
    if (parseInt(e.target.value) < 30000) {
      setNumberTickets(Math.floor(parseInt(e.target.value) / 1000));
    } else {
      setNumberTickets((e) => (e = 0));
    }
  };

  return (
    <form className="mt-5 mx-10 sm:w-8/12">
      <label className="mb-4  inline-block font-sans font-semibold">
        구입할 금액을 입력해주세요.
      </label>
      <div className="flex">
        <input
          ref={onRef}
          type="number"
          value={inputPrice}
          onChange={onChange}
          className="w-8/12 mr-2 pl-2 price-input border-8 h-12 shadow-sm shadow-neutral-600 border-cyan-200 "
          placeholder="구입 금액"
        />
        <CommonBtn onClick={onClick}> 자동 구매</CommonBtn>
      </div>
      {!numberTickets ? (
        <p className="text-sm text-red-500 mt-2 text-center">
          1000원이상 30000원 이하 금액을 입력해주세요
        </p>
      ) : (
        <p className="text-sm text-blue-500 mt-2 text-center">
          {numberTickets} 개의 티켓을 구입할수있습니다{" "}
        </p>
      )}
    </form>
  );
}

export default PurchaseForm;
