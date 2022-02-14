import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// import Seo from "../components/Seo"

  const ProjectsPage= ({   
    data:{
    allStrapiProject:{nodes:projects},
  }
}) => {

    return (
      <>
        <main>
          <section className="project-page">
            <Projects title="all project" projects={projects}/>
          </section>
        </main>
      </>
    )
  }


export const query = graphql`
  {
    allStrapiProject {
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

  
export default ProjectsPage
