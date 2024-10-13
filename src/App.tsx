import NavBar from "./app/NavBar";
import Profile from "./app/Profile";
import Technologies from "./app/Technologies";
import ProjectsList from "./app/Projects";
import TimelineList from "./app/TimelineList";
import Footer from "./app/Footer";

import projects from "../src/data/projects_data.json";
import timelineList from "../src/data/timeline_data.json";

function App() {

  return (
    <>
      <NavBar />
       <Profile/>
       <Technologies/>
       <ProjectsList projects ={projects}/>
       <TimelineList timelineElements={timelineList}/>
      <Footer/>
    </>
  );
}

export default App;
