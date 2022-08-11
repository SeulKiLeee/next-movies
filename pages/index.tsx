import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Seo from '../components/Seo'
import styles from '../styles/Home.module.css'

interface Props {
  results: any,
}

export default function Home({results}: Props){
  const router = useRouter();
  const onClick = (id:string, title:string) => {
    router.push(`/movies/${title}/${id}`);
  }
  return (
    <div className="container">
      <Seo title='Home' />
      {results?.map(movie => (
            <div onClick={() => onClick(movie.id, movie.original_title)} 
              className="movie" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie poster' />
              <Link href={`/movies/${movie.original_title}/${movie.id}`}>
               <a>
                  <h4>{movie.original_title}</h4>
                  </a>
              </Link>
            </div>
      ))}
       <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const { results } = await ( await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    }
  }
}