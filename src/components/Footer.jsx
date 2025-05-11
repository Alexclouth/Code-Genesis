import { FaTelegram, FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import img1 from "../assets/1-removebg-preview (1).png";


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-5 px-14 bottom-0">
      <h2 className="text-3xl font-bold mb-2">Ready to start your coding journey?</h2>
      <p className="text-lg mb-5">
        Join CodeGenesis today and unlock your full potential with our hands-on coding courses.
      </p>
      <img 
      src={img1}
        className="w-2/6 mx-auto "
        alt="img"
      /> 

      {/* Copyright and Social Icons */}
      <section className="mt-5 flex flex-col md:flex-row justify-between items-center pt-5 border-t-2 border-gray-400">
        <h1>© 2025 Sand. All rights reserved.</h1>
        <div className="flex gap-4 text-2xl">
          <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
          <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com/yourhandle" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
        </div>
      </section>
    </footer>
  );
}
