import React from "react";

function CommonBtn({ children }) {
  return (
    <button
      type="button"
      class="bg-cyan-500/80 rounded-md shadow-sm text-white p-1 shadow-zinc-400 mr-2  backdrop-blur-md w-20 flex-1 mt-4 sm:mt-0"
    >
      {children}
    </button>
  );
}

function PurchaseForm(props) {
  return (
    <form class="mt-5 mx-10">
      <label class="mb-4  inline-block font-sans font-semibold">
        구입할 금액을 입력해주세요.
      </label>
      <div class="flex flex-wrap sm:flex-nowrap">
        <input
          type="number"
          class="w-full sm:w-96 mr-2 pl-2 price-input border-8 h-12 shadow-sm shadow-neutral-600 border-cyan-200 f"
          placeholder="구입 금액"
        />
        <CommonBtn> 자동 구매</CommonBtn>
        <CommonBtn>수동구매</CommonBtn>
      </div>
    </form>
  );
}

export default PurchaseForm;
