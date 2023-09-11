import React from "react";

import blogDetail from "../img/blogDetail.webp";
import SingleBlog1 from "../img/SingleBlog1.webp";
import SingleBlog2 from "../img/SingleBlog2.webp";
import SingleBlog3 from "../img/SingleBlog3.webp";
import SingleBlog4 from "../img/SingleBlog4.webp";
import blackFacebook from "../img/black-facebook-logo.svg";
import blackInstagram from "../img/black-instagram-logo.svg";
import blackYoutube from "../img/black-youtube-logo.svg";
import blackLine from "../img/black-line-logo.svg";
import facebookLogo from "../img/facebook-logo.svg";
import lineLogo from "../img/line-logo.svg";
import twitterLogo from "../img/twitter-logo.svg";
import websiteLogo from "../img/website-logo.svg";
import logoGroup from "../img/logoGroup.webp";
import footerImg from "../img/footer.jpg";
import warrantyQrcode from "../img/warranty-qrcode.jpg";
import blog1img from "../img/blog1img.webp";
import blog2img from "../img/blog2img.webp";
import blog3img from "../img/blog3img.webp";
import blog4img from "../img/blog4img.webp";
function BlogDetail() {
  const posts = [
    {
      title: "3 สิ่งที่ควรรู้ก่อนเลือกซื้อ เครื่องขัดกระดาษทราย",
      href: "#",
      date: "สิงหาคม 26, 2022",
      description:
        "เทคนิคเลือกซื้อ เครื่องขัดกระดาษทราย เครื่องขัดกระดาษทราย โดยทั่วไปที่จำหน่ายในท้องตลาดมีอยู่",
      imageUrl: blog1img,
    },
    {
      title: "บริษัท คลินตันอินเตอร์เทรด จำกัด ร่วมกับ รพ.เกษม",
      href: "#",
      date: "มิถุนายน 30, 2023",
      description:
        "บริษัท คลินตันอินเตอร์เทรด จำกัด ร่วมกับ รพ.เกษมราษฎร์บางแค ตรวจสุขภาพพนักงานประจำปี 2566.",
      imageUrl: blog2img,
    },
    {
      title: "5 ส่วนประกอบหลักปั๊มน้ำหอยโข่ง มีอะไรบ้าง?",
      href: "#",
      date: "สิงหาคม 23, 2022",
      description:
        "ส่วนประกอบหลักปั๊มน้ำหอยโข่ง ปั๊มหอยโข่ง ภาษาอังกฤษ (Centrifugal Pump) เป็นปั๊มสูบน้ำที่มีรูปทรงเป็น",
      imageUrl: blog3img,
    },
    {
      title: "6 วิธีการติดตั้งปั๊มน้ำบาดาล",
      href: "#",
      date: "สิงหาคม 26, 2022",
      description:
        "วิธีการติดตั้งปั๊มน้ำบาดาล วิธีการติดตั้งปั๊มน้ำบาดาล เป็นปั๊มน้ำที่ใช้สำหรับสูบน้ำที่อยู่ลึกใต้ผิวดิน หรือสูบน้ำขึ้น",
      imageUrl: blog4img,
    },
  ];

  return (
    <>
      <div className="lg:w-[1000px] mx-auto my-20 sm:flex px-4 sm:px-7">
        <div className="sm:w-[70%] sm:pr-10">
          <div>
            <h4 className="text-[30px] font-semibold leading-[1.4em]">
              4 เคล็ดลับ ทำงานช่างอย่างไรให้ปลอดภัยในหน้าฝน
            </h4>
            <p className="text-[#F40045] text-[16px] flex items-center gap-x-1">
              <span>สิงหาคม 30, 2023</span> <span>.</span> <span>Category 1</span>
            </p>
          </div>

          <div className="mt-10">
            <img className="rounded-2xl w-full" src={blogDetail} alt="" />
            <h5 className="font-bold text-[22px] mt-10">
              4 วิธีทำงานช่างให้ปลอดภัย ในหน้าฝน
            </h5>
            <p className="font-normal text-[14px] mt-5 sm:w-[70%]">
              หน้าฝนแบบนี้
              แน่นอนว่าเป็นอุปสรรคต่อการทำงานช่างอย่างหลีกเลี่ยงไม่ได้
              ทั้งการทำงานช่างที่ต้องคอยระวังฝนไม่ให้เปียก การใช้งานอุปกรณ์ต่าง
              ๆ ที่ต้องระวังให้มากขึ้นเป็นสองเท่า
              หรือการเก็บเครื่องมือช่างอย่างไรให้ปลอดภัยจากสนิม
              คลินตันเราเข้าใจถึงปัญหานี้ดี วันนี้เราจึงขอนำเสนอ
            </p>
            <h4 className="font-bold text-[14px] mt-5">
              “4 เคล็ดลับ ทำงานช่างอย่างไรให้ปลอดภัยในหน้าฝน”
            </h4>
            <img src={SingleBlog1} className="sm:w-[65%] mt-5" alt="" />
            <h5 className="font-bold text-[22px] mt-10">
              1.ใช้เครื่องมืออย่างระวังเป็นพิเศษ
            </h5>
            <p className="font-normal text-[14px] mt-5 sm:w-[70%]">
              <b>“SAFETY FIRST” </b>หรือ “ปลอดภัยไว้ก่อน”
              มักเป็นวลีที่เตือนใจช่างทุกคนให้ทำงานอย่างปลอดภัย
              โดยเฉพาะให้หน้าฝนแบบนี้
              ที่อาจก่อให้เกิดอันตรายที่คาดไม่คิดได้อยู่เสมอ
              คลินตันเรามีเคล็ดลับการทำงานอย่างระมัดระวังให้มากขึ้นในหน้าฝนมาฝากกันค่ะ
            </p>
            <p className="font-normal text-[14px] mt-5 sm:w-[70%]">
              จับเครื่องมือให้มั่นคง
              ยืนในพื้นที่ไม่เปียกเพื่อป้องกันอันตรายจากการลื่นล้มขณะทำงาน
              เครื่องมือช่างในปัจจุบันออกแบบด้วยยาง
              และพลาสติกที่มีคุณสมบัติจับกระชับมือและเป็นฉนวนป้องกันไฟฟ้าได้
              นอกจากนี้ควรสวมใส่รองเท้า
            </p>
            <p className="font-normal text-[14px] mt-5 sm:w-[70%]">
              เพื่อสามารถลดการบาดเจ็บในกรณีที่เกิดอุบัติเหตุที่ไม่คาดฝันได้อีกด้วย
              อีกสิ่งที่ควรระวังคือ
              ตรวจสอบให้มั่นใจว่าเสียบปลั๊กในบริเวณที่แห้งและไม่โดนน้ำฝนเมื่อฝนตก
              และหากเครื่องมือช่างนั้น ๆ มาพร้อมกับสายดิน
              ติดตั้งสายดินก่อนใช้งานทุกครั้ง
            </p>
            <img src={SingleBlog2} className="sm:w-[65%] mt-5" alt="" />
            <h5 className="font-bold text-[22px] mt-10">
              2. ดูแลหลังใช้งานเครื่องมือช่างเสร็จ ทันที
            </h5>
            <p className="font-normal text-[14px] mt-5 sm:w-[70%]">
              <b>“SAFETY FIRST” </b>หรือ “ปลอดภัยไว้ก่อน”
              มักเป็นวลีที่เตือนใจช่างทุกคนให้ทำงานอย่างปลอดภัย
              โดยเฉพาะให้หน้าฝนแบบนี้
              ที่อาจก่อให้เกิดอันตรายที่คาดไม่คิดได้อยู่เสมอ
              คลินตันเรามีเคล็ดลับการทำงานอย่างระมัดระวังให้มากขึ้นในหน้าฝนมาฝากกันค่ะ
            </p>
            <p className="font-normal text-[14px] mt-5 sm:w-[70%]">
              จับเครื่องมือให้มั่นคง
              ยืนในพื้นที่ไม่เปียกเพื่อป้องกันอันตรายจากการลื่นล้มขณะทำงาน
              เครื่องมือช่างในปัจจุบันออกแบบด้วยยาง
              และพลาสติกที่มีคุณสมบัติจับกระชับมือและเป็นฉนวนป้องกันไฟฟ้าได้
              นอกจากนี้ควรสวมใส่รองเท้า
            </p>
            <p className="font-normal text-[14px] mt-5 sm:w-[70%]">
              เพื่อสามารถลดการบาดเจ็บในกรณีที่เกิดอุบัติเหตุที่ไม่คาดฝันได้อีกด้วย
              อีกสิ่งที่ควรระวังคือ
              ตรวจสอบให้มั่นใจว่าเสียบปลั๊กในบริเวณที่แห้งและไม่โดนน้ำฝนเมื่อฝนตก
              และหากเครื่องมือช่างนั้น ๆ มาพร้อมกับสายดิน
              ติดตั้งสายดินก่อนใช้งานทุกครั้ง
            </p>
            <img src={SingleBlog3} className="sm:w-[65%] mt-5" alt="" />
            <h5 className="font-bold text-[22px] mt-10">
              3. เก็บเครื่องมือช่างในที่แห้งและปลอดภัยเรียบร้อย
            </h5>
            <p className="font-normal text-[14px] mt-5 sm:w-[70%]">
              <b>“SAFETY FIRST” </b>หรือ “ปลอดภัยไว้ก่อน”
              มักเป็นวลีที่เตือนใจช่างทุกคนให้ทำงานอย่างปลอดภัย
              โดยเฉพาะให้หน้าฝนแบบนี้
              ที่อาจก่อให้เกิดอันตรายที่คาดไม่คิดได้อยู่เสมอ
              คลินตันเรามีเคล็ดลับการทำงานอย่างระมัดระวังให้มากขึ้นในหน้าฝนมาฝากกันค่ะ
            </p>
            <p className="font-normal text-[14px] mt-5 sm:w-[70%]">
              จับเครื่องมือให้มั่นคง
              ยืนในพื้นที่ไม่เปียกเพื่อป้องกันอันตรายจากการลื่นล้มขณะทำงาน
              เครื่องมือช่างในปัจจุบันออกแบบด้วยยาง
              และพลาสติกที่มีคุณสมบัติจับกระชับมือและเป็นฉนวนป้องกันไฟฟ้าได้
              นอกจากนี้ควรสวมใส่รองเท้า
            </p>
            <p className="font-normal text-[14px] mt-5 sm:w-[70%]">
              เพื่อสามารถลดการบาดเจ็บในกรณีที่เกิดอุบัติเหตุที่ไม่คาดฝันได้อีกด้วย
              อีกสิ่งที่ควรระวังคือ
              ตรวจสอบให้มั่นใจว่าเสียบปลั๊กในบริเวณที่แห้งและไม่โดนน้ำฝนเมื่อฝนตก
              และหากเครื่องมือช่างนั้น ๆ มาพร้อมกับสายดิน
              ติดตั้งสายดินก่อนใช้งานทุกครั้ง
            </p>
            <img src={SingleBlog4} className="sm:w-[65%] mt-5" alt="" />
          </div>

          <div className="flex justify-between mt-14">
            <div>
              <h4 className="text-[22px] font-medium">Share</h4>
            </div>
            <div className="flex gap-5">
              <img className="w-[45px] h-[45px]" src={facebookLogo} alt="" />
              <img className="w-[45px] h-[45px]" src={twitterLogo} alt="" />
              <img className="w-[45px] h-[45px]" src={lineLogo} alt="" />
              <img className="w-[45px] h-[45px]" src={websiteLogo} alt="" />
            </div>
          </div>

          <div className="flex items-center border-t border-b py-5 mt-14 border-[#ccc]">
            <div>
              <img src={logoGroup} className="w-[100px] h-[100px]" alt="" />
            </div>
            <div className="ml-6">
              <h3 className="text-[22px] font-semibold text-[#0C0C0C]">
                CLINTON
              </h3>
              <p className="text-[14px] font-normal text-[#000] mt-2">
                CREATE THE BEST EXPERIENCE
              </p>
            </div>
          </div>
        </div>

        <div className="sm:w-[30%] mt-28 hidden xl:block">
          <div>
            <img src={warrantyQrcode} className="rounded-lg" alt="" />
          </div>
          <div className="mt-5">
            <h3 className="text-[22px] font-medium">Social Media</h3>
            <div className="flex gap-5 mt-2">
              <img className="w-[45px] h-[45px]" src={blackFacebook} alt="" />
              <img className="w-[45px] h-[45px]" src={blackYoutube} alt="" />
              <img className="w-[45px] h-[45px]" src={blackLine} alt="" />
              <img className="w-[45px] h-[45px]" src={blackInstagram} alt="" />
            </div>
          </div>
          <div className="sm:px-0 px-4 mt-16">
            <h3 className="text-[22px] font-medium">Tips & Trick</h3>
            <div className="sm:space-y-3 space-y-8 mt-5">
              {posts.map((post) => (
                <div className="sm:flex items-start">
                    <img className="sm:w-[120px]" src={post.imageUrl} alt="" />
                    <div className="ml-5 sm:mt-0 mt-3">
                        <h3 className="text-[13px] text-[#BEBEBE] font-normal">{post.title}</h3>
                        <p className="text-xs font-light mt-2">{post.date}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-[22px] font-medium">Categories</h3>
            <div className="space-y-3">
                <p></p>
                <p className="text-[16px] text-[#BFBFBF] underline font-extralight">รายละเอียดการจัดส่ง</p>
                <p className="text-[16px] text-[#BFBFBF] underline font-extralight">นโยบายความเป็นส่วนตัว</p>
                <p className="text-[16px] text-[#BFBFBF] underline font-extralight">ข้อกำหนดและเงื่อนไข</p>
            </div>
        </div>
        </div>

        
      </div>

      <div className="text-center">
        <img src={footerImg} className="sm:w-[600px] m-auto" alt="" />
      </div>

      <div className="px-6">
        <div className="relative mx-auto max-w-6xl  border-t-2 border-[#DBDDE9] py-10 mt-10 ">
          <div className="text-left">
            <h3 className="text-[45px] font-normal text-[#0c0c0c]">
              Related Posts
            </h3>
          </div>
          <div className="mx-auto mt-12 grid gap-7 lg:grid-cols-4 mb-5">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden border border-solid border-gray-300"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-[148px] w-full object-cover"
                    src={post.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-[10px] leading-[28px] font-medium text-black  ">
                      <a href={post.href} className="hover:underline">
                        {post.date}
                      </a>
                    </p>
                    <a href={post.href} className="block">
                      <p className="text-[17px] leading-[26px] font-semibold text-[#bcbcbc] line-clamp-2">
                        {post.title}
                      </p>
                      <p className="mt-1 text-[13px] leading-[23px] font-medium text-black line-clamp-3">
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.href}>
                        <span className="text-[#adadad] text-sm font-medium capitalize">
                          Read more
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
