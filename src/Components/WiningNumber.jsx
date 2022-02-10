import React, { useRef, useState } from "react";
const NumberInputStyle =
  "mx-1 text-center border-2 w-10 h-10 mt-4 border-black";

function WiningNumberInput({ id, onRef, onChange }) {
  return (
    <input
      type="number"
      className={NumberInputStyle}
      onChange={onChange}
      ref={(el) => (onRef.current[id] = el)}
    />
  );
}

function WiningNumberForm({ onRef }) {
  const [winningNumbers, setWinningNembers] = useState([]);
  const [isOverflow, setIsOverflow] = useState(false);

  const onChange = (e) => {
    if (e.target.value.length > 1) {
      e.target.value = e.target.value[0];
      setIsOverflow(true);
    } else {
      setIsOverflow(false);
    }
  };

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
              return (
                <WiningNumberInput
                  key={i}
                  id={i}
                  onRef={onRef}
                  onChange={onChange}
                />
              );
            })}
            {isOverflow && <p>한칸에 1자리 숫자만 넣어주세요</p>}
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
