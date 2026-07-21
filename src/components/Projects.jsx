import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {

return(

<section
id="projects"
className="py-24 bg-[#0B1120] px-6"
>

<div className="max-w-7xl mx-auto">

<h2 className="text-5xl font-bold text-center">

Featured

<span className="text-cyan-400">

 Projects

</span>

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

{

projects.map((project,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*.2}}

whileHover={{y:-10}}

className="rounded-3xl overflow-hidden bg-[#111827] border border-cyan-500/20"

>

<img

src={project.image}

className="h-56 w-full object-cover"

/>

<div className="p-6">

<h3 className="text-2xl font-bold">

{project.title}

</h3>

<p className="text-gray-400 mt-4">

{project.description}

</p>

<div className="flex flex-wrap gap-2 mt-6">

{

project.tech.map((tech)=>(

<span

key={tech}

className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"

>

{tech}

</span>

))

}

</div>

<div className="flex gap-5 mt-8">

<a

href={project.github}

target="_blank"

className="flex items-center gap-2 hover:text-cyan-400"

>

<FaGithub/>

GitHub

</a>

<a

href={project.demo}

className="flex items-center gap-2 hover:text-cyan-400"

>

<FaExternalLinkAlt/>

Live Demo

</a>

</div>

</div>

</motion.div>

))

}

</div>

</div>

</section>

)

}