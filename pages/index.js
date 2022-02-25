import Head from "next/head";
import React from "react";
import * as style from "../styles/home.style";
import Carousel from "react-elastic-carousel";
import Link from "next";
export default function Home({ list }) {
  return (
    <style.Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style.Header>
        <a>trending</a>
        <a href="/search/search">search</a>
      </style.Header>
      <style.List>
        <style.MoviesList>
          <Carousel itemsToShow={2}>
            {list.map((item) => (
              <li key={item.id}>
                {item.title} <br />
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  width="390"
                />
              </li>
            ))}
          </Carousel>
        </style.MoviesList>
      </style.List>
    </style.Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/trending");
  const json = await res.json();
  return {
    props: {
      list: json.list,
    },
  };
}
