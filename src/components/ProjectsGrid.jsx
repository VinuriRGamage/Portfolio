import { motion } from 'framer-motion'

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform Migration",
      description: "Led the migration of legacy e-commerce system to modern cloud-based platform, improving performance by 40% and reducing operational costs by 25%.",
      role: "Lead Project Manager",
      responsibilities: "Coordinated cross-functional teams, managed stakeholder communications, risk assessment, and timeline delivery",
      technologies: ["Agile", "Jira", "MS Project", "Scrum"],
      link: "#"
    },
    {
      id: 2,
      name: "Mobile App Development Project",
      description: "Managed end-to-end development of customer-facing mobile application with 50K+ downloads in first quarter post-launch.",
      role: "Senior Project Manager",
      responsibilities: "Sprint planning, backlog management, quality assurance coordination, and client relationship management",
      technologies: ["Scrum", "Trello", "Kanban", "Agile"],
      link: "#"
    },
    {
      id: 3,
      name: "Digital Transformation Initiative",
      description: "Orchestrated company-wide digital transformation affecting 200+ employees, streamlining workflows and increasing productivity by 30%.",
      role: "Project Manager",
      responsibilities: "Change management, training coordination, process optimization, and progress tracking",
      technologies: ["MS Project", "Jira", "Agile", "Waterfall"],
      link: "#"
    },
    {
      id: 4,
      name: "Data Analytics Dashboard",
      description: "Delivered comprehensive business intelligence dashboard enabling real-time decision making for executive team.",
      role: "Technical Project Manager",
      responsibilities: "Requirements gathering, vendor management, testing coordination, and user acceptance management",
      technologies: ["Agile", "Jira", "SQL", "Scrum"],
      link: "#"
    },
    {
      id: 5,
      name: "Customer Support System Upgrade",
      description: "Successfully upgraded legacy customer support system, reducing response time by 60% and improving customer satisfaction scores.",
      role: "Project Manager",
      responsibilities: "Timeline management, resource allocation, stakeholder communication, and post-implementation support",
      technologies: ["Trello", "Kanban", "Agile", "MS Project"],
      link: "#"
    },
    {
      id: 6,
      name: "API Integration Project",
      description: "Managed integration of third-party APIs to enhance system functionality, completing project 2 weeks ahead of schedule.",
      role: "Technical Project Manager",
      responsibilities: "Technical coordination, documentation management, testing oversight, and deployment planning",
      technologies: ["Jira", "Scrum", "Agile", "Git"],
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
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">Role:</h4>
                <p className="text-gray-700 text-sm">{project.role}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Responsibilities:</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{project.responsibilities}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid