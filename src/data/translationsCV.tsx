"use client";
import { Code, Database, Server, Package } from "lucide-react";

export const translationsCV = {
  th: {
    // ข้อมูลส่วนตัว
    name: "ซีรีน ยังปากน้ำ",
    position: "Junior Fullstack Developer",
    email: "seereen.2540@gmail.com",
    phone: "097-3532012",
    location: "สตูล, ประเทศไทย",
    github: "github.com/srseen",
    // ข้อมูลเกี่ยวกับฉัน
    about: "เกี่ยวกับฉัน",
    aboutText:
      "Junior Developer ที่สำเร็จการศึกษาปริญญาตรี สาขาวิศวกรรมเคมี จากมหาวิทยาลัยสงขลานครินทร์ แต่ได้ย้ายสายมาเขียนเว็บเพราะความชอบและความหลงใหลในการเขียนโค้ด ศึกษาด้วยตนเองอย่างต่อเนื่อง มีเป้าหมายที่จะพัฒนาตนเองให้เป็น Fullstack Developer ที่สามารถทำงานได้หลากหลาย",
    // ทักษะและประสบการณ์
    skills: "ความสามารถ",
    skillCategories: [
      {
        icon: <Code size={18} />,
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
      },
      {
        icon: <Server size={18} />,
        title: "Backend",
        skills: ["Express.js", "Nest.js", "Node.js"],
      },
      {
        icon: <Database size={18} />,
        title: "Database",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
      },
      {
        icon: <Package size={18} />,
        title: "Tools",
        skills: ["Docker", "Git", "VS Code", "Postman"],
      },
    ],
    // ประสบการณ์การทำงาน
    experience: "ประสบการณ์การทำงาน",
    experiencelist: [
      {
        title: "Freelance Frontend Developer",
        company: "งานอิสระ",
        period: "2023 - ปัจจุบัน",
        locationCompany: "Remote",
        responsibilities: [
          "พัฒนาเว็บไซต์ด้วย React และ Next.js สำหรับลูกค้าต่างๆ",
          "ปรับปรุง UI/UX ให้ responsive และใช้งานง่าย",
          "ทำงานร่วมกับ Backend Developer ในการเชื่อมต่อ API",
          "แก้ไขบั๊กและปรับปรุงประสิทธิภาพของเว็บไซต์",
        ],
      },
    ],
    // โปรเจค
    projects: "โปรเจคที่น่าสนใจ",
    projectlist: [
      {
        title: "เว็บไซต์ E-commerce",
        description:
          "เว็บไซต์ขายของออนไลน์ด้วย React และ Next.js รองรับการชำระเงินและจัดการสินค้า",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        github: "github.com/srseen/ecommerce-project",
        demo: "project-demo.com",
      },
      {
        title: "แอพบันทึกรายจ่าย",
        description:
          "แอปพลิเคชันสำหรับบันทึกและจัดการรายรับ-รายจ่าย พร้อมกราฟแสดงผล",
        technologies: ["React", "Chart.js", "Express.js", "MongoDB"],
        github: "github.com/srseen/expense-tracker",
        demo: "expense-app.com",
      },
    ],
    // การศึกษา
    education: "การศึกษา",
    degree: "ปริญญาตรี สาขาวิศวกรรมเคมี",
    university: "มหาวิทยาลัยสงขลานครินทร์",
    year: "2018 - 2022",
    educationNote: "ย้ายสายมาเขียนเว็บเพราะความชอบและศึกษาด้วยตนเอง",
    // การส่งออก PDF
    exportPdf: "ส่งออก PDF",
    exporting: "กำลังส่งออก...",
    exportSuccess: "ส่งออก PDF สำเร็จ!",
    exportError: "เกิดข้อผิดพลาดในการส่งออก PDF",
  },
  en: {
    // Personal Information
    name: "Seereen Yangpaknam",
    position: "Junior Fullstack Developer",
    email: "seereen.2540@gmail.com",
    phone: "097-3532012",
    location: "Satun, Thailand",
    github: "github.com/srseen",
    // About Me
    about: "About Me",
    aboutText:
      "Junior Developer who graduated with a Bachelor's degree in Chemical Engineering from Prince of Songkla University. Transitioned to web development due to passion and self-taught programming skills. Continuously learning with the goal of becoming a versatile Fullstack Developer capable of handling various projects.",
    // Skills
    skills: "Skills",
    skillCategories: [
      {
        icon: <Code size={18} />,
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
      },
      {
        icon: <Server size={18} />,
        title: "Backend",
        skills: ["Express.js", "Nest.js", "Node.js"],
      },
      {
        icon: <Database size={18} />,
        title: "Database",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
      },
      {
        icon: <Package size={18} />,
        title: "Tools",
        skills: ["Docker", "Git", "VS Code", "Postman"],
      },
    ],
    // Work Experience
    experience: "Work Experience",
    experiencelist: [
      {
        title: "Freelance Frontend Developer",
        company: "Freelance",
        period: "2023 - Present",
        locationCompany: "Remote",
        responsibilities: [
          "Develop websites using React and Next.js for various clients",
          "Improve UI/UX to be responsive and user-friendly",
          "Collaborate with Backend Developers for API integration",
          "Fix bugs and improve website performance",
        ],
      },
    ],
    // Projects
    projects: "Featured Projects",
    projectlist: [
      {
        title: "E-commerce Website",
        description:
          "Online shopping website built with React and Next.js supporting payment processing and product management",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        github: "github.com/srseen/ecommerce-project",
        demo: "project-demo.com",
      },
      {
        title: "Expense Tracker App",
        description:
          "Application for recording and managing income-expenses with chart visualization",
        technologies: ["React", "Chart.js", "Express.js", "MongoDB"],
        github: "github.com/srseen/expense-tracker",
        demo: "expense-app.com",
      },
    ],
    // Education
    education: "Education",
    degree: "Bachelor's Degree in Chemical Engineering",
    university: "Prince of Songkla University",
    year: "2018 - 2022",
    educationNote:
      "Transitioned to web development through self-study and passion",
    // PDF Export
    exportPdf: "Export PDF",
    exporting: "Exporting...",
    exportSuccess: "PDF exported successfully!",
    exportError: "Error exporting PDF",
  },
};
