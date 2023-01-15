import { Carousel } from "flowbite-react";
import { FC, useEffect } from "react";
import { FaLine, FaWhatsapp } from "react-icons/all";
import "react-vertical-timeline-component/style.min.css";
import { Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "./Sponsor.css";

const Sponsor: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="absolute top-0 -z-10 w-screen bg-[#0A1828] pt-32">
        <div className="flex w-screen flex-col items-center justify-center">
          <div className="font-louisgeorgecafe text-4xl text-white">IFEST#11 SPONSORSHIP</div>
          <div className="pt-6 text-center font-louisgeorgecafe text-xl text-white">
            Tertarik dengan acara kami? Dukung kami dengan menjadi sponsor!
          </div>
          <div className="p-2" />
          <div className="w-full px-4">
            <Swiper
              autoplay={{ delay: 2000 }}
              effect="coverflow"
              grabCursor={false}
              centeredSlides
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[Autoplay, EffectCoverflow]}
              className="mySwiper"
            >
              <SwiperSlide
                className="my-8 h-[30rem] w-[20rem] rounded-xl"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="flex h-full flex-col items-center justify-start gap-2 text-center ">
                  <img
                    className="w-32"
                    src="images/icon-spons-kaisar.png"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="text-center font-louisgeorgecafe font-bold text-[#ffffffdd]">
                    Sponsor Kaisar
                  </div>
                  <div className="font-retroica text-2xl text-[#ff69b4]">
                    <span className="font-louisgeorgecafe text-sm">Rp</span>6.000.000
                  </div>
                  <div className="overflow-x-auto text-left font-louisgeorgecafe text-[#c5c5c5]">
                    <ul className="list-inside list-disc">
                      <li>
                        Penempatan logo pada website IFest #11 dengan ukuran setara dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman link website atau akun sosial media pada website IFest #11.
                      </li>
                      <li>
                        Pencantuman logo pada poster pada seluruh event IFest #11 dengan ukuran
                        setara dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada cocard dengan ukuran setara dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada spanduk dengan ukuran setara dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada backdrop panggung dengan ukuran setara dengan pihak
                        penyelenggara.
                      </li>
                      <li>Pencantuman logo di photobooth.</li>
                      <li>Pencantuman logo pada after movie IFest #11.</li>
                      <li>
                        Pencantuman logo pada backdrop panggung dengan ukuran setara dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada sertifikat pada seluruh event IFest #11 dengan ukuran
                        setara dengan pihak penyelenggara.
                      </li>
                      <li>
                        Paid promote pada seluruh akun Instagram panitia IFest #11 dengan ketentuan
                        yang ditetapkan pada MOU.
                      </li>
                      <li>
                        Iklan adlibs oleh MC saat acara berlangsung pada semua event IFest #11
                        dengan materi iklan disediakan oleh pihak sponsor.
                      </li>
                      <li>
                        Penayangan Iklan dalam bentuk video dan atau gambar saat break (istirahat)
                        acara pada semua event IFest #11 dengan durasi yang ditetapkan pada MOU.
                      </li>
                      <li>
                        Mendapatkan tempat untuk mengadakan stand secara mandiri dalam rangka ajang
                        promosi di Innovative Informatics Contest dan Web Design Competition.
                      </li>
                      <li>Spesial di Hackathon/ Seminar Nasional.</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                    <button className="flex items-center gap-1 rounded-md bg-[#0A1828] px-4 py-1 font-retroica text-white transition hover:bg-transparent">
                      <a
                        href="https://wa.me/628993694969?text=Halo%20Admin%20Sponsor%20IFest%2311%2C%20kami%20dari%20%28Nama%20perusahaan%20%2F%20organisasi%29%20ingin%20menjadi%20sponsor%20pada%20acara%20IFest%2311.%20Paket%20sponsor%20yang%20kami%20pilih%20adalah%20%22Paket%20Kaisar%22.%0ABerikut%20kami%20sertakan%20MoU%20sebagai%20bentuk%20kerjasama%20kami%20dengan%20pihak%20panitia%20IFest%2311%2C%20atas%20kerjasamanya%20kami%20ucapkan%20terima%20kasih."
                        target="_blank"
                        rel="noreferrer"
                      >
                        order
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="my-8 h-[30rem] w-[20rem] rounded-xl"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="flex h-full flex-col items-center justify-start gap-2 text-center ">
                  <img
                    className="w-32"
                    src="images/icon-spons-raja.png"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="text-center font-louisgeorgecafe font-bold text-[#ffffffdd]">
                    Sponsor Raja
                  </div>
                  <div className="font-retroica text-2xl text-[#ff69b4]">
                    <span className="font-louisgeorgecafe text-sm">Rp</span>4.000.000
                  </div>
                  <div className="overflow-x-auto text-left font-louisgeorgecafe text-[#c5c5c5]">
                    <ul className="list-inside list-disc">
                      <li>
                        Penempatan logo pada website IFest #11 dengan ukuran setara dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman link website atau akun sosial media pada website IFest #11.
                      </li>
                      <li>
                        Pencantuman logo pada poster pada seluruh event IFest #11 dengan ukuran
                        setara dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada cocard dengan ukuran setara dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada spanduk dengan ukuran setara dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada backdrop panggung dengan ukuran setara dengan pihak
                        penyelenggara.
                      </li>
                      <li>Pencantuman logo di photobooth.</li>
                      <li>Pencantuman logo pada after movie IFest #11.</li>
                      <li>
                        Pencantuman logo pada backdrop panggung dengan ukuran setara dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada sertifikat pada seluruh event IFest #11 dengan ukuran
                        setara dengan pihak penyelenggara.
                      </li>
                      <li>
                        Paid promote pada seluruh akun Instagram panitia IFest #11 dengan ketentuan
                        yang ditetapkan pada MOU.
                      </li>
                      <li>
                        Iklan adlibs oleh MC saat acara berlangsung pada semua event IFest #11
                        dengan materi iklan disediakan oleh pihak sponsor.
                      </li>
                      <li>
                        Penayangan Iklan dalam bentuk video dan atau gambar saat break (istirahat)
                        acara pada semua event IFest #11 dengan durasi durasi yang ditetapkan pada
                        MOU.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                    <button className="flex items-center gap-1 rounded-md bg-[#0A1828] px-4 py-1 font-retroica text-white transition hover:bg-transparent">
                      <a
                        href="https://wa.me/628993694969?text=Halo%20Admin%20Sponsor%20IFest%2311%2C%20kami%20dari%20%28Nama%20perusahaan%20%2F%20organisasi%29%20ingin%20menjadi%20sponsor%20pada%20acara%20IFest%2311.%20Paket%20sponsor%20yang%20kami%20pilih%20adalah%20%22Paket%20Raja%22.%0ABerikut%20kami%20sertakan%20MoU%20sebagai%20bentuk%20kerjasama%20kami%20dengan%20pihak%20panitia%20IFest%2311%2C%20atas%20kerjasamanya%20kami%20ucapkan%20terima%20kasih."
                        target="_blank"
                        rel="noreferrer"
                      >
                        Order
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="my-8 h-[30rem] w-[20rem] rounded-xl"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="flex h-full flex-col items-center justify-start gap-2 text-center ">
                  <img
                    className="w-32"
                    src="images/icon-spons-sultan.png"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="text-center font-louisgeorgecafe font-bold text-[#ffffffdd]">
                    Sponsor Sultan
                  </div>
                  <div className="font-retroica text-2xl text-[#ff69b4]">
                    <span className="font-louisgeorgecafe text-sm">Rp</span>2.500.000
                  </div>
                  <div className="overflow-x-auto text-left font-louisgeorgecafe text-[#c5c5c5]">
                    <ul className="list-inside list-disc">
                      <li>
                        Penempatan logo pada website IFest #11 dengan ukuran 50% dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman link website atau akun sosial media pada website IFest #11.
                      </li>
                      <li>
                        Pencantuman logo pada poster pada seluruh event IFest #11 dengan ukuran 50%
                        dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada cocard dengan ukuran 50% dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada spanduk dengan ukuran 50% dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada backdrop panggung dengan ukuran 50% dengan pihak
                        penyelenggara.
                      </li>
                      <li>Pencantuman logo pada after movie IFest #11.</li>
                      <li>
                        Pencantuman logo pada backdrop panggung dengan ukuran 50% dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada sertifikat pada seluruh event IFest #11 dengan ukuran
                        50% dengan pihak penyelenggara.
                      </li>
                      <li>
                        Iklan adlibs oleh MC saat acara berlangsung pada semua event IFest #11
                        dengan materi iklan disediakan oleh pihak sponsor.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                    <button className="flex items-center gap-1 rounded-md bg-[#0A1828] px-4 py-1 font-retroica text-white transition hover:bg-transparent">
                      <a
                        href="https://wa.me/628993694969?text=Halo%20Admin%20Sponsor%20IFest%2311%2C%20kami%20dari%20%28Nama%20perusahaan%20%2F%20organisasi%29%20ingin%20menjadi%20sponsor%20pada%20acara%20IFest%2311.%20Paket%20sponsor%20yang%20kami%20pilih%20adalah%20%22Paket%20Sultan%22.%0ABerikut%20kami%20sertakan%20MoU%20sebagai%20bentuk%20kerjasama%20kami%20dengan%20pihak%20panitia%20IFest%2311%2C%20atas%20kerjasamanya%20kami%20ucapkan%20terima%20kasih."
                        target="_blank"
                        rel="noreferrer"
                      >
                        Order
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="my-8 h-[30rem] w-[20rem] rounded-xl"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="flex h-full flex-col items-center justify-start gap-2 text-center ">
                  <img
                    className="w-32"
                    src="images/icon-spons-bos.png"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="text-center font-louisgeorgecafe font-bold text-[#ffffffdd]">
                    Sponsor Bos
                  </div>
                  <div className="font-retroica text-2xl text-[#ff69b4]">
                    <span className="font-louisgeorgecafe text-sm">Rp</span>1.500.000
                  </div>
                  <div className="overflow-x-auto text-left font-louisgeorgecafe text-[#c5c5c5]">
                    <ul className="list-inside list-disc">
                      <li>
                        Penempatan logo pada website IFest #11 dengan ukuran 25% dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman link website atau akun sosial media pada website IFest #11.
                      </li>
                      <li>
                        Pencantuman logo pada poster pada seluruh event IFest #11 dengan ukuran 25%
                        dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada cocard dengan ukuran 25% dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada spanduk dengan ukuran 25% dengan pihak penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada backdrop panggung dengan ukuran 25% dengan pihak
                        penyelenggara.
                      </li>
                      <li>Pencantuman logo pada after movie IFest #11.</li>
                      <li>
                        Pencantuman logo pada backdrop panggung dengan ukuran 25% dengan pihak
                        penyelenggara.
                      </li>
                      <li>
                        Pencantuman logo pada sertifikat pada seluruh event IFest #11 dengan ukuran
                        25% dengan pihak penyelenggara.
                      </li>
                      <li>
                        Promosi (penyebutan) nama pihak sponsor oleh MC saat acara berlangsung pada
                        semua event IFest #11 dengan ketentuan yang ditetapkan pada MOU .
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                    <button className="flex items-center gap-1 rounded-md bg-[#0A1828] px-4 py-1 font-retroica text-white transition hover:bg-transparent">
                      <a
                        href="https://wa.me/628993694969?text=Halo%20Admin%20Sponsor%20IFest%2311%2C%20kami%20dari%20%28Nama%20perusahaan%20%2F%20organisasi%29%20ingin%20menjadi%20sponsor%20pada%20acara%20IFest%2311.%20Paket%20sponsor%20yang%20kami%20pilih%20adalah%20%22Paket%20Bos%22.%0ABerikut%20kami%20sertakan%20MoU%20sebagai%20bentuk%20kerjasama%20kami%20dengan%20pihak%20panitia%20IFest%2311%2C%20atas%20kerjasamanya%20kami%20ucapkan%20terima%20kasih."
                        target="_blank"
                        rel="noreferrer"
                      >
                        Order
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="bg-[#0A1828]">
          <div className="flex w-screen flex-col items-center justify-center gap-2">
            <div className="font-retroica text-4xl text-white">Contact Us</div>
            <div className="font-retroica text-base text-white">
              Masih ada yang bingung? Yuk kontak kami.
            </div>
            <div className="h-64 w-64">
              <Carousel leftControl=" " rightControl=" " indicators={false}>
                <div className="flex justify-center text-center text-white">
                  <table className="table-cell border-separate rounded-xl border-[6px] border-[#926DAE] p-2">
                    <thead>
                      <tr>
                        <th className="border-b-[6px] border-[#926DAE]">Sponsor</th>
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
                                href="https://wa.me/628993694969 "
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaWhatsapp className="mr-2" />
                                +62 899-3694-969
                              </a>
                            </div>
                            <div className="flex items-center gap-1 font-louisgeorgecafe">
                              <FaLine />
                              metiu321
                            </div>
                          </div>
                          <button
                            className="mx-auto rounded-2xl  bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 font-louisgeorgecafe"
                            style={{ cursor: "default" }}
                          >
                            Matthew
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
                                href="https://wa.me/+628164258899"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaWhatsapp className="mr-2" />
                                +62 816-4258-899
                              </a>
                            </div>
                            <div className="flex items-center gap-1 font-louisgeorgecafe">
                              <FaLine />
                              axel.ckd
                            </div>
                          </div>
                          <button
                            className="mx-auto rounded-2xl  bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 font-louisgeorgecafe"
                            style={{ cursor: "default" }}
                          >
                            Axel
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        <Footer className="bg-[#0A1828] p-4" />
      </div>
    </Layout>
  );
};

export default Sponsor;
