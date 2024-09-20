import ServiceList from "../Components/ServiceList";
import UpdateService from "../Components/UpdateService";
import AddService from "../Components/AddService";
import "./App.css";

function App() {
  return (
    <>
      <div className="    bg-red-500">Hi there from the main health app</div>
      <AddService></AddService>
      <UpdateService></UpdateService>
      <ServiceList></ServiceList>
    </>
  );
}

export default App;
