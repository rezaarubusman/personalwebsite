import type { Skill } from "~/skills";

export const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    description: "Saya telah mempelajari mengenai ReactJS, yang merupakan sebuah library dari Javascript.",
    category: "Frontend",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    id: "nodejs",
    name: "Node.js",
    description: "Saya telah mempelajari Node.js untuk menjalankan JS di server.",
    category: "Backend",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    id: "express",
    name: "Express.js",
    description: "Saya telah mempelajari Express.js sebagai salah satu framework Node.js.",
    category: "Backend",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    id: "postgre",
    name: "PostgreSQL",
    description: "Saya telah mempelajari PostgreSQL untuk keperluan database.",
    category: "Database",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_PostgreSQL.png",
  },
];
