import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Project Management Tools",
      skills: [
        { name: "Jira", icon: "🎯" },
        { name: "Trello", icon: "📋" },
        { name: "MS Project", icon: "📊" }
      ]
    },
    {
      title: "Agile & Scrum Knowledge",
      skills: [
        { name: "Scrum Framework", icon: "🔄" },
        { name: "Kanban Boards", icon: "📌" }
      ]
    },
    {
      title: "Software Development Understanding",
      skills: [
        { name: "SDLC", icon: "⚙️" },
        { name: "Basic Coding Concepts", icon: "💻" }
      ]
    },
    {
      title: "Database & Reporting Basics",
      skills: [
        { name: "SQL Basics", icon: "🗄️" },
        { name: "Excel for Reporting", icon: "📈" }
      ]
    },
    {
      title: "Technical Documentation",
      skills: [
        { name: "Writing User Stories", icon: "📝" },
        { name: "Creating Diagrams (UML/ER)", icon: "🔗" }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600">Technologies and methodologies I work with</p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="text-4xl mb-4">{skill.icon}</div>
                    <h4 className="text-lg font-medium text-gray-900">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills