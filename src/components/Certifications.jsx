import { motion } from "framer-motion";

const certificates=[

"AWS Academy Cloud Foundations",

"AICTE AI-ML Internship",

"DevOps & Cloud Automation",

"NPTEL Reinforcement Learning"

];

export default function Certifications(){

return(

<section
id="certifications"
className="py-24 bg-[#0B1120] px-6"
>

<div className="max-w-7xl mx-auto">

<h2 className="text-center text-5xl font-bold">

Certificates

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

{

certificates.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{delay:index*.1}}

whileHover={{scale:1.05}}

className="bg-[#111827] rounded-3xl p-8 border border-cyan-500/20"

>

<div className="text-6xl">

🏆

</div>

<h3 className="mt-6 text-xl font-bold">

{item}

</h3>

</motion.div>

))

}

</div>

</div>

</section>

)

}