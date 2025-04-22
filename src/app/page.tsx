import Hero from "../ui/Hero";

import Projects from "@/ui/Projects";
import CompanyState from "@/ui/CompanyState";
import Testimonial from "@/ui/Testimonial";
import Contact from "@/ui/Contact";
import { Logos3 } from "@/components/logos3";

export default function Home() {
  return (
    <div className="p-5 overflow-hidden scroll-smooth ">
      
      <Hero />
      <Logos3 />
      <CompanyState />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  );
}
