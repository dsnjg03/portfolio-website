import BentoCard from "./components/BentoCard"

import logo_PubNub from './assets/logo/logo_pubnub.png';

import { CardDescription, CardLogo, CardThumbnail, CardTitle, MiniBentoCard } from "./components/BentoParts";
import { Button, ButtonTypes, LogoButton } from "./components/BentoButtons";

import {SiReact, SiDotnet, SiHtml5, SiPhp, SiMysql, SiGithub, SiNodedotjs, SiExpress, SiTailwindcss, SiMongodb, SiWordpress, SiSocketdotio, SiCss, SiSass, SiNextdotjs, SiVegas, SiUnity} from "react-icons/si";
import { PiMicrosoftExcelLogoFill, PiWindowsLogoFill } from "react-icons/pi";
import { AppWindow, Database, PanelsTopLeft, PcCase } from "lucide-react";
import { TbBrandAdobePhotoshop, TbBrandAdobePremier, TbBrandReactNative} from "react-icons/tb";
import { VscJson } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { Carousel } from "./components/Carousel";
import { ProjectsData } from "./data/ProjectsData";
import { useState } from "react";
import { ProjectModal } from "./components/ProjectModal";
import { motion } from "framer-motion";
import { gridVariants } from "./components/BentoMotionVariants";
import { useNavigate } from "react-router-dom";

interface SelectedProjectData{
    id:string,
    title:string,
    hasPage:boolean
};
export default function Home(){

    const [selectedProjectData, setSelectedProjectData] = useState<SelectedProjectData | null>(null);
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen">
        <motion.div 
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 grid
                grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4
                auto-rows-min
                grid-flow-dense
                gap-3
                px-6 md:px-12 lg:px-24 2xl:px-40 py-10">
            <BentoCard styleInsert="col-span-1 lg:col-span-3 xl:col-span-2 2xl:col-span-2 2xl:row-span-2 hover:brightness-110" disableHoverEvents addBorder>
                <div className="select-none h-full w-full relative">
                    <div className="flex flex-col mb-17">
                        <h1 className="text-5xl text-bright font-display font-bold leading-tight">
                            Hi, I'm <span className="text-accent">Domagoj</span>!
                        </h1>
                        <h2 className="text-4xl text-bright font-display font-bold leading-tight">
                            I am a self-taught developer, trained IT technician, tech enthusiast, and constant learner.
                        </h2>
                        <br/>
                          <h3 className="text-3xl text-bright font-display font-semibold leading-tight">
                            I specialize in building responsive <span className="text-accent">web applications</span> with React and Node.js,
                            and robust <span className="text-accent">desktop tools</span> with C#/.NET.
                        </h3>
                          <h3 className="text-3xl mt-4 text-bright font-display font-semibold leading-tight">
                            I enjoy exploring new technologies, experimenting with various projects, solving hard problems, and learning how
                            complex systems work behind the scenes.
                        </h3>
                        <br/>
                    </div>

                    <div className="h-16 absolute bottom-0 flex flex-col justify-center">
                        <Button 
                            clickFunction={() => navigate("/about")}
                            label="Read More"
                            type={ButtonTypes.Normal}
                        />
                    </div>
                </div>
            </BentoCard>
            <BentoCard styleInsert="col-span-1 lg:col-span-3 xl:col-span-1 2xl:col-span-1 2xl:row-span-2">
                <CardTitle 
                    title={"Currently Working On"}   
                />
                <Carousel items={ProjectsData.filter(p => p.isInProgress).map((project) => {
                    return (
                        <div
                            key={project.id}
                            className="cursor-pointer h-full w-full"
                            onClick={() => setSelectedProjectData({id:project.id, title:project.title, hasPage:!project.hideFromProjectsPage})}
                        >
                            <MiniBentoCard fullHeight={true}>
                                    <p className="font-display text-primary text-center font-bold text-xl uppercase">{project.title}</p>
                                    <CardThumbnail image={project.thumbnailPath!}/>
                                    <CardDescription content={project.shortDescription!}/>
                            </MiniBentoCard>       
                        </div>
                
                    )
                })}/>
            </BentoCard>
            <BentoCard styleInsert="col-span-1 lg:hidden block 2xl:block lg:col-span-2 2xl:col-span-1 2xl:row-span-1">
                <CardTitle 
                    title="Contact Me"
                />
                <div className="flex flex-wrap gap-4 w-full h-full items-center">
                        <LogoButton 
                        href="mailto:domagojsenjug03@gmail.com"
                        Icon={TfiEmail} label="E-mail"/>
                        <LogoButton 
                        href="https://github.com/dsnjg03"
                        Icon={SiGithub} label="GitHub"/>
                        <LogoButton 
                        href="https://www.linkedin.com/in/domagoj-%C5%A1enjug-99a847246/"
                        Icon={SlSocialLinkedin} label="LinkedIn"/>
                </div>
            </BentoCard>
            <BentoCard styleInsert="col-span-1 xl:col-span-2 lg:col-span-2 2xl:col-span-3 2xl:row-span-2">
                <CardTitle title="My Skills"/>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-2 p-2 w-full h-full">
                    <div className="flex flex-wrap flex-row gap-2 lg:row-span-1 lg:col-span-1 col-span-full row-span-1 justify-center items-center p-2 bg-primary/10 rounded-xl border border-primary/20">
                        <CardTitle label="Windows & Systems"/>
                        <CardLogo logoElement={<SiDotnet size={48} color="white"/>} label="C# (.NET)"/>
                        <CardLogo logoElement={<PanelsTopLeft size={48} color="white"/>} label="WPF"/>
                        <CardLogo logoElement={<AppWindow size={48} color="white"/>} label="WinForms"/>
                        <CardLogo logoElement={<PiMicrosoftExcelLogoFill size={48} color="white"/>} label="MS Office"/>
                        <CardLogo logoElement={<PiWindowsLogoFill size={48} color="white"/>} label="Windows"/>
                        <CardLogo logoElement={<PcCase size={48} color="white"/>} label="Hardware"/>
                    </div>

                    <div className="flex flex-wrap flex-row gap-2 lg:row-span-1 lg:col-span-1 col-span-full row-span-1 justify-center items-center p-2 bg-primary/10 rounded-xl border border-primary/20">
                        <CardTitle label="Data & Real-Time"/>
                        <CardLogo logoElement={<SiMysql size={48} color="white"/>} label="MySQL (SQL)"/>
                        <CardLogo logoElement={<SiMongodb size={48} color="white"/>} label="MongoDB"/>
                        <CardLogo logoElement={<Database size={48} color="white"/>} label="EF Core"/>
                        <CardLogo logoElement={<SiSocketdotio size={48} color="white"/>} label="Socket.IO"/>
                        <CardLogo logoElement={<img src={logo_PubNub} className="h-11 w-11 mt-1.25" />} label="PubNub"/>
                        <CardLogo logoElement={<VscJson size={48} color="white"/>} label="REST"/>
                    </div>
                    <div className="flex flex-wrap flex-row gap-2 lg:row-span-1 lg:col-span-1 col-span-full justify-center items-center p-2 bg-primary/10 rounded-xl border border-primary/20">
                        <CardTitle label="Tools & Other"/>
                        <CardLogo logoElement={<SiGithub size={48} color="white"/>} label="GitHub (Git)"/>
                        <CardLogo logoElement={<SiWordpress size={48} color="white"/>} label="WordPress"/>
                        <CardLogo logoElement={<TbBrandAdobePhotoshop size={48} color="white"/>} label="Photoshop"/>
                        <CardLogo logoElement={<TbBrandAdobePremier size={48} color="white"/>} label="Premiere"/>
                        <CardLogo logoElement={<SiVegas size={48} color="white"/>} label="VEGAS"/>
                        <CardLogo logoElement={<SiUnity size={48} color="white"/>} label="Unity"/>
                    </div>
                    <div className="flex flex-wrap flex-row gap-2 lg:row-span-1 lg:col-span-3 col-span-full justify-center items-center p-2 bg-primary/10 rounded-xl border border-primary/20">
                        <CardTitle label="Web"/>
                        <CardLogo logoElement={<SiReact size={48} color="white"/>} label="React"/>
                        <CardLogo logoElement={<TbBrandReactNative size={48} color="white"/>} label="React Native"/>
                        <CardLogo logoElement={<SiNodedotjs size={48} color="white"/>} label="Node.js"/>
                        <CardLogo logoElement={<SiExpress size={48} color="white"/>} label="Express.js"/>
                        <CardLogo logoElement={<SiNextdotjs size={48} color="white"/>} label="Next.js"/>
                        <CardLogo logoElement={<SiPhp size={48} color="white"/>} label="PHP"/>
                        <CardLogo logoElement={<SiTailwindcss size={48} color="white"/>} label="Tailwind"/>
                        <CardLogo logoElement={<SiSass size={48} color="white"/>} label="SASS"/>
                        <CardLogo logoElement={<SiHtml5 size={48} color="white"/>} label="HTML"/>
                        <CardLogo logoElement={<SiCss size={48} color="white"/>} label="CSS"/>
                    </div>


                </div>
           
            </BentoCard>
            <BentoCard styleInsert="col-span-1 xl:col-span-1 lg:col-span-1 row-span-2 2xl:col-span-1 2xl:row-span-3">
                <div className="relative w-full h-full">
                    <div className="lg:absolute inset-0 flex flex-col pb-2">           
                        <CardTitle title="Featured Projects" />

                        <div className="flex py-2 mask-y-from-98% mask-y-to-100% flex-col flex-1 gap-2 overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar scrollbar-visible">
                            {
                                ProjectsData.filter(p => p.featured).map((project) => {
                                    return (
                                        <MiniBentoCard
                                            href={`/projects/${project.id}`}
                                            key={project.id}
                                        >
                                            <p className="font-display text-center text-primary font-bold text-xl uppercase">{project.title}</p>
                                            <CardThumbnail image={project.thumbnailPath!}/>
                                            <CardDescription content={project.shortDescription!}/>
                                        </MiniBentoCard>
                                    )
                                })
                            }
                        </div>                  
                    </div>
                </div>
            </BentoCard>
            <BentoCard styleInsert="col-span-2 self-center lg:block hidden 2xl:hidden">
                <CardTitle 
                    title="Contact Me"
                />
                <div className="flex flex-wrap gap-4 w-full h-full items-center">
                        <LogoButton 
                        href="mailto:domagojsenjug03@gmail.com"
                        Icon={TfiEmail} label="E-mail"/>
                        <LogoButton 
                        href="https://github.com/dsnjg03"
                        Icon={SiGithub} label="GitHub"/>
                        <LogoButton 
                        href="https://www.linkedin.com/in/domagoj-%C5%A1enjug-99a847246/"
                        Icon={SlSocialLinkedin} label="LinkedIn"/>
                </div>
            </BentoCard>
        </motion.div>
        {
            selectedProjectData &&
            <ProjectModal 
            projectID={selectedProjectData.id!} 
            isOpen={!!selectedProjectData} 
            projectTitle={selectedProjectData.title}
            hasProjectPage={selectedProjectData.hasPage}
            onClose={() => setSelectedProjectData(null)} 
        />
        }
        
        </div>
    )
}