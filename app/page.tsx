import Image from "next/image";
import getProjects from "../data/getProjects";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Footer />
    </>
  );
}
