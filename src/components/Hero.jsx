import { motion } from 'framer-motion'
import heroPhoto from '../assets/hero_photo.jpg'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1dMqNb0llCdW-1sZMz3FMuv_H-20svn1p/view?usp=sharing', '_blank')
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"
            >
              Vinuri Ridmika
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-blue-600 font-medium mb-6"
            >
              Project Manager
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Passionate project manager with expertise in leading cross-functional teams, 
              delivering successful projects on time, and driving organizational growth through 
              strategic planning and execution.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Download Resume
              </motion.button>
            </motion.div>
          </div>
          
          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <img 
              src={heroPhoto} 
              alt="Vinuri Ridmika" 
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero