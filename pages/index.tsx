import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@components/components/UI/NavBar";
import About from "../components/Layout/About";
import Profession from "@components/components/Layout/Profession";
import Services from "@components/components/Layout/Services";
import Appointment from "@components/components/Layout/Contact";
import Footer from "@components/components/UI/Footer";
import Products from "@components/components/Layout/Products";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mara Glamz</title>
        <meta name="make-up" content="Mara-Glamz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <About />
        <Profession />
        <Services />
        <Appointment />
        <Products />
        <Footer />
      </main>
    </>
  );
}
