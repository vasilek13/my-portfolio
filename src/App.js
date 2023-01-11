import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Skills from "./pages/skills/skills";
import Menu from "./components/menu/menu";
import Work from './pages/works/work';
import MainPage from "./pages/main/MainPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    
    <Router>
      
      <div className="App">
      
        <Menu/>
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route exact path="/hard-skills">
            <Skills/>
          </Route>
          <Route exact path="/my-works">
            <Work/>
          </Route>
          <Route exact path="/contacts">
            <ContactsPage/>
          </Route>
        </Switch>
    
      </div>
      <Particles
      id="tsparticles"
      init={particlesInit}

      options={
        {
          "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
        "particles": {
          "number": {
            "value": 6,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            //"value": "#948716",
            "value": "#FF5F56"
            //"value":"#B6A885"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "pink"
            },
            "polygon": {
              "nb_sides": 6
            }
          },
          "opacity": {
            "value": 0.3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 160,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 40,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 1,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "retina_detect": true
        }
      }/>
    </Router>
  );
}

export default App;
