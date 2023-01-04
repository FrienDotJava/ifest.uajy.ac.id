import { Accordion, Carousel } from "flowbite-react";
import AccordionContainer from "../components/Accordion";
import { motion } from "framer-motion";
import { FC, useRef } from "react";
import { FaBook, FaMale, FaWallet, FaWhatsapp } from "react-icons/all";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Grid } from "swiper";
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css/grid";
import '../css/accordion.css';

const Home: FC = () => {
  const publications = [
    {
      img: "https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png",
      author: "Joshua Puniwan Yahya - Ketua",
      title: "Welcome to IFEST#11",
      date: "28 Desember 2022, 12.00 WIB"
    },
    {
      img: "https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png",
      author: "Joshua Puniwan Yahya - Ketua",
      title: "Pengumuman Finalis WDC",
      date: "29 Desember 2022, 12.00 WIB"
    },
    {
      img: "https://ifest.uajy.ac.id/assets/images/event/ill-cp.png",
      author: "Joshua Puniwan Yahya - Ketua",
      title: "Pengumuman Lolos Ke Tahap Virtual Expo I2C",
      date: "30 Desember 2022, 12.00 WIB"
    }
  ];
  const i2cRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <div className="bg-[url('/images/bg-no-flip.png')] bg-center bg-cover bg-no-repeat -z-10 absolute top-0 h-screen w-screen">
        {/* Header */}
        <motion.div
          className="flex flex-col justify-center items-center h-screen"
        >
          <TypeAnimation
            sequence={[
              1000,
              "IFEST#11"
            ]}
            speed={1}
            wrapper="h1"
            cursor={false}
            className="font-gameofsquids text-6xl lg:text-8xl font-bold tracking-[0.1em] text-white text-center"
          />
          <TypeAnimation
            sequence={[
              2000,
              "Technology Rebuild Our Country"
            ]}
            speed={45}
            wrapper="h2"
            cursor={false}
            className="font-retrons2000 text-xl lg:text-3xl font-light text-white text-center"
          />
          <motion.button
            onClick={() => i2cRef.current?.scrollIntoView({ behavior: "smooth" })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.0, duration: 0.25 }}
            className="mt-12 transition-transform hover:scale-125">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
          </motion.button>
        </motion.div>

        {/* I2C Description */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          ref={i2cRef}
          className="bg-[url('/images/bg-flip-fix.png')] bg-no-repeat bg-cover bg-center h-screen w-screen"
        >
          <div className="hidden lg:flex flex-col justify-center items-center h-screen w-screen">
            <div className="flex justify-center items-center">
              <img className="w-[600px]" src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png" alt="i2c" />
              <div className="flex flex-col">
                <div className="font-retroica text-4xl text-white pl-[1rem]">I2C</div>
                <div className="font-retroica text-2xl text-white pl-[1rem] pb-[0.5rem]">Innovative Informatics Contest</div>
                <div className="flex gap-4 font-retroica text-sm text-white pl-[1rem]">
                  <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                      <FaWallet />
                      Gratis
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                      <FaBook />
                      SMA/Sederajat
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                      <FaMale />
                      Max. 3 orang
                    </div>
                  </div>
                </div>
                <div className="p-4 font-retroica text-white w-[32em]">
                  <p className="text-justify">
                    <strong>Innovative Informatics Contest</strong> (I2C) 2022 adalah sebuah kompetisi ide kreatif untuk merancang aplikasi yang inovatif secara berkelompok beranggotakan 3 orang. I2C 2022 ini mengusung tema "A Journey To Better Home Living".
                  </p>
                </div>
                <div className="pl-[1rem]">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.0, duration: 0.25 }}
                    className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb]">
                    <Link to="/i2c">Read More</Link >
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex flex-col justify-center items-center h-screen w-screen">
            <img className="w-72" src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png" alt="i2c" />
            <div className="text-center">
              <div className="font-retroica text-4xl text-white">I2C</div>
              <div className="font-retroica text-2xl text-white pb-[1rem]">Innovative Informatics Contest</div>
            </div>
            <div className="flex gap-4 font-retroica text-sm text-white">
              <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                  <FaWallet />
                  Gratis
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                  <FaBook />
                  SMA/Sederajat
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                  <FaMale />
                  Max. 3 orang
                </div>
              </div>
            </div>
            <div className="pt-2"></div>
            <div className="p-4 font-retroica text-white">
              <p className="text-justify">
                <strong>Innovative Informatics Contest</strong> (I2C) 2022 adalah sebuah kompetisi ide kreatif untuk merancang aplikasi yang inovatif secara berkelompok beranggotakan 3 orang. I2C 2022 ini mengusung tema "A Journey To Better Home Living".
              </p>
            </div>
            <div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.0, duration: 0.25 }}
                className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb]">
                <Link to="/i2c">Read More</Link >
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* WDC Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-[#2b2265] h-screen w-screen"
        >
          <div className="hidden lg:flex flex-col justify-center items-center h-screen w-screen">
            <div className="flex justify-center items-center">
              <img
                className="w-[600px]"
                src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png"
                alt="wdc"
              />
              <div className="flex flex-col">
                <div className="font-retroica text-4xl text-white pl-[1rem]">
                  WDC
                </div>
                <div className="font-retroica text-2xl text-white pl-[1rem] pb-[0.5rem]">
                  Web Design Competition
                </div>
                <div className="flex gap-4 font-retroica text-sm text-white pl-[1rem]">
                  <div className="bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1 rounded-full">
                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                      <FaWallet />
                      Rp. 50.000
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1 rounded-full">
                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                      <FaBook />
                      Mahasiswa
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1 rounded-full">
                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                      <FaMale />
                      Max. 2 orang
                    </div>
                  </div>
                </div>
                <div className="p-4 font-retroica text-white w-[32em]">
                  <p className="text-justify">
                    <strong>Web Design Competition</strong> (WDC) 2022 adalah
                    perlombaan merancang desain visual yang ditampilkan di
                    media digital yaitu situs web. WDC 2022 mengangkat tema
                    "Advancing Together With Credible Information".
                  </p>
                </div>
                <div className="pl-[1rem]">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.0, duration: 0.25 }}
                    className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af]"
                  >
                    <Link to="/wdc">Read More</Link>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex flex-col justify-center items-center h-screen w-screen">
            <img
              className="w-72"
              src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png"
              alt="wdc"
            />
            <div className="text-center">
              <div className="font-retroica text-4xl text-white">WDC</div>
              <div className="font-retroica text-2xl text-white pb-[1rem]">
                Web Design Competition
              </div>
            </div>
            <div className="flex gap-4 font-retroica text-sm text-white">
              <div className="bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1 rounded-full">
                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                  <FaWallet />
                  Rp. 50.000
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1 rounded-full">
                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                  <FaBook />
                  Mahasiswa
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1 rounded-full">
                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                  <FaMale />
                  Max. 2 orang
                </div>
              </div>
            </div>
            <div className="pt-2"></div>
            <div className="p-4 font-retroica text-white">
              <p className="text-justify">
                <strong>Web Design Competition</strong> (WDC) 2022 adalah
                perlombaan merancang desain visual yang ditampilkan di media
                digital yaitu situs web. WDC 2022 mengangkat tema "Advancing
                Together With Credible Information".
              </p>
            </div>
            <div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.0, duration: 0.25 }}
                className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af]"
              >
                <Link to="/wdc">Read More</Link>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Hackathon Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-[#2b2265] h-screen w-screen"
        >
          <div className="hidden lg:flex flex-col justify-center items-center h-screen w-screen">
            <div className="flex justify-center items-center">
              <img
                className="w-[600px]"
                src="https://ifest.uajy.ac.id/assets/images/event/ill-cp.png"
                alt="cp"
              />
              <div className="flex flex-col">
                <div className="font-retroica text-4xl text-white pl-[1rem]">
                  CP
                </div>
                <div className="font-retroica text-2xl text-white pl-[1rem] pb-[0.5rem]">
                  Competitive Programming
                </div>
                <div className="flex gap-4 font-retroica text-sm text-white pl-[1rem]">
                  <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                      <FaWallet />
                      Rp. 50.000
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                      <FaBook />
                      Mahasiswa
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                      <FaMale />
                      Max. 3 orang
                    </div>
                  </div>
                </div>
                <div className="p-4 font-retroica text-white w-[32em]">
                  <p className="text-justify">
                    <strong>Competitive Programming</strong> (CP) merupakan
                    suatu perlombaan yang terfokus terhadap pemecahan masalah
                    atau algoritma matematika. Competitive Programming 2022
                    mengangkat tema "Programming Breaks Through The
                    Limitations of Life.
                  </p>
                </div>
                <div className="pl-[1rem]">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.0, duration: 0.25 }}
                    className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#fe8064] bg-[#feb783]"
                  >
                    <Link to="/hackathon">Read More</Link>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden flex flex-col justify-center items-center h-screen w-screen">
            <img
              className="w-72"
              src="https://ifest.uajy.ac.id/assets/images/event/ill-cp.png"
              alt="cp"
            />
            <div className="text-center">
              <div className="font-retroica text-4xl text-white">CP</div>
              <div className="font-retroica text-2xl text-white pb-[1rem]">
                Competitive Programming
              </div>
            </div>
            <div className="flex gap-4 font-retroica text-sm text-white">
              <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                  <FaWallet />
                  Rp. 50.000
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                  <FaBook />
                  Mahasiswa
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                  <FaMale />
                  Max. 3 orang
                </div>
              </div>
            </div>
            <div className="pt-2"></div>
            <div className="p-4 font-retroica text-white">
              <p className="text-justify">
                <strong>Competitive Programming</strong> (CP) merupakan suatu
                perlombaan yang terfokus terhadap pemecahan masalah atau
                algoritma matematika. Competitive Programming 2022 mengangkat
                tema "Programming Breaks Through The Limitations of Life.
              </p>
            </div>
            <div>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.0, duration: 0.25 }}
                className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#fe8064] bg-[#feb783]"
              >
                <Link to="/hackathon">Read More</Link>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Publication */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-[#2b2265] h-screen"
        >
          <div className="flex flex-col gap-10 justify-center items-center h-screen w-screen">
            <div className="font-retroica text-4xl text-white">Publikasi</div>
            <div>
              <Swiper
                effect={"coverflow"}
                navigation
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
              >
                {publications.map((publication) => {
                  return (
                    <SwiperSlide className="w-[19rem] h-[31rem]">
                      <div className="text-center flex gap-2 flex-col h-full items-center justify-center bg-[#352A7C]">
                        <img className="w-64" src={publication.img} alt="/" />
                        <div className="font-retroica text-[#ffffff]">{publication.author}</div>
                        <div className="font-retroica text-xl text-[#9C8DFC]">{publication.title}</div>
                        <div className="font-retroica text-[#7364D2]">{publication.date}</div>
                        <button className="font-retroica text-[#9C8DFC] pt-4">Find out more</button>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-[#2b2265] h-screen"
        >

          <div className="flex flex-col lg:flex-row justify-center">
            <div className="flex justify-center lg:justify-center bg-pur lg:w-1/2">
              <div >
                <div className="w-full p-4 bg-pur" >

                  <div className="shadow-lg p-3 bg-light-pur">
                    <AccordionContainer></AccordionContainer>
                  </div>
                </div>


              </div>
            </div>


          </div>
        </motion.div>

        {/* Sponsors & Media Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-[#2b2265] h-screen"
        >
          <div className="flex flex-col gap-6 justify-center items-center h-screen w-screen">
            <div className="font-retroica text-4xl text-white">Sponsors</div>
            <div className="h-64 w-64 lg:hidden">
              <Carousel leftControl=" " rightControl=" " indicators={false}>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img
                    src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/jagoanh-gold.png"
                    alt="jagoan-hosting"
                  />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img
                    src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/ajaib-silver.jpg"
                    alt="ajaib-silver"
                  />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img
                    src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/devcode-color-silver.png"
                    alt="dev-code"
                  />
                </div>
              </Carousel>
            </div>

            <div className="hidden lg:flex">
              <Swiper
                effect={"coverflow"}
                navigation
                grabCursor={false}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: -50,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false
                }}

                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="p-2 bg-[#352a7c] h-[19rem] w-[19rem] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/jagoanh-gold.png" alt="jagoan-hosting" />
                </SwiperSlide>
                <SwiperSlide className="p-2 bg-[#352a7c] h-[19rem] w-[19rem] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/ajaib-silver.jpg" alt="ajaib-silver" />
                </SwiperSlide>
                <SwiperSlide className="p-2 bg-[#352a7c] h-[19rem] w-[19rem] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/devcode-color-silver.png" alt="dev-code" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="pl-[1rem]">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.0, duration: 0.25 }}
                className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb]">
                <Link to="/sponsor">Become our sponsor</Link >
              </motion.button>
            </div>
          </div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-[#2b2265] h-screen"
        >
          <div className="flex flex-col gap-6 justify-center items-center h-screen w-screen">
            <div className="font-retroica text-4xl text-white">Media Partners</div>
            <div className="h-64 w-64 lg:hidden">
              <Carousel
                leftControl=" "
                rightControl=" "
                indicators={false}
              >
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventlombaindo-medpart.png" alt="/" />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/bncc-medpart.png" alt="/" />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventdetect-medpart.png" alt="/" />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventhunterid-medpart.png" alt="/" />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/gudanglombaind-medpart.jpg" alt="/" />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/infomahasiswa-medpart.png" alt="/" />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/infolombaeventid-medpart.png" alt="/" />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/beritalomba-medpart.png" alt="/" />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/madingeventgelap-medpart.png" alt="/" />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/edaranevent-medpart.png" alt="/" />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/lombasma2-medpart.png" alt="/" />
                </div>
                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/webinargratis-medpart.png" alt="/" />
                </div>
              </Carousel>
            </div>
            <div className="hidden lg:flex lg:w-[60rem] lg:h-[30rem]">
              <Swiper
                slidesPerView={4}
                grid={{
                  rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventlombaindo-medpart.png" alt="/" />
                </SwiperSlide>
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/bncc-medpart.png" alt="/" />
                </SwiperSlide>
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventdetect-medpart.png" alt="/" />
                </SwiperSlide>
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventhunterid-medpart.png" alt="/" />
                </SwiperSlide>
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/gudanglombaind-medpart.jpg" alt="/" />
                </SwiperSlide>
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/infomahasiswa-medpart.png" alt="/" />
                </SwiperSlide>
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/infolombaeventid-medpart.png" alt="/" />
                </SwiperSlide>
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/beritalomba-medpart.png" alt="/" />
                </SwiperSlide>
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/madingeventgelap-medpart.png" alt="/" />
                </SwiperSlide>
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/edaranevent-medpart.png" alt="/" />
                </SwiperSlide>
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center">
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/lombasma2-medpart.png" alt="/" />
                </SwiperSlide>
                <SwiperSlide className="h-[12rem] w-[12rem] p-2 bg-[#352a7c] flex items-center" >
                  <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/webinargratis-medpart.png" alt="/" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </motion.div>

        {/* CP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-[#2b2265]"
        >
          <div className="flex flex-col gap-0 justify-center items-center w-screen">
            <div className="font-retroica text-4xl text-white">
              Contact Us
            </div>
            <div className="font-retroica text-base text-white">
              Ada pertanyaan? Silakan ajukan ^_^
            </div>
            <div className="hidden lg:flex gap-8 pt-8">
              <div className="text-white text-center flex justify-center">
                <table className="table-cell border-separate border-[6px] border-[#ba87fb] rounded-xl p-2">
                  <thead>
                    <tr>
                      <th className="border-b-[6px] border-[#ba87fb]">I2C</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>0822 2555 3400</div>
                        <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                          <FaWhatsapp />
                          Lala
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>0852 1024 5177</div>
                        <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                          <FaWhatsapp />
                          Kevin
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-white text-center flex justify-center">
                <table className="table-cell border-separate border-[6px] border-[#9DCE6D] rounded-xl p-2">
                  <thead>
                    <tr>
                      <th className="border-b-[6px] border-[#9DCE6D]">WDC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>0812 3470 303</div>
                        <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                          <FaWhatsapp />
                          Andreas
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>0821 7237 5366</div>
                        <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                          <FaWhatsapp />
                          Wahyu
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-white text-center flex justify-center">
                <table className="table-cell border-separate border-[6px] border-[#ff8064] rounded-xl p-2">
                  <thead>
                    <tr>
                      <th className="border-b-[6px] border-[#ff8064]">CP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>0895 3695 59006</div>
                        <button className="bg-gradient-to-br from-[#fe8064] bg-[#feb783] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                          <FaWhatsapp />
                          Joshua
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>0856 0011 9070</div>
                        <button className="bg-gradient-to-br from-[#fe8064] bg-[#feb783] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                          <FaWhatsapp />
                          Dewi
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-white text-center flex justify-center">
                <table className="table-cell border-separate border-[6px] border-[#926DAE] rounded-xl p-2">
                  <thead>
                    <tr>
                      <th className="border-b-[6px] border-[#926DAE]">
                        Sponsor
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>0882 1609 9529</div>
                        <button className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                          <FaWhatsapp />
                          Tessa
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>0895 6221 76067</div>
                        <button className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                          <FaWhatsapp />
                          Rinn
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="h-56 w-64 lg:hidden">
              <Carousel leftControl=" " rightControl=" " indicators={false}>
                <div className="text-white text-center flex justify-center">
                  <table className="table-cell border-separate border-[6px] border-[#ba87fb] rounded-xl p-2">
                    <thead>
                      <tr>
                        <th className="border-b-[6px] border-[#ba87fb]">
                          I2C
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>0822 2555 3400</div>
                          <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                            <FaWhatsapp />
                            Lala
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>0852 1024 5177</div>
                          <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                            <FaWhatsapp />
                            Kevin
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-white text-center flex justify-center">
                  <table className="table-cell border-separate border-[6px] border-[#9DCE6D] rounded-xl p-2">
                    <thead>
                      <tr>
                        <th className="border-b-[6px] border-[#9DCE6D]">
                          WDC
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>0812 3470 303</div>
                          <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                            <FaWhatsapp />
                            Andreas
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>0821 7237 5366</div>
                          <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                            <FaWhatsapp />
                            Wahyu
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-white text-center flex justify-center">
                  <table className="table-cell border-separate border-[6px] border-[#ff8064] rounded-xl p-2">
                    <thead>
                      <tr>
                        <th className="border-b-[6px] border-[#ff8064]">
                          CP
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>0895 3695 59006</div>
                          <button className="bg-gradient-to-br from-[#fe8064] bg-[#feb783] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                            <FaWhatsapp />
                            Joshua
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>0856 0011 9070</div>
                          <button className="bg-gradient-to-br from-[#fe8064] bg-[#feb783] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                            <FaWhatsapp />
                            Dewi
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-white text-center flex justify-center">
                  <table className="table-cell border-separate border-[6px] border-[#926DAE] rounded-xl p-2">
                    <thead>
                      <tr>
                        <th className="border-b-[6px] border-[#926DAE]">
                          Sponsor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>0882 1609 9529</div>
                          <button className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                            <FaWhatsapp />
                            Tessa
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>0895 6221 76067</div>
                          <button className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                            <FaWhatsapp />
                            Rinn
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Carousel>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Footer
            className={"bg-gradient-to-b from-[#2b2265] to-[#0E0538] p-4"}
          />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;
