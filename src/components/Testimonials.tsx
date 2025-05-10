
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=120&q=80",
    content: "The Web Development course completely transformed my career. The curriculum was comprehensive and the instructor was incredibly supportive. I landed a job as a frontend developer just two months after completing the course!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jessica Lee",
    role: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
    content: "The UI/UX Design course provided me with practical skills I could immediately apply to my projects. The instructor's feedback was invaluable and helped me improve my design process significantly.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Clark",
    role: "Data Analyst",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
    content: "I had zero background in data science before taking this course, but the step-by-step approach made complex concepts accessible. Now I'm working with machine learning models on a daily basis!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-edu-accent/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="heading-gradient">Students Say</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students about how our courses have helped them achieve their learning goals and advance their careers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
