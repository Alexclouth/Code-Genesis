import imgA from "../assets/img3.jpg";
import imgB from "../assets/img3.jpg";
import imgC from "../assets/img3.jpg";

const instructors = [
  {
    name: "Alazer Gebrekidan",
    image: imgA,
    education: "3rd Year Information Systems, Addis Ababa University",
    description:
      "Frontend specialist and ALX Software Engineering graduate. Alazer blends design thinking with technical depth to build seamless, user-first web experiences. He’s deeply passionate about full-stack development, UI/UX design, and empowering others through tech education.",
  },
  {
    name: "Senay Frehiwot",
    image: imgB,
    education: "2nd Year Computer Science, Unity University",
    description:
      "Backend guru and ALX Software Engineering graduate focused on building powerful and scalable web solutions. Senay’s strong interest in full-stack development, cloud integration, and API design makes him a great guide for backend mastery.",
  },
  {
    name: "Yonas Tesfaye",
    image: imgC,
    education: "2nd Year Economics, Unity University",
    description:
      "Tech-savvy creative and digital strategist with a deep love for video editing, graphics, and emerging technologies. Yonas focuses on the intersection of business and tech—applying digital tools in marketing and e-commerce to drive impact and innovation.",
  },
];

export default function Instructors() {
  return (
    <section className="py-16 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Instructors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-10 px-0 md:px-20">
          {instructors.map((instructor, idx) => (
            <div
              key={idx}
              className="flex bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="p-1 rounded-2xl w-2/4 h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-4xl font-semibold mb-1 text-purple-800 dark:text-purple-400">
                  {instructor.name}
                </h3>
                <p className="text-lg text-gray-500 dark:text-gray-300 mb-3 italic">
                  {instructor.education}
                </p>
                <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed">
                  {instructor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
