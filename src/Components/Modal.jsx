import React from "react";
import { useState } from "react/cjs/react.development";

function Modal({ onClickModalClose }) {
  const [prizeList, setPrizeList] = useState("");

  return (
    <section className="max-w-screen-sm h-5/6 mx-14  bg-zinc-50 flex rounded-2xl  flex-col justify-center  sm:items-center shadow-gray-800 shadow-lg z-20 absolute top-12 left-12  sm:left-1/4 sm:right-1/4">
      <div class="modal-inner p-10">
        <div
          className="modal-close absolute m-4 w-6 top-2 right-2 cursor-pointer after:content-['\00d7'] after:text-5xl after:text-cyan-600"
          onClick={onClickModalClose}
        ></div>
        <h2 class="text-center">🏆 당첨 통계 🏆</h2>
        <div class="d-flex justify-center">
          <table class="result-table border-collapse border border-black">
            <thead>
              <tr class="text-center">
                <th class="p-3">일치 갯수</th>
                <th class="p-3">당첨금</th>
                <th class="p-3">당첨 갯수</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center" data-prize-id="0">
                <td class="p-3">3개</td>
                <td class="p-3">5,000</td>
                <td class="p-3">n개</td>
              </tr>
              <tr class="text-center" data-prize-id="1">
                <td class="p-3">4개</td>
                <td class="p-3">50,000</td>
                <td class="p-3">n개</td>
              </tr>
              <tr class="text-center" data-prize-id="2">
                <td class="p-3">5개</td>
                <td class="p-3">1,500,000</td>
                <td class="p-3">n개</td>
              </tr>
              <tr class="text-center" data-prize-id="3">
                <td class="p-3">5개 + 보너스볼</td>
                <td class="p-3">30,000,000</td>
                <td class="p-3">n개</td>
              </tr>
              <tr class="text-center" data-prize-id="4">
                <td class="p-3">6개</td>
                <td class="p-3">2,000,000,000</td>
                <td class="p-3">n개</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-center font-bold total">당신의 총 수익률은 %입니다.</p>
        <div class="d-flex justify-center mt-5">
          <button type="button" class="btn btn-cyan resetBtn">
            다시 시작하기
          </button>
        </div>
      </div>
    </section>
  );
}

export default Modal;
