const base = import.meta.env.BASE_URL

export const contactInfo = {
  email: "kavyasaraswat4@gmail.com",
  phone: "9634998623",
  linkedin: "https://www.linkedin.com/in/kavya-saraswat-5b4796313/",
  github: "https://github.com/KavyaSaraswat23",
  // Resume Drive fix
  resume: "https://drive.google.com/drive/folders/152hgMUwjX8kkZE__B-bBec2xdpK0Ni31?usp=drive_link"
}

export const profileInfo = {
  name: "Kavya Saraswat",
  username: "KavyaSaraswat23",
  avatar: "https://github.com/KavyaSaraswat23.png",
  bio: "Data analytics enthusiast with strong skills in Python, Excel, Tableau, Looker Studio, and Google Sheets, focused on extracting insights, building dashboards, and solving real-world problems using data.",
  location: "Newton School of Technology, Rishihood University"
}

export const skills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "MySQL",
  "Next JS",
  "React",
  "Node.js",
  "Express JS",
  "Prisma ORM",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GenAI",
  "LangChain",
  "LangGraph",
  "Matplotlib",
  "NumPy",
  "Pandas",
  "Excel",
  "Git and Github",
  "MongoDB",
  "Tailwind CSS",
  "UI/UX"
]

const projects = [

  {
    name: "OPTIFLOW",
    description: "An in-depth data analysis of OPTIFLOW market trends and pricing strategies using Excel and Google Sheets to extract actionable business insights.",
    image: `https://media.licdn.com/dms/image/v2/D4D12AQFkbj5poAG2Ng/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686213306356?e=2147483647&v=beta&t=YPobJWgCiXq26wk_HGloOLvt_2Fkdv_M7AClebbi21s`,
    tags: ["Google Sheets", "Excel"],
    github: "https://github.com/KavyaSaraswat23/OPTIFLOW",
    live: ""
  },
  {
    name: "OLA Analysis",
    description: "A comprehensive data analysis project exploring Ola cab service patterns, ride volumes, cancellations, and revenue insights.",
    image: `https://media.geeksforgeeks.org/wp-content/uploads/20250123195041670889/Ola_Dashboard.jpeg`,
    tags: ["Google Sheets", "Data Analytics"],
    github: "https://github.com/KavyaSaraswat23/Ola_Analysis",
    live: "https://public.tableau.com/views/OLABusinessDashboardAnalysis_17774543848430/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    name: "HLWD Stories Analysis",
    description: "A cinematic data analysis of Hollywood movie trends, box office performance, and audience ratings using Python and Tableau.",
    image: `${base}Hollywood.png`,
    tags: ["Python", "Data Analytics"],
    github: "https://github.com/KavyaSaraswat23/HLWD-Stories",
    live: "https://public.tableau.com/views/HollywoodInsights_ACinematicAnalysis_17774557864230/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" // Placeholder - update with live link when available
  },
  {
    name: "House Sales Analysis",
    description: "A detailed analysis of house sales in King County, Washington, uncovering real estate pricing trends and property insights through interactive data visualization.",
    image: `${base}CredRisk.png`,
    tags: ["Excel", "Data Analytics"],
    github: "https://github.com/KavyaSaraswat23/House-Sales",
    live: "https://public.tableau.com/views/WashingtonKingCountyHouseSales_17774559363360/KingCountyHouseSales?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
]

export default projects
