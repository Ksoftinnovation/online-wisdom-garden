
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen } from "lucide-react";

// Sample animal names data from the uploaded images
const animalTranslations = [
  { id: 496, english: "Animal", tamil: "விலங்கு" },
  { id: 497, english: "Cow", tamil: "பசு" },
  { id: 500, english: "Buffalo", tamil: "எருமை" },
  { id: 502, english: "Lion", tamil: "சிங்கம்" },
  { id: 503, english: "Lioness", tamil: "பெண்சிங்கம்" },
  { id: 505, english: "Panda", tamil: "காடிப்பாண்டா" },
  { id: 506, english: "Horse", tamil: "குதிரை" },
  { id: 513, english: "Fox", tamil: "நரி" },
  { id: 515, english: "Pug", tamil: "குள்ளநரி" },
  { id: 522, english: "Tiger", tamil: "புலி" },
  { id: 524, english: "Cat", tamil: "பூனை" },
  { id: 525, english: "Dog", tamil: "நாய்" },
  { id: 531, english: "Pig", tamil: "பன்றி" },
  { id: 533, english: "Monkey", tamil: "குரங்கு" },
  { id: 534, english: "Donkey", tamil: "கழுதை" },
  { id: 539, english: "Rabbit", tamil: "முயல்" },
  { id: 540, english: "Elephant", tamil: "யானை" },
  { id: 541, english: "Bear", tamil: "கரடி" },
  { id: 545, english: "Crocodile", tamil: "முதலை" },
  { id: 557, english: "Pet", tamil: "செல்லப்பிராணி" },
  { id: 565, english: "Chameleon", tamil: "பச்சோந்தி" },
];

const TranslationContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", "Mammals", "Reptiles", "Birds", "Fish", "Insects"];
  
  const filteredAnimals = animalTranslations.filter(animal => 
    animal.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.tamil.includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Animal <span className="heading-gradient">Names</span> Dictionary</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive English to Tamil translations of animal names to enhance your vocabulary.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={activeCategory === category ? "bg-edu-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              type="text" 
              placeholder="Search animals in English or Tamil..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAnimals.map((animal) => (
            <Card key={animal.id} className="overflow-hidden hover:shadow-md transition-shadow border-none shadow-sm">
              <CardContent className="p-0">
                <div className="flex items-center border-b">
                  <div className="p-4 bg-gray-50 text-gray-500 font-mono w-16 text-center border-r">
                    {animal.id}
                  </div>
                  <div className="p-4 font-medium flex-1">{animal.english} (n)</div>
                </div>
                <div className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <BookOpen size={18} className="text-purple-600" />
                  </div>
                  <div className="font-medium text-lg">{animal.tamil}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button size="lg" className="bg-edu-primary hover:bg-edu-primary/90">
            Load More Words
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TranslationContent;
