import ContactUsNavbar from "@/components/ContactUsNavbar";
import DoneProjectsScroll from "@/components/DoneProjectsScroll";
import ExploreSection from "@/components/ExploreSection";
import Footer from "@/components/Footer";
import InstagramLikeVideoPosts from "@/components/InstagramLikeVideoPosts";
import JoinOurNewsletter from "@/components/JoinOurNewsletter";
import Navbar from "@/components/Navbar";
import ProductsIntroduction from "@/components/ProductsIntroduction";
import ProductsSection from "@/components/ProductsSection";

export default function page() {
  return (
    <div>
      <ContactUsNavbar />
      <Navbar />
      <ProductsIntroduction />
      <ProductsSection />
      <ExploreSection />
      <DoneProjectsScroll />
      <InstagramLikeVideoPosts />
      <JoinOurNewsletter />
      <Footer />
    </div>
  );
}
