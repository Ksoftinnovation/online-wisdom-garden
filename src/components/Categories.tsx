
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Code, Database, LineChart, Palette, ShoppingCart } from "lucide-react";

const categoriesData = [
  {
    id: 1,
    title: "Web Development",
    courses: 125,
    icon: Code,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Data Science",
    courses: 98,
    icon: Database,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    title: "UI/UX Design",
    courses: 78,
    icon: Palette,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 4,
    title: "Business",
    courses: 120,
    icon: ShoppingCart,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 5,
    title: "Marketing",
    courses: 87,
    icon: LineChart,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 6,
    title: "Personal Development",
    courses: 65,
    icon: BookOpen,
    color: "bg-cyan-100 text-cyan-600",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse <span className="heading-gradient">Categories</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover courses across various fields and disciplines to find the perfect learning path for your interests and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoriesData.map((category) => (
            <Card key={category.id} className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon size={32} />
                </div>
                <h3 className="font-bold text-lg mb-1">{category.title}</h3>
                <p className="text-gray-500 text-sm">{category.courses} courses</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
