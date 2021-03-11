import React from "react";
import axios from "axios";
import Moive from "../components/Moive";
import "./Home.css";
// import PropTypes from "prop-types";

const MOVIE_URL = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMoive = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios(MOVIE_URL);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMoive();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((item) => {
              return (
                <Moive
                  key={item.id}
                  id={item.id}
                  year={item.year}
                  title={item.title}
                  summary={item.summary}
                  poster={item.medium_cover_image}
                  genres={item.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
