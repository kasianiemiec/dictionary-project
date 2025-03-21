import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container m-5">
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>This app is coded by Kasia Niemiec.</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
