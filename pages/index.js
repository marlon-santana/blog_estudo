
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
        </section>

        <section>
        <h2>Repositórios favoritos</h2>
        {
          props.repos.map((project) => {
            return (
              <article className="postContainer__post">
              <a href="/">
                 {project.repo}
              </a>
          <p>
            {project.description}
          </p>
        </article>
              
            )
          })
        }
     
      </section>

      


    </div>

  )
}
export async function getStaticProps () {
  const githubResponse = await fetch('https://api.github.com/users/marlon-santana')
  .then(res => res.json())
  

  const repos = await fetch('https://gh-pinned-repos.egoist.sh/?username=marlon-santana')
  .then(res => res.json())

  return {
    props: {
      avatar_url: githubResponse.avatar_url,
      repos,
    
    }
  }
}
