import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

export const Screen = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { text: "หน้าหลัก", active: true },
    { text: "เกี่ยวกับเรา", active: false },
    { text: "สินค้า", active: false },
    { text: "ผลงาน", active: false },
    { text: "รีวิวจากลูกค้า", active: false },
    { text: "คำถามที่พบบ่อย", active: false },
    { text: "ติดต่อเรา", active: false },
  ];

  // Product cards data
  const productCards = [
    {
      title: "เหรยญรางวล",
      description:
        "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et",
    },
    {
      title: "เหรยญรางวล",
      description:
        "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et",
    },
    {
      title: "เหรยญรางวล",
      description:
        "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et",
    },
  ];

  // Company features
  const companyFeatures = [
    { title: "5+", subtitle: "Designers With in 3hr Free Artwork" },
    { title: "3D", subtitle: "Visual Display Free 3D product modeling" },
    { title: "5", subtitle: "Factory" },
    { title: "20+", subtitle: "Staff" },
    { title: "CNC", subtitle: "Before Production" },
    { title: "Auto", subtitle: "Coloring Robots" },
  ];

  // Process steps
  const processSteps = [
    { number: "1", text: "สงแบบตวอยางทตองการ" },
    { number: "2", text: "แจงความหนา (มลลเมตร)" },
    { number: "3", text: "แจงจนวนชนงาน (ชน)" },
    { number: "4", text: "แจงขนาดชนงาน (เซนตเมตร)" },
    { number: "5", text: "เลอกสชบ" },
    { number: "6", text: "แจงวนทใชงาน" },
    { number: "7", text: "แจงรายละเอยดผรบสนคาและทอยจดสง" },
    { number: "8", text: "ชระเงน" },
    { number: "9", text: "ผลตสนคา (ระยะเวลา 7 - 14 วน ขนอยกบจนวนและแบบชนงาน)" },
    { number: "10", text: "จดสงสนคา" },
  ];

  // FAQ items
  const faqItems = [
    "ลคกถวยรางวลคอรานอะไร?",
    "รานตงอยทไหน?",
    "รานเปด-ปดกโมง?",
    "ชองทางการตดตอมอะไรบาง?",
    "สามารถเขาไปดตวอยางสนคาไดทไหน?",
  ];

  // Blog articles
  const blogArticles = [
    {
      title: "เหรยญรางวล",
      description:
        "Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ut labore et",
    },
    {
      title: "เหรยญรางวล",
      description:
        "Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ut labore et",
    },
    {
      title: "เหรยญรางวล",
      description:
        "Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet,sed do eiusmod tempor incididunt ut labore et",
    },
  ];

  // Reviews
  const reviews = [
    {
      title: "รววความไววางใจ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      title: "รววความไววางใจ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      title: "รววความไววางใจ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
  ];

  // Pagination dots
  const renderPaginationDots = () => (
    <div className="flex items-center justify-center gap-[7px] h-3 w-[85px]">
      <div className="bg-[#d82e2a] w-[11px] h-[11px] rounded-[5.69px]" />
      <div className="bg-[#ffd6d5] w-[11px] h-[11px] rounded-[5.69px]" />
      <div className="bg-[#ffd6d5] w-[11px] h-[11px] rounded-[5.69px]" />
      <div className="bg-[#ffd6d5] w-[11px] h-[11px] rounded-[5.69px]" />
      <div className="bg-[#ffd6d5] w-[11px] h-[11px] rounded-[5.69px]" />
    </div>
  );

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Header and Banner Section */}
        <header className="relative w-full h-[579px]">
          <div className="w-full h-20 bg-[#efefef]">
            <div className="container mx-auto flex justify-between items-center h-full px-4">
              <img className="w-40 h-11" alt="Logo bravo" />

              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="flex gap-6">
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        className={`text-base ${item.active ? "text-[#d82e2a]" : "text-black"} [font-family:'Inter',Helvetica]`}
                      >
                        {item.text}
                      </NavigationMenuLink>
                      {item.active && (
                        <div className="w-[85px] h-[5px] bg-[#d82e2a] mt-2" />
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <img className="w-8 h-8 object-cover" alt="Telephone" />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xs">
                    Call
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img className="w-8 h-8 object-cover" alt="Line" />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xs">
                    Line
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img className="w-8 h-8 object-cover" alt="Messenger" />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xs">
                    Messenger
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[500px] bg-white flex items-center justify-center">
            <div className="[font-family:'Sukhumvit_Set-Text',Helvetica] font-normal text-black text-[80px]">
              BANNER 1440*500
            </div>

            <Button
              variant="outline"
              className="absolute left-[135px] top-[296px] w-10 h-10 rounded-[20px] flex items-center justify-center"
            >
              <img
                className="w-3 h-[25px]"
                alt="Vector"
                src="/vector-2-1.svg"
              />
            </Button>

            <Button
              variant="outline"
              className="absolute right-[135px] top-[296px] w-10 h-10 rounded-[20px] flex items-center justify-center"
            >
              <img
                className="w-3 h-[25px]"
                alt="Vector"
                src="/vector-1-1.svg"
              />
            </Button>

            {renderPaginationDots()}
          </div>
        </header>

        {/* Success Section */}
        <section className="relative w-full h-[1278px]">
          <div className="w-full h-20 shadow-[0px_4px_4px_#0000004c] [background:linear-gradient(90deg,rgba(216,46,42,1)_50%,rgba(114,24,22,1)_100%)]">
            <div className="container mx-auto h-full flex items-center justify-center overflow-hidden">
              <div className="flex items-center gap-4 overflow-x-auto">
                {/* Partner logos would go here */}
                <img className="h-14" alt="Layer" />
                <img className="h-14 object-cover" alt="Layer" />
                <img className="h-14 object-cover" alt="Layer" />
                <img className="h-14" alt="Logo TO BE NUMBER" />
                <img className="h-[34px]" alt="Layer" />
                <img className="h-9 object-cover" alt="Kubota logo" />
                <img className="h-14 object-cover" alt="Layer" />
              </div>
            </div>
          </div>

          <div className="pt-[67px] bg-cover bg-center">
            <div className="container mx-auto px-4">
              <div className="flex justify-center mb-8">
                <img className="h-11 object-cover" alt="Logos" />
                <img className="h-[71px]" alt="Success" />
              </div>

              <h2 className="text-center mb-8">
                <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-black text-5xl">
                  &nbsp;
                </span>
                <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#d82e2a] text-5xl">
                  ความสเรจทมดไซน
                </span>
              </h2>

              <p className="[font-family:'Sukhumvit_Set-Text',Helvetica] font-normal text-black text-xl text-center mb-12">
                เราเปนผจดจหนาย ถวยรางวล เหรยญรางวล ทงราคาสงและราคาปลก
                พรอมจดสงทวไทย
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {productCards.map((product, index) => (
                  <Card
                    key={index}
                    className="rounded-[20px] shadow-[0px_4px_4px_#00000040]"
                  >
                    <div className="h-[265px] bg-cover bg-center"></div>
                    <CardContent className="pt-6 pb-8 px-4">
                      <h3 className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#d82e2a] text-3xl text-center mb-4">
                        {product.title}
                      </h3>
                      <p className="[font-family:'Sukhumvit_Set-Text',Helvetica] font-normal text-black text-xl text-center">
                        {product.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {productCards.map((product, index) => (
                  <Card
                    key={index}
                    className="rounded-[20px] shadow-[0px_4px_4px_#00000040]"
                  >
                    <div className="h-[265px] bg-cover bg-center"></div>
                    <CardContent className="pt-6 pb-8 px-4">
                      <h3 className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#d82e2a] text-3xl text-center mb-4">
                        {product.title}
                      </h3>
                      <p className="[font-family:'Sukhumvit_Set-Text',Helvetica] font-normal text-black text-xl text-center">
                        {product.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative w-full mt-8">
          <div className="container mx-auto px-4 flex justify-between">
            <div className="relative w-[379px] h-64 bg-[url(/dsc00082.svg)] bg-cover bg-[50%_50%]">
              <Button
                variant="outline"
                className="absolute top-[111px] left-[17px] w-[35px] h-[35px] rounded-[17.5px] flex items-center justify-center"
              >
                <img
                  className="w-[11px] h-[23px]"
                  alt="Vector"
                  src="/vector-2.svg"
                />
              </Button>
            </div>

            <img
              className="w-[379px] h-64 object-cover"
              alt="Dsc"
              src="/dsc00078.svg"
            />

            <div className="relative w-[379px] h-64 bg-[url(/dsc09601.svg)] bg-cover bg-[50%_50%]">
              <Button
                variant="outline"
                className="absolute top-[111px] right-[17px] w-[35px] h-[35px] rounded-[17.5px] flex items-center justify-center"
              >
                <img
                  className="w-[11px] h-[23px]"
                  alt="Vector"
                  src="/vector-1.svg"
                />
              </Button>
            </div>
          </div>
        </section>

        {/* Company Features Section */}
        <section className="relative w-full mt-16">
          <h2 className="text-center mb-12">
            <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-black text-5xl">
              เพราะทกความสเรจ{" "}
            </span>
            <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#d82e2a] text-5xl">
              สคญกบเรา
            </span>
          </h2>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative w-full h-[353px]">
                <img className="w-full h-[210px]" alt="Img" />
                <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-[#d82e2a] rounded-[0px_0px_20px_20px] flex flex-col items-center justify-center">
                  <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#ffcd61] text-[80px]">
                    5+
                  </span>
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-white text-2xl text-center">
                    Designers <br />
                    With in 3hr Free Artwork
                  </span>
                </div>
              </div>

              <div className="relative w-full h-[353px]">
                <img className="w-full h-[210px] object-cover" alt="Img" />
                <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-[#d82e2a] rounded-[0px_0px_20px_20px] flex flex-col items-center justify-center">
                  <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#ffcd61] text-[80px]">
                    3D
                  </span>
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-white text-2xl text-center">
                    Visual Display <br />
                    Free 3D product modeling
                  </span>
                </div>
              </div>

              <div className="relative w-full h-[353px]">
                <img className="w-full h-[253px]" alt="Element" />
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[#d82e2a] rounded-[0px_0px_20px_20px] flex items-center justify-center">
                  <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#ffcd61] text-[80px]">
                    5
                  </span>
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-white text-2xl ml-2">
                    Factory
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="relative w-full h-[353px]">
                <img className="w-full h-[253px] object-cover" alt="Element" />
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[#d82e2a] rounded-[0px_0px_20px_20px] flex items-center justify-center">
                  <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#ffcd61] text-[80px]">
                    20+
                  </span>
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-white text-2xl ml-2">
                    Staff
                  </span>
                </div>
              </div>

              <div className="relative w-full h-[353px]">
                <img className="w-full h-[253px]" alt="Element" />
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[#d82e2a] rounded-[0px_0px_20px_20px] flex items-center justify-center">
                  <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#ffcd61] text-6xl">
                    CNC
                  </span>
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-white text-2xl ml-2">
                    Before Production
                  </span>
                </div>
              </div>

              <div className="relative w-full h-[353px]">
                <img className="w-full h-[253px]" alt="Dji" />
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[#d82e2a] rounded-[0px_0px_20px_20px] flex items-center justify-center">
                  <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#ffcd61] text-6xl">
                    Auto
                  </span>
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-white text-2xl ml-2">
                    Coloring Robots
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Banner Section */}
        <section className="relative w-full h-[579px] mt-16">
          <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-[#d82e2a]">
            <img className="w-full h-full" alt="Line ALBUM" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-white text-4xl mb-8">
                &quot;ความสเรจทมดไซน&quot;
              </h2>
              <img className="w-[647px] h-[58px]" alt="Mask group" />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="relative w-full h-[516px] mt-16 bg-[100%_100%]">
          <h2 className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-black text-5xl text-center mb-8">
            VIDEO
          </h2>

          <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
            <div className="relative w-full md:w-[487px] h-[299px] bg-cover bg-[50%_50%]">
              <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[58px] h-[59px] bg-[#d82e2a] rounded-[29px/29.5px] shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                <img
                  className="w-[18px] h-[21px]"
                  alt="Polygon"
                  src="/polygon-1.svg"
                />
              </Button>
            </div>

            <div className="flex-1">
              <p className="[font-family:'Sukhumvit_Set-Text',Helvetica] font-normal text-black text-xl mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    className="w-[33px] h-[33px] object-cover"
                    alt="Facebook"
                  />
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-black text-xl">
                    รบผลตเหรยญรางวล โลรางวล ปายเบอรวง เสอวง
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <img className="w-[33px] h-[33px] object-cover" alt="Line" />
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-black text-xl">
                    @bravomall
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    className="w-[33px] h-[33px] object-cover"
                    alt="Telephone"
                  />
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-black text-xl">
                    061-131-9956
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative w-full mt-16">
          <h2 className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-center mb-12">
            <span className="text-black">เรทราคา </span>
            <span className="text-[#d82e2a]">เหรยญสงผลต</span>
          </h2>

          <div className="container mx-auto px-4">
            <img className="w-full h-auto" alt="Zinc" src="/zinc.svg" />
          </div>
        </section>

        {/* Process Section */}
        <section className="relative w-full mt-16 bg-[100%_100%]">
          <h2 className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-center mb-12">
            <span className="text-black">
              ขนตอนการสงผลตท
              <br />
            </span>
            <span className="text-[#d82e2a]">THE BRAVO by ลคกถวยรางวล</span>
          </h2>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.slice(0, 3).map((step, index) => (
                <div key={index} className="relative mb-12">
                  <div className="absolute top-0 left-0 w-[46px] h-[45px] bg-[#d82e2a] rounded-[20px_0px_20px_0px] flex items-center justify-center">
                    <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-white text-2xl">
                      {step.number}
                    </span>
                  </div>
                  <img
                    className="w-full h-[280px] object-cover"
                    alt={`Process step ${step.number}`}
                  />
                  <div className="w-full h-[70px] bg-gradient-to-b from-[#d82e2a] to-[#721816] rounded-[0px_0px_20px_20px] flex items-center justify-center">
                    <span className="[font-family:'Sukhumvit_Set-Medium',Helvetica] font-medium text-white text-xl text-center">
                      {step.text}
                    </span>
                  </div>
                  {index < 2 && (
                    <img
                      className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 w-[50px] h-[50px]"
                      alt="Arrow right"
                      src="/arrow-right.svg"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.slice(3, 6).map((step, index) => (
                <div key={index} className="relative mb-12">
                  <div className="absolute top-0 left-0 w-[46px] h-[45px] bg-[#d82e2a] rounded-[20px_0px_20px_0px] flex items-center justify-center">
                    <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-white text-2xl">
                      {step.number}
                    </span>
                  </div>
                  <img
                    className="w-full h-[280px] object-cover"
                    alt={`Process step ${step.number}`}
                  />
                  <div className="w-full h-[70px] bg-gradient-to-b from-[#d82e2a] to-[#721816] rounded-[0px_0px_20px_20px] flex items-center justify-center">
                    <span className="[font-family:'Sukhumvit_Set-Medium',Helvetica] font-medium text-white text-xl text-center">
                      {step.text}
                    </span>
                  </div>
                  {index < 2 && (
                    <img
                      className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 w-[50px] h-[50px]"
                      alt="Arrow right"
                      src="/arrow-right-6.svg"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.slice(6, 9).map((step, index) => (
                <div key={index} className="relative mb-12">
                  <div className="absolute top-0 left-0 w-[46px] h-[45px] bg-[#d82e2a] rounded-[20px_0px_20px_0px] flex items-center justify-center">
                    <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-white text-2xl">
                      {step.number}
                    </span>
                  </div>
                  <img
                    className="w-full h-[280px] object-cover"
                    alt={`Process step ${step.number}`}
                  />
                  <div className="w-full h-[70px] bg-gradient-to-b from-[#d82e2a] to-[#721816] rounded-[0px_0px_20px_20px] flex items-center justify-center">
                    <span
                      className="[font-family:'Sukhumvit_Set-Medium
',Helvetica] font-medium text-white text-xl text-center"
                    >
                      {step.text}
                    </span>
                  </div>
                  {index < 2 && (
                    <img
                      className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 w-[50px] h-[50px]"
                      alt="Arrow right"
                      src="/arrow-right.svg"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <div className="relative w-[358px]">
                <div className="absolute top-0 left-0 w-[46px] h-[45px] bg-[#d82e2a] rounded-[20px_0px_20px_0px] flex items-center justify-center">
                  <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-white text-2xl">
                    10
                  </span>
                </div>
                <img
                  className="w-full h-[280px] object-cover"
                  alt="Process step 10"
                />
                <div className="w-full h-[70px] bg-gradient-to-b from-[#d82e2a] to-[#721816] rounded-[0px_0px_20px_20px] flex items-center justify-center">
                  <span className="[font-family:'Sukhumvit_Set-Medium',Helvetica] font-medium text-white text-xl text-center">
                    จดสงสนคา
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="relative w-full mt-16 py-16">
          <h2 className="text-center mb-8">
            <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-black text-5xl">
              รววความไววางใจ
              <br />
            </span>
            <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#d82e2a] text-5xl">
              THE BRAVO by ลคกถวยรางวล
            </span>
          </h2>

          <p className="[font-family:'Sukhumvit_Set-Text',Helvetica] font-normal text-black text-xl text-center mb-12">
            เราไมไดมดแคราคาถก คณภาพของเรามการ QC 100% รบประกนคณภาพ
          </p>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {reviews.map((review, index) => (
                <Card
                  key={index}
                  className="rounded-[20px] shadow-[0px_4px_4px_#00000040]"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <img className="w-16 h-16 object-cover" alt="User" />
                      <div className="ml-4">
                        <h3 className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-black text-3xl">
                          {review.title}
                        </h3>
                        <img className="w-[84px] h-[17px]" alt="Rating" />
                      </div>
                    </div>
                    <p className="[font-family:'Sukhumvit_Set-Text',Helvetica] font-normal text-black text-xl">
                      {review.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img className="w-full h-80 object-cover" alt="Element" />
              <img className="w-full h-80 object-cover" alt="Element" />
              <img className="w-full h-80 object-cover" alt="Element" />
            </div>

            <div className="flex justify-center mt-8">
              <Button className="w-[200px] h-[58px] rounded-[46.5px] bg-[#d82e2a]">
                <span className="[font-family:'Inter',Helvetica] font-bold text-white text-lg">
                  ดรววเพมเตม
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="relative w-full mt-16 py-16">
          <h2 className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-black text-5xl text-center mb-8">
            บทความนาร
          </h2>

          <p className="[font-family:'Sukhumvit_Set-Text',Helvetica] font-normal text-black text-xl text-center mb-12 max-w-[1200px] mx-auto">
            &#34;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogArticles.map((article, index) => (
                <Card
                  key={index}
                  className="rounded-[20px] shadow-[0px_4px_4px_#00000040] overflow-hidden"
                >
                  <img className="w-full h-80 object-cover" alt="Blog image" />
                  <CardContent className="p-6">
                    <h3 className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-[#d82e2a] text-3xl mb-4">
                      {article.title}
                    </h3>
                    <p className="[font-family:'Sukhumvit_Set-Text',Helvetica] font-normal text-black text-sm mb-6">
                      {article.description}
                    </p>
                    <Button className="w-[120px] h-8 rounded-[46.5px] bg-[#d82e2a]">
                      <span className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-white text-sm">
                        อานเพม
                      </span>
                      <img
                        className="w-2.5 h-[18px] ml-2"
                        alt="Vector"
                        src="/vector-4.svg"
                      />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative w-full mt-16">
          <h2 className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-black text-5xl text-center mb-12">
            คถามทพบบอย
          </h2>

          <div className="container mx-auto px-4 max-w-[994px]">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#d82e2a] rounded-[47.5px] overflow-hidden"
                >
                  <AccordionTrigger className="px-8 py-4 text-white [font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-[25px]">
                    {item}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 py-4 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative w-full mt-16 py-16 bg-[#d82e2a] bg-[100%_100%]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="[font-family:'Sukhumvit_Set-Bold',Helvetica] font-bold text-white text-5xl mb-12">
              รบแคตตาลอกออนไลนฟร!
              <br />
              จาก THE BRAVO by ลคกถวยรางวล
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-[740px] mx-auto">
              <Input
                className="h-11 bg-[#dedede] rounded-[47.5px] border-2 border-solid border-neutral-600 text-[#787878] text-lg text-center [font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold"
                placeholder="กรณากรอกอเมลเพอรบแคตตาลอก"
              />

              <Button className="h-11 w-[200px] rounded-[47.5px] bg-[#d82e2a] border-2 border-solid border-white">
                <img className="w-[30px] h-[30px] object-cover" alt="Send" />
                <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-white text-lg ml-2">
                  สง E-Mail
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative w-full bg-[#d82e2a]">
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                <img
                  className="w-[275px] h-[67px] object-cover mb-8"
                  alt="Element"
                />
                <a
                  className="[font-family:'Sukhumvit_Set-Text',Helvetica] font-normal text-white text-lg block"
                  href="https://maps.app.goo.gl/m25TT1atLYXSpx1a9"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  บรษท ลคก พรเมยม แอนด ดไซน จกด
                  <br />
                  34/39 หม 1 ตบลบานใหม อเภอเมอง จงหวดปทมธาน 12000
                </a>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-9 h-9 bg-[url(/combined-shape-1.svg)] bg-[100%_100%]"></div>
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-white text-lg">
                    061-131-9956
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-9 h-9 bg-[url(/combined-shape-3.svg)] bg-[100%_100%]"></div>
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-white text-lg">
                    info@thebravo.me
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-9 h-9 bg-[url(/combined-shape.svg)] bg-[100%_100%]"></div>
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-white text-lg">
                    รบผลตเหรยญรางวล โลรางวล ปายเบอรวง เสอวง
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-[url(/combined-shape-2.svg)] bg-[100%_100%]">
                    <img
                      className="w-px h-[5px] absolute top-[15px] left-[15px]"
                      alt="Fill"
                      src="/fill-2.svg"
                    />
                    <img
                      className="w-[5px] h-[5px] absolute top-[15px] left-[17px]"
                      alt="Fill"
                      src="/fill-3.svg"
                    />
                    <img
                      className="w-1 h-[5px] absolute top-[15px] left-[11px]"
                      alt="Fill"
                      src="/fill-4.svg"
                    />
                    <img
                      className="w-1 h-[5px] absolute top-[15px] left-[22px]"
                      alt="Fill"
                      src="/fill-5.svg"
                    />
                  </div>
                  <span className="[font-family:'Sukhumvit_Set-SemiBold',Helvetica] font-semibold text-white text-lg">
                    @bravomall
                  </span>
                </div>
              </div>

              <div>
                <img
                  className="w-[150px] h-[150px] object-cover"
                  alt="L gainfriends"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[75px] bg-[#a60100] flex items-center justify-center">
            <p className="[font-family:'Sukhumvit_Set-Medium',Helvetica] font-medium text-white text-lg text-center">
              © Copyright 2024 All Rights Reserved. The Bravo by Luckymedal
            </p>
          </div>

          <img
            className="fixed w-[203px] h-[70px] bottom-0 right-0"
            alt="Image"
            src="/------------.svg"
          />
        </footer>
      </div>
    </div>
  );
};
