const workingStep = () => {
  return (
    <div className="bg-cover bg-center  relative py-12 bg-working-img  ">
      <div className="absolute insent-0  bg-blue-950 bg-opacity-85 "></div>

      <div className="relative container mx-auto py-20 px-4">
        <div className="text-green-700 text-center mb-20">
          <h2 className="text-4xl font-bold font-secondary mb-4 ">
            How to Works
          </h2>

          <p className="text-black text-lg md:w-1/2 w-full mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
            dolorum earum animi deleniti perspiciatis? Vel quod ab similique
            illum est.
          </p>
        </div>

        {/* card */}
        <div className=" flex  flex-col md:w-4/5 mx-auto md:flex-row gap-8">
          <div className="relative  bg-gradient-to-r from bg-yellow-300 to-green-300  text-center rounded-lg p-6  flex-1 ">

            <div className="absolute top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-600 to-yellow-600 animate-pulse text-white  size-14 rounded-full flex items-center justify-center ">
              1
            </div>

            <h3 className="text-lg  font-bold mt-8 text-green-500">
              Fill a Form{" "}
            </h3>

            <p className="my-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, odio?
            </p>
          </div>
          <div className="relative shadow-2xl bg-gradient-to-r from bg-purple-500 to-pink-500 text-center rounded-lg p-6 hover:text-white  flex-1 ">
            <div className="absolute top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2  bg-green-800 text-white  size-14 rounded-full flex items-center justify-center ">
              2
            </div>

            <h3 className="text-lg  font-medium mt-8 text-amber-100">
              Fill a Form{" "}
            </h3>

            <p className="my-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, odio?
            </p>
          </div>

          <div className="relative bg-gradient-to-r from-green-400 to-gray-600 shadow-2xl   text-center rounded-lg p-6  flex-1 ">
            <div className="absolute top-0 left-1/2 transform  -translate-x-1/2 -translate-y-1/2    bg-green-600 text-white  size-14 rounded-full flex items-center shadow-lg justify-center ">
              3
            </div>

            <h3 className="text-lg  font-medium mt-8 text-amber-100">
              Fill a Form{" "}
            </h3>

            <p className="my-2 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, odio?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default workingStep;
