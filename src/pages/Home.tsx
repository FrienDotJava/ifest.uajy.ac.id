import { motion } from "framer-motion";
import { FC, useEffect } from "react";

import CP from "../components/CP";
import DonorDarahSection from "../components/DonorDarahSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import I2CSection from "../components/I2CSection";
import Layout from "../components/Layout";
import MUCSection from "../components/MUCSection";
import MediaPartner from "../components/MediaPartner";
import Publication from "../components/Publication";
import SemNasSection from "../components/SemNasSection";
// import HackathonSection from "../components/HackathonSection";
import ShootingStars from "../components/ShootingStars";
import Sponsor from "../components/Sponsor";
import WDCSection from "../components/WDCSection";

interface Props {
  Blog: {
    author: string;
    jabatan: string;
    judul: string;
    publication_date: string;
    konten: string;
    img: string;
    address: string;
  }[];
}

const Home: FC<Props> = ({ Blog }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="absolute top-0 -z-10 h-screen w-screen bg-[url('/images/bg-no-flip.png')] bg-cover bg-center bg-no-repeat">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <ShootingStars />
        </motion.div>

        <div className="overflow-x-hidden">
          <I2CSection />
          <WDCSection />
          <DonorDarahSection />
          <MUCSection />
          <SemNasSection />
          <Publication Blog={Blog} />
          <FAQ />
          <Sponsor />
          <MediaPartner />
          <CP />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Footer className="bg-gradient-to-b from-[#2b2265] to-[#0E0538] p-4" />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;
