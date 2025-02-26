import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import serviceimg1 from "../assets/service1.webp";

const Service = () => {  
  return (
    <div className="bg-[#f7f8fc]" id="services">
      <div className="pt-28 px-4 container mx-auto">
        <div className="text-center space-y-5">
          <h2 className="text-4xl font-bold text-gray-900">
            What Can We Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div> 

        {/* Services Category */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4">
              <Tab>Couple Counseling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-Confidence</Tab>
            </TabList>

            {/* TabPanel */}
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white rounded-lg p-12">  
                  <h3 className="text-3xl font-medium text-emerald-600 mb-4">
                    Couple Counseling
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aperiam saepe delectus modi magnam ipsum labore illo
                    dignissimos odio. Labore, quam.
                  </p>
                  <h4>Benefits</h4>  
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Improved Communication</li>
                    <li>Conflict Resolution</li>
                    <li>Emotional Support</li>
                  </ul>
                  <div className="mt-5">
                    <img
                      src={serviceimg1}
                      alt="service"
                      className="w-full h-44 rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>

            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>

            <TabPanel>
              <h2>Any content 4</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Service;  
