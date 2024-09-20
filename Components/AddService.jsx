import { useState } from "react";

const AddServiceForm = ({ addService }) => {
  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) return;
    addService(service);
    setService({ name: "", description: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex  flex-col space-x-4">
      <input
        type="text"
        placeholder="Service Name"
        value={service.name}
        onChange={(e) => setService({ ...service, name: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="Description"
        value={service.description}
        onChange={(e) =>
          setService({ ...service, description: e.target.value })
        }
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        placeholder="Price"
        value={service.price}
        onChange={(e) => setService({ ...service, price: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Service
      </button>
    </form>
  );
};

export default AddServiceForm;
