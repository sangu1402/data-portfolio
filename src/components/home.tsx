import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  Mail,
  Github,
  ExternalLink,
  Database,
  Code,
  BarChart3,
  Cloud,
  Brain,
  Zap,
  Terminal,
  Cpu,
  Shield,
  MapPin,
  Phone,
  Linkedin,
} from "lucide-react";

function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = {
    languages: [
      { name: "SQL", icon: Database, color: "text-neon-blue" },
      { name: "Python", icon: Code, color: "text-neon-cyan" },
      { name: "R", icon: BarChart3, color: "text-neon-purple" },
    ],
    visualization: [
      { name: "Tableau", icon: BarChart3, color: "text-neon-blue" },
      { name: "Power BI", icon: BarChart3, color: "text-neon-cyan" },
    ],
    databases: [
      { name: "PostgreSQL", icon: Database, color: "text-neon-purple" },
      { name: "MS SQL Server", icon: Database, color: "text-neon-blue" },
    ],
    cloud: [
      { name: "AWS", icon: Cloud, color: "text-neon-cyan" },
      { name: "Azure", icon: Cloud, color: "text-neon-blue" },
      { name: "Jenkins", icon: Cpu, color: "text-neon-purple" },
      { name: "Git", icon: Terminal, color: "text-neon-cyan" },
    ],
    concepts: [
      { name: "Data Wrangling", icon: Brain, color: "text-neon-blue" },
      { name: "Predictive Modeling", icon: Zap, color: "text-neon-purple" },
      { name: "Hypothesis Testing", icon: BarChart3, color: "text-neon-cyan" },
    ],
  };

  const projects = [
    {
      title: "Chelsea Street Bridge Notification System",
      description:
        "Built using FFNN & XGBoost to predict bridge lifts. MAE: 2.69 min | Top features: Vessel type, Rise time",
      insight: "Captures vessel effects with strong interpretability",
      dashboard:
        "https://public.tableau.com/app/profile/sangayya.rudrayya.hiremath/viz/ChelseaBridgeNotificationDashboard/Dashboard1",
      github:
        "https://github.com/sangu1402/Chelsea_Street_Bridge_Notification_System",
      backgroundImage: "/images/chelsea-bridge.png",
      color: "from-blue-900 to-cyan-900",
    },
    {
      title: "Connecticut Property Sales Trends",
      description:
        "Used 23 years of data (2001–2023). Created Tableau dashboard with KPIs and filters",
      insight: "Interactive regional property analysis",
      dashboard:
        "https://public.tableau.com/app/profile/sangayya.rudrayya.hiremath/viz/ConnecticutPropertySalesTrends/Dashboard1",
      github:
        "https://github.com/sangu1402/Connecticut_Property_Sales_Trends/tree/main",
      backgroundImage:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      color: "from-green-900 to-emerald-900",
    },
    {
      title: "Thyroid Cancer Risk Prediction",
      description:
        "Built classification models (Logistic, Random Forest). Tailored results for clinical decision support",
      insight: "Healthcare analytics for better outcomes",
      github: "https://github.com/sangu1402/Thyroid_Cancer_Risk_Prediction",
      backgroundImage: "/images/thyroid-cancer.png",
      color: "from-purple-900 to-pink-900",
    },
    {
      title: "Collision Trends in New York City (2012–2024)",
      description:
        "Tableau visuals on borough-wise collision patterns. Focused on 2021–2024 time frame",
      insight: "Public safety through data insights",
      dashboard:
        "https://public.tableau.com/app/profile/sangayya.rudrayya.hiremath/viz/NewYorkCollision2012-2024_17515748593600/Dashboard1",
      github: "https://github.com/sangu1402/Collison_Trends_In_NewYork_City",
      backgroundImage:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80",
      color: "from-red-900 to-orange-900",
    },
    {
      title: "Music Recommendation System Using KNN",
      description:
        "Used KNN to suggest songs based on audio features. Trained on Spotify dataset",
      insight: "Personalized music discovery",
      github:
        "https://github.com/sangu1402/Music_Recommendation_System_Using_KNN",
      backgroundImage:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      color: "from-indigo-900 to-purple-900",
    },
    {
      title: "Analysis of Trends and Patterns in Boston Crime Rates",
      description:
        "Identified crime trends and predictors. Informed public safety & policy recommendations",
      insight: "Data-driven policy insights",
      github:
        "https://github.com/sangu1402/Analysis_of_Trends_and_Patterns_In_Boston_Crime_Rates",
      backgroundImage:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
      color: "from-gray-900 to-slate-900",
    },
    {
      title: "Analysis of Amazon Customer Reviews using NLP",
      description:
        "Applied LDA on Amazon reviews. Extracted themes and visualized customer sentiment",
      insight: "Understanding customer voice",
      github:
        "https://github.com/sangu1402/Analysis_of_Amazon_Customer_Reviews_Using_NLP",
      backgroundImage:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      color: "from-yellow-900 to-amber-900",
    },
    {
      title: "Customize a Pre-trained Model for CV Classification",
      description:
        "Fine-tuned ResNet-18 on flower dataset. Used PyTorch and transfer learning for classification",
      insight: "Computer vision meets botany",
      github:
        "https://github.com/sangu1402/Customize_A_Pre-trained_Model_for_CV_Classification",
      backgroundImage:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
      color: "from-pink-900 to-rose-900",
    },
  ];

  const certifications = [
    {
      name: "Advanced Certificate Program in Data Science",
      provider: "IIITB",
      details: "Apr 2024, GPA 3.89/4",
      link: "/uploads/Sangayya Rudrayya Hiremath-Transcript.pdf",
      backgroundImage:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      color: "from-purple-900 to-indigo-900",
    },
    {
      name: "Tableau A–Z",
      provider: "Udemy",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-421a2ab0-0306-44fe-9218-8cad01f83f87.pdf",
      backgroundImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      color: "from-blue-900 to-cyan-900",
    },
    {
      name: "Python (Basic)",
      provider: "HackerRank",
      link: "https://www.hackerrank.com/certificates/a873d3766a95",
      backgroundImage:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80",
      color: "from-green-900 to-emerald-900",
    },
    {
      name: "Python for Beginners",
      provider: "Udemy",
      link: "https://postimg.cc/bDLpWh44",
      backgroundImage:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
      color: "from-yellow-900 to-orange-900",
    },
    {
      name: "SQL and Power BI",
      provider: "Udemy",
      link: "https://postimg.cc/PCLJDP0J",
      backgroundImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      color: "from-red-900 to-pink-900",
    },
    {
      name: "Learning Excel 2019",
      provider: "LinkedIn",
      link: "https://postimg.cc/9RDWqSD9",
      backgroundImage:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      color: "from-gray-900 to-slate-900",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Work Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 py-20 pt-32">
        <div className="absolute inset-0">
          <img
            src="/images/My_theme_photo.jpeg"
            alt="Sangayya Hiremath"
            className="w-full h-full object-cover opacity-30 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-blue-900/70"></div>
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/images/My_theme_photo.jpeg"
              alt="Sangayya Hiremath"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-2xl object-cover"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            SANGAYYA
            <span className="block text-blue-400">HIREMATH</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Data Analyst & Business Intelligence Expert
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transforming complex data into actionable insights through expertise
            in SQL, ETL pipelines, and data visualization. Currently pursuing an
            M.S. in Data Analytics at Northeastern University.
          </p>
        </div>
      </section>
      {/* About Me */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-8">ABOUT</h2>
              <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                  Data Analyst specializing in SQL, ETL pipelines, and business
                  intelligence. Currently pursuing an M.S. in Data Analytics at
                  Northeastern University.
                </p>
                <p>
                  With overall 4.5 years of experience in the healthcare and
                  banking sectors, I have worked on data engineering and
                  analytics solutions—building scalable ETL pipelines,
                  automating reporting workflows, and creating executive
                  dashboards using Tableau and Power BI. My strength lies in
                  understanding complex business needs and transforming data
                  into actionable insights that support informed
                  decision-making.
                </p>
                <div className="mt-8 flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-white font-semibold">Boston, MA 02135</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/My_photo1.jpeg"
                alt="Sangayya Hiremath"
                className="w-80 h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Software Skills, Soft Skills, Languages */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                SOFTWARE SKILLS
              </h3>
              <div className="space-y-4">
                {[
                  { name: "SQL", level: 90 },
                  { name: "Python", level: 80 },
                  { name: "Tableau", level: 90 },
                  { name: "Power BI", level: 80 },
                  { name: "Cloud (AWS & MS Azure)", level: 85 },
                  { name: "Statistical Modeling", level: 90 },
                  { name: "Machine Learning Concepts", level: 85 },
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div
                        className="bg-blue-400 h-1 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-6 mt-12">
                SOFT SKILLS
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Strong communicator",
                  "Data storytelling",
                  "Collaboration",
                  "Agile/Scrum",
                  "Problem-solving",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">LANGUAGES</h3>
              <div className="flex flex-wrap gap-2">
                {["English", "Kannada", "Hindi", "Telugu"].map(
                  (language, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      {language}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Center Column - Work Experience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                WORK EXPERIENCE
              </h3>

              {/* Company Header */}
              <div className="mb-8">
                <h4 className="text-white font-bold text-lg mb-2">
                  Tata Consultancy Services – Bengaluru
                </h4>
                <p className="text-gray-400 text-sm mb-6">
                  Oct 2019 – July 2024
                </p>
              </div>

              {/* Role Cards */}
              <div className="space-y-6">
                <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-white font-semibold mb-3">
                      Data Engineer – Johnson & Johnson
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>
                        • Built scalable ETL pipelines (PostgreSQL, Redshift,
                        AWS)
                      </li>
                      <li>
                        • Automated data workflows for supply chain optimization
                      </li>
                      <li>• Developed dashboards (Power BI, Tableau)</li>
                      <li>
                        • Managed CI/CD using Jenkins, Bitbucket, Control-M
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700 hover:border-blue-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-white font-semibold mb-3">
                      PLSQL Developer – Standard Chartered Bank
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>
                        • Migrated critical assets from IBM DB2 to PostgreSQL
                      </li>
                      <li>
                        • Wrote optimized SQL queries for business reporting
                      </li>
                      <li>
                        • Validated post-migration data accuracy and performance
                      </li>
                      <li>• Collaborated with Agile teams and DBAs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Resume Button */}
              <div className="mt-8">
                <Button
                  onClick={() =>
                    window.open("/Sangayya_Hiremath_DA.pdf", "_blank")
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </Button>
              </div>
            </div>

            {/* Right Column - Education & Hobbies */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">EDUCATION</h3>
              <div className="mb-12">
                <h4 className="text-white font-semibold mb-2">
                  Northeastern University – Boston, MA
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  M.S. in Data Analytics (Sep 2024 – Dec 2025)
                </p>
                <p className="text-gray-400 text-xs">
                  Relevant Courses: Intermediate Analytics, Database Management,
                  Tableau
                </p>
              </div>

              <h3 className="text-2xl font-bold text-white mb-8">
                HOBBIES & INTERESTS
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">
                    Recreated Sketch of Ratan Tata using Python (Sketchpy)
                  </h4>
                  <div className="flex space-x-4 mt-3">
                    <a
                      href="https://github.com/sangu1402/Ratan_Tata_Drawing_Using_Python"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-xs flex items-center space-x-1"
                    >
                      <Github className="h-3 w-3" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/sangayya-hiremath-5a0b28119_ratantata-pythonprogramming-sketchpy-activity-6974366243692646400-j_m5?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-xs flex items-center space-x-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span>Video</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🎵", label: "Music" },
                    { icon: "📷", label: "Photography" },
                    { icon: "🎨", label: "Design" },
                    { icon: "✈️", label: "Travel" },
                  ].map((hobby, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <span className="text-lg">{hobby.icon}</span>
                      </div>
                      <p className="text-xs text-gray-400">{hobby.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12">
            Projects – Wonders of Data
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <div
                  className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden`}
                >
                  {project.backgroundImage && (
                    <img
                      src={project.backgroundImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {project.dashboard && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="opacity-80 hover:opacity-100 bg-white/20 border-white/30 text-white hover:bg-white hover:text-gray-900"
                        onClick={() => window.open(project.dashboard, "_blank")}
                      >
                        <BarChart3 className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="opacity-80 hover:opacity-100 bg-white/20 border-white/30 text-white hover:bg-white hover:text-gray-900"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    {project.description}
                  </p>
                  <p className="text-xs text-blue-400 font-semibold">
                    {project.insight}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Certifications */}
      <section id="certifications" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12">
            CERTIFICATIONS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:border-blue-400 cursor-pointer transition-all duration-300 hover:scale-105 group overflow-hidden"
                onClick={() => window.open(cert.link, "_blank")}
              >
                <div
                  className={`h-32 bg-gradient-to-r ${cert.color} relative overflow-hidden`}
                >
                  {cert.backgroundImage && (
                    <img
                      src={cert.backgroundImage}
                      alt={cert.name}
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="h-12 w-12 text-white opacity-80" />
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors mb-2 text-sm">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">{cert.provider}</p>
                  {cert.details && (
                    <p className="text-xs text-gray-500 mb-2">{cert.details}</p>
                  )}
                  <ExternalLink className="h-4 w-4 mx-auto mt-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-white mb-12">CONTACTS</h2>

          {/* Single horizontal layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <a
                href="mailto:hiremath.sa@northeastern.edu"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                hiremath.sa@northeastern.edu
              </a>
            </div>

            {/* LinkedIn */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/sangayya-hiremath-5a0b28119"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* GitHub */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/sangu1402"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                github.com/sangu1402
              </a>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-400 text-sm">Boston, MA 02135</p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Sangayya Hiremath. Crafted with data and passion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
