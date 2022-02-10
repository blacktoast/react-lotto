import React, { useCallback, useState } from "react";

function Ticket() {
  return <span class="mx-1 text-4xl">🎟️ </span>;
}

function TicketDetail({ ticket }) {
  console.log(ticket.number, ticket);
  return (
    <>
      <span className="text-xl">🎟️ </span>
      <span className="mx-1 text-xl">{ticket.number.join(" ")}</span>
      <br />
    </>
  );
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
    <section class="mt-4 mx-10 sm:w-8/12">
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
      {!showTicketInfo && (
        <div>
          {tickets.map((e) => {
            return <Ticket key={e.id} />;
          })}
        </div>
      )}

      {showTicketInfo &&
        tickets.map((e) => {
          return <TicketDetail ticket={e} key={e.id} />;
        })}
    </section>
  );
}

export default TiketInfo;
