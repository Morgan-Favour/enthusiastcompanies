import { Globe, Leaf, Rocket } from 'lucide-react'

export const projectData = [
    {   
        id: 1,
        projectImage: "/hero-bg.jpeg",
        projectTitle: "Project 1",
        description: "Around the world electric vehicles need charging, but the grid can't always support them.",
    },
    {
        id: 2,
        projectImage: "/hero-bg.jpeg",
        projectTitle: "Project 2",
        description: "Warehouses and distribution centers are seeking alternatives to lead-acid batteries.",
    },
    {   
        id: 3,
        projectImage: "/hero-bg.jpeg",
        projectTitle: "Project 3",
        description: "Industrial applications are working to decarbonize their operations.",
    },
    {   
        id: 4,
        projectImage: "/hero-bg.jpeg",
        projectTitle: "Project 4",
        description: "The need for zero emission backup, intermittent, or primary power sources is becoming more critical.",
    },
]

export const statsData = [
    {
        id: 1,
        number: "400",
        title: "Data Efficiency",
        suffix: "K"
    },
    {
        id: 2,
        number: "150",
        title: "Carbon Reduction",
        suffix: "%"
    },
    {
        id: 3,
        number: "500",
        title: "Projects Completed",
        suffix: "+"
    },
    {
        id: 4,
        number: "100",
        title: "Happy Clients",
        suffix: "%"
    }
]
export const whatWeDoCards = [
    {
      id: 1,
      title: "Our Mission",
      desc: "Driving the global transition to clean hydrogen energy for a sustainable tomorrow.",
      icon: <Leaf className="w-10 h-10 text-eh-primary" />
    },
    {
      id: 2,
      title: "Our Vision",
      desc: "A world powered by renewable hydrogen – reducing carbon emissions and fostering energy independence.",
      icon: <Globe className="w-10 h-10 text-eh-primary" />
    },
    {
      id: 3,
      title: "Our Innovation",
      desc: "From mobility to industrial solutions, we pioneer scalable hydrogen technologies for real-world impact.",
      icon: <Rocket className="w-10 h-10 text-eh-primary" />
    },
  ]