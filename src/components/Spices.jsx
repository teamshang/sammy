import image1 from "../assets/black.png";
import image2 from "../assets/cinammon.png";
import image3 from "../assets/white.png";

import ServiceCard from "./ServiceCard";

const Spices = () => {
  const SERVICES = [
    {
      image: image1,
      title: "Black Pepper",

    },
    {
      image: image2,
      title: "Cinnamon",

    },
    {
      image: image3,
      title: "White Pepper",

    },
  ];
  return (
    <div>
      <section className="container mx-auto p-9 py-16" id="services">
        <div className="pt-4 pb-4 bg-[#5E8F8D] mb-32">
          <h2 className=" text-center text-3xl tracking-tighter lg:text-4xl font-bold ">
            Discover Our Premium Spice Collection
          </h2>
        </div>


        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 place-items-center">
          {SERVICES.map((project, index) => (
            <ServiceCard
              key={index}
              project={project}
              className="border-4 border-[#D1A249] rounded-xl"
            />

          ))}
        </div>
      </section>
    </div>
  );
};

export default Spices;
