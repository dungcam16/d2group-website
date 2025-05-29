
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient";
  id?: string;
}

const Section = ({ children, className, background = "white", id }: SectionProps) => {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-blue-50 to-indigo-50"
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-20",
        backgroundClasses[background],
        className
      )}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
