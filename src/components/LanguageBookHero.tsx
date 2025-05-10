
import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const LanguageBookHero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-purple-100 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="container relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <BookOpen size={16} className="text-edu-primary" />
              <span className="text-sm font-medium">Bilingual Learning Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              English-Tamil <span className="heading-gradient">Dictionary</span> & Translations
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Master both languages with our comprehensive dictionary and translation resources. Perfect for language learners at all levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-edu-primary hover:bg-edu-primary/90 text-white px-8">
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-edu-primary text-edu-primary hover:bg-edu-primary/5">
                Browse Categories
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-edu-primary" />
                <span className="font-medium">5000+ Words</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-edu-primary" />
                <span className="font-medium">Detailed Translations</span>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in hidden md:block">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 p-6 border-b">
                <h3 className="font-bold text-3xl text-green-800">ENGLISH DICTION</h3>
                <p className="text-green-700 font-medium mt-2">உச்சரிக்கும் முறையுடனும் கருத்துடனும்</p>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xl">Animal</span>
                    <span className="text-gray-500">(n)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-lg text-gray-700">விலங்கு</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Lion (n)</span>
                    <span className="text-gray-700">சிங்கம்</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tiger (n)</span>
                    <span className="text-gray-700">புலி</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Elephant (n)</span>
                    <span className="text-gray-700">யானை</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">5000+</span>
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

export default LanguageBookHero;
