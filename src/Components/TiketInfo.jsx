import React from "react";

function Ticket() {
  return <span class="mx-1 text-4xl">🎟️ </span>;
}

function TiketInfo({ tickets, test }) {
  return (
    <section class="mt-9 mx-10 sm:w-8/12">
      <div class="flex ">
        <label class="flex-auto my-0">
          총 {tickets.length}개를 구매하였습니다.
        </label>
        <div class="flex-auto flex justify-end pr-1">
          <label class="switch">
            <input type="checkbox" class="lotto-numbers-toggle-button" />
            <span class="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div class="flex flex-wrap">
        {tickets.map((e) => {
          return <Ticket />;
        })}
      </div>
    </section>
  );
}

export default TiketInfo;
