import Head from "next/head";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";

const Home = () => {
  return (
    <>
      <Head>
        <title>OneRoof</title>
        <meta name="description" content="Finding your next home made easy!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col lg:flex-row justify-end min-h-screen">
        <section className="lg:fixed lg:left-0 flex flex-col justify-center lg:w-[35%] lg:h-screen mt-[50px] lg:mt-[0px] mb-[20px] lg:mb-[0px]">
          <Hero />
          <Socials />
        </section>
        <section className="bg-gradient-to-tr from-[#C2B9F2]/60 to-[#ACDFF2]/60 lg:w-[65%] flex flex-wrap justify-center items-center gap-6 py-10">
          <Card1 />
          <Card2 />
          <Card3 />
          <Card3 />
          <Card2 />
          <Card1 />
        </section>
      </main>
    </>
  );
};

export default Home;
