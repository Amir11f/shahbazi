import Footer from "@/components/Footer";
import JoinOurNewsletter from "@/components/JoinOurNewsletter";
import Navbar from "@/components/Navbar";
import ServicesProductSection from "@/components/ServicesProductSection";
import React from "react";
import InstagramLikeVideoPosts from "@/components/InstagramLikeVideoPosts";
import ExploreSection from "@/components/ExploreSection";
import CowWorker from "@/components/CoWorder";
import MostAskingQuestions from "@/components/MostAskingQuestions";
import CategoryServices from "@/components/CategoryServices";

export default function page() {
  return (
    <div>
      <Navbar />
      {/* <ServicesProductSection />
      <MostAskingQuestions />
      <CowWorker />
      <ExploreSection /> */}
      <CategoryServices />
      <InstagramLikeVideoPosts />
      <JoinOurNewsletter />
      <Footer />
    </div>
  );
}
