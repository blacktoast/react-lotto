import React from "react";

function Modal(props) {
  return (
    <section className="w-4/5 h-5/6 mx-auto bg-zinc-50 flex rounded-2xl  flex-col justify-center  sm:items-center shadow-gray-800 shadow-lg z-20 absolute top-12 left-12">
      <div className="">
        <svg viewbox="0 0 40 40">
          <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </svg>
      </div>
      <h1>test</h1>
    </section>
  );
}

export default Modal;
