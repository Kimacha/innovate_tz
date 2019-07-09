import React, {useState} from 'react';
import ReactMapGL from "react-map-gl"
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [viewport, setViewport] = useState({
    latitude:-6.830,
    longitude: 35.705,
    width: "100vw",
    height: "100vh",
    zoom: 5
  })


  return (
    <div>
    <ReactMapGL
      {...viewport}
      mapboxApiAccesToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle = "mapbox://styles/wkimacha/cjxvg42sx16up1cni35pdhc9v"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    >

    </ReactMapGL>

    </div>
  );
}

export default App;
