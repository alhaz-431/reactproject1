const packages = [
  {
    id: 1,
    name: "Basic",
    price: "$10/month",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  {
    id: 2,
    name: "Standard",
    price: "$20/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
  },
  {
    id: 3,
    name: "Premium",
    price: "$30/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"]
  },

  {
    id: 4,
    name: "Qualityfull",
    price: "$40/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", ]
  },

  {
    id: 5,
    name: "Colorfull",
    price: "$50/month",
    features: ["Feature 1", "Feature 2", "Feature 3",  ]
  },
];

const Pricing = () => {
  return (
    <div className="bg-[#f7f8fc] pt-32" id="pricing">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary">
            Perfect for Small & Large Brands
          </h2>
          <p className="text-lg mb-12 mt-3 md:w-2/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat et accusamus minus eveniet? Fuga, dolore? Error dolore facilis.
          </p>
        </div>

        {/* Package section */}

        <div className="flex flex-col md:w-5/6 mx-auto md:flex-row gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-2xl font-semibold">{pkg.name}</h3>
              <p className="text-xl font-bold text-blue-600">{pkg.price}</p>
              <ul className="mt-4">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="mt-4 px-4 py-2 font-bold bg-blue-600 hover:bg-green-500 text-white rounded-lg">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
