import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: ` Proficient in Web ( Javascript, Angular, React ) and GUI (.NET, QT) development language `,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "GUI development",
    text: ` Passionate about UX, UI and good at building prototypes and quickly iterating UI design to meet the needs of different stakeholders.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "UI/UX",
    text: `Passionate about UX, UI and good at building prototypes and quickly iterating UI design to meet the needs of different stakeholders.`,
  },
]

export default services
