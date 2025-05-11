export default function Features() {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-purple-100 dark:border-purple-500/20">
            <div className="text-4xl mb-4 text-purple-600">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Accelerate your projects with modern tools, reusable components, and a rapid development workflow tailored for efficiency.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-pink-100 dark:border-pink-500/20">
            <div className="text-4xl mb-4 text-pink-500">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Beautiful UI</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enjoy visually stunning, user-friendly interfaces powered by design systems and tools like Tailwind CSS and Figma.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100 dark:border-blue-500/20">
            <div className="text-4xl mb-4 text-blue-500">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Seamlessly connect with APIs, databases, and external services using clean architecture and scalable backend practices.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-yellow-100 dark:border-yellow-500/20">
            <div className="text-4xl mb-4 text-yellow-500">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Security is built into our core – from authentication and data validation to safe deployment and storage solutions.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-green-100 dark:border-green-500/20">
            <div className="text-4xl mb-4 text-green-500">📱</div>
            <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
            <p className="text-gray-600 dark:text-gray-300">
              All components and layouts are fully responsive and optimized to look great on desktops, tablets, and smartphones.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-indigo-100 dark:border-indigo-500/20">
            <div className="text-4xl mb-4 text-indigo-500">📚</div>
            <h3 className="text-xl font-semibold mb-2">Well Documented</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive documentation and clear code comments make it easy to understand, modify, and extend your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
