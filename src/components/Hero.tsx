
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-edu-accent/40 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1740')] bg-cover bg-center opacity-5"></div>
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <BookOpen size={16} className="text-edu-primary" />
              <span className="text-sm font-medium">Transform Your Future with Online Learning</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover the <span className="heading-gradient">Best Courses</span> for Your Career Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Learn from industry experts and gain valuable skills with our comprehensive online courses. Start your learning journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-edu-primary hover:bg-edu-primary/90 text-white px-8">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="border-edu-primary text-edu-primary hover:bg-edu-primary/5">
                View Categories
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="flex">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80')] bg-cover"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white -ml-2 bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80')] bg-cover"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white -ml-2 bg-[url('https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80')] bg-cover"></div>
              </div>
              <div>
                <span className="block text-sm font-medium">Trusted by</span>
                <span className="block font-semibold">50k+ Students</span>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in hidden md:block">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-edu-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-edu-secondary/20 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                alt="Student Learning" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <h3 className="font-bold text-xl">Web Development Bootcamp</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-8 h-8 rounded-full bg-[url('https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80')] bg-cover"></div>
                    <span>John Smith</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
