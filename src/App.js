import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/HomePage/Home";
import MainProject from "./components/Projects/Main";
import NotFound from "./components/NotFound";
import Facebook from "./components/Projects/ProjectPage/Facebook";
import Portfolio from "./components/Projects/ProjectPage/Portfolio";


function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  })

  return (
    <>
      <div className="App">
        <Router>
          <div className="text-[1.1rem] ml-[15re] mb-5 mt-4"
            style={{
              color: '#000',
              cursor: 'pointer',
              "& :hover": {
                textDecoration: 'underline'
              }
            }}
          >

          </div>
          <Routes>
            <Route
              index
              path="/"
              element={<Home />} 
            />
            <Route
              index
              path="/mainproject" element={<MainProject />}
              errorElement={ <NotFound /> }
            />
            <Route path="Home/project/Facebook_Clone" element={<Facebook />} />
            <Route path="Home/projects/Portfolio" element={<Portfolio />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
