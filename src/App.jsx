import ReactDOM from "react-dom/client";
import Pet from "./Pet";
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="Cat" breed="mixd" />
      <Pet name="Doink" animal="bird" breed="cockateil" />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
