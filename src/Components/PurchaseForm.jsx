import React, { useCallback } from "react";

function CommonBtn({ onClick, children }) {
  return (
    <button
      type="button"
      class="bg-cyan-500/80 rounded-md shadow-sm text-white p-1 shadow-zinc-400 mr-2  backdrop-blur-md w-20 flex-1 mt-0"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function PurchaseForm({ onClick, onRef }) {
  return (
    <form class="mt-5 mx-10 sm:w-8/12">
      <label class="mb-4  inline-block font-sans font-semibold">
        구입할 금액을 입력해주세요.
      </label>
      <div class="flex  ">
        <input
          ref={onRef}
          type="number"
          class="w-8/12 mr-2 pl-2 price-input border-8 h-12 shadow-sm shadow-neutral-600 border-cyan-200 "
          placeholder="구입 금액"
        />
        <CommonBtn onClick={onClick}> 자동 구매</CommonBtn>
      </div>
    </form>
  );
}

export default PurchaseForm;
