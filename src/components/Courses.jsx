import seImage from '../assets/2Q== (1).jpg';
import frontendImage from '../assets/Flux_Dev_A_modern_and_futuristic_workspace_setup_for_coding_ed_0.jpg';
import backendImage from '../assets/Leonardo_Lightning_XL_A_wide_shoot_or_long_shoot_of_a_group_of_1.jpg';

export default function Courses() {
  return (
    <section className="px-6 py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Our Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Software Engineering Foundations */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={seImage} alt="Software Engineering" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">SE Engineering Foundations</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Master the core principles of computer science with hands-on experience in:
              <ul className="list-disc list-inside mt-2">
                <li>C Programming</li>
                <li>Data Structures & Algorithms</li>
                <li>Fundamental Bash Scripting</li>
              </ul>
              This track is perfect for building strong logic, problem-solving, and system-level understanding.
            </p>
          </div>
        </div>

        {/* Front End Web Development */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={frontendImage} alt="Front End Development" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">Front End Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Learn how to design stunning, responsive websites using:
              <ul className="list-disc list-inside mt-2">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>Tailwind CSS</li>
                <li>React.js</li>
              </ul>
              You’ll gain practical experience in crafting engaging user interfaces and interactive experiences.
            </p>
          </div>
        </div>

        {/* Back End Web Development */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img src={backendImage} alt="Backend Development" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">Back End Web Development</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Dive into server-side technologies and databases:
              <ul className="list-disc list-inside mt-2">
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>MySQL Database</li>
              </ul>
              Learn how to build robust APIs, manage data efficiently, and connect front-end apps to dynamic servers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
