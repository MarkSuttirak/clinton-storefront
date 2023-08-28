import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import FooterClinton from "../components/FooterClinton";
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import HeaderCllinton from "../components/HeaderCllinton";
import banner1 from "../img/banner1.webp";
import banner1Ico from "../img/banner1Ico.webp";
import banner2 from "../img/banner2.webp";
import banner2Ico from "../img/banner2Ico.webp";
import banner3 from "../img/banner3.webp";
import banner3Ico from "../img/banner3Ico.webp";
import belowBanner from "../img/belowBanner.webp";
import singleimage from "../img/singleimage.webp";
import drillmachine from "../img/drillmachine.webp";
import bottom1 from "../img/bottom1.webp";
import bottom2 from "../img/bottom2.webp";
import bottom3 from "../img/bottom3.webp";
import bottom4 from "../img/bottom4.webp";
import blog1img from "../img/blog1img.webp";
import blog2img from "../img/blog2img.webp";
import blog3img from "../img/blog3img.webp";
import blog4img from "../img/blog4img.webp";
import clintonTryton from "../img/clintonTryton.webp";
import trytonCylender from "../img/trytonCylender.webp";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "View All Products", href: "#", icon: CheckCircleIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "About", href: "#", icon: InformationCircleIcon },
  { name: "Customers", href: "#", icon: BuildingOfficeIcon },
  { name: "Press", href: "#", icon: NewspaperIcon },
  { name: "Careers", href: "#", icon: BriefcaseIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];
const resources = [
  { name: "Community", href: "#", icon: UserGroupIcon },
  { name: "Partners", href: "#", icon: GlobeAltIcon },
  { name: "Guides", href: "#", icon: BookmarkSquareIcon },
  { name: "Webinars", href: "#", icon: ComputerDesktopIcon },
];
// const blogPosts = [
//     {
//         date: "สิงหาคม 25, 2023",
//         title: "2 เคล็ดไม่ลับ กำจัดตะไคร่น้ำฝังแน่น ให้หายวับในพริบตา",
//         href: "#",
//         desc: "เคล็ดไม่ลับ กำจัดตะไคร่น้ำฝังแน่น ให้หายวับในพริบตา ตะไคร่น้ำ คือหนึ่งในภัยร้ายหน้าฝน ที่นอกจากจะสร้าง",
//         imageUrl: blog1img
//     },
//     {
//         date: "สิงหาคม 26, 2022",
//         title: "3 สิ่งที่ควรรู้ก่อนเลือกซื้อ เครื่องขัดกระดาษทราย",
//         href: "#",
//         desc: "เทคนิคเลือกซื้อ เครื่องขัดกระดาษทราย เครื่องขัดกระดาษทราย โดยทั่วไปที่จำหน่ายในท้องตลาดมีอยู่",
//         imageUrl: blog2img
//     },
//     {
//         date: "สิงหาคม 24, 2022",
//         title: "5 เหตุผล ทำไมต้องตู้เชื่อม TRYTON อินเวอร์เตอร์",
//         href: "#",
//         desc: "ทำไมต้อง ตู้เชื่อมอินเวอร์เตอร์ TRYTON ตู้เชื่อมไฟฟ้าอินเวอร์เตอร์ เครื่องมือที่ช่างส่วนใหญ่นิยมใช้ ระบ",
//         imageUrl: blog3img
//     },
//     {
//         date: "สิงหาคม 30, 2022",
//         title: "หมดปัญหา ซ่อมเครื่องดูดฝุ่นบ่อย ด้วย 8 เทคนิคยืด",
//         href: "#",
//         desc: "เทคนิคยืดอายุการใช้งานเครื่องดูดฝุ่น หมดปัญหา ซ่อมเครื่องดูดฝุ่นบ่อย ด้วย 8 เทคนิคยืดอายุการใช้งาน เป็น",
//         imageUrl: blog4img
//     },
// ];

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainPage() {
  return (
    <>
      {/* <HeaderCllinton /> */}
      <div className="my-24 text-center">
        <h2 className="text-[60px] text-[#9CC5D9] leading-[18px] font-normal">
          CREATE THE BEST EXPERIENCE
        </h2>
        <button className="bg-[#263676] rounded-lg text-center w-[150px] mt-10 text-white h-[40px]">
          สินค้าทั้งหมด
        </button>
        <iframe
          className="w-full mt-10 mb-10"
          height="850"
          src="https://www.youtube.com/embed/574O2eLqui0?si=86wbj2Y12AYcTzAj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="px-[30px] first-letter grid grid-cols-2 gap-6">

        <div className="bg-[#F3F3F3] flex flex-col items-start rounded-[32px] pt-[50px] pb-[30px]">
		  <div className="ml-[40px]">
            <img
              src={banner1Ico}
              className="w-[337px] pt-[90px] h-[auto]"
              alt=""
            />
          </div>
          <div className="flex justify-end -mt-[200px]">
            <img src={banner1} className="w-[70%] h-[auto]" alt="" />
          </div>
        </div>

        <div className="bg-[#384B94] items-center rounded-[32px] flex">
          <div>
            <img src={clintonTryton} className="w-[90%] ml-auto" alt="" />
          </div>
          <div>
            <img src={trytonCylender} className="w-[411px]" alt="" />
          </div>
        </div>

		<div className="flex flex-col items-center justify-center h-[580px]">
			<h2 className="text-[#27387A] font-bold text-[46px] leading-[58px]">ปั๊มน้ำคลินตัน อึด แกร่ง แรงสุดขั้ว</h2>
			<p className="text-[#27387A] text-[26px] leading-[38px] font-bold">เครื่องปั๊มน้ำ ต้องคลินตัน ด้วยสมรรถนะที่เหนือกว่าใคร ความแรงไม่มีตก ทำงานต่อเนื่องได้ไม่มีสะดุด ทำให้ ‘ปั๊มน้ำคลินตัน’ เป็นสินค้าขายดีอันดับหนึ่ง</p>
		</div>

      </div>

      <div className="flex justify-center items-start w-[1270px] mx-auto">
        <div>
          <h2 className="text-[#263676] text-[74px] leading-[70px] font-bold mt-[200px]">
            อุปกรณ์ทำสวน
          </h2>
          <p className="text-[28px] font-bold w-[700px] mt-5 heading-gradient">
            ที่สุดแห่งเครื่องมือการเกษตรสมัยใหม่ประสิทธิภาพสูง การันตีด้วยคุณภาพ
            พร้อมลุยงานเกษตรทุกพื้นที่
          </p>
        </div>
        <img className="w-[700px] mt-44 -ml-56 " src={belowBanner} alt="" />
      </div>

      <div className="sm:w-[1270px] mx-auto mb-10">
        <h2 className="text-[70px] leading-[94px] font-bold heading-gradient ">
          เครื่องมือช่าง CLINTON
        </h2>
        <p className="text-[26px] font-bold leading-[38px] mt- heading-gradient">
          ตลอดระยะเวลาที่ผ่านมา เรามุ่งพัฒนาตั้งแต่เครื่องมือช่างพื้นฐาน
          ไปจนถึงเครื่องมือช่างระดับมืออาชีพ พร้อมให้บริการที่มีคุณภาพ
          และบริการหลังการขายที่ดีเยี่ยม ภายใต้แนวคิดว่า
          ลูกค้าเป็นศูนย์กลางธุรกิจ เพื่อสร้างความเชื่อมั่น
          และความประทับใจให้แก่ลูกค้า
          ผลิตภัณฑ์ของเราเป็นสินค้าที่ี่ผลิตจากวัสดุที่มีคุณภาพ และได้มาตรฐาน CE
          รับประกันสินค้าสูงสุดนานถึง 1 ปี พร้อมบริการจัดส่งอย่างรวดเร็ว
          และดูแลสินค้าตลอดอายุการใช้งาน
        </p>
      </div>

      <div className="w-[full] bg-[#243576]">
        <div className="flex sm:flex-row flex-col-reverse mx-[auto] sm:w-[1512px] bg-[#243576] pt-[80px] sm:pt-[140px] mt-[160px] px-4">
          <div className="sm:w-[60%]">
            <div className="-mb-[50px] -ml-[100px] sm:mt-0 mt-[50px]">
              <img src={drillmachine} />
            </div>
          </div>
          <div className="sm:w-[40%] sm:pt-[150px]">
            <h3 className="white-gradient text-[40px] sm:text-[79px] font-bold leading-[56px] sm:leading-[100px]">
              โปรโมชั่นประจำเดือน
            </h3>
            <p className="mt-5 sm:mr-[60px] text-[#b6c3f4] text-[18px] sm:text-2xl font-semibold leading-[38px]">
              เพราะเรารู้ว่า คุณต้องการอะไร เราจึงตั้งใจคัดสรร ‘ปั๊มน้ำ
              เครื่องมือช่างคุณภาพดี’ โดยคำนึงถึงความหลากหลาย
              ของรูปแบบการใช้งานเพื่อนำไปสู่การปฏิบัติงาน ช่างที่สมบูรณ์แบบ
              และนี่คือจุดเด่นสำคัญของเรา
            </p>
          </div>
        </div>
      </div>

      <div className="sm:w-[760px] pt-[80px] mx-auto bg-white relative">
        <img src={singleimage} alt="" />
      </div>

      <div className="flex justify-between mt-[80px]">
        <img src={bottom1} className="w-[210px]" alt="" />
        <img src={bottom2} className="w-[240px]" alt="" />
      </div>

      <div className="px-6 md:-mt-[130px] pb-[40px] lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h3 className="text-[96px] leading-[94px] font-bold tracking-[-2.1px] heading-gradient text-center">
              บทความ ข่าวสาร
            </h3>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-7 lg:max-w-[1110px] lg:grid-cols-4">
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden border border-solid border-gray-300"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
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
          <div className="text-center">
            <button className="bg-[#263676] text-sm rounded-lg text-center w-[150px] mt-10 text-white h-[40px]">
              อ่านบทความเพิ่มเติม
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-[180px]">
        <img src={bottom3} className="w-[210px]" alt="" />
        <img src={bottom4} className="w-[240px]" alt="" />
      </div>
    </>
  );
}
