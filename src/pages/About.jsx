import React from "react";
import clintonAboutUs from "../img/clintonAboutUs.webp";
import clintonAboutUsMobile from "../img/clintonAboutUsMobile.webp";
import pump_aboutus from "../img/pump_aboutus.webp";
import image101 from "../img/image-10-1.webp";
import About2 from "../img/About2.webp";
import aboutMiddleImg1 from "../img/aboutMiddleImg1.webp";
import aboutMiddleImg2 from "../img/aboutMiddleImg2.webp";

function About() {
  return (
    <>
      <div>
        <img className="h-auto sm:hidden" src={clintonAboutUsMobile} alt="" />
        <img className="h-auto sm:block  hidden" src={clintonAboutUs} alt="" />
      </div>
      <div className="max-w-5xl text-center mx-auto px-[15px] sm:px-0">
        <p className="text-[24px] sm:text-[26px] leading-[37px] font-semibold text-[#626262]">
          ผลิตภัณฑ์ CLINTON เป็นเครื่องมือช่างมาตรฐาน ที่ทุกบ้านควรมี
          เครื่องของเรา สามารถใช้ทำงานได้ง่าย ตอบสนองความต้องการใช้งานทุกประเภท
          ผลิตภัณฑ์ของเรามีคุณภาพ และคำนึงถึงผู้ใช้งานเป็นหลัก
          เราเน้นเรื่องความปลอดภัย ความคงทน และใช้งานง่าย
        </p>
      </div>
      <div className="max-w-[1170px] mt-[100px] flex flex-wrap sm:flex-nowrap gap-12 mx-auto px-[20px] sm:px-0">
        <div>
          <img src={pump_aboutus} className="max-w-[394px] w-full ml-auto" alt="" />
          <img src={About2} className="mt-[60px] w-full" alt="" />
        </div>
        <div>
          <img src={image101} className="w-full" alt="" />
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto mt-[100px] px-[15px] sm:px-0">
        <div className="mx-auto">
          <h3 className="text-[39px] sm:text-[70px] leading-[56px] sm:leading-[74px] text-[#243576] font-bold">CLINTON INTERTRADE</h3>
          <h4 className="text-[29px] sm:text-[48px] leading-[42px] sm:leading-[52px] text-[#434343] font-bold mt-[40px]">คลินตัน อินเตอร์เทรด</h4>
          <p className="text-[22px] sm:text-[26px] leading-[37px] text-[#434343] font-medium  mt-[40px]">ตลอด 1 ทศวรรษที่ผ่านมา เรามุ่งพัฒนาการให้บริการที่มีคุณภาพ ภายใต้แนวคิดการให้ลูกค้าเป็นศูนย์กลางธุรกิจ เพื่อสร้างความเชื่อมั่นและความประทับใจให้แก่ลูกค้า จำหน่ายปั๊มน้ำและอุปกรณ์เครื่องมือช่าง สว่าน ปั๊มลม เครื่องเจียร ตู้เชื่อมไฟฟ้า ภายใต้ 7 แบรนด์ย่อย ได้แก่ ไทรตัน บอซ มาซาวา เอ็มเทค อะควา โมนิก้า และลองยัง โดยเรามีการขายทั้งค้าปลีกและส่ง ปัจจุบันเปิดทำการมาเป็น ระยะเวลา 16 ปี มีสินค้ามากกว่า 300 รายการ</p>
        </div>
      </div>


      <div className="max-w-[1140px] mx-auto flex mt-[100px]">

        <div className="w-[47%]">
          <img src={aboutMiddleImg1}  alt="" />
          <h6 class="text-[26px] leading-[37px] text-[#434343] font-bold mt-[20px]">คุณ ชลวัส เรืองปรีชาเวช<br />CEO</h6>
        </div>

        <div className="w-[53%] pt-[80px] pl-[70px]">
          <div>
            <p className="text-[26px] leading-[37px] font-medium text-[#434343]">วิสัยทัศน์</p>
          </div>
          <div className="">
            <p className="text-[26px] leading-[37px] font-medium text-[#434343] mt-[30px]">เป็นองค์กร ที่ขับเคลื่อนด้วยเทคโนโลยี เป็นผู้นำด้านการจัดจำหน่าย และให้บริการอย่างมืออาชีพ</p>
            <p className="text-[26px] leading-[37px] font-medium text-[#434343] mt-[40px]">Innovation - driven organization, the leader in distribution, and delivering execeptional customer service</p>
          </div>
        </div>

      </div>


      <div className="max-w-[1140px] mx-auto flex mt-[200px]">


      <div className="w-[53%] ">
          <div>
            <p className="text-[26px] leading-[37px] font-medium text-[#434343]">พันธกิจของเรา</p>
          </div>
          <div className="">
            <p className="text-[26px] leading-[37px] font-medium text-[#434343] mt-[30px]">1.ขับเคลื่อนองค์กรด้วยเทคโนโลยี ที่เหมาะสมกับการดำเนินธุรกิจ</p>
            <p className="text-[26px] leading-[37px] font-medium text-[#434343] mt-[40px]">2.พัฒนาบุคคลากรให้สนับสนุนงานการค้า และบริการ โดยยึดหลัก “ลูกค้าเป็นศูนย์กลางของธุรกิจ”</p>
            <p className="text-[26px] leading-[37px] font-medium text-[#434343] mt-[40px]">3.เพิ่มความหลากหลายของผลิตภัณฑ์เพื่อสร้างโอกาศ และข้อได้เปรียบในนการแข่งขัน</p>
          </div>
        </div>
        
        <div className="w-[47%] pl-[70px] -mt-[40px]">
          <img src={aboutMiddleImg2}  alt="" />
          <h6 class="text-[26px] leading-[37px] text-[#434343] font-bold mt-[20px]">คุณ กัลย์รัชต์ วรพาณิชย์<br />CFO</h6>
        </div>

        

      </div>

      <div className="mt-[150px] bg-[#243576] py-[120px] sm:py-[300px] px-[15px]">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="text-[40px] sm:text-[74px] leading-[50px] sm:leading-[96px] font-bold tracking-[-2.1px]  heading-gradient">นำเทคโนโลยีสมัยใหม่<br />
            เข้ามาประยุกต์ใช้ในระบบทำงาน<br />
            เพื่อเพิ่มศักยภาพสูงสุด<br />
            ในการดำเนินกิจการขององค์กร</h2>
          </div>
      </div>

      <div className="max-w-[1170px] mx-auto mt-[100px] mb-[250px] px-[15px]">
        <p className="text-[#676767] text-sm leading-[28px] ">
          เราเริ่มต้นมากจากความที่เราชอบ "สร้าง" สร้างในที่นี้คือ "สร้างสรรค์"
          จึงทำให้เกิดการ ก่อตั้งบริษัทอุปกรณ์และเครื่องมือช่างขึ้นมา
          โดยตั้งอยู่บนพื้นฐาน ความมั่นคง เรียบง่าย
          ไปพร้อมๆกับการเปิดรับเทคโนโลยีใหม่ๆ
          และสร้างมาตรฐานของการบริการที่สูงขึ้น เพื่อต่อยอดความมั่นคง
          ที่ไม่ใช่แค่บริษัท หรือ ผลิตภัณฑ์ เท่านั้น
          บริษัทของเรายังใส่ใจเรื่องความมั่นคงในชีวิตของพนักงานทุกคน
          จึงทำให้เราได้ผลิตเครื่องมือช่างที่มีคุณภาพ ตอบโจทย์ลูกค้าทุกท่าน
          ผ่านประสบการณ์ในการทำงานของผู้บริหารและพนักงาน ในระยะเวลา 1 ทศวรรษ
          ที่ผ่านมา ผนวกเข้าหากัน
          เพื่อส่งมอบและสร้างประสบการณ์ผ่านสินค้าไปถึงลูกค้าทุกท่าน
          โดยมีคอนเซปที่ว่า "CLINTON CREATE THE BEST EXPERIENCE" บริษัทคลินตัน
          สนับสนุนและพัฒนาสินค้า เพื่อต่อยอดและไม่หยุดที่จะพัฒนา
          เพื่อตามทันเทคโนโลยีใหม่ๆ ยกตัวอย่างเช่น ไททาเนียม ที่เราใช้ผลิต
          "ลวดเชื่อม" ทำให้อาร์คนิ่ม เชื่อมง่าย ไร้ควัน งานสวย หรือ จะเป็นการนำ
          "ลวดทองแดง" มาเป็นส่วนประกอบของการสร้างผลิตภัณฑ์ เพื่อความแข็งแรง
          ปลอดภัย และยั่งยืน ทั้งหมดที่กล่าวมาเป็นส่วนนึงในอีกหลายเทคโนโลยี
          ที่เรานำมาสร้างสรรค์ผลิตภัณฑ์ โดยคำนึงถึงความปลอดภัย การใช้งานง่าย
          หาซื้อง่าย และ เข้าถึงง่าย ให้แก่ลูกค้าของเรา
        </p>
        <p className="text-[#676767] text-sm leading-[28px] mt-[30px]">We started as a small company with a focus on stability and simplicity, while being open to embracing new technologies. Our company not only prioritizes the stability and quality of our products, but also places importance on the well-being of our employees. Over the past decade, we have combined knowledge, understanding, simplicity, and modernity to deliver exceptional products and experiences to our customers. Our goal is to create the best experience through our commitment to quality and service. For example, we continually support and develop our products to stay at the forefront of new technologies, such as using titanium for welding wire to provide easy and smoke-free welding, or incorporating brass wire as a component in our products to ensure strength, safety, and durability. These are just a few examples of the various technologies we utilize to create products that are safe, user-friendly, easily accessible, and available to our customers.</p>
      </div>
    </>
  );
}

export default About;
