import { Gallery4, Gallery4Props } from "@/components/gallery4"

const demoData: Gallery4Props = {
  title: "Our Premium Installations",
  description:
    "At Gymline Plus, we take pride in delivering top-tier fitness solutions to a diverse range of clients, from home gyms to commercial fitness centers. Explore our portfolio of completed projects, showcasing our commitment to quality, innovation, and customer satisfaction.",
  items: [
    {
      id: "kenzo-vashi",
      title: "Kenzo Vashi: A Fitness Haven",
      description:
        "Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.",
      href: "",
      image:
        "/kenzovashi.mp4",
    },
    {
      id: "taiso-panvel",
      title: "Taiso Panvel",
      description:
        "Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.",
      href: "https://www.instagram.com/p/DFo53fvStT0/",
      image:
        "/taisopanvel.mp4",
    },
    {
      id: "mof74",
      title: "MOF 74",
      description:
        "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
      href: "https://astro.build",
      image:
        "/mof74.mp4",
    },
    {
      id: "kenzo-chembur",
      title: "Kenzo Chembur",
      description:
        "See how React continues to shape modern web development with its component-based architecture, enabling developers to build complex user interfaces with reusable, maintainable code.",
      href: "https://react.dev",
      image:
        "/chembur.mp4",
    },
    {
      id: "badman-gym",
      title: "Badman Gym - Bhopal's biggest gym",
      description:
        "Explore how Next.js has become the go-to framework for building full-stack React applications, offering features like server components, file-based routing, and automatic optimization.",
      href: "https://nextjs.org",
      image:
        "/badman-gym.mp4",
    },
  ],
};

function Gallery4Demo() {
  return <Gallery4 {...demoData} />;
}

export default Gallery4Demo;
