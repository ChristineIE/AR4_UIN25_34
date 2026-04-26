import "./App.css";
import Header from "./components/Header";
import AssignmentCard from "./components/AssignmentCard";
import Elstad from "./components/Elstad";
import Moe from "./components/Moe";

function App() {
  return (
    <main className="main-area">
      <Header />
      <Elstad />
      <Moe />
      <AssignmentCard />
    </main>
  );
}

export default App;
