import "./App.css";
import { useState } from "react";
import AddServiceForm from "../Components/AddService";
import UpdateServiceForm from "../Components/UpdateService";
import ServiceList from "../Components/ServiceList";

function App() {
  const [services, setServices] = useState([]);
  const [serviceToUpdate, setServiceToUpdate] = useState(null);

  const addService = (newService) => {
    setServices([...services, newService]);
  };

  const deleteService = (name) => {
    setServices(services.filter((service) => service.name !== name));
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setServiceToUpdate(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Healthcare Services Management
      </h1>
      <h2 className="text-2xl font-bold mb-8">Add New Service</h2>
      <AddServiceForm addService={addService} />

      <ServiceList
        services={services}
        deleteService={deleteService}
        setServiceToUpdate={setServiceToUpdate}
      />

      {serviceToUpdate && (
        <UpdateServiceForm
          service={serviceToUpdate}
          updateService={updateService}
        />
      )}
    </div>
  );
}

export default App;
