import { BsFillChatQuoteFill } from "react-icons/bs";

import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";

const testimonials = [
  {
    name: "Jane Doe",
    location: "New York, NY",
    review:
      "This service has been life-changing for me. The mental wellness and personalized support have made a huge difference in my daily life. Highly recommended!",
    image: review1,
  },
  {
    name: "Jane Smith",
    location: "Los Angeles, CA",
    review:
      "This service has been life-changing for me. The mental wellness and personalized support have made a huge difference in my daily life. Highly recommended!",
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#f7f8fc] py-12" id="testimonial">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary">What Our Clients Say</h2>
          <p className="text-lg mb-12 mt-3 md:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat et accusamus minus eveniet? Fuga, dolore? Error dolore facilis.
          </p>
        </div>

        <div className="flex flex-col md:w-4/5 md:flex-row mx-auto md:gap-12 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-white shadow-2xl rounded-lg p-6 flex-1">
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsFillChatQuoteFill className="size-12 text-green-500" />
              </div>

              <p className="text-lg mb-2">{testimonial.review}</p>

              <div className="flex gap-4 items-center">

                <img src={testimonial.image} alt="Reviewer" className="size-16 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
