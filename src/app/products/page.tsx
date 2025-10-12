import DoneProjectsScroll from "@/components/DoneProjectsScroll";
import ExploreSection from "@/components/ExploreSection";
import InstagramLikeVideoPosts from "@/components/InstagramLikeVideoPosts";
import ProductsIntroduction from "@/components/ProductsIntroduction";
import ProductsSection from "@/components/ProductsSection";

export default function page() {
  return (
    <div>
      <ProductsIntroduction />
      <ProductsSection />
      <ExploreSection />
      <DoneProjectsScroll />
      <InstagramLikeVideoPosts />
    </div>
  );
}
