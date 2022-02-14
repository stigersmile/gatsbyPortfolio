import React from "react"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = ({data}) => {
  const {strapiAbout:{title,image,info,stack}}= data
  console.log(data)
  return (
      <section className="about-page">
        <div className="section-center about-center">
          <img src={image.localFile.publicURL}  className="about-img-svg" alt={title} />
          <article className="about-text"> 
          <Title title={title}/>
          <p>{info}</p>
          <div className="about-stack">
            {stack.map((item)=>{
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
          </article>
        </div>  
      </section>
  )
}

export const query = graphql`
  {
    strapiAbout {
      title
      info
      stack {
        id
        title
      }
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default About
