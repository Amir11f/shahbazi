import ContactUsNavbar from "@/components/ContactUsNavbar";
import Footer from "@/components/Footer";
import JoinOurNewsletter from "@/components/JoinOurNewsletter";
import KnowAboutHikVision from "@/components/KnowAboutHikVision";
import MostSellingItems from "@/components/MostSellingItems";
import Navbar from "@/components/Navbar";
import ProductBlackBox from "@/components/ProductBlackBox";
import ProductComponet from "@/components/ProductComponet";
import ProductForm from "@/components/ProductForm";
import ProductUserOpinion from "@/components/ProductUserOpinion";

export default async function Page({ params }: { params: { slug: number } }) {
  const { slug } = await params;

  return (
    <div>
      <ContactUsNavbar />
      <Navbar />
      <ProductComponet slug={slug} />
      <KnowAboutHikVision />
      <ProductBlackBox />
      <div className="relative -top-53 sm:top-80">
        <MostSellingItems />
      </div>
      <div className="flex flex-col sm:flex-col-reverse">
        <ProductForm />
        <ProductUserOpinion />
      </div>
      <div className="relative -top-20 sm:top-80 xl:top-130 ">
        <JoinOurNewsletter />
        <Footer />
      </div>
    </div>
  );
}
