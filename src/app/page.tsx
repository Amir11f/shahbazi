import BlackResumeBox from "@/components/BlackResumeBox";
import ContactUsNavbar from "@/components/ContactUsNavbar";
import CoWorder from "@/components/CoWorder";
import Footer from "@/components/Footer";
import JoinOurNewsletter from "@/components/JoinOurNewsletter";
import MahziarIntroduction from "@/components/MahziarIntroduction";
import MostPopularServices from "@/components/MostPopularServices";
import MostSellingItems from "@/components/MostSellingItems";
import Navbar from "@/components/Navbar";
import NewestVideos from "@/components/NewestVideos";

export default function Home() {
  return (
    <>
      <ContactUsNavbar />
      <Navbar />
      <MahziarIntroduction />
      <MostPopularServices />
      <BlackResumeBox />
      <MostSellingItems />
      <CoWorder />
      <NewestVideos />
      <JoinOurNewsletter />
      <Footer />
    </>
  );
}
