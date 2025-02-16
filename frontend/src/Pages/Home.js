import HeroSection from "../component/HeroSection";
import ProductCategory from "../component/ProductCategory";
import ProductSlider from "../component/ProductSlider";

const Home = () => {
 


  return (
    <div className="min-h-screen bg-[#fff] text-gray-900">
      <HeroSection />

      <ProductCategory />
      <ProductSlider />
      
    </div>
  );
};

export default Home;
