import React from "react";

function WiningNumberInput() {
  return <input type="number" className="mx-1 text-center border-2 " />;
}

function WiningNumberForm(props) {
  const NumberInputStyle = "mx-1 text-center border-2";

  return (
    <form className="mt-9">
      <label className="flex-auto inline-block mb-3">
        지난 주 당첨번호 6개와 보너스 넘버 1개를 입력해주세요.
      </label>
      <div className="flex">
        <div>
          <h4 className="mt-0 mb-3 text-center">당첨 번호</h4>
          <div>
            <WiningNumberInput />
            <WiningNumberInput />
            <WiningNumberInput />
            <WiningNumberInput />
            <WiningNumberInput />
            <WiningNumberInput />
            <WiningNumberInput />
          </div>
        </div>
        <div className="bonus-number-container flex-grow">
          <h4 className="mt-0 mb-3 text-center">보너스 번호</h4>
          <div className="flex justify-center">
            <input
              type="number"
              className={NumberInputStyle + " text-center"}
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        className="open-result-modal-button mt-5 btn btn-cyan w-100"
      >
        결과 확인하기
      </button>
    </form>
  );
}

export default WiningNumberForm;
