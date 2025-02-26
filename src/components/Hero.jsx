import { FaCircleArrowRight } from "react-icons/fa6";
import heroImg from "../assets/hero.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-900 text-white flex  items-center pt-28 md:h-screen "
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hidden gap-12 h-full">
        {/* left side */}

        <div
          
          className="md:w-1/2"
        >
          <h1 className="text-4xl font-bold  mb-4 md:w-3/5 leading-snug">
            {" "}
            Start Your Journey to Mental Wellness
          </h1>

          <p className=" text-lg mb-12 md: pr-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            vero a quae nesciunt exercitationem laudantium reprehenderit et unde
            natus dicta!
          </p>

          <button className=" bg-green-700 text-white py-3.5 px-8 font-medium rounded-md hover:bg-amber-900">
            <a href="#contact" className="flex gap-1 items-center">
              <span>Get Started</span>
              <FaCircleArrowRight />
            </a>
          </button>
        </div>

        {/* right side */}

        <div className="md:w-1/2 h-full">
          <img src={heroImg} alt="hero image" className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
