import { motion } from "framer-motion";

const education = [

{
year:"2023 - 2027",
title:"B.Tech Artificial Intelligence & Machine Learning",
school:"Malla Reddy University",
cgpa:"CGPA : 8.54"
},

{
year:"2021 - 2023",
title:"Intermediate",
school:"Sri Chaitanya Junior College",
cgpa:"80.1%"
},

{
year:"2021",
title:"SSC",
school:"Gowtham High School",
cgpa:"100%"
}

];

export default function Education(){

return(

<section
id="education"
className="py-24 bg-[#050816] px-6"
>

<div className="max-w-5xl mx-auto">

<h2 className="text-center text-5xl font-bold">

Education

</h2>

<div className="mt-20 relative border-l-2 border-cyan-400">

{

education.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,x:-40}}

whileInView={{opacity:1,x:0}}

transition={{delay:index*.2}}

className="ml-8 mb-14"

>

<div className="absolute -left-[11px] w-5 h-5 rounded-full bg-cyan-400"></div>

<p className="text-cyan-400">

{item.year}

</p>

<h3 className="text-2xl font-bold mt-2">

{item.title}

</h3>

<p className="text-gray-400 mt-2">

{item.school}

</p>

<p className="text-white mt-1">

{item.cgpa}

</p>

</motion.div>

))

}

</div>

</div>

</section>

)

}