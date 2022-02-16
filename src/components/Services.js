import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="skill" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text, tag } = service
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              {/* <p>{text}</p> */}

              <div className="project-stack">
                {tag.map(item => {
                  return <span key={id}>{item}</span>
                })}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
