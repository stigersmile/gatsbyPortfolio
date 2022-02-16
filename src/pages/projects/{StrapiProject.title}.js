import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Seo from "../../components/Seo"
import Video from "../../components/video"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  console.log(data)
  // const imageURL = data.strapiProject.image.url
  // console.log(imageURL)
  return (
    <main className="project-template-page">
      <h2>{title}</h2>
      <p>{data.strapiProject.description}</p>

      {data.strapiProject.content.map((image, index) => {
        //childImageSharp
        const pathToImage = getImage(image.localFile)
        return (
          <article key={index} className="item">
            <GatsbyImage
              image={pathToImage}
              alt="test"
              className="gallery-img"
            />
          </article>
        )
      })}

      {/* <Video
        videoSrcURL=""
        videoTitle=""
      /> */}
    </main>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        url
      }
      content {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }

  .gallery-img {
    border-radius: 1rem;
  }
`

export default ProjectTemplate
