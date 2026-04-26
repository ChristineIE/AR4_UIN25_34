import "./App.css";
import Header from "./components/Header";
import AssignmentCard from "./components/AssignmentCard";
import Elstad from "./components/Elstad";
import Moe from "./components/Moe";

function App() {
  return (
    <section>
      <Header />
      <Elstad />
      <Moe />
      <AssignmentCard />
    </section>
  );
}

export default App;
