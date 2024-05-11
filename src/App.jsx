import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className="w-[clamp(300px,100%,1600px)] mx-auto">
      <Header />
      <Showcase />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
