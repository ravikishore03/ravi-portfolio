import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

// Inside the main div:
<ScrollTop />

function App(){

return(

<div className="bg-[#050816]">

<Navbar/>

<Hero/>

<About/>

<Skills/>

<Projects/>

<Education/>

<Certifications/>

<Contact/>

<Footer/>

</div>

)

}

export default App;