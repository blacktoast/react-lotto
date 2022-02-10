import React, { useRef, useState } from "react";
const NumberInputStyle =
  "mx-1 text-center border-2 w-10 h-10 mt-4 border-black";

function WiningNumberInput({ id, onRef }) {
  return (
    <input
      type="number"
      className={NumberInputStyle}
      ref={(el) => (onRef.current[id] = el)}
    />
  );
}

function WiningNumberForm({ onRef }) {
  const [winnigNumbers, setWinningNembers] = useState("");

  function onChangeType(e) {
    console.log(e);
  }
  return (
    <form className="mt-9 mx-10 sm:w-8/12">
      <label className="flex-auto inline-block mb-3 font-bold">
        지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
      </label>
      <div className="flex">
        <div>
          <h4 className="mt-0 mb-3 text-center text-cyan-800 font-extrabold">
            당첨 번호
          </h4>
          <div>
            {[...Array(6)].map((_, i) => {
              return <WiningNumberInput key={i} id={i} onRef={onRef} />;
            })}
          </div>
        </div>
        <div className="bonus-number-container flex-grow">
          <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
          <div className="flex justify-center">
            <input
              type="number"
              className={NumberInputStyle}
              ref={(el) => (onRef.current[6] = el)}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default WiningNumberForm;
