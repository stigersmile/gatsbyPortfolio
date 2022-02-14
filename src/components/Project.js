import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({ description, title, stack, image, index, slug }) => {
  console.log(image)
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image.localFile.childrenImageSharp[0])}
        className="project-img"
        alt={title}
      />
      <div className="project-info">
        <span className="project-number">0{index + 1}</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.title}</span>
          })}
          {/* <div className="project-link">
            <a href="">
            <FaGithubSquare className="project-icon"></FaGithubSquare>
            </a>
            <a href="">
            <FaShareSquare className="project-icon"></FaShareSquare>
            </a>
          </div> */}
        </div>
      </div>
    </article>
  )
}

export default Project
