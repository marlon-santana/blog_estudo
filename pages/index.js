
import React from 'react';
import Link from 'next/link';

import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  
`

export default function Home(props) {
  return (
    <div>

      <header className="headerContainer">
        <img src={props.avatar_url} />
        

      <Link href="/sobre">
       <a>
        <h1>Marlon Santana Blog</h1>
       </a>
      </Link>
      </header>
      <section className="postsContainer">
        <h2>Posts</h2>
        <article className="postContainer__post">
          <a href="/">
            Alura.js 01
          </a>
          <p>
            praticando layout de blog com reactjs e Nextjs.
          </p>
        </article>

        <h2>Posts</h2>
        <article className="postContainer__post">
          <a href="/">
            Alura.js 02
          </a>
          <p>
            praticando layout de blog com reactjs e Nextjs.
          </p>
        </article>

        <h2>Posts</h2>
        <article className="postContainer__post">
          <a href="/">
            Alura.js 03
          </a>
          <p>
            praticando layout de blog com reactjs e Nextjs.
          </p>
        </article>
      </section>

      


    </div>

  )
}
export async function getStaticProps () {
  return {
    props: {
      avatar_url: "https://avatars.githubusercontent.com/u/72947608?v=4"
    
    }
  }
}
