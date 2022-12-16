import "./App.css";
import Header from "./redux/components/01.header/Header";
import Create from "./redux/components/02.create/Create";
import Read from "./redux/components/03.read/Read";

function App() {
  return (
    <div className="app">
      <Header />
      <Create />
      <Read />
    </div>
  );
}

export default App;
