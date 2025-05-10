
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import Categories from "@/components/Categories";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <Categories />
      <Instructors />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
