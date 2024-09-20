import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
const UpdateServiceForm = ({ service, updateService }) => {
  const [updatedService, setUpdatedService] = useState(service);

  // Update the state when the service prop changes
  useEffect(() => {
    setUpdatedService(service);
  }, [service]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Service:", updatedService); // Debugging log
    updateService(updatedService);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      <input
        type="text"
        value={updatedService.name}
        onChange={(e) =>
          setUpdatedService({ ...updatedService, name: e.target.value })
        }
        className="w-full px-4 py-2 border rounded"
        placeholder="Service Name"
      />
      <input
        type="text"
        value={updatedService.description}
        onChange={(e) =>
          setUpdatedService({ ...updatedService, description: e.target.value })
        }
        className="w-full px-4 py-2 border rounded"
        placeholder="Description"
      />
      <input
        type="number"
        value={updatedService.price}
        onChange={(e) =>
          setUpdatedService({ ...updatedService, price: e.target.value })
        }
        className="w-full px-4 py-2 border rounded"
        placeholder="Price"
      />
      <Button
        type="submit"
        color="green"
        // className="bg-yellow-500 text-white px-4 py-2 rounded"
      >
        Update Service
      </Button>
    </form>
  );
};

export default UpdateServiceForm;
