import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

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
      Header
      Destaque

      {/* listas */}
      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            {item.title}
          </div>
        ))}
      </section>

      Footer
    </div >
  );
}