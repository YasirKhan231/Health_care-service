import { Button } from "@material-tailwind/react";
const ServiceList = ({ services, deleteService, setServiceToUpdate }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              {service.name}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <p className="text-sm text-blue-600 font-bold mt-2">
              Price: ${service.price}
            </p>
          </div>
          <div className="flex justify-between mt-4">
            <Button
              color="green"
              className=" text-white shadow-md"
              onClick={() => setServiceToUpdate(service)}
            >
              Edit
            </Button>
            <button
              onClick={() => deleteService(service.name)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
