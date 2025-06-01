// import heroimage from "../assets/plane.jpg";
import heroimage from "../assets/spices-hero.png";

const HeroSection = () => {
  return (
    <section className="relative flex h-screen mt-32" id="home">
  {/* Ellipse */}
  

  {/* Image inside ellipse */}
  <div className="absolute right-0 top-10 lg:top-0 w-[650px] h-[600px] z-10 flex items-center justify-center">
    <img
      src={heroimage}
      alt="Spices"
      className="w-[400px] h-auto object-contain"
    />
  </div>

  <div className="absolute right-0 top-0 h-[550px] w-[650px] bg-[rgba(204,39,57,0.66)] rounded-l-[50%] rounded-r-none -z-10" />

  {/* Content Section */}
  <div className="relative z-20 flex flex-col items-start mt-6 lg:mt-20 text-black px-4 lg:px-20 max-w-[50%]">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-left tracking-wide">
      Discover the Finest <br />
      <span className="bg-gradient-to-r bg-clip-text font-semibold">
        Spices at Sammy <br />
      </span>
      <span className="bg-gradient-to-r bg-clip-text font-semibold">
        England
      </span>
    </h1>

    <p className="mt-10 text-lg text-start text-neutral-900 max-w-4xl">
      Indulge in the rich flavors of our meticulously sourced black <br /> pepper, white pepper, and cinnamon powder.
    </p>

    <div className="flex justify-center my-10">
      <a href="#" className="bg-[#D1A249] py-3 px-4 mx-3 rounded-md text-black">Shop Now</a>
      <a href="#" className="bg-[rgba(209,162,73,0.59)] py-3 px-4 mx-3 rounded-md border text-black">Learn More</a>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
