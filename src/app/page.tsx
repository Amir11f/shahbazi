import BlackResumeBox from "@/components/BlackResumeBox";
import ContactUsNavbar from "@/components/ContactUsNavbar";
import CoWorder from "@/components/CoWorder";
import Footer from "@/components/Footer";
import IK10Projects from "@/components/IK10Projects";
import JoinOurNewsletter from "@/components/JoinOurNewsletter";
import MahziarIntroduction from "@/components/MahziarIntroduction";
import MostPopularServices from "@/components/MostPopularServices";
import MostSellingItems from "@/components/MostSellingItems";
import Navbar from "@/components/Navbar";
import NewestVideos from "@/components/NewestVideos";

export default function Home() {
  const items = [
    {
      // title: "Episode 1 – Intro",
      // subtitle: "Learning WaveSurfer",
      audioUrl: "/audios/light-rain-109591.mp3",
    },
    {
      // title: "Episode 2 – Hooks",
      // subtitle: "React hooks deep dive",
      audioUrl: "/audios/light-rain-109591.mp3",
    },
    {
      // title: "Episode 3 – Framer Motion",
      // subtitle: "Adding animations",
      audioUrl: "/audios/light-rain-109591.mp3",
    },
  ];
  return (
    <>
      <ContactUsNavbar />
      <Navbar />
      <MahziarIntroduction />
      <IK10Projects items={items} />
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
