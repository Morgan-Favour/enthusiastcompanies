import { Globe, Globe2, Leaf, Rocket, Cpu, MonitorPlay, Wind, Search, Drill, FlaskRound, Zap, Factory, Mountain, Truck, Home, Handshake, FlaskConical, Building2, Atom, Battery, Package, Recycle} from 'lucide-react'




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
  export const whyUsData =[
    {
        id: 1,
        title: "Expertise",
        description: "Our team of seasoned professionals brings deep industry knowledge and technical expertise to every project, ensuring innovative and effective hydrogen solutions."
    },
    {
        id: 2,
        title: "Sustainability",
        description: "We are committed to driving the transition to clean energy, helping clients reduce their carbon footprint and achieve their sustainability goals through hydrogen technology."
    },
    {
        id: 3,
        title: "Customized Solutions",
        description: "We understand that every client has unique needs. We tailor our hydrogen solutions to fit specific applications, ensuring optimal performance and value."
    },
    {
        id: 4,
        title: "End-to-End Service",
        description: "From initial consultation to project completion and beyond, we provide comprehensive support and service, ensuring a seamless experience for our clients."
    }
  ]
    export const whyInvestData = [
    {
        id: 1,
        title: "Market Growth",
        desc: "The hydrogen market is projected to grow exponentially in the coming decades, driven by increasing demand for clean energy solutions."
    },
    {
        id: 2,
        title: "Technological Advancements",
        desc: "Ongoing innovations in hydrogen production, storage, and utilization are making it more efficient and cost-effective."
    },
    {
        id: 3,
        title: "Government Support",
        desc: "Many governments worldwide are implementing policies and incentives to promote hydrogen energy as part of their climate action plans."
    },
]

export const features = [
    {
      id: 'mdr',
      title: 'Multi Disc Rotary™ Generator (MDR)',
      desc: 'A compact, high-efficiency rotary generator engineered to convert hydrogen into electricity and heat with modular scalability for industrial and remote deployments.',
      icon: <Cpu className="w-6 h-6 text-eh-white" aria-hidden />,
    },
    {
      id: 'prospect',
      title: 'Natural Hydrogen Prospecting',
      desc: 'Aerial & surface sensing stack that locates "Gold Hydrogen™" reservoirs using spectroscopy, lidar and advanced geospatial mapping.',
      icon: <MonitorPlay className="w-6 h-6 text-eh-white" aria-hidden />,
    },
    {
      id: 'integration',
      title: 'Capture, Purify & Integrate',
      desc: 'End-to-end capture and purification for safe storage plus grid and microgrid integration—optimized for safety and low lifecycle emissions.',
      icon: <Wind className="w-6 h-6 text-eh-white" aria-hidden />,
    },
  ]

  export const steps = [
    {
      title: 'Discover',
      desc: 'We identify natural hydrogen reserves using advanced sensing and geospatial mapping technologies.',
      icon: <Search className="w-6 h-6 text-eh-white  " />, 
    },
    {
      title: 'Extract',
      desc: 'Our drilling and capture systems safely extract natural hydrogen while maintaining environmental balance.',
      icon: <Drill className="w-6 h-6 text-eh-white " />, 
    },
    {
      title: 'Convert',
      desc: 'The Multi Disc Rotary™ Generator transforms hydrogen into electricity and heat with exceptional efficiency.',
      icon: <FlaskRound className="w-6 h-6 text-eh-white  " />, 
    },
    {
      title: 'Power',
      desc: 'We deliver scalable clean energy for industries, grids, and remote applications.',
      icon: <Zap className="w-6 h-6 text-eh-white " />, 
    },
  ]

  export const applications = [
    {
      title: 'Industrial Power',
      desc: 'Hydrogen-driven systems to power large-scale industrial operations with clean, efficient energy.',
      icon: <Factory className="w-6 h-6 text-eh-white" />, 
    },
    {
      title: 'Remote Energy',
      desc: 'Reliable, off-grid hydrogen power solutions for remote areas and critical infrastructure.',
      icon: <Mountain className="w-6 h-6 text-eh-white" />, 
    },
    {
      title: 'Transportation',
      desc: 'Fueling the future of mobility through clean hydrogen for heavy transport and logistics.',
      icon: <Truck className="w-6 h-6 text-eh-white" />, 
    },
    {
      title: 'Microgrids',
      desc: 'Decentralized hydrogen power networks designed for communities and resilient energy systems.',
      icon: <Home className="w-6 h-6 text-eh-white" />, 
    },
  ]

  export const partnerships = [
    {
      title: 'Investment & Funding',
      desc: 'Collaborate on scaling hydrogen power infrastructure and bringing innovative energy systems to market.',
      icon: <Handshake className="w-6 h-6" />, 
    },
    {
      title: 'Research & Development',
      desc: 'Partner in refining the Multi Disc Rotary™ Generator and advancing hydrogen extraction technologies.',
      icon: <FlaskConical className="w-6 h-6 " />, 
    },
    {
      title: 'Infrastructure & Deployment',
      desc: 'Join our network to implement hydrogen power solutions in industrial and community-scale projects.',
      icon: <Building2 className="w-6 h-6 " />, 
    },
  ]
  
  export const productCards = [
    {
      title: 'Hydrogen Discovery & Prospecting',
      desc: 'Hydrogen sensors, mapping tech (LDLARS, LIDAR) to find natural hydrogen.',
      icon: <Search className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: 'Power & Conversion Systems',
      desc: 'Multi Disc Rotary™ Generator (MDR) to convert hydrogen into electricity and heat.',
      icon: <Zap className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: 'Chemical Products & Derivatives',
      desc: 'Hydrogen capture, purification, storage, and integration solutions.',
      icon: <FlaskRound className="w-6 h-6 text-cyan-600" />,
    }
  ]
  export const divisions = [
    {
      name: 'Enthusiast Hydrogen',
      desc: 'Revolutionizing clean hydrogen energy systems through advanced Multi Disc Rotary™ generator technology.',
      icon: <Atom className="w-8 h-8 text-eh-white" />,
      link: '/hydrogen',
    },
    {
      name: 'Enthusiast Power',
      desc: 'Delivering innovative, sustainable power generation and storage solutions for global energy needs.',
      icon: <Battery className="w-8 h-8 text-eh-white" />,
      link: '/power',
    },
    {
      name: 'Enthusiast Products',
      desc: 'Creating next-generation smart and industrial products that integrate innovation with sustainability.',
      icon: <Package className="w-8 h-8 text-eh-white" />,
      link: '/products',
    },
  ]

  export const points = [
    {
      icon: <Globe2 className="w-6 h-6 text-cyan-400" />,
      title: 'Global Impact',
      desc: 'Our technologies are designed to solve real-world challenges and contribute to a cleaner global ecosystem.',
    },
    {
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
      title: 'Advanced Technology',
      desc: 'Through research and engineering, we develop scalable innovations that accelerate the clean energy revolution.',
    },
    {
      icon: <Recycle className="w-6 h-6 text-cyan-400" />,
      title: 'Sustainable Future',
      desc: 'Every Enthusiast project is guided by sustainability — from hydrogen systems to eco-friendly consumer products.',
    },
  ]
  export const timeline = [
    {
      year: 'Early 2000s',
      text: `Mr. Peck began investigating hydrogen as a potential energy source. One of his early inventions, inspired by Felix Wankel's rotary engine concepts, required a continuous hydrogen feed — something unavailable at the time. Limited storage options and high costs forced him to shelve the project for nearly a decade, though his passion for research and innovation never stopped.`,
    },
    {
      year: '2017',
      text: `Dr. Roger Billings challenged Mr. Peck to modify his design using Nikola Tesla’s turbine principles to improve efficiency — but warned, “There is not enough hydrogen on earth to run it.” This challenge reignited Mr. Peck’s pursuit of a breakthrough.`,
    },
    {
      year: '2021',
      text: `Dr. Billings once again challenged Mr. Peck — this time, to create something entirely of his own vision. That moment became the turning point, leading to a new era of discovery that laid the foundation for Enthusiast Hydrogen and its groundbreaking technologies.`,
    },
  ]