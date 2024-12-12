"use client";

import Layout from "@/app/components/Layout";
import InquiryForm from "../components/InquiryForm";
import Services from "../components/Services";
import MainPage from "../components/Main";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <Layout>
      <section
        id="main"
        className="bg-white dark:bg-gray-900 h-screen flex items-center justify-center"
      >
        <MainPage />
      </section>
      <section
        id="services"
        className="bg-white h-screen flex items-center justify-center"
      >
        <Services />
      </section>
      <section
        id="contactus"
        className="bg-accent h-screen flex items-center justify-center"
      >
        <div className="flex flex-col lg:flex-row items-center max-w-screen-lg mx-auto px-4 w-full">
          <Contact />
          <InquiryForm />
        </div>
      </section>
    </Layout>
  );
}
