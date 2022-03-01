import React from 'react';
import axios from 'axios';
import Movie  from '../components/movie';
import './Home.css';

class Home extends React.Component{
    state = {
      isLoading: true,
      movies:[],
    };
    getmovies = async () =>{
         //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
         const{
           data: {
             data: { movies },
           },
         } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
         //console.log(movies);
         this.setState({ movies, isLoading: false});
    }
    componentDidMount(){
      //영화 데이터 로딩!
     /* setTimeout(() => {
        this.state({ isLoading: false });
      }, 3000);*/
      //axios.get('https://yts-proxy.now.sh/list_movies.json');
      this.getmovies();
    }
    render(){
      const{isLoading, movies } = this.state;
      return( <section className="container">
              {isLoading ? <div className="loader">
                             <span className="loader__text">Loading..!!</span>
                            </div> : (
                                    <div className="movies">
                                      {movies.map((movie) =>(
                                       <Movie
                                          key     = {movie.id}
                                          id      = {movie.id}
                                          year    = {movie.year}
                                          title   = {movie.title}
                                          summary = {movie.summary}
                                          poster  = {movie.medium_cover_image}
                                          genres  = {movie.genres}
                                        />
                                      ))}
                                    </div>
                            )}
              </section>
      );
    }
  }

export default Home;