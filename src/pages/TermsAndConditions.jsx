import React from 'react'
import FooterMenu from "../components/FooterMenu"
import TitleHeader from '../components/TitleHeader';
import chevron from '../img/chevron-right.svg'

function TermsAndConditions() {
    return (
        <>
            <TitleHeader link={'/my-account'} title={'ข้อกำหนดและเงื่อนไข'} />
            <div className="px-[20px] pt-9 mb-[120px]">
                <h2 className='text-base font-bold' style={{ fontFamily: "Eventpop" }}>ข้อกำหนดและเงื่อนไขการใช้ Hondanont Loyalty</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>บริษัท เอชซีเอ็น ฮอนด้า ออโตโมบิล จำกัด (“บริษัท”) ได้จัดทำ Hondanont Loyalty โดยใช้แพลตฟอร์ม LINE และ hondanont.zaviago.com รวมถึงเว็บไซต์  เว็บไซต์ที่แสดงบนอุปกรณ์มือถือ หรือโมบายแอพพลิเคชั่น (“แพลตฟอร์ม”) เพื่อใช้เป็นช่องทางในการติดต่อและสื่อสาร รวมถึงให้บริการแก่ผู้ใช้บริการที่เป็นสมาชิกของ Hondanont Loyalty  เช่น การสมัครเป็นสมาชิก ตรวจสอบแต้มคงเหลือ ปรับเปลี่ยนข้อมูลส่วนตัวของสมาชิก ตรวจสอบแคมเปญส่งเสริมการขายของบริษัท แลกแต้มสะสมตามรายการที่บริษัทกำหนด รวมถึงวัตถุประสงค์อื่น ๆ ตามที่บริษัทจะกำหนดขึ้นในภายหลัง</p>

                <p className='text-sm font-medium text-[#585858] mt-4'>ผู้ใช้งานแพลตฟอร์ม (“ผู้ใช้งาน”)ได้อ่าน และยอมรับว่าผู้ใช้งานจะต้องผูกพันตามข้อกำหนดและเงื่อนไขที่กำหนดไว้ในแพลตฟอร์มนี้ โดยผู้ใช้งานจะต้องศึกษาข้อกำหนดและเงื่อนไขด้านล่างนี้อย่างละเอียดและรอบคอบก่อนที่จะกระทำธุรกรรมหรือกิจกรรมใด ๆ บนแพลตฟอร์มนี้ หากท่านทำธุรกรรมหรือกิจกรรมใด ๆ บนแพลตฟอร์ม ให้ถือว่าท่านได้ยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดและเงื่อนไขฉบับนี้แล้ว และหากท่านไม่ต้องการที่จะผูกพันภายใต้เงื่อนไขนี้ กรุณาหยุดทำธุรกรรมใด ๆ บนแพลตฟอร์มนี้  ทั้งนี้ บริษัทมีสิทธิที่จะแก้ไข เปลี่ยนแปลง หรือยกเลิกข้อกำหนดและเงื่อนไขนี้ และ/หรือข้อตกลงอื่น ๆ ในแพลตฟอร์มนี้ โดยไม่ต้องแจ้งให้สมาชิกและผู้ใช้งานทราบล่วงหน้า</p>


                <h2 className='text-base font-bold mt-8' style={{ fontFamily: "Eventpop" }}>1. ขอบเขตการใช้งานแพลตฟอร์ม และข้อกำหนดทั่วไป</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.1 บริษัทขอสงวนสิทธิไว้สำหรับสมาชิกที่ลงทะเบียนเป็นสมาชิกบน แพลตฟอร์มเพื่อตรวจสอบแต้มคงเหลือและแต้มที่จะหมดอายุปรับ เปลี่ยนข้อมูลส่วนตัวของสมาชิกตรวจสอบแคมเปญส่งเสริมการขาย ของบริษัท แลกแต้มสะสมตามรายการที่บริษัทกำหนดรวมถึง วัตถุประสงค์อื่น ๆ ตามที่บริษัทอาจกำหนดขึ้นในภายหลัง</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.2 ผู้ใช้งานรับรองว่าบรรดาข้อมูลที่ได้ให้ไว้แก่บริษัทในแพลตฟอร์ม เป็นข้อมูลของผู้ใช้งานที่ถูกต้องครบถ้วนโดยเฉพาะอย่างยิ่งรับรอง ว่าเบอร์โทรศัพท์มือถือ หรืออีเมลส่วนตัวยังใช้งานได้อยู่ในขณะที่ ให้ข้อมูลดังกล่าว</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.3 ผู้ใช้งานตกลงและรับทราบว่าบริษัทไม่ได้ให้ความรับรองถึงความ ถูกต้องสมบูรณ์ของเนื้อหาที่ปรากฏอยู่บนแพลตฟอร์มและไม่รับรองว่า แพลตฟอร์ม ปราศจากไวรัส หรือสิ่งอื่น ๆ ที่อาจจะกระทบต่ออุปกรณ์ เคลื่อนที่ของท่าน</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.4 ก่อนจะทำรายการใด ๆ ผ่านแพลตฟอร์ม ผู้ใช้งานจะต้องตรวจสอบ ชื่อและนามสกุล หมายเลขบัตรประจำตัวประชาชนและแต้มสะสม ซึ่งจะ ปรากฏบนแพลตฟอร์มและอีเมลที่ส่งถึงท่านตามอีเมลแอดเดรสหรือ ข้อมูลส่วนบุคคลอื่นๆที่ใช้ในการการติดต่อที่ท่านได้ระบุไว้ หลังจากที่ มีการทำธุรกรรมใดๆ ผ่านทางแพลตฟอร์มทุกครั้ง</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.5 ผู้ใช้งานจะตรวจสอบเงื่อนไขเกี่ยวกับสิทธิประโยชน์อัตราการแลก แต้ม รวมถึงการเข้าร่วมกิจกรรมต่าง ๆ ที่ปรากฏอยู่บนแพลตฟอร์ม ก่อนการรับสิทธิประโยชน์ และการเข้าร่วมกิจกรรมต่าง ๆ ผ่านแพลตฟอร์ม</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.6 การใช้งานแพลตฟอร์มในแต่ละครั้ง ถือว่าผู้ใช้งานได้รับทราบถึง ข้อตกลงและเงื่อนไขนี้รวมถึงข้อตกลงและเงื่อนไขทีมีการเปลี่ยนแปลง แก้ไขและได้ใช้บังคับในเวลาดังกล่าวโดยครบถ้วนสมบูรณ์แล้วโดยตกลงปฏิบัติตามข้อตกลงและเงื่อนไขดังกล่าวทุกประการ</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.7 ผู้ใช้งานรับทราบว่าการเก็บรวบรวม ใช้ เปิดเผย หรือโอนข้อมูล ส่วนบุคคลของผู้ใช้งานเป็นไปตามนโยบายความเป็นส่วนตัว</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.8 ในแพลตฟอร์มจะมีโฆษณา ไฮเปอร์ลิงก์ หรือดีพลิงก์ไปยังเว็บไซต์ หรือ แอพพลิเคชั่นของบุคคลที่สามรวมถึงแต่ไม่จำกัดเพียงลิงก์ไปยัง แพลตฟอร์ม เวปไซต์ หรือแอพพลิเคชั่นของบริษัทที่อยู่ภายใต้เงื่อนไข การใช้ข้อมูล ซึ่งแพลตฟอร์ม เวปไซต์ หรือแอพพลิเคชั่นของบุคคล ที่สามเหล่านั้นไม่ถือเป็นส่วนหนึ่งของแพลตฟอร์มของบริษัท และไม่อยู่ ภายใต้การควบคุมหรือความรับผิดชอบของบริษัท เมื่อผู้ใช้งานทำการ ลิงก์ไปยังแพลตฟอร์ม เวปไซต์ หรือแอพพลิเคชั่นดังกล่าว เมื่อผู้ใช้งาน จะออกจากแพลตฟอร์มของบริษัทและดำเนินการต่อไปภายใต้ความเสี่ยงของผู้ใช้งานเองทั้งหมด บริษัทไม่รับประกันถึงความถูกต้องแม่นยำ และความน่าเชื่อถือของข้อมูลที่ระบุไว้บนเว็บไซต์ของบุคคลที่สาม และ บริษัทขอปฏิเสธความรับผิดชอบทั้งหมดต่อการสูญเสียหรือเสียหายที่ ผู้ใช้งานได้รับจากการอ้างอิงข้อความที่อยู่หรือไม่มีอยู่บนแพลตฟอร์ม เวปไซต์ หรือแอพพลิเคชั่นของบุคคลที่สาม การแสดงโฆษณาไม่ถือเป็น การแสดงการรับรองหรือแนะนำจากบริษัท</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.9 ในกรณีที่มีเหตุอันสมควร บริษัทอาจระงับหรือยกเลิกการให้บริการ รวมถึงเปลี่ยนแปลงรายการส่งเสริมการขายผ่านแพลตฟอร์มได้โดยไม่ต้องประกาศ หรือแจ้งให้ทราบล่วงหน้า</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.10 แต้มสะสมที่ปรากฏเมื่อมีการตรวจสอบแต้มจะเป็นแต้มสะสมของ การซื้อสินค้าและบริการครั้งล่าสุดของวันนี้แต้มจะถูกนำไปคำนวณและ แสดงในวันถัดไป หรือตามเงื่อนไขของที่กำหนดไว้</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.10 แต้มสะสมที่ปรากฏเมื่อมีการตรวจสอบแต้มจะเป็นแต้มสะสมของ การซื้อสินค้าและบริการครั้งล่าสุดของวันนี้แต้มจะถูกนำไปคำนวณและ แสดงในวันถัดไป หรือตามเงื่อนไขของที่กำหนดไว้</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.11 แต้มสะสมที่แลกผ่านทางแพลตฟอร์มจะถูกนำไปประมวลผลและ หักออกจากแต้มที่คงเหลืออยู่ทันที</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.12 ในการแลกแต้มบนแพลตฟอร์มผู้ใช้งานจะไม่ได้รับอีเมลสรุปการ แลกแต้ม แต่สามารถตรวจสอบประวัติการแลกแต้มได้ที่เมนู "ประวัติการใช้งาน"</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.13 เมื่อผู้ใช้งานทำการยืนยันการแลกแต้มบนแพลตฟอร์มเรียบร้อย แล้ว จะไม่สามารถขอคืนแต้มได้</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.14 กรณีแลกแต้มผ่านช่องทางอื่น หากสมาชิกไม่ได้เป็นผู้ทำรายการ โปรดติดต่อ 02-591-7733-6  ต่อ 622 , 623 ภายใน 7 วัน หากเกินกำหนดเวลาและเกิดปัญหาโต้แย้งคำชี้ขาดของบริษัทถือเป็น ที่สิ้นสุด</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>1.15 กรณีที่มีข้อโต้แย้งเกี่ยวกับแต้ม  ข้าพเจ้าตกลงและยอมรับให้บริษัท มีอำนาจในการตรวจสอบและปรับแต้มย้อนหลังไม่เกิน 6 เดือน และการตัดสินของบริษัทถือเป็นที่สิ้นสุด</p>


                <h2 className='text-sm font-bold mt-8' style={{ fontFamily: "Eventpop" }}>2. การใช้งานเว็บไซต์/แอปพลิเคชัน</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>2.1 ผู้ขอใช้บริการสามารถสมัครสมาชิกได้โดย Add LINE Official Hondanont รวมทั้งได้รับอนุมัติจากบริษัทให้เป็นสมาชิกโดยผู้ใช้บริการ ต้องผูกพันและปฏิบัติตามข้อกำหนดและเงื่อนไขการเป็นสมาชิก Hondanont Loyalty</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>2.2 ผู้สมัครรับทราบว่า ต้องเป็นสมาชิก LINE Official ของ Hondanont เพื่อใช้ในการลงทะเบียนเป็นสมาชิก Hondanont Loyalty ผ่านทางแพลตฟอร์ม เนื่องจากเป็นส่วนหนึ่งของการให้บริการ</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>2.3 ผู้สมัครตกลงและยอมรับตามข้อกำหนดและเงื่อนไขต่าง ๆ ของการ เป็นสมาชิกที่ใช้บังคับ ณ ขณะลงทะเบียนใช้บริการแพลตฟอร์มในทุก ช่องทางและให้รวมถึงข้อกำหนดและเงื่อนไขที่จะเปลี่ยนแปลงหรือ แก้ไขในภายหน้า</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>2.4 ผู้สมัครรับรองว่าบรรดาข้อมูลที่ได้ให้ไว้แก่บริษัทในการลงทะเบียน เป็นสมาชิกถูกต้องครบถ้วนโดยเฉพาะอย่างยิ่งรับรองว่าเบอร์โทรศัพท์มือถือ หรือ อีเมลล์ส่วนตัวยังใช้งานอยู่ในขณะที่ได้ให้ข้อมูลดังกล่าว</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>2.5 ผู้สมัครเป็นสมาชิก Hondanont Loyalty ต้องไม่เป็นผู้เยาว์ และมีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป  ไม่เป็นคนไร้ความสามารถ รวมทั้ง ไม่เป็นคนเสมือนไร้ความสามารถ</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>2.6 บริษัทขอสงวนสิทธิในการยกเลิกการเป็นสมาชิก หรือเปลี่ยนแปลง เงื่อนไขสิทธิประโยชน์โดยไม่ต้องแจ้งให้ทราบล่วงหน้า</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>2.7 ผู้สมัครสัญชาติไทยต้องลงทะเบียนด้วยหมายเลขบัตรประชาชน เท่านั้น และต้องรับรองว่าข้อมูลที่ให้กับบริษัทเป็นข้อมูลที่ถูกต้อง</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>2.8 กรณีมีข้อโต้แย้งหรือผู้สมัครกระทำผิดเงื่อนไข บริษัทมีอำนาจใน การตรวจสอบบัญชีและระงับบัญชีชั่วคราวโดยมิต้องแจ้งให้ทราบล่วง หน้า การตัดสินของบริษัทถือเป็นที่สิ้นสุด</p>


                <h2 className='text-sm font-bold mt-8' style={{ fontFamily: "Eventpop" }}>3. การลงทะเบียนเพื่อเข้าใช้งานแพลตฟอร์ม</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>3.1 ผู้ขอใช้บริการสามารถลงทะเบียนเข้าใช้งานแพลตฟอร์มได้โดย Rich Menu Hondanont Loyalty รวมทั้งได้รับอนุมัติจากบริษัทให้เป็น สมาชิกโดยผู้ใช้บริการต้องผูกพันและปฏิบัติตามข้อกำหนดและเงื่อนไข การเป็นสมาชิก Hondanont Loyalty อนึ่ง <br /><br />
                
                ผู้ขอใช้บริการต้องทำการตั้งรหัสผ่านสมาชิกโดยขั้นตอนการ ยืนยันโดยรหัสลับ (OTP) ที่ทางบริษัทจัดส่งให้ภายในระยะเวลาที่กำหนด ทั้งนี้สมาชิกจะต้องรักษารหัสผ่านไว้เป็นความลับและไม่เปิดเผย หรือกระทำการใด ๆ ที่อาจทำให้ผู้อื่นทราบรหัสผ่าน</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>3.2 สมาชิกรับรองว่าบรรดาข้อมูลที่ได้ให้ไว้แก่บริษัทในการลงทะเบียน เข้าใช้แพลตฟอร์มนี้ถูกต้องครบถ้วนโดยเฉพาะอย่างยิ่งรับรองว่าเบอร์ โทรศัพท์มือถือหรืออีเมลส่วนตัวยังใช้งานอยู่ในขณะที่ได้ให้ข้อมูล ดังกล่าว</p>


                <h2 className='text-sm font-bold mt-8' style={{ fontFamily: "Eventpop" }}>4. การปรับเปลี่ยนข้อมูลส่วนตัวของสมาชิก</h2>
                <p className='text-sm font-medium text-[#585858] mt-4'>4.1 สมาชิกสามารถทำการปรับเปลี่ยนผ่านทางแพลตฟอร์ม Hondanont Loyalty</p>
                <p className='text-sm font-medium text-[#585858] mt-4'>4.2 สมาชิกรับรองว่า หากมีการเปลี่ยนแปลงข้อมูลส่วนตัวของสมาชิก สมาชิกจะปรับปรุงข้อมูลส่วนตัวของสมาชิกให้ทันสมัยอยู่ตลอดเวลา</p>
            
            </div>
            <FooterMenu active={2} />
        </>
    )
}

export default TermsAndConditions
