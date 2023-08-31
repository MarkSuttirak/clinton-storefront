import React, { useState } from "react";
import blogPageImg1 from "../img/blogPageImg1.webp";
import blogPageImg2 from "../img/blogPageImg2.webp";
import blogPageImg3 from "../img/blogPageImg3.webp";
import blogPageImg4 from "../img/blogPageImg4.webp";
import blogPageImg5 from "../img/blogPageImg5.webp";
import blogPageImg6 from "../img/blogPageImg6.webp";
import blogPageImg7 from "../img/blogPageImg7.webp";
import blogPageImg8 from "../img/blogPageImg8.webp";
import blogPageImg9 from "../img/blogPageImg9.webp";
import blogPageImg10 from "../img/blogPageImg10.webp";

function Blog() {
  const posts = [
    {
      title: "4 เคล็ดลับ ทำงานช่างอย่างไรให้ปลอดภัยในหน้าฝน",
      href: "#",
      date: "สิงหาคม 30, 2023 ",
      imageUrl: blogPageImg1,
    },
    {
      title: "2 เคล็ดไม่ลับ กำจัดตะไคร่น้ำฝังแน่น ให้หายวับในพริบตา กับคลินตัน",
      href: "#",
      date: "สิงหาคม 25, 2023",
      imageUrl: blogPageImg2,
    },
    {
      title: "ชีวิตสบายขึ้นเยอะ ให้งานบ้านเป็นเรื่องง่าย ด้วย Top3 อุปกรณ์ทำความสะอาดคู่บ้านที่ต้องมี จากคลินตัน",
      href: "#",
      date: "สิงหาคม 18, 2023",
      imageUrl: blogPageImg3,
    },
    {
      title: "ผู้หญิงก็ทำงานช่างได้",
      href: "#",
      date: "สิงหาคม 2, 2023",
      imageUrl: blogPageImg4,
    },
    {
      title: "บริษัท คลินตันอินเตอร์เทรด จำกัด ร่วมกับ รพ.เกษมราษฎร์บางแค ตรวจสุขภาพพนักงานประจำปี 2566",
      href: "#",
      date: "มิถุนายน 30, 2023 ",
      imageUrl: blogPageImg5,
    },
    {
      title: "2 ประเภทของปั๊มน้ำหอยโข่งที่คุณต้องรู้",
      href: "#",
      date: "พฤษภาคม 22, 2023",
      imageUrl: blogPageImg6,
    },
    {
      title: "ส่อง 10 ข้อแนะนำสำหรับการใช้งานสว่านไร้สาย",
      href: "#",
      date: "สิงหาคม 30, 2022",
      imageUrl: blogPageImg7,
    },
    {
      title: "8 เคล็ดลับน่ารู้ ใช้สว่านแท่น CLINTON อย่างไรให้มีประสิทธิภาพ",
      href: "#",
      date: "สิงหาคม 30, 2022",
      imageUrl: blogPageImg8,
    },
    {
      title: "หมดปัญหา ซ่อมเครื่องดูดฝุ่นบ่อย ด้วย 8 เทคนิคยืดอายุการใช้งาน",
      href: "#",
      date: "สิงหาคม 30, 2022",
      imageUrl: blogPageImg9,
    },
    {
      title: "3 สิ่งที่ควรรู้ก่อนเลือกซื้อ เครื่องขัดกระดาษทราย",
      href: "#",
      date: "สิงหาคม 26, 2022",
      imageUrl: blogPageImg10,
    },
  ];

  return (
    <div className="max-w-[1170px] mx-auto mb-[100px] px-4">
      <h1 className="text-[40px] leading-[40px] text-[#051b70] font-semibold md:py-[12%] text-center md:mt-0 mt-16">
        บทความ ข่าวสาร
      </h1>
      <h2 className="text-[40px] leading-[40px] text-[#051b70] font-semibold md:mt-0  mt-16">
        รู้หรือไม่ ?
      </h2>
      <p className=" text-sm text-black mt-5">
        บทความ และข่าวสารของ CLINTON INTERTRADE
        พร้อมกับสาระน่ารู้เกี่ยวกับเครื่องมือช่าง วิธีการใช้งานเครื่องมือต่างๆ
        รวมไปถึงเทคนิคดีๆ ที่ทางเรามีมาแบ่งปันกับเพื่อนช่างทุกคน บทความต่อไปนี้
        จะช่วยให้การทำงานของคุณง่ายขึ้น ไปเรียนรู้พร้อมๆกันกับเราได้เลย
      </p>
      <div className="mt-[10px]">
        <div className="">
          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto mt-12 grid max-w-lg gap-7 lg:max-w-[1170px] lg:grid-cols-3">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col overflow-hidden rounded-[8px] shadow-lg hover:shadow-xl"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-[200px] w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white ">
                    <div className="flex-1">
                     
                      <a href={post.href} className="block px-6 py-2 mt-7">
                        <span className="text-[21px] leading-[27px] font-bold text-[#bebebe] line-clamp-2">
                          {post.title}
                        </span>
                        <p className="text-[12px] leading-[28px] font-bold text-[#bdbdbd] mt-7">
                          อ่านต่อ » 
                        </p>
                      </a>
                    </div>
                    <div className="border-t-[1px] border-[#EAEAEA] flex items-center px-6 py-3">
                      <div className="flex-shrink-0">
                        <a href={post.href}>
                          <span className="text-[#adadad] text-xs font-medium capitalize">
                          {post.date}
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
      </div>
    </div>
  );
}

export default Blog;