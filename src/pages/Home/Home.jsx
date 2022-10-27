import React from "react";
import Chatbot from "../../Component/Footer/Chatbot";
import Banner from "./Component/Banner";
import MovieList from "./Component/MovieList";
import MovieSchedule from "./Component/MovieSchedule";
import Quangcao from "./Component/Quangcao";
import Trailler from "./Component/trailler";

const Home = (props) => {
  return (
    <div>
      {/* <Trailler/> */}
      <Quangcao/>
      <MovieList />
      <MovieSchedule />
      <Chatbot/>
    </div>
  );
};

export default Home;
