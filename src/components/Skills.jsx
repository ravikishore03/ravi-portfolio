import { motion } from "framer-motion";

import {
 FaJava,
 FaPython,
 FaReact,
 FaHtml5,
 FaCss3Alt,
 FaGitAlt,
 FaGithub,
 FaNodeJs
} from "react-icons/fa";

import {
 SiJavascript,
 SiMysql,
 SiFlask,
 SiTailwindcss
} from "react-icons/si";

const skills=[
{icon:<FaJava/>,name:"Java"},
{icon:<FaPython/>,name:"Python"},
{icon:<SiJavascript/>,name:"JavaScript"},
{icon:<FaHtml5/>,name:"HTML5"},
{icon:<FaCss3Alt/>,name:"CSS3"},
{icon:<FaReact/>,name:"React"},
{icon:<SiTailwindcss/>,name:"Tailwind"},
{icon:<SiFlask/>,name:"Flask"},
{icon:<FaNodeJs/>,name:"Node.js"},
{icon:<SiMysql/>,name:"MySQL"},
{icon:<FaGitAlt/>,name:"Git"},
{icon:<FaGithub/>,name:"GitHub"},
];

export default function Skills(){

return(

<section
id="skills"
className="py-24 px-6 bg-[#050816]"
>

<div className="max-w-7xl mx-auto">

<h2
className="text-center text-5xl font-bold"
>
Technical
<span className="text-cyan-400">
 Skills
</span>
</h2>

<div className="grid
grid-cols-2
sm:grid-cols-3
md:grid-cols-4
lg:grid-cols-6
gap-8
mt-20">

{
skills.map((skill,index)=>(

<motion.div

key={index}

initial={{opacity:0,scale:.5}}

whileInView={{opacity:1,scale:1}}

transition={{
delay:index*.05
}}

whileHover={{
y:-10,
scale:1.05
}}

className="bg-[#111827]
rounded-2xl
p-8
flex
flex-col
items-center
border
border-cyan-500/20
hover:border-cyan-400"

>

<div className="text-5xl text-cyan-400">

{skill.icon}

</div>

<h3
className="mt-5 font-semibold"
>

{skill.name}

</h3>

</motion.div>

))
}

</div>

</div>

</section>

)

}