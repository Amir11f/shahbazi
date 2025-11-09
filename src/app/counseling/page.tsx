import ContactUsNavbar from "@/components/ContactUsNavbar";
import CounselingIntroduction from "@/components/CounselingIntroduction";
import CounselingOnlineMeeting from "@/components/CounselingOnlineMeeting";
import CounsellingForm from "@/components/CounsellingForm";
import Footer from "@/components/Footer";
import JoinOurNewsletter from "@/components/JoinOurNewsletter";
import MostAskingQuestions from "@/components/MostAskingQuestions";
import Navbar from "@/components/Navbar";
import RoadMap from "@/components/RoadMap";
import React from "react";

export default function page() {
  return (
    <div>
      <ContactUsNavbar />
      <Navbar />
      <div className="mt-15 sm:mt-30">
        <CounselingIntroduction />
      </div>
      <div
        className="relative -top-25 sm:top-12
      "
      >
        <CounselingOnlineMeeting />
      </div>
      <div className="xl:mt-70">
        <RoadMap />
      </div>
      <div className="sm:mt-50">
        <CounsellingForm />
      </div>
      <div className="mt-15 sm:mt-34">
        <MostAskingQuestions />
      </div>
      <div className="mt-30 sm:mt-50">
        <JoinOurNewsletter />
      </div>
      <Footer />
    </div>
  );
}
