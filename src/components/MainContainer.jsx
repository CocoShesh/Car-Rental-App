import React from "react";
import Header from "./header/Header";
import Hero from "./hero-container/Hero";
import BookingCar from "./Booking/BookingCar";
import Plan from "./plan-section/Plan";
import Pick from "./pick-section/Pick";
import Banner from "./banner/Banner";
import ChooseSection from "./Choose-section/ChooseSection";
import Testimonials from "./testimonials/Testimonials";
import FaqSection from "./FAQ/FaqSection";
import Download from "./downloadSection/Download";

function MainContainer() {
  return (
    <>
      <main className=" flex flex-col  w-full   items-center justify-center select-none ">
        <Header />
        <Hero />
        <BookingCar />
        <Plan />
        <Pick />
        <Banner />
        <ChooseSection />
        <Testimonials />
        <FaqSection />
        <Download />
      </main>
    </>
  );
}

export default MainContainer;
