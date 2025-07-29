import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/Data";

const Features = () => {
  return (
    <section id="features" className="w-full px-4 sm:px-6 md:px-10 py-16 sm:py-20 border-b border-b-black">
      <Title
        title={<span className="text-[var(--color-design)]">Features</span>}
        des="What I Do"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 xl:gap-16">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
