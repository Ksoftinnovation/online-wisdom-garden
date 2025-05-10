
import { Button } from "@/components/ui/button";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2023",
    instructor: "Sarah Johnson",
    instructorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    level: "Beginner",
    duration: "48 hours",
    rating: 4.9,
    reviews: 2453,
    price: 94.99,
    discountPrice: 12.99,
    category: "Development",
  },
  {
    id: 2,
    title: "UI/UX Design Principles and Practice",
    instructor: "Michael Rodriguez",
    instructorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
    level: "Intermediate",
    duration: "32 hours",
    rating: 4.8,
    reviews: 1278,
    price: 89.99,
    discountPrice: 10.99,
    category: "Design",
  },
  {
    id: 3,
    title: "Data Science and Machine Learning Masterclass",
    instructor: "Emily Chen",
    instructorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    level: "Advanced",
    duration: "56 hours",
    rating: 4.7,
    reviews: 982,
    price: 129.99,
    discountPrice: 16.99,
    category: "Data Science",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy and Implementation",
    instructor: "James Wilson",
    instructorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    level: "Intermediate",
    duration: "36 hours",
    rating: 4.6,
    reviews: 756,
    price: 84.99,
    discountPrice: 11.99,
    category: "Marketing",
  },
];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="heading-gradient">Courses</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular courses handpicked by experts to help you achieve your learning goals and advance your career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-edu-primary hover:bg-edu-primary/90">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
