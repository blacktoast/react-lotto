import React, { useCallback, useState } from "react";

function Ticket() {
  return <span class="mx-1 text-4xl">🎟️ </span>;
}

function TiketInfo({ tickets }) {
  const [showTicketInfo, setShowTicketInfo] = useState(false);
  const onClickShowTicketInfo = useCallback(
    (e) => {
      setShowTicketInfo(!showTicketInfo);
    },
    [showTicketInfo]
  );

  return (
    <section class="mt-9 mx-10 sm:w-8/12">
      <div class="flex ">
        <label class="flex-auto my-0">
          총 {tickets.length}개를 구매하였습니다.
        </label>
        <div class="flex-auto flex justify-end pr-1">
          <label className="switch">
            <input
              type="checkbox"
              class="lotto-numbers-toggle-button"
              onClick={onClickShowTicketInfo}
            />
            <span class="text-base font-normal">번호보기</span>
          </label>
        </div>
      </div>
      <div class="flex flex-wrap">
        {!showTicketInfo &&
          tickets.map((e) => {
            return <Ticket />;
          })}
        {showTicketInfo && <h1>test</h1>}
      </div>
    </section>
  );
}

export default TiketInfo;
