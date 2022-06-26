import "./App.css";
import RenderCards from "./components/RenderCards";
import Nav from "./components/Nav";

function App() {
  const ids = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
  ];
  return (
    <div>
      <Nav />
      <RenderCards item={ids} />
    </div>
  );
}

export default App;
