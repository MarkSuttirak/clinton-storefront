import React, { useState } from "react";
import gravityImg from "../img/gravityImg.png";
import gravityBgImg from "../img/gravityBgImg.png";
import gravityDrops from "../img/gravityDrops.png";

function GurantyForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  return (
    <>
      <div className="flex flex-wrap max-w-[1445px] mx-auto mt-[60px] md:mt-[140px] px-4 md:px-0">
        <div className="md:w-[45%]">
          <h2 className="text-[48px] md:text-[65px] leading-[56px] md:leading-[82px]  font-bold heading-gradient">
            เงื่อนไข
            <br />
            การรับประกันสินค้า
          </h2>
        </div>

        <div className="md:w-[55%] md:pt-[20px]">
          <ul className="gravity-list-items">
            <li className="gravity-list-item">
              <span className="gravity-list-text">
                1.
                บริษัทเรารับประกันสินค้าเฉพาะสินค้าที่ซื้อ-ขายและใช้งานในราชอาณาจักรไทยเท่านั้น
              </span>
            </li>
            <li className="gravity-list-item">
              <span className="gravity-list-text">
                2.
                การรับประกันความเสียหายทุกประเภทจะครอบคลุมเฉพาะความเสียหายที่เกิดขึ้นจากการใช้งานตามปกติเท่านั้น
              </span>
            </li>
            <li className="gravity-list-item">
              <span className="gravity-list-text">
                3. ในกรณีที่จำเป็นต้องเปลี่ยนอะไหล่สินค้าใดๆ
                บริษัทจะพิจารณาเปลี่ยนอะไหล่ให้ตามความเหมาะสมในแต่ละกรณี
              </span>
            </li>
            <li className="gravity-list-item">
              <span className="gravity-list-text">
                4. ลูกค้าต้องแสดงใบเสร็จหรือใบรับประกันก่อนรับบริการเสมอ
              </span>
            </li>
            <li className="gravity-list-item">
              <span className="gravity-list-text">
                5. บริษัทขอสงวนสิทธิ์ในการยกเว้นการรับประกันสินค้า
                และจะพิจารณาสิ้นสุดการรับประกันในกรณีที่มีเหตุดังต่อไปนี้
              </span>
            </li>
          </ul>

          <ul className="gravity-list-items ml-[30px]">
            <li className="gravity-list-item">
              <span className="gravity-list-text">
                5.1 เมื่อสินค้าไม่อยู่ในสภาพสมบูรณ์ หรือเสียหายจากการรื้อถอน
                ถอดประกอบ และ/หรือ ดัดแปลงชิ้นส่วนอุปกรณ์
              </span>
            </li>
            <li className="gravity-list-item">
              <span className="gravity-list-text">
                5.2 เมื่อสินค้าเสียหายจากการประกอบชิ้นส่วนผิดวิธี
                ไม่เป็นไปตามคู่มือการใช้
              </span>
            </li>
            <li className="gravity-list-item">
              <span className="gravity-list-text">
                5.3 สินค้าเสียหายจากการใช้งานผิดประเภท หรือเกินขีดจำกัด
              </span>
            </li>
            <li className="gravity-list-item">
              <span className="gravity-list-text">
                5.4 ความเสียหายที่เกิดจากภัยธรรมชาติ เช่น น้ำท่วม ฟ้าผ่า ฯลฯ
              </span>
            </li>
            <li className="gravity-list-item">
              <span className="gravity-list-text">
                5.5 ความเสียที่เกิดจากอัคคีภัย และ/หรือเกิดจากเหตุอื่น
                ที่ไม่ได้เป็นไปตามการใช้งานปกติ (กรณีที่ต้องการซ่อมแซม
                ลูกค้าจะต้องเป็นผู้รับผิดชอบค่าใช้จ่ายทั้งหมด)
              </span>
            </li>
          </ul>

          <ul className="gravity-list-items">
            <li className="gravity-list-item">
              <span className="gravity-list-text">
                6. บริษัทฯ
                ขอสงวนสิทธิ์ในการพิจารณาเปลี่ยนแปลงเงื่อนไขในการประกันใดๆ
                โดยไม่ต้องแจ้งล่วงหน้า
              </span>
            </li>
          </ul>

          <button className="bg-[#263676] rounded-lg font-bold text-base text-center w-[215px] mt-10 text-white h-[50px]">
            ลงทะเบียนรับประกันสินค้า
          </button>
        </div>
      </div>

      <div className="max-w-[1445px] flex flex-wrap mx-auto mt-[30px] md:mt-[100px] mb-[200px] px-4 md:px-0">
        <div className="w-full md:w-[57%]">
          <form className="space-y-8">
            <div className="space-y-8">
              <div className="pt-8">
                <div className="mt-6 grid grid-cols-1 gap-y-7 gap-x-9 sm:grid-cols-6">
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm text-[#6A777C]"
                    >
                      ชื่อสินค้า *
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="ชื่อสินค้า"
                        id="productName"
                        placeholder="ชื่อสินค้า"
                        className="block w-full h-[50px] pl-[15px] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm text-[#6A777C]"
                    >
                      รหัสสินค้า*
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="รหัสสินค้า"
                        id="product Code"
                        placeholder="ชื่รหัสสินค้า"
                        className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm text-[#6A777C]"
                    >
                      วันที่ซื้อสินค้า *
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="purchaseDate"
                        id="purchase-date"
                        placeholder="วันที่ซื้อสินค้า"
                        autoComplete="Purchase Date"
                        className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6 mt-8">
                    <label
                      htmlFor="photo"
                      className="block text-base text-[#6A777C]"
                    >
                      รูปถ่ายใบเสร็จรับเงิน *
                    </label>
                    <div className="mt-1 flex items-center">
                      <input
                        type="file"
                        id="fileInput"
                        name="fileInput"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="fileInput"
                        className="text-white bg-[#263676] rounded-md py-2 px-4 cursor-pointe"
                      >
                        {selectedFile ? selectedFile.name : "เลือกไฟล์ภาพ"}
                      </label>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm text-[#6A777C]"
                    >
                      หมายเลขคำสั่งซื้อจากช่องทางที่ท่านใช้สั่งซื้อ (เช่น Lazada
                      ขึ้นต้นด้วย 580 หรือ Shopee ขึ้นต้นด้วย 220)
                      หรือหากซื้อจากร้านค้าตัวแทนหรือช่องทางที่ไม่มีคำสั่งซื้อ
                      โปรดตอบว่าไม่ใช่ *
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="วันที่ซื้อสินค้า"
                        id="หัวข้อ"
                        placeholder="วันที่ซื้อสินค้า"
                        className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm text-[#6A777C]"
                    >
                      ชื่อ - นามสกุล *
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="ชื่อ - นามสกุล"
                        className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm text-[#6A777C]"
                    >
                      เพศ *
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="gender"
                        id="gender"
                        placeholder="เพศ"
                        className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm text-[#6A777C]"
                    >
                      เบอร์โทรศัพท์ *
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="เบอร์โทรศัพท์"
                        className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm text-[#6A777C]"
                    >
                      ที่อยู่ บ้านเลขที่ / ซอย / หมู่บ้าน / ถนน /แขวง /เขต /
                      จังหวัด / เลขไปรษณีย์ *
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="ที่อยู่"
                        className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <fieldset className="mt-6">
                      <legend className="contents text-base text-[#6A777C]">
                        ท่านซื้อสินค้าจากช่องทางใด *
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="push-everything"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-everything"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                            Facebook CLINTON (เฟซบุ๊ค คลินตัน)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-email"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-email"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                            Website CLINTON (เว็บไซต์ คลินตัน)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                            LAZADA (ลาซาด้า)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                            SHOPEE (ช้อปปี้)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                            NOC NOC (น็อค น็อค)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                           JD central (เจดี เซ็นทรัล)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                           หน้าร้านบริษัท
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>


                  <div className="sm:col-span-6 mt-8">
                    <label
                      htmlFor="first-name"
                      className="block text-sm text-[#6A777C]"
                    >
                      หากซื้จจากตัวแทนจำหน่ายโปรดระบุชื่อร้าน (หากไม่ใช่โปรดระบุว่าไม่ใช่) *
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="storename"
                        id="storename"
                        placeholder="ชื่อร้านตัวแทนจำหน่าย"
                        className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>


                  <div className="sm:col-span-6 mt-8">
                    <fieldset className="mt-6">
                      <legend className="contents text-base text-[#6A777C]">
                      ท่านซื้อสินค้าจากช่องทางใด *
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="push-everything"
                            name="buy-reason"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-everything"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                            Facebook CLINTON (เฟซบุ๊ค คลินตัน)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-email"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-email"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                            Website CLINTON (เว็บไซต์ คลินตัน)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                            LAZADA (ลาซาด้า)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                            SHOPEE (ช้อปปี้)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                            NOC NOC (น็อค น็อค)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                           JD central (เจดี เซ็นทรัล)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="buy-from"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium text-[#6A777C]"
                          >
                           หน้าร้านบริษัท
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="justify-center rounded-md border px-[24px] py-[12px] border-transparent bg-[#263676] text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  ลงทะเบียนรับประกัันสินค้า
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-[11%] md:block hidden"></div>
        <div className="w-full md:w-[31%]">
          <div className="gravityBgImg py-[100px]">
            <h2 className="text-[56px] leading-[70px] font-bold text-center heading-gradient">
              เสียงเงียบ
              <br />
              ทุกจังหวะ
              <br />
              ของการใช้งาน{" "}
            </h2>
          </div>

          <div className="bg-[#F8F8F9] rounded-[22px] mt-6">
            <img src={gravityImg} alt="" />
            <h4 className="text-[21px] leading-[33px] font-bold text-center heading-gradient">
              กำลังไฟฟ้าที่ทรงพลัง
            </h4>
            <h2 className="text-[40px] leading-[49px] tracking-[-0.6px] font-bold mt-3 text-center heading-gradient">
              ระบบแรงดันน้ำคงที่ และ เปิด - ปิดก๊อกน้ำอัตโนมัติ
            </h2>
            <img src={gravityDrops} className="mt-6" alt="" />
          </div>

          <div className="mt-6">
            <img src={gravityBgImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GurantyForm;
