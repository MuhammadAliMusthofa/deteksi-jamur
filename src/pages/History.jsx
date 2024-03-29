import React from "react";
import TableHistory from "../components/history/TableHistory";

function History() {
  return (
    <div className="container max-w-screen-xl mx-auto m-20">
      <div className="w-full px-4">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <TableHistory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
