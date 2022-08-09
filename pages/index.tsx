import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Seo from '../components/Seo'
import styles from '../styles/Home.module.css'

const API_KEY = '1e1fb74a557fd4da0031779509d4dc51';

const Home: NextPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await ( 
          await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )
          ).json();
          setMovies(results);
      })();
  }, []);
  return (
    <div>
      <Seo title='Home' />
      {!movies && <h4>Loading movies...</h4>}
      {movies?.map(movie => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  )
}

export default Home
