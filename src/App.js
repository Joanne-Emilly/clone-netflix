import React, { useEffect, useState } from "react";
import Tmdb from "./tmdb";
import MovieRow from "./components/MovieRow";
import './App.css'

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList()
      setMovieList(list)
      console.log(list)
    }
    loadAll()
  }, [])

  return (
    <div className="page">


      {/* listas */}
      <section className="lists" >
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>


    </div>
  );
}

export default App