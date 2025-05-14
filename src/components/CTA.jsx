// components/CTASection.jsx
export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to start your coding journey?</h2>
      <p className="text-lg mb-6">
        Join CodeGenesis today and unlock your full potential with our hands-on coding courses.
      </p>
      <a 
        href="#signup" 
        className="bg-white text-blue-600 py-3 px-6 rounded-lg text-xl font-semibold transition-all hover:bg-blue-100"
      >
        Get Started
      </a>
    </section>
  );
}
