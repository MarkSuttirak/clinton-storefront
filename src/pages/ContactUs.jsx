import React from "react";
import phone from "../img/phone.svg";
import mail from "../img/mail.svg";
import line from "../img/line.svg";
import instagram from "../img/instagram.svg";
import facebook from "../img/facebook.svg";

function ContactUs() {
    return (
        <>
            <div className="max-w-[1300px] mx-auto mt-[100px]">
                <div className="text-[40px] leading-[40px] text-black font-semibold">
                    ติดต่อและสั่งซื้อ
                </div>
                <form className="space-y-8">
                    <div className="space-y-8">
                        <div className="pt-8">
                            <div className="mt-6 grid grid-cols-1 gap-y-7 gap-x-9 sm:grid-cols-6">
                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm text-[#6A777C]"
                                    >
                                        ชื่อ - นามสกุล *
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="ชื่อ-นามสกุล"
                                            id="first-name"
                                            placeholder="ชื่อ และ นามสกุลของท่าน"
                                            className="block w-full h-[50px] pl-[15px] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm text-[#6A777C]"
                                    >
                                        บริษัท *
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="บริษัท"
                                            id="บริษัท"
                                            placeholder="ชื่อบริษัท"
                                            className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm text-[#6A777C]"
                                    >
                                        เบอร์โทรศัพท์
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="ชื่อ-นามสกุล"
                                            id="first-name"
                                            placeholder="เบอร์โทรศัพท์"
                                            autoComplete="given-name"
                                            className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm text-[#6A777C]"
                                    >
                                        อีเมล *
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="อีเมล"
                                            id="อีเมล"
                                            placeholder="เอีเมลสำหรับติดต่อกลับ"
                                            className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm text-[#6A777C]"
                                    >
                                        หัวข้อ
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="หัวข้อ"
                                            id="หัวข้อ"
                                            placeholder="เลือกหัวข้อ"
                                            className="block w-full h-[50px] pl-[15px] tracking-[-1%] bg-[#F0F0F0] rounded-md placeholder:#9E9E9E border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm text-[#6A777C]"
                                    >
                                        กำหนดราคา
                                    </label>
                                    <div className="mt-2">                    <select
                                        id="กำหนดราคา"
                                        name="กำหนดราคา"
                                        className="block w-full h-[50px] pl-[15px] bg-[#F0F0F0]  rounded-md placeholder:#6A777C text-[#6A777C] focus:outline-none focus:border-blue-500 sm:text-sm"
                                    >
                                        <option>เลือกราคา</option>
                                        <option>เลือกราคา</option>
                                        <option>เลือกราคา</option>
                                    </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-6">
                                    <label
                                        htmlFor="ข้อความ"
                                        className="block text-sm text-[#6A777C]"
                                    >
                                        ข้อความ *
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="ข้อความ"
                                            name="ข้อความ"
                                            placeholder="เพิ่มรายละเอียด"
                                            rows={6}
                                            className="block w-full pl-[15px] pt-[15px] tracking-[-1%] text-[#9E9E9E] bg-[#F0F0F0] rounded-md border-gray-300 focus:outline-none focus:border-blue-500  sm:text-sm"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <div className="mt-6">
                                <fieldset>
                                    <div className="mt-4 space-y-4">
                                        <div className="relative flex items-start">
                                            <div className="flex h-5 items-center">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded bg-[#EFEFEF] border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label
                                                    htmlFor="comments"
                                                    className="font-normal text-black text-base"
                                                >
                                                    ข้าพเจ้าได้อ่าน ทำความเข้าใจ
                                                    และยอมรับข้อกำหนดและเงื่อนไขการใช้งานเว็บไซต์นี้
                                                    และรับทราบว่าบริษัทฯ เก็บรวบรวม ใช้
                                                    เปิดเผยและเก็บรักษาข้อมูลส่วนบุคคลของข้าพเจ้าตามที่กำหนดไว้
                                                    ในประกาศความเป็นส่วนตัวนี้
                                                </label>
                                            </div>
                                        </div>

                                        <div className="relative flex items-start">
                                            <div className="flex h-5 items-center">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded bg-[#EFEFEF] border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label
                                                    htmlFor="comments"
                                                    className="font-normal text-black text-base"
                                                >
                                                    ข้าพเจ้ายอมรับให้บริษัทฯ เก็บรวบรวม ใช้
                                                    และเปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้าสำหรับรับข่าวสารต่างๆ
                                                    โปรโมชั่น สิทธิประโยชน์ สิทธิพิเศา
                                                    (แต่ไม่รวมถึงสิทธิพิเศษที่ถือเป็นคุณแก่ลูกค้าดป็นหลัก
                                                    เช้น คูปองส่วนลด หรือแทนเงินสด เป็นต้น)
                                                    รวมถึงข้อมูลเกี่ยวกับผลิตภัณฑ์และ/หรือบริการขอบริการใหม่ๆ
                                                    ของบริษัทฯ
                                                    และบริษัทในเครือที่ข้าพเจ้าสนใจและยินยอมให้บริษัทฯเปิดเผลข้อมูล
                                                    ส่วนบุคคลของข้าพเจ้าแก่บริษัทในเครือและผู้ให้บริการภายนอกสำหรับประมวลผลและวิเคราะห์ข้อมูล
                                                    รวมถึงวิจัย ปรับปรุง
                                                    และพัฒนาผลิตภัณฑ์และ/หรือบริการของบริษัทฯ
                                                    และบริษัทในเครือ ให้เหมาะสมกับความต้องการของข้าพเจ้า
                                                    ทั้งนี้
                                                    การไม่ยอมรับในข้อนี้จะไม่กระทบสิทธิความยินยอมที่ท่านได้เคยให้ไว้ก่อนหน้านี้
                                                    เว้นแต่ท่านจะได้ใช้สิทธิขอถอนความยินยอมมาแล้ว
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <div className="pt-5">
                        <div className="flex justify-start">
                            <button
                                type="submit"
                                className="ml-3 inline-flex justify-center rounded-md border px-[24px] py-[12px] border-transparent bg-[#263676] text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                ติดต่อและสั่งซื้อ
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="mx-w-[1700px] flex flex-wrap mx-auto px-[15px] md:px-[100px] mt-[100px] mb-[200px]">
                <div className=" w-[full] md:w-[50%]">
                    <iframe
                        className="gmap_iframe md:h-[400px]"
                        title="Google Map"
                        width="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=850&amp;height=400&amp;hl=en&amp;q=Clinton%20Intertrade%20Co.,LTD&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
                <div className="w-[full] md:w-[25%] bg-[#F3F3F3] pt-[70px] px-[60px]">
                    <h3 className="text-2xl text-[#6A777C] font-semibold">
                        สถานที่ติดต่อ
                    </h3>
                    <p className="text-sm text-[#6A777C] mt-4">
                        บริษัท คลินตันอินเตอร์เทรด จำกัด 249/77 ถนนบางบอน1 แขวงคลองบางพราน,
                        เขตบางบอน, กรุงเทพมหานคร ประเทศไทย 10150
                    </p>
                    <p className="text-sm text-[#6A777C] mt-[50px]">
                        เวลาทำการ: <br /> จันทร์ - ศุกร์ <br />
                        เวลา 09:00 น. - 18:00 น.
                    </p>
                </div>
                <div className="w-[full] md:w-[25%] bg-[#263676] pt-[60px] pl-[40px]">
                    <h3 className="text-2xl text-white font-semibold">ติดต่อเรา</h3>
                    <div className="flex mt-4">
                        <img src={phone} alt="" />
                        <p className="text-sm text-white pl-2">028-991889</p>
                    </div>
                    <div className="flex mt-3">
                        <img src={mail} alt="" />
                        <p className="text-sm text-white pl-2">online.admin@clinton.co.th</p>
                    </div>


                    <h3 className="text-2xl text-white font-semibold mt-12">โซเชียลมีเดีย</h3>
                    <div className="flex mt-4">
                        <img src={line} alt="" />
                        <p className="text-sm text-white pl-2">@clintonhardware</p>
                    </div>
                    <div className="flex mt-3">
                        <img src={instagram} alt="" />
                        <p className="text-sm text-white pl-2">Clinton_hardware_tools_pump</p>
                    </div>
                    <div className="flex mt-3">
                        <img src={facebook} alt="" />
                        <p className="text-sm text-white pl-2">Clinton Hardware Tools&Pump</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
