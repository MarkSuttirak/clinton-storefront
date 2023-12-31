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
import clintonPump from "../img/clintonPump.webp";
import clintonPump1 from "../img/clintonPump1.webp";

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


const posts = [
  {
    title: "3 สิ่งที่ควรรู้ก่อนเลือกซื้อ เครื่องขัดกระดาษทราย",
    href: "#",
	date: "สิงหาคม 26, 2022",
    description:
      "เทคนิคเลือกซื้อ เครื่องขัดกระดาษทราย เครื่องขัดกระดาษทราย โดยทั่วไปที่จำหน่ายในท้องตลาดมีอยู่",
    imageUrl:blog1img
  },
  {
    title: "บริษัท คลินตันอินเตอร์เทรด จำกัด ร่วมกับ รพ.เกษม",
    href: "#",
	date: "มิถุนายน 30, 2023",
    description:
      "บริษัท คลินตันอินเตอร์เทรด จำกัด ร่วมกับ รพ.เกษมราษฎร์บางแค ตรวจสุขภาพพนักงานประจำปี 2566.",
    imageUrl:blog2img
  },
  {
    title: "5 ส่วนประกอบหลักปั๊มน้ำหอยโข่ง มีอะไรบ้าง?",
    href: "#",
	date: "สิงหาคม 23, 2022",
    description:
      "ส่วนประกอบหลักปั๊มน้ำหอยโข่ง ปั๊มหอยโข่ง ภาษาอังกฤษ (Centrifugal Pump) เป็นปั๊มสูบน้ำที่มีรูปทรงเป็น",
    imageUrl:blog3img
  },
  {
    title: "6 วิธีการติดตั้งปั๊มน้ำบาดาล",
    href: "#",
	date: "สิงหาคม 26, 2022",
    description:
      "วิธีการติดตั้งปั๊มน้ำบาดาล วิธีการติดตั้งปั๊มน้ำบาดาล เป็นปั๊มน้ำที่ใช้สำหรับสูบน้ำที่อยู่ลึกใต้ผิวดิน หรือสูบน้ำขึ้น",
    imageUrl:blog4img
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MainPage() {
  return (
    <>
      {/* <HeaderCllinton /> */}
      <div className="sm:my-24 my-10 text-center">
        <h2 className="lg:text-[60px] text-[20px] text-[#9CC5D9] leading-[18px] font-medium">
          CREATE THE BEST EXPERIENCE
        </h2>
        <button className="bg-[#263676] text-[20px] leading-[20px] rounded-lg clintonButton text-center min-w-[150px] mt-12 text-white h-[40px]">
          สินค้าทั้งหมด
        </button>
        <iframe
          className="w-full mt-12 mb-12 lg:h-[850px] h-[200px]"
          
          src="https://www.youtube.com/embed/574O2eLqui0?si=86wbj2Y12AYcTzAj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="px-[16px] sm-[30px] first-letter grid sm:grid-cols-2 gap-6 xl2:px-[150px]">
        <div className="bg-[#F3F3F3] sm:px-0 px-5 flex flex-col items-start xl2:items-stretch rounded-[22px] pt-[30px] sm:pt-[50px] pb-[30px] sm:pb-[30px]">
          <div className="lg:ml-[40px] ml-[30px] ">
            <img
              src={banner1Ico}
              className="lg:w-[337px] sm:max-w-[200px] xl2:w-[40%]  lg:pt-[90px] sm:pb-0 pb-[20px] h-[auto]"
              alt=""
            />
          </div>
          <div className="flex justify-center sm:justify-end sm:-mt-[90px] lg:-mt-[200px]">
            <img src={banner1} className="sm:w-[70%] xl2:w-[60%] h-[auto]" alt="" />
          </div>
        </div>

        <div className="bg-[#384B94]  sm:px-0 px-5 items-center xl2:pl-[100px] justify-between rounded-[22px] sm:flex py-[30px] sm:py-0">
          <div>
            <img src={clintonTryton} className="w-[90%] xl2:w-[100%] sm:pb-0 pb-[20px] m-auto sm:ml-auto" alt="" />
          </div>
          <div>
            <img src={trytonCylender} className=" w-[411px] xl2:w-[480px]" alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center xl2:text-center  sm:mt-0 mt-5 justify-center xl:px-[120px]">
          <h2 className="text-[#27387A] font-bold text-[36px] lg:text-[46px] leading-[40px] lg:leading-[58px]">
            ปั๊มน้ำคลินตัน อึด แกร่ง แรงสุดขั้ว
          </h2>
          <p className="text-[#27387A] text-[21px] sm:mt-3 mt-3 lg:text-[26px] leading-[25px] lg:leading-[38px] font-semibold">
            เครื่องปั๊มน้ำ ต้องคลินตัน ด้วยสมรรถนะที่เหนือกว่าใคร ความแรงไม่มีตก
            ทำงานต่อเนื่องได้ไม่มีสะดุด ทำให้ ‘ปั๊มน้ำคลินตัน’
            เป็นสินค้าขายดีอันดับหนึ่ง
          </p>
        </div>

        <div className="bg-[#F3F3F3]  flex-col rounded-[22px] flex items-center">
          <div className="ml-[auto] sm:px-0 px-5 sm:pb-0 pb-6">
            <img
              src={clintonPump1}
              className="mr-[80px] sm:mt-[60px] first-letter mt-[30px] sm:w-[45%] self-start ml-[auto]"
              alt=""
            />
          </div>
          <div className="flex items-center">
            <img src={clintonPump} className="sm:w-[70%]" alt="" />
          </div>
        </div>
      </div>

      <div className="md:flex justify-center items-start flex-wrap  mx-auto sm:px-0 px-5">
        <div>
          <h2 className="text-[#263676] text-[42px] sm:text-[60px]  lg:text-[74px] leading-[70px] font-bold mt-[50px] sm:mt-[120px] xl:mt-[180px]">
            อุปกรณ์ทำสวน
          </h2>
          <p className="sm:text-[28px] text-[20px] font-bold sm:w-[700px] mt-5 heading-gradient">
            ที่สุดแห่งเครื่องมือการเกษตรสมัยใหม่ประสิทธิภาพสูง การันตีด้วยคุณภาพ
            พร้อมลุยงานเกษตรทุกพื้นที่
          </p>
        </div>
        <img className="md:w-[700px] mt-[10px] xl:mt-56 lg:-mt-20 xl:-ml-56 " src={belowBanner} alt="" />
      </div>

      <div className="md:max-w-[1270px] flex-wrap mx-auto mb-10 sm:px-[15px] md:px-[30px] xl:px-0 px-3">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[70px] leading-[56px] sm:leading-[94px] font-bold heading-gradient ">
          เครื่องมือช่าง CLINTON
        </h2>
        <p className="text-[18px] sm:text-[26px] font-bold leading-[38px] sm:mt-0 mt-5 heading-gradient">
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
        <div className="flex sm:flex-row flex-col-reverse mx-[auto] md:max-w-[1512px] bg-[#243576] pt-[80px] sm:pt-[140px] mt-[160px] px-4">
          <div className="xl:w-[60%]">
            <div className="-mb-[50px] -ml-[100px] sm:mt-0 mt-[50px]">
              <img src={drillmachine} />
            </div>
          </div>
          <div className="sm:w-[40%] hidden xl:block sm:pt-[150px]">
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

      <div className="md:w-[760px] pt-[60px] sm:pt-[120px] mx-auto bg-white relative">
        <img src={singleimage} alt="" />
      </div>

      <div className="flex items-start justify-between mt-[20px] sm:mt-[60px] xl2:max-w-[1700px] xl2:mx-auto">
        <img src={bottom1} className="sm:w-[210px] w-[130px]" alt="" />
        <img src={bottom2} className="sm:w-[240px] w-[130px]" alt="" />
      </div>

      <div className="px-6 xl:-mt-[80px] pb-[40px] lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h3 className="text-[32px] sm:text-[45px] lg:text-[96px] leading-[94px]  font-bold tracking-[-2.1px] heading-gradient text-center">
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
          <div className="text-center">
            <button className="bg-[#263676] text-sm rounded-lg text-center w-[150px] mt-10 text-white h-[40px]">
              อ่านบทความเพิ่มเติม
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-[180px] xl2:max-w-[1700px] xl2:mx-auto">
        <img src={bottom3} className="sm:w-[240px] w-[130px]" alt="" />
        <img src={bottom4} className="sm:w-[240px] w-[130px]" alt="" />
      </div>
    </>
  );
}
