import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/01_Navbar/Navbar";
import Header from "./Components/02_Header/Header";
import SpotlightProject from "./Components/03_Spotlight_Project/Spotlight.project";
import Collections from "./Components/04_Collections/Collections";
import Trending_NFT from "./Components/05_Trending_NFT/Trending_NFT";
import Rarible_Api from "./Components/06_Built_With_Rarible_API/Rarible_Api";
import Popular_Categories from "./Components/07_Popular_Categories/Popular_Categories";
import Footer from "./Components/09_Footer/Footer";
import Footer_Bottom from "./Components/10_Footer_Bottom/Footer_Bottom";
import Notable_Article from "./Components/08_Notable_Article/Notable_Article";


const App = () => {
  return (
    <React.Fragment>
        <Navbar/>
        <Header/>
        <SpotlightProject/>
        <Collections/>
        <Trending_NFT/>
        <Rarible_Api/>
        <Popular_Categories/>
        <Notable_Article/>
        <Footer/>
        <Footer_Bottom/>
    </React.Fragment>
  );
}

export default App;
