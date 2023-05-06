import "./App.css";

import { Contact } from "./pages/Contact/Contact";
import { Experience } from "./pages/Experience/Experience";
import { Experties } from "./pages/Experties/Experties";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Lecture } from "./pages/Lecture/Lecture";
import { Navbar } from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { Treatment } from "./pages/Treatment/Treatment";
import { useRef } from "react";

function App() {
  const homeRef = useRef(null);
  const lectureRef = useRef(null);
  const exprienceRef = useRef(null);
  const contactRef = useRef(null);
  const navbarRef = useRef(null);
  const treatmentRef = useRef(null);
  const refList = {
    home: homeRef,
    lecture: lectureRef,
    exprience: exprienceRef,
    contact: contactRef,
    navbar: navbarRef,
    treatment: treatmentRef,
  };

  return (
    <div className="app" ref={homeRef}>
      <Toaster />
      <Navbar refList={refList} />
      <Home refList={refList} />
      <div ref={treatmentRef}></div>
      <Treatment />
      <div className="lecture-and-experties" ref={lectureRef}>
        <Lecture />
        <Experties />
      </div>
      <div ref={exprienceRef}></div>
      <Experience />
      <div ref={contactRef}></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// <div className="maintaince">
//   <h1 className="maintaince-headline">
//     The website is currently down for maintenance. Please try again later.
//   </h1>
// </div>
