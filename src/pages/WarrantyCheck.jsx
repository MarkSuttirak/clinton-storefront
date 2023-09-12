import React from "react";
import sortIcon from "../img/sortIcon.png";

function WarrantyCheck() {
  const people = [
    {
      productModel: "#QDX1.5-16-0.37",
      ชื่อสินค้า: "QDX1.5-16-0.37 ปั๊มแช่คลินตัน 370W -1",
      ระยะเวลารับประกัน: "12 เดือน",
      เงื่อนไข: "รับประกันเฉพาะมอเตอร์ (ทุ่นและเสื้อทุ่น) เท่านั้น",
      หมายเหตุ:
        "ไม่รับประกัน ความเสียหายที่เกิดจากการใช้งานและเก็บรักษา ตามเงื่อนไขที่บริษัทกำหนด",
    },
    {
      productModel: "#LY1.5-16-0.37",
      ชื่อสินค้า: "LY1.5-16-0.37 ปั๊มแช่ 1 370W ลองยัง",
      ระยะเวลารับประกัน: "6 เดือน",
      เงื่อนไข: "รับประกันเฉพาะมอเตอร์ (ทุ่นและเสื้อทุ่น) เท่านั้น",
      หมายเหตุ:
        "ไม่รับประกัน ความเสียหายที่เกิดจากการใช้งานและเก็บรักษา ตามเงื่อนไขที่บริษัทกำหนด",
    },
    {
      productModel: "#SSS1.5-16-0.37",
      ชื่อสินค้า: "SSS1.5-16-0.37 ปั๊มแช่สแตนเลส 1370W คลินตัน",
      ระยะเวลารับประกัน: "12 เดือน",
      เงื่อนไข: "รับประกันเฉพาะมอเตอร์ (ทุ่นและเสื้อทุ่น) เท่านั้น",
      หมายเหตุ:
        "ไม่รับประกัน ความเสียหายที่เกิดจากการใช้งานและเก็บรักษา ตามเงื่อนไขที่บริษัทกำหนด",
    },
    ,
    {
      productModel: "#LY1.5-16-0.37",
      ชื่อสินค้า: "LY1.5-16-0.37 ปั๊มแช่ 1 370W ลองยัง",
      ระยะเวลารับประกัน: "6 เดือน",
      เงื่อนไข: "รับประกันเฉพาะมอเตอร์ (ทุ่นและเสื้อทุ่น) เท่านั้น",
      หมายเหตุ:
        "ไม่รับประกัน ความเสียหายที่เกิดจากการใช้งานและเก็บรักษา ตามเงื่อนไขที่บริษัทกำหนด",
    },
    {
      productModel: "#QDX1.5-16-0.37",
      ชื่อสินค้า: "QDX1.5-16-0.37 ปั๊มแช่คลินตัน 370W -1",
      ระยะเวลารับประกัน: "12 เดือน",
      เงื่อนไข: "รับประกันเฉพาะมอเตอร์ (ทุ่นและเสื้อทุ่น) เท่านั้น",
      หมายเหตุ:
        "ไม่รับประกัน ความเสียหายที่เกิดจากการใช้งานและเก็บรักษา ตามเงื่อนไขที่บริษัทกำหนด",
    },
    {
      productModel: "#SSS1.5-16-0.37",
      ชื่อสินค้า: "SSS1.5-16-0.37 ปั๊มแช่สแตนเลส 1370W คลินตัน",
      ระยะเวลารับประกัน: "12 เดือน",
      เงื่อนไข: "รับประกันเฉพาะมอเตอร์ (ทุ่นและเสื้อทุ่น) เท่านั้น",
      หมายเหตุ:
        "ไม่รับประกัน ความเสียหายที่เกิดจากการใช้งานและเก็บรักษา ตามเงื่อนไขที่บริษัทกำหนด",
    },
  ];

  return (
    <div className="max-w-[1700px] mx-auto md:px-9 px-4">
      <div className=":px-6 lg:px-8">
        <div className="sm:flex sm:items-center mt-20">
          <div className="sm:flex-auto">
            <h1 className="text-[28px] md:text-[40px] leading-[28px] md:leading-[40px] font-semibold text-black">
              ข้อมูลการรับประกันสินค้า
            </h1>
          </div>
        </div>
        <div className="mt-12 flex flex-col px-4 sm:px-7 lg:px-0">
          <div className="-my-2 -mx-4 overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                <table className="min-w-full warrntyTable divide-y divide-gray-300">
                  <thead className="bg-[#243576] text-white">
                    <tr>
                      <th
                        scope="col"
                        className="py-1 pl-4 pr-3 text-left  sm:pl-6 lg:pl-8"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-base font-medium text-[white]">
                            PRODUCT MODEL
                          </span>
                          <img src={sortIcon} className="w-[8px]" alt="" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-1 text-left text-base font-medium text-[white]"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-base font-medium text-[white]">
                            ชื่อสินค้า
                          </span>
                          <img src={sortIcon} className="w-[8px]" alt="" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-1 text-left text-base font-medium text-[white]"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-base font-medium text-[white]">
                            ระยะเวลารับประกัน
                          </span>
                          <img src={sortIcon} className="w-[8px]" alt="" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-1 text-left text-base font-medium text-[white]"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-base font-medium text-[white]">
                            เงื่อนไข
                          </span>
                          <img src={sortIcon} className="w-[8px]" alt="" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-1 text-left text-base font-medium text-[white]"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-base font-medium text-[white]">
                            หมายเหตุ
                          </span>
                          <img src={sortIcon} className="w-[8px]" alt="" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.ระยะเวลารับประกัน}>
                        <td className="whitespace-nowrap py-1 pl-4 pr-3 text-base font-normal text-[#111111] sm:pl-6 lg:pl-8">
                          {person.productModel}
                        </td>
                        <td className="whitespace-nowrap px-3 py-1 text-base font-normal text-[#111111]">
                          {person.ชื่อสินค้า}
                        </td>
                        <td className="whitespace-nowrap px-3 py-1 text-base font-normal text-[#111111]">
                          {person.ระยะเวลารับประกัน}
                        </td>
                        <td className="whitespace-nowrap px-3 py-1 text-base font-normal text-[#111111]">
                          {person.เงื่อนไข}
                        </td>
                        <td className=" md:whitespace-break-spaces whitespace-nowrap px-3 py-4 text-base font-normal text-[#111111]">
                          {person.หมายเหตุ}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 mt-8">
          <nav
            className="flex items-center justify-between md:px-4 py-3 sm:px-0"
            aria-label="Pagination"
          >
            <div className="sm:block">
              <p className="md:text-base text-sm font-medium text-[#777777]">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">20</span> results
              </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-1 sm:ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default WarrantyCheck;
