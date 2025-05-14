export default function Features() {
  return (
    <section className="px-6 py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Why Learn With Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-purple-100 dark:border-purple-500/20">
            <div className="text-4xl mb-4 text-purple-600">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Accelerated Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Master web and software development quickly with our hands-on, project-based curriculum and mentorship approach.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-pink-100 dark:border-pink-500/20">
            <div className="text-4xl mb-4 text-pink-500">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Real-World Projects</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Build stunning, real-world applications that showcase your front-end and back-end skills using tools like Tailwind and React.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100 dark:border-blue-500/20">
            <div className="text-4xl mb-4 text-blue-500">⚙️</div>
            <h3 className="text-xl font-semibold mb-2">Industry Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Learn to work with APIs, GitHub, databases, and deployment platforms — just like professional developers.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-yellow-100 dark:border-yellow-500/20">
            <div className="text-4xl mb-4 text-yellow-500">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Career-Ready Skills</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Gain skills in secure coding, clean architecture, and version control — everything you need to succeed in tech careers.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-green-100 dark:border-green-500/20">
            <div className="text-4xl mb-4 text-green-500">📱</div>
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Study at your pace — whether on desktop or mobile — with responsive lessons and a supportive learning community.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-indigo-100 dark:border-indigo-500/20">
            <div className="text-4xl mb-4 text-indigo-500">📚</div>
            <h3 className="text-xl font-semibold mb-2">Clear Curriculum</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Follow a structured, well-documented roadmap that covers HTML, CSS, JavaScript, backend technologies, and more.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
