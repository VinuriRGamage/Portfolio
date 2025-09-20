import { motion } from 'framer-motion'

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: "Atlassian Agile Project Management Professional Certificate",
      issued: "September 27, 2024",
      link: "https://media.licdn.com/dms/image/v2/D5622AQHvowUaF8BlZw/feedshare-shrink_800/feedshare-shrink_800/0/1727438208134?e=1761177600&v=beta&t=3YU4DEPYObdB0SAKL55XEufuhm28PfWFpEhngqoZH-0",
      icon: "🎓"
    },
    {
      id: 2,
      name: "Cert Prep: Scrum Master (2018)",
      issued: "June 30, 2024",
      link: "https://media.licdn.com/dms/image/v2/D5622AQHonV5QyYah-w/feedshare-shrink_800/feedshare-shrink_800/0/1719749834839?e=1761177600&v=beta&t=uu_O8tnd0k7qt4wjXgx0TRtH3knpzivl2jqLJi6AVxk",
      icon: "🏆"
    },
    {
      id: 3,
      name: "Technical Product Management",
      issued: "September 25, 2024",
      link: "https://media.licdn.com/dms/image/v2/D5622AQFVPtmX-mpiaQ/feedshare-shrink_800/feedshare-shrink_800/0/1727290382025?e=1761177600&v=beta&t=Lg3tdTFOjEo0N2ps3Uaxhs4ZXPs6Ilp2MDnvmcXbT04",
      icon: "📊"
    },
    {
      id: 4,
      name: "Agile Project Management with Jira Cloud: Projects, Boards, and Issues",
      issued: "September 24, 2024",
      link: "https://media.licdn.com/dms/image/v2/D5622AQH_F1QitUaIlQ/feedshare-shrink_800/feedshare-shrink_800/0/1727155480825?e=1761177600&v=beta&t=GsZrbERK9bicAmXIsVZmmL2GfHnl0qg-mqxAX3pFrDs",
      icon: "⚡"
    },
    {
      id: 5,
      name: "Agile Project Management with Jira Cloud: 2 Lean and Agile Processes",
      issued: "September 24, 2024",
      link: "https://media.licdn.com/dms/image/v2/D5622AQELFA1F2TdA_Q/feedshare-shrink_800/feedshare-shrink_800/0/1727186006656?e=1761177600&v=beta&t=eJA4rtQIqMHjgBr3V9Q-GF-PX2V7zczmXSCbwiesdME",
      icon: "📝"
    },
    {
      id: 6,
      name: "Agile Project Management with Jira Cloud: 3 Advanced Topics",
      issued: "September 24, 2024",
      link: "https://media.licdn.com/dms/image/v2/D5622AQHlCLt_VZMToQ/feedshare-shrink_800/feedshare-shrink_800/0/1727186014785?e=1761177600&v=beta&t=kLDGlyGr0bWVmkY-qUIqhAPYitVjd9C0ipSc8I4NsJI",
      icon: "🚀"
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates & Licenses</h2>
          <p className="text-lg text-gray-600">Professional certifications and achievements</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col h-full"
            >
              <div className="flex items-start space-x-4 mb-4 flex-1">
                <div className="text-3xl">{certificate.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{certificate.name}</h3>
                  <p className="text-gray-600 text-sm">Issued: {certificate.issued}</p>
                </div>
              </div>
              
              <motion.a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-auto"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates