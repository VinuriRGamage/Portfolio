import { motion } from 'framer-motion'
import myPhoto from '../assets/my_photo.jpg'

const AboutMe = () => {
  const education = [
    {
      institution: "University of Colombo School of Computing",
      degree: "B.Sc. in Computer Science",
      duration: "Jan 2021 – May 2024"
    },
    {
      institution: "Aquinas College of Higher Studies",
      degree: "English Language and Literature",
      duration: ""
    },
    {
      institution: "IDM Achievers International Campus",
      degree: "Diploma in Office Applications and Web Designing",
      duration: "Sep 2019 – Aug 2020"
    },
    {
      institution: "Sacred Heart Convent",
      degree: "Primary & Secondary Education",
      duration: "2005 – 2018"
    }
  ]

  const workExperience = [
    {
      company: "Zincat Technologies",
      position: "Technical Coordinator",
      duration: "Mar 2025 – Present",
      location: "Mount Lavinia"
    },
    {
      company: "Aventude",
      position: "Project Manager Intern",
      duration: "Jan 2025 – Mar 2025",
      location: "Colombo 2"
    },
    {
      company: "Fcode Labs",
      position: "Project Manager Intern",
      duration: "Nov 2023 – Jul 2024",
      location: "Nugegoda"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
          
          {/* Introduction with Photo */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img 
                src={myPhoto} 
                alt="Vinuri Ridmika" 
                className="w-80 h-80 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a dedicated Project Manager with a Computer Science degree and over 1 year of 
                hands-on experience in managing complex projects and leading cross-functional teams 
                to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My expertise lies in implementing Agile methodologies, utilizing JIRA for project 
                tracking, and facilitating SCRUM ceremonies to ensure seamless project delivery. 
                I'm passionate about bridging the gap between technical teams and business stakeholders.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Agile', 'JIRA', 'SCRUM', 'Project Planning', 'Team Leadership', 'Risk Management'].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Work Experience & Education Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h3>
              <div className="space-y-4">
                {workExperience.map((work, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                          <h4 className="font-semibold text-gray-900">{work.company}</h4>
                          <span className="text-gray-500 text-xs">{work.location}</span>
                        </div>
                        <p className="text-green-600 font-medium text-sm mb-1">{work.position}</p>
                        <p className="text-gray-500 text-xs">{work.duration}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{edu.institution}</h4>
                        <p className="text-blue-600 font-medium text-sm mb-1">{edu.degree}</p>
                        {edu.duration && <p className="text-gray-500 text-xs">{edu.duration}</p>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe