
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BookOpen, Clock, Star } from "lucide-react";

interface CourseCardProps {
  id: number;
  title: string;
  instructor: string;
  instructorAvatar: string;
  image: string;
  level: string;
  duration: string;
  rating: number;
  reviews: number;
  price: number;
  discountPrice?: number;
  category: string;
}

const CourseCard = ({
  title,
  instructor,
  instructorAvatar,
  image,
  level,
  duration,
  rating,
  reviews,
  price,
  discountPrice,
  category
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <Badge className="absolute top-3 left-3 bg-edu-primary">{category}</Badge>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium">
            <Star size={12} className="fill-yellow-500 text-yellow-500 mr-1" />
            {rating} ({reviews} reviews)
          </span>
          <span className="text-xs text-gray-500">{level}</span>
        </div>
        <h3 className="font-bold text-lg line-clamp-2 hover:text-edu-primary transition-colors cursor-pointer">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 mb-3">
          <img 
            src={instructorAvatar} 
            alt={instructor} 
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-sm text-gray-600">{instructor}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 gap-4">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} />
            <span>12 Lessons</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex items-center justify-between">
        <div>
          {discountPrice ? (
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">${discountPrice}</span>
              <span className="text-gray-500 line-through text-sm">${price}</span>
            </div>
          ) : (
            <span className="font-bold text-lg">${price}</span>
          )}
        </div>
        <button className="text-edu-primary hover:text-edu-primary/90 font-medium text-sm">
          View Details
        </button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
