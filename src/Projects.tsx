import { Link } from "react-router-dom";
import BentoCard from "./components/BentoCard";
import { CardDescription, CardThumbnail, CardTitle } from "./components/BentoParts";
import { useEffect } from "react";
import { ProjectsData } from "./data/ProjectsData";
import {motion} from "framer-motion";
import { gridVariants } from "./components/BentoMotionVariants";


export default function Projects(){

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full flex justify-center items-center mt-4">
                <div className="xl:mx-40 mx-20 select-none pointer-events-none bg-primary/10 flex flex-col justify-center p-3 border-2 border-primary/20 rounded-2xl">
                    <h1 className="text-bright text-5xl font-display font-bold text-center">PROJECTS</h1>
                    <p className="text-muted font-display font-semibold text-center lg:text-left">Projects I have worked on, or am working on.
                        Click on a project to view more information.
                    </p>
                </div>
            </div>
         

            <motion.div 
                variants={gridVariants}
                initial="hidden"
                animate="visible"                
                className="flex-1 grid
                    grid-cols-1 md:grid-cols-2 xl:grid-cols-3
                    auto-rows-auto
                    grid-flow-dense
                    gap-3
                    px-6 lg:px-40 py-10">

                    {ProjectsData.filter(p => !p.hideFromProjectsPage).map((project) => {
                        return (
                            <Link
                                key={project.id}
                                to={`/projects/${project.id}`}
                            >
                               <BentoCard>
                                    <CardThumbnail image={project.thumbnailPath!} status={project.status}/>
                                    <CardTitle title={project.title} label={project.label}/>
                                    <CardDescription content={project.shortDescription!}/>
                                </BentoCard>
                            </Link>
                         
                        );
                    })}
            </motion.div>
        </div>
   
    )
}