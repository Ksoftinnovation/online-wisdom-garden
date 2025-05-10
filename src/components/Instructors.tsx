
import { Card, CardContent } from "@/components/ui/card";

const instructorsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Web Developer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    students: "15,200+",
    courses: 12,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    students: "8,900+",
    courses: 8,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Emily Chen",
    title: "Data Science Expert",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    students: "12,450+",
    courses: 10,
    rating: 4.7,
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Marketing Specialist",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
    students: "10,800+",
    courses: 9,
    rating: 4.6,
  },
];

const Instructors = () => {
  return (
    <section id="instructors" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our <span className="heading-gradient">Instructors</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts with years of experience in their respective fields who are passionate about sharing their knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructorsData.map((instructor) => (
            <Card key={instructor.id} className="overflow-hidden card-hover border-none shadow">
              <CardContent className="p-0">
                <div className="h-60 overflow-hidden">
                  <img 
                    src={instructor.avatar} 
                    alt={instructor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg">{instructor.name}</h3>
                  <p className="text-edu-primary text-sm mb-3">{instructor.title}</p>
                  <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-gray-800">{instructor.courses}</span>
                      <span>Courses</span>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-gray-800">{instructor.students}</span>
                      <span>Students</span>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="flex flex-col items-center">
                      <span className="font-bold text-gray-800">{instructor.rating}</span>
                      <span>Rating</span>
                    </div>
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

export default Instructors;
