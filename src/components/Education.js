import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaLongArrowAltRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

export const query = graphql`
  {
    allStrapiJob{
      nodes {
            company
            date
            position
          desc {
            id
            name
          }
      }
    }
  }
`

const Education = () => {
  const data = useStaticQuery(query)

  console.log(data)
  const {allStrapiJob:{nodes:jobs}} = data

  const [value,setValue] = React.useState(0)
  const{company,position,date,desc}=jobs[value]

return (
  <section className="section jobs">
    <Title title ="education"/>
    <div className="jobs-center">
      {/* btn container  */}
      <div className="btn-container">
        {jobs.map((item,index)=>{
          return <button key={index} 
                  className={index === value? "job-btn active-btn":"job-btn" }
                 onClick={()=>setValue(index)}>
            {item.company}
          </button>
        })}
      </div>
      
      {/* job info   */}
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">
          {date}
        </p>

        {desc.map((item)=>{
          return(
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-cion"></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          )
        })}
      </article>
      </div>
      <Link to="/acount" className="btn center-btn">
        more info
      </Link>
    
  </section>
)
}


export default Education
