import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] py-10 text-center">

      <div className="flex justify-center gap-8 text-3xl mb-6">

        <a
          href="https://github.com/ravikishore03"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/ravi-kishore-652088350/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-cyan-400"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:gravikishore50@gmail.com"
          className="hover:text-cyan-400"
        >
          <FaEnvelope />
        </a>

      </div>

      <p className="text-gray-400">
        © {new Date().getFullYear()} Ravi Kishore. All Rights Reserved.
      </p>

    </footer>
  );
}