const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600 mb-8">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-medium text-gray-900 w-20">Email:</span>
              <span className="text-gray-600">your.email@example.com</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-900 w-20">Phone:</span>
              <span className="text-gray-600">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-900 w-20">Location:</span>
              <span className="text-gray-600">Your City, Country</span>
            </div>
          </div>
        </div>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea 
              rows="4" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact