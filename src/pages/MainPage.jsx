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
const blogPosts = [
  {
    id: 1,
    name: "Boost your conversion rate",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
  },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
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
          height="515"
          src="https://www.youtube.com/embed/574O2eLqui0?si=86wbj2Y12AYcTzAj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="px-[30px] first-letter hidden">
        <div className="bg-[#F3F3F3] w-1/2 flex items-start rounded-[32px]">
          <img
            src={banner1Ico}
            className="w-[337px] pt-[90px] h-[auto]"
            alt=""
          />
          <img src={banner1} className="w-[470px] h-[auto]" alt="" />
        </div>
        <div className="bg-[#F3F3F3] w-1/2 flex"></div>
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

      <div className="w-[1270px] mx-auto mb-10">
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

      <div className="w-[760px] mx-auto">
        <img src={singleimage} alt="" />
      </div>
    </>
  );
}
