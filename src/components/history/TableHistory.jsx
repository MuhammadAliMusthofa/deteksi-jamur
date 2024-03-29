import React from "react";

function TableHistory() {
  return (
    <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
      <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
        <tr>
          <th scope="col" className="px-6 py-4">
            #
          </th>
          <th scope="col" className="px-6 py-4">
            Nama File
          </th>
          <th scope="col" className="px-6 py-4">
            type
          </th>
          <th scope="col" className="px-6 py-4">
            Image
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-neutral-200 dark:border-white/10">
          <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
          <td className="whitespace-nowrap px-6 py-4">kuping.jpg</td>
          <td className="whitespace-nowrap px-6 py-4">edible</td>
          <td className="whitespace-nowrap px-6 py-4">
            <img style={{width:'70px', height:'50px'}} src="src/assets/img/edible/kuping.jpg" alt=""  />
          </td>
        </tr>
        
      </tbody>
    </table>
  );
}

export default TableHistory;
