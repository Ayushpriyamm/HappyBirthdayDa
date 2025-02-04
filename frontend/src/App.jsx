import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <ProductSection />
      <main className="p-4">
        <h2 className="text-xl font-semibold">Welcome to KnowledgePrep!</h2>
      </main>
    </>
  );
}

export default App;
