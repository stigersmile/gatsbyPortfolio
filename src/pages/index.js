import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Education from "../components/Education"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
const IndexPage = ({ data }) => {
  console.log(data)
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        {/* <Education /> */}
        <Projects title="featured projects" showLink projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        description
        featured
        slug
        id
        title
        image {
          localFile {
            childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        stack {
          id
          title
        }
      }
      totalCount
    }
  }
`

export default IndexPage
