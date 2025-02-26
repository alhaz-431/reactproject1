import { useState } from "react";
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaUser } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!name || !email || !phone || !country || !message) {
      alert("Please fill all fields");
      return;
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
  };

  return (
    <div
      className="bg-gray-950 flex items-center justify-center py-28 px-8"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="md:w-4/5 mx-auto flex flex-col md:flex-row items-center md:gap-12 gap-8">
          {/* Left Side */}
          <div className="space-y-8 flex-1">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Make an Appointment
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              {[
                {
                  icon: <FaUser className="text-green-400" />,
                  title: "24 Hours Services",
                },
                {
                  icon: <FaEnvelope className="text-green-400" />,
                  title: "Expert Therapist",
                },
                {
                  icon: <FaPhoneAlt className="text-green-400" />,
                  title: "High Quality Care",
                },
                {
                  icon: <FaGlobe className="text-green-400" />,
                  title: "Trusted Clinic",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipi.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8 p-8 bg-white shadow-xl rounded-md flex-1">
            <h3 className="text-2xl font-bold text-gray-900">
              Book Appointment
            </h3>
            <p className="text-gray-600">
              Fill out the form and our team will contact you as soon as
              possible.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
                />
              </div>

              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
                />
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
                />
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Write your message..."
                className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 shadow"
              ></textarea>

              <button
                type="submit"
                className="w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Thank You</h2>
            <p>Thank you, {name}, for submitting your query.</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-green-400 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
