
import React, { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Volume2, VolumeX, Music } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";

// Sample animal names data from the uploaded images
const animalTranslations = [
  { id: 496, english: "Animal", tamil: "விலங்கு", pronunciation: "vilanggu" },
  { id: 497, english: "Cow", tamil: "பசு", pronunciation: "pasu" },
  { id: 500, english: "Buffalo", tamil: "எருமை", pronunciation: "erumai" },
  { id: 502, english: "Lion", tamil: "சிங்கம்", pronunciation: "singam" },
  { id: 503, english: "Lioness", tamil: "பெண்சிங்கம்", pronunciation: "pen-singam" },
  { id: 505, english: "Panda", tamil: "காடிப்பாண்டா", pronunciation: "kadi-panda" },
  { id: 506, english: "Horse", tamil: "குதிரை", pronunciation: "kudirai" },
  { id: 513, english: "Fox", tamil: "நரி", pronunciation: "nari" },
  { id: 515, english: "Pug", tamil: "குள்ளநரி", pronunciation: "kulla-nari" },
  { id: 522, english: "Tiger", tamil: "புலி", pronunciation: "puli" },
  { id: 524, english: "Cat", tamil: "பூனை", pronunciation: "poonai" },
  { id: 525, english: "Dog", tamil: "நாய்", pronunciation: "naai" },
  { id: 531, english: "Pig", tamil: "பன்றி", pronunciation: "pandri" },
  { id: 533, english: "Monkey", tamil: "குரங்கு", pronunciation: "kurangu" },
  { id: 534, english: "Donkey", tamil: "கழுதை", pronunciation: "kazhudai" },
  { id: 539, english: "Rabbit", tamil: "முயல்", pronunciation: "muyal" },
  { id: 540, english: "Elephant", tamil: "யானை", pronunciation: "yaanai" },
  { id: 541, english: "Bear", tamil: "கரடி", pronunciation: "karadi" },
  { id: 545, english: "Crocodile", tamil: "முதலை", pronunciation: "mudalai" },
  { id: 557, english: "Pet", tamil: "செல்லப்பிராணி", pronunciation: "sellappirani" },
  { id: 565, english: "Chameleon", tamil: "பச்சோந்தி", pronunciation: "pacchonthi" },
];

const TranslationContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  
  const categories = ["All", "Mammals", "Reptiles", "Birds", "Fish", "Insects"];
  
  const filteredAnimals = animalTranslations.filter(animal => 
    animal.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.tamil.includes(searchTerm.toLowerCase())
  );

  // Function to play audio with text-to-speech
  const playAudio = (text: string, language: string, animalId: number) => {
    // Cancel any ongoing speech synthesis
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    // Stop previous audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Set language code for speech synthesis
    const langCode = language === 'english' ? 'en-US' : 'ta-IN';
    
    // Use browser's text-to-speech API
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = text;
      speech.lang = langCode;
      speech.volume = 1;
      speech.rate = 0.9;
      speech.pitch = 1;
      
      setIsPlaying(animalId);
      
      speech.onend = () => {
        setIsPlaying(null);
      };
      
      speech.onerror = () => {
        setIsPlaying(null);
        toast({
          title: "Speech synthesis error",
          description: `Cannot play ${language} audio. Make sure your browser supports this language.`,
          variant: "destructive",
        });
      };
      
      window.speechSynthesis.speak(speech);
    } else {
      // If browser doesn't support speech synthesis
      toast({
        title: "Audio not supported",
        description: "Your browser does not support text-to-speech functionality.",
        variant: "destructive",
      });
    }
  };

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
                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon" className="mr-2">
                        <Volume2 size={18} className="text-purple-600" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-60">
                      <div className="space-y-2">
                        <h4 className="font-medium">Pronunciation Guide</h4>
                        <div className="text-sm text-gray-500">
                          <p>English: <span className="font-medium">{animal.english}</span></p>
                          <p>Tamil: <span className="font-medium">{animal.tamil}</span></p>
                          <p className="mt-2">Pronounced as: <span className="font-bold text-purple-600">{animal.pronunciation}</span></p>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-blue-500 hover:bg-blue-600" 
                            onClick={() => playAudio(animal.english, 'english', animal.id)}
                          >
                            {isPlaying === animal.id ? <VolumeX size={16} /> : <Volume2 size={16} />} English
                          </Button>
                          <Button 
                            size="sm" 
                            className="flex-1 bg-purple-500 hover:bg-purple-600" 
                            onClick={() => playAudio(animal.tamil, 'tamil', animal.id)}
                          >
                            {isPlaying === animal.id ? <VolumeX size={16} /> : <Volume2 size={16} />} Tamil
                          </Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <BookOpen size={18} className="text-purple-600" />
                  </div>
                  <div className="font-medium text-lg flex-1">{animal.tamil}</div>
                  <div className="flex items-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                            {animal.pronunciation}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>How to pronounce in English</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <div className="flex gap-1">
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-8 w-8 bg-blue-100 hover:bg-blue-200 text-blue-600" 
                        onClick={() => playAudio(animal.english, 'english', animal.id)}
                      >
                        <Music size={14} />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-8 w-8 bg-purple-100 hover:bg-purple-200 text-purple-600" 
                        onClick={() => playAudio(animal.tamil, 'tamil', animal.id)}
                      >
                        <Music size={14} />
                      </Button>
                    </div>
                  </div>
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
