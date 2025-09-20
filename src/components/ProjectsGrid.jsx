import { motion } from 'framer-motion'

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      name: "H2BIS – ERP Product (Zincat Technologies)",
      description: "ERP product with finance, HRIS, Sales, Inventory and POS operations",
      role: "",
      responsibilities: ["Requirement gathering", "Client coordination", "Documentation (Agreements proposal)"],
      technologies: ["Jira"],
      link: "#"
    },
    {
      id: 2,
      name: "Therezi – HRIS Process Management System (Fcode Labs)",
      description: "Human Resource Information System for managing employee data, payroll, and HR processes",
      role: "Project Manager Intern / Scrum Master ",
      responsibilities: ["Requirement gathering", "Sprint planning", "Creating wireframes", "Managing Jira boards", "Coordinating team tasks"],
      technologies: ["React", "JavaScript", "MySQL", "CSS"],
      link: "#"
    },
    {
      id: 3,
      name: "Dear Diary – Intern Training Platform (Fcode Labs)",
      description: "Web application to facilitate intern onboarding and training tracking",
      role: "Project Manager Intern ",
      responsibilities: ["Coordinated project planning", "Requirement gathering", "Sprint management"],
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      link: "#"
    },
    {
      id: 4,
      name: "Ramp Up - Intern Training Project (Fcode Labs)",
      description: "Platform for managing & tracking intern training modules and progress reports.",
      role: "Project Manager Intern",
      responsibilities: ["Sprint reporting", "Coordinated tasks with development team", "Collected Feedback"],
      technologies: ["Jira", "Agile"],
      link: "#"
    },
    {
      id: 5,
      name: "Compose Glow – Form Customization Platform (Aventude)",
      description: "Platform for creating and customizing organizational forms",
      role: "Project Manager Intern / Scrum Master ",
      responsibilities: ["Managed project timelines", "Jira boards management", "Sprint reporting", "Stakeholder communication"],
      technologies: ["Jira", "Trello", "Confluence"],
      link: "#"
    },
    {
      id: 6,
      name: "CareFello – Elder Care Management System",
      description: "A web-based system to manage elderly care, appointments, and caregiver interactions",
      role: "University Project Contributor",
      responsibilities: ["Developed frontend UI", "Integrated backend APIs", "Participated in testing and deployment"],
      technologies: ["React", "Spring Boot", "PostgreSQL"],
      link: "#"
    },
    {
      id: 7,
      name: "Krushi Arunalu – Supply Chain Management System",
      description: "Web-based system to manage purchase and sales of agri and crop products",
      role: "University Project Contributor",
      responsibilities: ["Developed customer-facing portal", "Managed database integration", "Ensured responsive design"],
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600">Successful projects I've managed and delivered</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {project.role && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Role:</h4>
                  <p className="text-gray-700 text-sm">{project.role}</p>
                </div>
              )}
              
              {project.responsibilities && project.responsibilities.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Responsibilities:</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {project.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid