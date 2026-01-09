import { PortfolioData } from './types';

export const PORTFOLIO_DATA: Record<string, PortfolioData> = {
  es: {
    name: "Leonardo E. Muñoz",
    title: "Analista Programador Computacional",
    location: "Chile 🇨🇱",
    about: "Graduado de Analista Programador Computacional enfocado en el área de Aseguramiento de Calidad de Software (QA). Me motiva la mejora continua, la precisión técnica y garantizar la confiabilidad de los proyectos. Me considero una persona organizada, responsable y proactiva, con fuerte capacidad de análisis y trabajo colaborativo.",
    email: "leonfern.munoz@gmail.com",
    linkedin: "https://www.linkedin.com/in/leonfernmunoz",
    experience: [
      {
        company: "ACL",
        role: "Trainee QA - Programa Profesionales Jóvenes (PPJ)",
        period: "Octubre 2024 - Actualidad",
        description: [
          "Desarrollo de plataforma E-commerce 'KitStore' usando React.js, Tailwind CSS, Spring Boot y PostgreSQL.",
          "Rol de Líder Técnico QA en proyecto 'SafeMine AI' bajo metodología Scrum, coordinando equipo de 12 personas.",
          "Elaboración de historias de usuario bajo criterios INVEST y definición de criterios de aceptación.",
          "Gestión de tiempos, herramientas y nivelación de conocimientos dentro del equipo QA."
        ],
        logo: "ACL.jpg"  // <-- CORREGIDO (sin /)
      },
      {
        company: "Test Group S.A.",
        role: "Pasantía Analista QA",
        period: "Julio - Septiembre 2024",
        description: [
          "Experiencia en pruebas manuales y automatización con Selenium y Eclipse.",
          "Uso de herramientas de CI/CD y calidad como Jenkins, JMeter y SonarQube Cloud.",
          "Pruebas de API utilizando Postman."
        ],
        logo: "TestG.png" // <-- CORREGIDO (sin /)
      },
      {
        company: "Soluciones (AVOS Tech Company)",
        role: "Práctica Profesional | Desarrollo de Negocio",
        period: "Agosto - Octubre 2023",
        description: [
          "Ingesta y almacenamiento de datos en Azure Cloud.",
          "Desarrollo de sistemas de automatización internos.",
          "Elaboración de manuales técnicos para Azure OpenAI usando Python."
        ],
        logo: "AVOS.jpg" // <-- CORREGIDO (sin /)
      }
    ],
    skills: [
      { name: "Python", icon: "🐍", category: "languages" },
      { name: "C#", icon: "🎯", category: "languages" },
      { name: "Java", icon: "☕", category: "languages" },
      { name: "MySQL", icon: "🐬", category: "tools" },
      { name: "PostgreSQL", icon: "🐘", category: "tools" },
      { name: "Spring Boot", icon: "🍃", category: "tools" },
      { name: "React.js", icon: "⚛️", category: "tools" },
      { name: "Selenium", icon: "🧪", category: "qa" },
      { name: "Apache JMeter", icon: "⚖️", category: "qa" },
      { name: "Postman", icon: "🚀", category: "tools" },
      { name: "Jenkins", icon: "👷", category: "tools" },
      { name: "Azure Cloud", icon: "☁️", category: "tools" },
      { name: "Power BI", icon: "📊", category: "tools" },
      { name: "Adaptabilidad", icon: "🔄", category: "soft" },
      { name: "Liderazgo QA", icon: "📋", category: "soft" }
    ],
    projects: [
      {
        title: "KitStore E-commerce",
        description: "Plataforma completa de venta de kits funcionales con arquitectura moderna (React + Spring Boot).",
        tech: ["React", "Tailwind", "Spring Boot", "PostgreSQL"],
        isHighlight: true,
      },
      {
        title: "SafeMine AI",
        description: "Simulación de proyecto empresarial para prevención sísmica en minería, liderando el equipo de QA.",
        tech: ["Scrum", "QA Leadership", "Python", "FastAPI"],
        isHighlight: true,
      },
      {
        title: "Portafolio Personal",
        description: "Desarrollo de portafolio web para mostrar habilidades y trayectoria profesional.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        link: "https://github.com/srLeon23/mi-portafolio-web",
      }
    ],
    certifications: [
      "Inmersión IA + Google Gemini (Septiembre 2025)",
      "JAVA Master con IntelliJ - Udemy (Septiembre 2025)",
      "Master en Pruebas de Rendimiento JMeter (Septiembre 2025)",
      "Introducción a Selenium - Simplilearn (Junio 2025)",
      "Python - Santander Open Academy (Marzo 2025)",
      "Power BI - Santander Open Academy (Octubre 2024)"
    ]
  },
  en: {
    name: "Leonardo E. Muñoz",
    title: "Computer Programming Analyst",
    location: "Chile 🇨🇱",
    about: "Computer Programming Analyst graduate focused on Software Quality Assurance (QA). I am driven by continuous improvement, technical precision, and ensuring project reliability. I consider myself an organized, responsible, and proactive individual with strong analytical and collaborative skills.",
    email: "leonfern.munoz@gmail.com",
    linkedin: "https://www.linkedin.com/in/leonfernmunoz",
    experience: [
      {
        company: "ACL",
        role: "Trainee QA - Young Professionals Program (PPJ)",
        period: "October 2024 - Present",
        description: [
          "Development of 'KitStore' E-commerce platform using React.js, Tailwind CSS, Spring Boot, and PostgreSQL.",
          "Technical QA Lead role in 'SafeMine AI' project under Scrum methodology, coordinating a team of 12.",
          "Creation of user stories following INVEST criteria and defining acceptance criteria.",
          "Time management, tool selection, and knowledge leveling within the QA team."
        ],
        logo: "ACL.jpg" // <-- CORREGIDO (sin /)
      },
      {
        company: "Test Group S.A.",
        role: "QA Analyst Internship",
        period: "July - September 2024",
        description: [
          "Experience in manual and automation testing with Selenium and Eclipse.",
          "Utilized CI/CD and quality tools such as Jenkins, JMeter, and SonarQube Cloud.",
          "API testing using Postman."
        ],
        logo: "TestG.png" // <-- CORREGIDO (sin /)
      },
      {
        company: "Soluciones (AVOS Tech Company)",
        role: "Professional Internship | Business Development",
        period: "August - October 2023",
        description: [
          "Data ingestion and storage in Azure Cloud.",
          "Development of internal automation systems.",
          "Creation of technical manuals for Azure OpenAI using Python."
        ],
        logo: "AVOS.jpg" // <-- CORREGIDO (sin /)
      }
    ],
    skills: [
      { name: "Python", icon: "🐍", category: "languages" },
      { name: "C#", icon: "🎯", category: "languages" },
      { name: "Java", icon: "☕", category: "languages" },
      { name: "MySQL", icon: "🐬", category: "tools" },
      { name: "PostgreSQL", icon: "🐘", category: "tools" },
      { name: "Spring Boot", icon: "🍃", category: "tools" },
      { name: "React.js", icon: "⚛️", category: "tools" },
      { name: "Selenium", icon: "🧪", category: "qa" },
      { name: "Apache JMeter", icon: "⚖️", category: "qa" },
      { name: "Postman", icon: "🚀", category: "tools" },
      { name: "Jenkins", icon: "👷", category: "tools" },
      { name: "Azure Cloud", icon: "☁️", category: "tools" },
      { name: "Power BI", icon: "📊", category: "tools" },
      { name: "Adaptability", icon: "🔄", category: "soft" },
      { name: "QA Leadership", icon: "📋", category: "soft" }
    ],
    projects: [
      {
        title: "KitStore E-commerce",
        description: "Full e-commerce platform for functional kits with modern architecture (React + Spring Boot).",
        tech: ["React", "Tailwind", "Spring Boot", "PostgreSQL"],
        isHighlight: true,
      },
      {
        title: "SafeMine AI",
        description: "Business project simulation for seismic prevention in mining, leading the QA team.",
        tech: ["Scrum", "QA Leadership", "Python", "FastAPI"],
        isHighlight: true,
      },
      {
        title: "Personal Portfolio",
        description: "Web portfolio development to showcase skills and professional career.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        link: "https://github.com/srLeon23/mi-portafolio-web",
      }
    ],
    certifications: [
      "AI Immersion + Google Gemini (September 2025)",
      "JAVA Master with IntelliJ - Udemy (September 2025)",
      "Performance Testing Master with JMeter (September 2025)",
      "Intro to Selenium - Simplilearn (June 2025)",
      "Python - Santander Open Academy (March 2025)",
      "Power BI - Santander Open Academy (October 2024)"
    ]
  }
};