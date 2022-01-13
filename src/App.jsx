import React from "react";
import Test from "./Test";

function App(props) {
  console.log("objssect");
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <h2>test</h2>
      </div>
      <div>
        <div className="bg-red-100">ChisstChat</div>
        <p className="text-gray-500">You have a new messssage!</p>
      </div>
      <Test></Test>
    </div>
  );
}

export default App;
