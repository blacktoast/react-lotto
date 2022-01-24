import React from "react";

function TiketInfo(props) {
  return (
    <section class="mt-9 mx-10 sm:w-8/12">
      <div class="flex ">
        <label class="flex-auto my-0">총 5개를 구매하였습니다.</label>
        <div class="flex-auto flex justify-end pr-1">
          <label class="switch">
            <input type="checkbox" class="lotto-numbers-toggle-button" />
            <span class="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div class="flex flex-wrap">
        <span class="mx-1 text-4xl">🎟️ </span>
        <span class="mx-1 text-4xl">🎟️ </span>
        <span class="mx-1 text-4xl">🎟️ </span>
        <span class="mx-1 text-4xl">🎟️ </span>
        <span class="mx-1 text-4xl">🎟️ </span>
      </div>
    </section>
  );
}

export default TiketInfo;
