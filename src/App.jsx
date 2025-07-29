import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Services2 from "./components/Services2";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services2 />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;