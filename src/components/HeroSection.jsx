import img from '../assets/img1.jpg';

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage: "url('" + img + "')",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(128, 0, 128, 0.6), rgba(128, 0, 128, 0.4))',
        }}
      ></div>


      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-7xl font-bold mb-4 opacity-90">
          Learn. Build. Lead.
        </h1>
        <p className="text-2xl mb-6 font-semibold text-yellow-400">
          Join passionate students mastering the world of tech through collaboration and curiosity.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-purple-800 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
