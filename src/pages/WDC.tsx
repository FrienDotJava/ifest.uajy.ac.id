import { Box, Modal, Typography } from "@mui/material";
import { Card, Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { Chrono } from "react-chrono";
import {
  FaBook,
  FaCertificate,
  FaLine,
  FaMale,
  FaMoneyBillWave,
  FaRegWindowClose,
  FaWallet,
  FaWhatsapp,
} from "react-icons/all";
import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";

import Footer from "../components/Footer";
import Layout from "../components/Layout";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  pt: 2,
};

const WDC: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [openPoster, setOpenPoster] = useState(false);
  const [openPDF, setOpenPDF] = useState(false);

  const openHandler = () => {
    setOpenPoster(true);
  };
  const openPDFHandler = () => {
    setOpenPDF(true);
  };

  const closeHandler = () => {
    setOpenPoster(false);
  };
  const closePDFHandler = () => {
    setOpenPDF(false);
  };

  const tahapEliminasi = [
    {
      title: "30 Januari - 8 Maret 2023",
      cardTitle: "Pendaftaran Online",
      cardDetailedText: "Dashboard IFest",
    },
    {
      title: "8 Maret 2023",
      cardTitle: "Batas Pengumpulan Karya",
      cardDetailedText: "Dashboard IFest",
    },
    {
      title: "17 Maret - 22 Maret 2023",
      cardTitle: "Seleksi/Penilaian",
      cardDetailedText: "Online",
    },
    {
      title: "23 Maret 2023",
      cardTitle: "Pengumuman 5 Karya Terbaik",
      cardDetailedText: "Instagram IFest #11",
    },
  ];
  const tahapFinal = [
    {
      title: "24 Maret 2023",
      cardTitle: "Technical Meeting",
      cardDetailedText: "Zoom",
    },
    {
      title: "31 Maret 2023",
      cardTitle: "Presentasi Finalis",
      cardDetailedText:
        "Auditorium Lt. 4 Kampus 3 Gedung Bonaventura Universitas Atma Jaya Yogyakarta",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="absolute top-0 -z-10 h-screen w-screen bg-gradient-to-t from-[#2C2E56] via-[#311D38] to-[#311D38]">
        <motion.div className="flex h-screen flex-col items-center justify-center">
          <div className="hidden h-screen w-screen flex-col items-center justify-center lg:flex">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-8">
                <img
                  className="w-[600px]"
                  src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png"
                  alt="wdc"
                />
                <div className="flex flex-col">
                  <div className="bg-gradient-to-r from-[#CDF9FF] to-[#F1D2FF] bg-clip-text pl-[1rem] pb-[0.5rem] font-retroica text-6xl text-transparent">
                    Web
                  </div>
                  <div className="bg-gradient-to-r from-[#F1D2FF] to-[#FFE5C6] bg-clip-text pl-[1rem] pb-[0.5rem] font-retroica text-6xl text-transparent">
                    Design
                  </div>
                  <div className="bg-gradient-to-r from-[#CDF9FF] to-[#FFE5C6] bg-clip-text pl-[1rem] pb-[0.5rem] font-retroica text-6xl text-transparent">
                    Competition
                  </div>
                  <div className="mt-8 flex gap-4 pl-[1rem] font-retroica text-sm text-white">
                    <div className="rounded-full bg-gradient-to-r from-[#C1ECD0] to-[#DBE6BA] p-1">
                      <div className="flex items-center gap-1 rounded-full bg-[#311D38] p-1 px-[0.5rem]">
                        <FaBook />
                        D3 / D4 / S1
                      </div>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-[#BED8FF] to-[#BAA2FF] p-1">
                      
                      <div className="flex items-center gap-1 rounded-full bg-[#311D38] p-1 px-[0.5rem]">
                        <FaWallet />
                        Rp. 50.000 / tim
                      </div>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-[#FFECBC] to-[#FDCCA8] p-1">
                      <div className="flex items-center gap-1 rounded-full bg-[#311D38] p-1 px-[0.5rem]">
                        <FaMale />
                        Max. 3 orang
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bottom-16">
                <motion.button
                  onClick={() => contentRef.current?.scrollIntoView({ behavior: "smooth" })}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 0.0, duration: 0.25 }}
                  className="mt-12 transition-transform hover:scale-125"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-10 w-10 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          <div className="flex h-screen w-screen flex-col items-center justify-center px-4 lg:hidden">
            <img
              className="w-72"
              src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png"
              alt="wdc"
              style={{ paddingTop: "6rem" }}
            />
            <div className="text-center">
              <div className="font-retroica text-4xl tracking-wide text-white">WDC</div>
              <div className="px-4 pb-[1rem] font-retroica text-2xl text-white">
                Web Design Competition
              </div>
            </div>
            <div className="m-auto flex flex-col gap-4 font-retroica text-sm text-white sm:text-xs lg:flex lg:items-center  ">
              <div className="rounded-full bg-gradient-to-r from-[#C1ECD0] to-[#DBE6BA] p-1">
                <div
                  className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#311D38] p-1 px-[0.35rem]"
                  style={{ padding: "1rem" }}
                >
                  <FaBook />
                  D3 / D4 / S1
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#C1ECD0] to-[#DBE6BA] p-1">
                <div
                  className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#311D38] p-1 px-[0.35rem]"
                  style={{ padding: "1rem" }}
                >
                  <FaWallet />
                  Rp. 50.000 / tim
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#C1ECD0] to-[#DBE6BA] p-1">
                <div
                  className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#311D38] p-1 px-[0.35rem]"
                  style={{ padding: "1rem" }}
                >
                  <FaMale />
                  Max. 3 orang
                </div>
              </div>
            </div>
            <div>
              <motion.button
                onClick={() => contentRef.current?.scrollIntoView({ behavior: "smooth" })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ delay: 0.0, duration: 0.25 }}
                className="mt-12 transition-transform hover:scale-125"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10 stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div
          ref={contentRef}
          className="bg-gradient-to-b from-[#2C2E56] via-[#311D38] to-[#2C2E56]"
        >
          <div className="flex flex-col items-center gap-2 pt-4 pl-4 pr-4">
            <div className="!border-gray-700 !bg-[#241f3d] pt-12 pb-12">
              <div className="flex flex-col items-center">
                <div className="font-retroica text-3xl font-thin tracking-wider text-white">
                  MORE ABOUT WDC
                </div>
                <div className="text-md my-4 w-screen px-8 text-justify font-louisgeorgecafe font-thin text-white lg:px-[10rem] lg:text-center">
                  <strong>Web Design Competition (WDC)</strong> adalah sebuah kompetisi di mana mahasiswa/i dalam sebuah tim yang terdiri dari maksimal
                  dua orang berlomba untuk membuat desain web sebaik mungkin agar dapat mempermudah setiap pengguna
                  web atau pencari informasi mendapatkan informasi yang jelas dan tepat. Web Design Competition (WDC)
                  2023 mengangkat tema <em>“Embrace the Future of Local Economy with Technology”</em> dengan harapan peserta akan mendesain
                  sebuah web yang akan mempromosikan dan menjual produk UMKM lokal di daerah mereka.
                </div>
              </div>
              <div className="margin-auto flex-col items-center justify-center gap-4 font-louisgeorgecafe md:flex md:flex-row md:justify-center ">
                <div className="rounded-full bg-[#6c6486] p-1">
                  <button
                    onClick={openHandler}
                    className="m-auto flex justify-center gap-1 rounded-full bg-[#332550] p-2 transition hover:bg-transparent lg:flex lg:items-center "
                    style={{ width: "100%" }}
                  >
                    <div className="text-white opacity-70">Lihat Poster</div>
                  </button>
                  <Modal
                    open={openPoster}
                    onClose={closeHandler}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style} className="h-screen overflow-auto">
                      <Typography
                        className="text-right"
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <button onClick={closeHandler}>
                          {" "}
                          <FaRegWindowClose />{" "}
                        </button>
                      </Typography>
                      <img
                        src="https://ifest.uajy.ac.id/assets/images/event/poster-i2c-ext.png"
                        alt=""
                      />
                    </Box>
                  </Modal>
                </div>
                <div className="my-2 rounded-full bg-gradient-to-br from-[#6EA5B1] to-[#9B68CE] p-1">
                  <button
                    className="m-auto flex items-center justify-center gap-1 rounded-full bg-[#332550] p-2 transition hover:bg-transparent lg:flex lg:items-center"
                    style={{ width: "100%" }}
                  >
                    <Link to="/dashboard">
                      <div className="text-white opacity-100">DAFTAR</div>
                    </Link>
                  </button>
                </div>
                <div className="rounded-full bg-[#6c6486] p-1">
                  <button
                    onClick={openPDFHandler}
                    className="m-auto flex justify-center gap-1 rounded-full bg-[#332550] p-2 transition hover:bg-transparent lg:flex lg:items-center"
                    style={{ width: "100%" }}
                  >
                    <div className="text-white opacity-70">Lihat Aturan</div>
                  </button>
                  <Modal
                    open={openPDF}
                    onClose={closePDFHandler}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style} className="h-screen overflow-auto">
                      <Typography
                        className="text-right"
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <button onClick={closePDFHandler}>
                          {" "}
                          <FaRegWindowClose />{" "}
                        </button>
                      </Typography>
                      <iframe
                        src="rulebook/rulebook-i2c.pdf"
                        style={{ width: "100%", height: "95%" }}
                        title="I2C Rulebook"
                      />
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>

            {/* Ketentuan */}
            <div className="flex flex-col justify-center gap-8 py-12">
              <div className="w-screen px-4 lg:w-[100%]">
                <Card className="!border-gray-700 !bg-[#2C2E56]">
                  <h3 className="pl-6 font-retroica text-2xl text-[#E99CCE]">Ketentuan Umum</h3>
                  <div className="p-6 font-louisgeorgecafe leading-loose text-white">
                    <ol className="list-outside list-decimal">
                      <li>Peserta adalah mahasiswa/i aktif jenjang <strong>D3/D4/S1</strong> dari perguruan tinggi 
                        di <strong>Daerah Istimewa Yogyakarta dan Jawa Tengah</strong>.
                      </li>
                      <li>
                        Peserta lomba adalah satu tim yang terdiri dari <strong>minimal 1 (satu) orang 
                        dan maksimal 2 (dua) orang</strong>.
                      </li>
                      <li>
                        Tim yang terdiri dari 2 (dua) orang peserta harus berasal dari 
                        institusi/perguruan tinggi yang sama.
                      </li>
                      <li>
                        Tidak diperkenankan ada peserta yang terdaftar dalam dua tim atau lebih yang berbeda.
                      </li>
                      <li>
                        Melakukan pendaftaran online melalui <a href="/dashboard" className="text-[#E99CCE] hover:font-bold"><u>link pendaftaran</u></a>, pendaftaran akan 
                        dibuka mulai dari <strong>Senin, 30 Januari 2023</strong> sampai dengan <strong>Rabu, 8 Maret 2023</strong>.
                      </li>
                      <li>
                        Melampirkan scan atau foto Kartu Tanda Mahasiswa serta 
                        bukti pembayaran pada formulir pendaftaran
                      </li>
                      <li>
                        Peserta yang sudah mendaftar tetapi tidak mengumpulkan hasil karya desain situs web setelah 
                        batas waktu yang ditentukan dianggap mengundurkan diri dari perlombaan.
                      </li>
                      <li>
                        Panitia berhak untuk mengeleminasi peserta yang tidak mematuhi ketentuan di atas.
                      </li>
                      <li>
                        Setiap peserta Web Design Competition (WDC) 2023 <strong>wajib</strong> membaca, 
                        memahami, dan mengikuti seluruh syarat dan ketentuan yang tercantum dalam rulebook.
                      </li>
                    </ol>
                  </div>
                </Card>
              </div>

              <div className="w-screen px-4 lg:w-[100%]">
                <Card className="!border-gray-700 !bg-[#2C2E56]">
                  <h3 className="pl-6 font-retroica text-2xl text-[#E99CCE]">Ketentuan Karya</h3>
                  <div className="p-6 font-louisgeorgecafe leading-loose text-white">
                    <ol className="list-outside list-decimal">
                      <li>Karya desain berupa situs web desktop.</li>
                      <li>Peserta dibebaskan menggunakan software apapun dalam pembuatan desain. </li>
                      <li>Hasil karya harus sesuai dengan tema WDC 2023.</li>
                      <li>
                        Web harus mengandung fungsi-fungsi esensial, jumlah halaman web maksimal 10 halaman.
                      </li>
                      <li>
                        Bahasa utama yang digunakan dalam pembuatan website adalah <strong>Bahasa Indonesia </strong>
                        dan <strong>diperbolehkan</strong> menggunakan istilah dalam bahasa asing.
                      </li>
                      <li>Peserta <strong>wajib</strong> menyertakan kode (code) desain web.</li>
                      <li>
                        Desain situs web <strong>dilarang</strong> mengandung 
                        unsur <strong>SARA, kekerasan, pornografi, dan melanggar UU yang berlaku</strong>.
                      </li>
                      <li>Desain situs web yang diperlombakan menjadi  hak panitia.</li>
                      <li>
                        Panitia WDC 2023 <strong>berhak</strong> mendiskualifikasi peserta jika diketahui Hak Atas Kekayaan Intelektualnya diragukan, 
                        sedang dalam sengketa, mengambil karya orang lain, atau mendapat klaim 
                        dari pihak lain.
                      </li>
                      <li>
                        Keputusan panitia <strong>bersifat mutlak</strong> dan tidak dapat diganggu gugat.
                      </li>
                      <li>
                        Ketentuan yang lebih lengkap silahkan lihat Rulebook WDC 2023.
                      </li>
                    </ol>
                  </div>
                </Card>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex w-full flex-col justify-center lg:w-[70%] lg:items-center">
              <div className="mx-auto mb-8 text-center font-retroica text-4xl text-[#E99CCE]">
                Timeline
              </div>
              <div className="w-fit rounded-xl bg-[#241f3d] pb-1">
                <div className="rounded-xl bg-[#7e608c] p-4 font-retroica text-white shadow-inner">
                  Tahap Eliminasi
                </div>
              </div>

              <span className="hidden lg:flex lg:w-full">
                <Chrono
                  items={tahapEliminasi}
                  mode="VERTICAL_ALTERNATING"
                  cardHeight={50}
                  hideControls
                  disableClickOnCircle
                  theme={{
                    primary: "#716B90",
                    secondary: "transparent",
                    cardBgColor: "#473350",
                    cardForeColor: "white",
                    titleColor: "white",
                    titleColorActive: "white",
                  }}
                />
              </span>
              <span className="flex lg:hidden">
                <Chrono
                  items={tahapEliminasi}
                  mode="VERTICAL"
                  cardHeight={50}
                  hideControls
                  disableClickOnCircle
                  fontSizes={{
                    title: "0.8rem",
                  }}
                  theme={{
                    primary: "#716B90",
                    secondary: "transparent",
                    cardBgColor: "#473350",
                    cardForeColor: "white",
                    titleColor: "white",
                    titleColorActive: "white",
                  }}
                />
              </span>

              <div className="w-fit rounded-xl bg-[#241f3d] pb-1">
                <div className="rounded-xl bg-[#7E608C] p-4 font-retroica text-white shadow-inner">
                  Tahap Final
                </div>
              </div>

              <span className="hidden lg:flex lg:w-full">
                <Chrono
                  items={tahapFinal}
                  mode="VERTICAL_ALTERNATING"
                  cardHeight={50}
                  hideControls
                  disableClickOnCircle
                  theme={{
                    primary: "#716B90",
                    secondary: "transparent",
                    cardBgColor: "#473350",
                    cardForeColor: "white",
                    titleColor: "white",
                    titleColorActive: "white",
                  }}
                />
              </span>
              <span className="flex lg:hidden">
                <Chrono
                  items={tahapFinal}
                  mode="VERTICAL"
                  cardHeight={50}
                  hideControls
                  disableClickOnCircle
                  fontSizes={{
                    title: "0.8rem",
                  }}
                  theme={{
                    primary: "#716B90",
                    secondary: "transparent",
                    cardBgColor: "#473350",
                    cardForeColor: "white",
                    titleColor: "white",
                    titleColorActive: "white",
                  }}
                />
              </span>
            </div>

            {/* Prize Pool */}
            <div className="flex w-screen flex-col items-center justify-center gap-4 pt-8">
              <div className="font-retroica text-4xl text-[#E99CCE]">Prize Pool</div>
              <div
                className="text-center font-retroica text-[#ffba57]"
                style={{ fontSize: "1.5rem" }}
              >
                {" "}
                <span className="font-louisgeorgecafe text-white">Total hadiah</span> Rp6.000.000
              </div>
              <div>
                <div className="hidden flex-row gap-8 pt-10 lg:flex">
                  <Card className="w-[30%] !border-gray-700 !bg-[rgb(60,42,78)] text-white transition duration-300 ease-in hover:scale-110 hover:!bg-[#ffe279] hover:text-[#311D38]">
                    <div className="">
                      <img
                        className="m-auto block w-52"
                        src="https://ifest.uajy.ac.id/assets/images/medal-1.png"
                        alt="/"
                      />
                    </div>
                    <div className="text-center font-retroica text-2xl">Juara I</div>
                    <div className="flex gap-3 font-retroica">
                      <FaMoneyBillWave /> Rp3.000.000
                    </div>
                    <div className="flex gap-3 font-retroica">
                      <FaCertificate /> Sertifikat Nasional
                    </div>
                  </Card>
                  <Card className="w-[30%] !border-gray-700 !bg-[rgb(60,42,78)] text-white transition duration-300 ease-in hover:scale-110 hover:!bg-[#cacaca] hover:text-[#311D38]">
                    <div className="">
                      <img
                        className="m-auto block w-52"
                        src="https://ifest.uajy.ac.id/assets/images/medal-2.png"
                        alt="/"
                      />
                    </div>
                    <div className="text-center font-retroica text-2xl">Juara II</div>
                    <div className="flex gap-3 font-retroica">
                      <FaMoneyBillWave /> Rp2.000.000
                    </div>
                    <div className="flex gap-3 font-retroica">
                      <FaCertificate /> Sertifikat Nasional
                    </div>
                  </Card>
                  <Card className="w-[30%] !border-gray-700 !bg-[rgb(60,42,78)] text-white transition duration-300 ease-in hover:scale-110 hover:!bg-[#ffe279] hover:text-[#311D38]">
                    <div className="">
                      <img
                        className="m-auto block w-52"
                        src="https://ifest.uajy.ac.id/assets/images/medal-3.png"
                        alt="/"
                      />
                    </div>
                    <div className="text-center font-retroica text-2xl">Juara III</div>
                    <div className="flex gap-3 font-retroica">
                      <FaMoneyBillWave /> Rp1.000.000
                    </div>
                    <div className="flex gap-3 font-retroica">
                      <FaCertificate /> Sertifikat Nasional
                    </div>
                  </Card>
                </div>
                <div className="flex flex-col gap-8 lg:hidden">
                  <Card
                    horizontal
                    className="!border-gray-700 !bg-[#ffe279] text-black transition duration-300 ease-in hover:scale-110 hover:bg-[#ffba57] hover:text-[#311D38] "
                  >
                    <div className="flex gap-4">
                      <div>
                        <img
                          className="m-auto block w-20 drop-shadow-lg"
                          src="https://ifest.uajy.ac.id/assets/images/medal-1.png"
                          alt="/"
                        />
                      </div>
                      <div>
                        <div className="font-retroica text-2xl">Juara I</div>
                        <div className="flex gap-3 font-retroica">
                          <FaMoneyBillWave /> Rp3.000.000
                        </div>
                        <div className="flex gap-3 font-retroica">
                          <FaCertificate /> Sertifikat Nasional
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card
                    horizontal
                    className="!border-gray-700 !bg-[#cacaca] text-black transition duration-300 ease-in hover:scale-110 hover:bg-[#9e9e9e] hover:text-[#241f3d]"
                  >
                    <div className="flex gap-4">
                      <div>
                        <div className="text-left font-retroica text-2xl">Juara II</div>
                        <div className="flex gap-3 font-retroica">
                          <FaMoneyBillWave /> Rp2.000.000
                        </div>
                        <div className="flex gap-3 font-retroica">
                          <FaCertificate /> Sertifikat Nasional
                        </div>
                      </div>
                      <div>
                        <img
                          className="m-auto block w-20"
                          src="https://ifest.uajy.ac.id/assets/images/medal-2.png"
                          alt="/"
                        />
                      </div>
                    </div>
                  </Card>
                  <Card
                    horizontal
                    className="!border-gray-700 !bg-[#ffb050] text-black transition duration-300 ease-in hover:scale-110 hover:bg-[#00B8B0] hover:text-[#241f3d]"
                  >
                    <div className="flex gap-4">
                      <div>
                        <div className="text-right font-retroica text-2xl">Juara III</div>
                        <div className="flex gap-3 font-retroica">
                          <FaMoneyBillWave /> Rp1.000.000
                        </div>
                        <div className="flex gap-3 font-retroica">
                          <FaCertificate /> Sertifikat Nasional
                        </div>
                      </div>
                      <div>
                        <img
                          className="m-auto block w-20"
                          src="https://ifest.uajy.ac.id/assets/images/medal-3.png"
                          alt="/"
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Call To Action */}
            <div className="my-12 flex w-screen flex-col items-center justify-center">
              <div className="w-[21rem] max-w-[100%] rounded-xl  border-gray-200 bg-gradient-to-l from-[#2D2A4E] to-[#37345d] p-8 lg:w-[60%]">
                <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:justify-start">
                  <img
                    className="w-32 lg:w-[30%]"
                    src="images/announce.svg"
                    style={{ width: "10rem", marginRight: "2rem" }}
                    alt=""
                  />
                  <div className="flex flex-col items-center  gap-4 lg:items-start">
                    <div className="font-retroica text-2xl text-[#9cb0e7] lg:text-3xl">
                      Tertarik? Ayo mendaftar!
                    </div>
                    <div className="text-center font-louisgeorgecafe text-white lg:text-left">
                      Ayo buktikan bakat dan kreativitasmu! Jangan cepat berpuas diri!
                    </div>
                    <div className="w-fit rounded-full bg-gradient-to-r from-[#6ea5b1] to-[#9b68ce] p-1">
                      <button className="flex items-center gap-1 rounded-full bg-[#332550] p-2 transition hover:bg-transparent">
                        <Link to="/dashboard">
                          <div className="font-retroica text-white opacity-100">DAFTAR</div>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-screen flex-col items-center justify-center gap-2">
              <div className="font-retron2000 text-5xl font-bold text-white">Contact Us</div>
              <div className="font-retroica text-base text-white">
                Masih ada yang bingung? Yuk kontak kami.
              </div>
              <div className="h-64 w-64">
                <Carousel leftControl=" " rightControl=" " indicators={false}>
                  <div className="flex justify-center text-center text-white">
                    <table className="table-cell border-separate rounded-xl border-[6px] border-[#9DCE6D] p-2">
                      <thead>
                        <tr>
                          <th className="border-b-[6px] border-[#9DCE6D]">WDC</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="flex flex-col items-center">
                              <div className="flex items-center gap-1 font-louisgeorgecafe">
                                <a
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  href="https://wa.me/6282151172630"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaWhatsapp className="mr-2" />
                                  +62 821-5117-2630
                                </a>
                              </div>
                              <div className="flex items-center gap-1 font-louisgeorgecafe">
                                <FaLine />
                                id_line
                              </div>
                            </div>
                            <button
                              className="mx-auto rounded-2xl bg-[#6ca0af] bg-gradient-to-br from-[#9DCE6D] px-2 font-louisgeorgecafe"
                              style={{ cursor: "default" }}
                            >
                              Pasha
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex flex-col items-center">
                              <div className="flex items-center gap-1 font-louisgeorgecafe">
                                <a
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  href="https://wa.me/628123470303"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <FaWhatsapp className="mr-2" />
                                  +62 812-3470-303
                                </a>
                              </div>
                              <div className="flex items-center gap-1 font-louisgeorgecafe">
                                <FaLine />
                                id_line
                              </div>
                            </div>
                            <button
                              className="mx-auto rounded-2xl bg-[#6ca0af] bg-gradient-to-br from-[#9DCE6D] px-2 font-louisgeorgecafe"
                              style={{ cursor: "default" }}
                            >
                              Ayas
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Carousel>
              </div>
            </div>

            <Footer className="bg-none p-4" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WDC;
