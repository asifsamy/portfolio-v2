import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout/Laoyout";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <Layout>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
