
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageBookHero from "@/components/LanguageBookHero";
import TranslationContent from "@/components/TranslationContent";

const LanguageBook = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <LanguageBookHero />
      <TranslationContent />
      <Footer />
    </div>
  );
};

export default LanguageBook;
