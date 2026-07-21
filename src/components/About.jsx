import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:0.7 }}
          className="text-5xl font-bold text-center"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:.2 }}
          className="text-center text-gray-400 mt-6 max-w-4xl mx-auto leading-8 text-lg"
        >
          I'm <span className="text-cyan-400 font-semibold">Ravi Kishore</span>,
          a B.Tech student specializing in Artificial Intelligence &
          Machine Learning at Malla Reddy University.

          I enjoy building AI-powered applications,
          modern web applications and solving real-world problems
          using Java, Python, Machine Learning and React.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <motion.div
            whileHover={{ y:-10 }}
            className="bg-[#111827] p-8 rounded-3xl border border-cyan-500/20"
          >
            <FaUserGraduate
              className="text-5xl text-cyan-400 mb-6"
            />

            <h3 className="text-2xl font-bold">
              Education
            </h3>

            <p className="text-gray-400 mt-4">
              B.Tech in Artificial Intelligence &
              Machine Learning

              <br/><br/>

              Malla Reddy University

              <br/><br/>

              CGPA : 8.54
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y:-10 }}
            className="bg-[#111827] p-8 rounded-3xl border border-cyan-500/20"
          >

            <FaLaptopCode
              className="text-5xl text-cyan-400 mb-6"
            />

            <h3 className="text-2xl font-bold">
              Development
            </h3>

            <p className="text-gray-400 mt-4">
              Full Stack Web Development

              <br/><br/>

              React

              <br/>

              Flask

              <br/>

              Java

              <br/>

              Python
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y:-10 }}
            className="bg-[#111827] p-8 rounded-3xl border border-cyan-500/20"
          >

            <FaBrain
              className="text-5xl text-cyan-400 mb-6"
            />

            <h3 className="text-2xl font-bold">
              AI & ML
            </h3>

            <p className="text-gray-400 mt-4">
              Machine Learning

              <br/>

              NLP

              <br/>

              Scikit-Learn

              <br/>

              Pandas

              <br/>

              NumPy
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}