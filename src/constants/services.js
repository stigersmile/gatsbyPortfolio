import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
import { CgScreen } from "react-icons/cg"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: ` Proficient in Web ( Javascript, Angular, React ) development language `,
    tag: ["Javascript", "Typescript", "Angular", "React"],
  },
  {
    id: 2,
    icon: <CgScreen className="service-icon" />,
    title: "GUI development",
    text: `  Proficient in GUI (.NET, QT) development language.`,
    tag: [".NET", "QT"],
  },
  {
    id: 3,
    icon: <FaSketch className="service-icon" />,
    title: "UI/UX",
    text: `Proficient in (AdobeXD, Figma, Axure)`,
    tag: ["Adobe XD", "Figma", "Axure"],
  },
]

export default services
