import {motion} from "framer-motion";
import { gridVariants } from "./components/BentoMotionVariants";
import BentoCard from "./components/BentoCard";
import {History, MapPin, Code2, AppWindow} from "lucide-react"
import { CardTitle, CardLogo } from "./components/BentoParts";
import { SiMarkdown, SiReact, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useEffect } from "react";

export default function About(){

  useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="relative">
            <motion.div 
                variants={gridVariants}
                initial="hidden"
                animate="visible"                
                className="flex-1 grid
                    grid-cols-1 md:grid-cols-2
                    auto-rows-auto
                    grid-flow-dense
                    gap-3
                    px-6 lg:px-40 py-10">
                    
                        <BentoCard styleInsert="col-span-1 lg:col-span-1 row-span-1 hover:brightness-110" disableHoverEvents addBorder>
                            <div className="select-none h-full w-full relative">
                                <div className="flex flex-col">
                                    <div className="text-primary w-full justify-center items-center flex">
                                        <History size={32}/>
                                        <h1 className="text-4xl ml-2 text-center font-display text-primary uppercase font-bold">
                                            Background
                                        </h1>
                                    </div>
                                    
                                    <div className="h-1 w-76 mx-auto bg-primary/50 rounded-full mb-2" />

                                    <p className="text-xl font-semibold text-bright font-display mt-2">
                                        My journey into tech started in Zagreb, <span className="text-accent">Croatia</span>, when I
                                        first started tinkering with video-game scripts to create my own modifications. This quickly
                                        turned into a passion for coding that led to earning my high-school <span className="text-accent">Computer Technician</span>
                                        {" "}diploma.

                                        <br/>
                                        <br/>

                                        While my formal education gave me a hands-on foundation in hardware assembly, networking, and
                                        system troubleshooting, I discovered that my true interest was <span className="text-accent">software development</span>.
                                        {" "}I wanted to build applications that people would use.
                                    </p>
                                </div>
                            </div>
                        </BentoCard>

                        <BentoCard styleInsert="col-span-1 lg:col-span-1 row-span-1 hover:brightness-110" disableHoverEvents addBorder>
                            <div className="select-none h-full w-full relative">
                                <div className="flex flex-col">
                                    <div className="text-primary w-full justify-center items-center flex">
                                        <MapPin size={32}/>
                                        <h1 className="text-4xl ml-2 text-center font-display text-primary uppercase font-bold">
                                            Present
                                        </h1>
                                    </div>
                                    <div className="h-1 w-64 mx-auto bg-primary/50 rounded-full mb-2" />

                                    <p className="text-xl font-semibold text-bright font-display mt-2">
                                        In November 2025, for personal reasons, I moved to <span className="text-accent">The Netherlands</span> and am actively
                                        looking for a junior role where I can contribute to a team and continue growing my skills. I speak fluent English and am
                                        {" "}planning to start learning Dutch soon.

                                        <br/><br/>
                                        In my free time, you'll usually find me:
                                        <ul className="text-lg font-medium text-muted mt-1 ml-6 list-disc list-inside space-y-1">
                                            <li>Building my own games in <span className="text-accent">Unity</span></li>
                                            <li>Experimenting with new <span className="text-accent">AI tools</span></li>
                                            <li>Learning new skills <span className="text-muted/80 italic">(3D modeling...)</span></li>
                                            <li>Unwinding with a good video game</li>
                                            <li>Going outdoors for a walk</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </BentoCard>

                        <BentoCard styleInsert="col-span-1 lg:col-span-1 row-span-1 hover:brightness-110" disableHoverEvents addBorder>
                            <div className="select-none h-full w-full relative">
                                <div className="flex flex-col">
                                    <div className="text-primary w-full justify-center items-center flex">
                                        <Code2 size={32}/>
                                        <h1 className="text-4xl ml-2 text-center font-display text-primary uppercase font-bold">
                                            The Craft
                                        </h1>
                                    </div>
                                    <div className="h-1 w-64 mx-auto bg-primary/50 rounded-full mb-2" />

                                    <p className="text-xl font-semibold text-bright font-display mt-2">
                                        I am driven by a curiosity to understand how things work at their core, and I enjoy practical problem-solving.
                                        My experience spans across multiple technologies, allowing me to understand applications from both a user and a technical
                                        perspective.

                                        <br/>
                                        <br/>

                                        Whether I am building a WPF desktop application in <span className="text-accent">C#/.NET</span>,
                                        designing a REST API for a full-stack <span className="text-accent">React</span> application, or
                                        wrestling with network synchronization in <span className="text-accent">Unity</span>,
                                        I enjoy learning the fundamentals of a system before relying on heavy frameworks and solving
                                        the problems that come along the way.
                                    </p>
                                </div>
                            </div>
                        </BentoCard>

                        
                        <BentoCard styleInsert="col-span-1 lg:col-span-1 row-span-1 hover:brightness-110" disableHoverEvents addBorder>
                            <div className="select-none h-full w-full relative">
                                <div className="flex flex-col">
                                    <div className="text-primary w-full justify-center items-center flex">
                                        <AppWindow size={32}/>
                                        <h1 className="text-3xl lg:text-4xl ml-2 text-center font-display text-primary uppercase font-bold">
                                            About This Site
                                        </h1>
                                    </div>
                                    <div className="h-1 w-74 lg:w-86 mx-auto bg-primary/50 rounded-full mb-2" />

                                    <p className="text-xl font-semibold text-bright font-display mt-2">
                                        I didn't want to use a simple template, so I designed and built this portfolio from scratch as a custom SPA
                                        to showcase my frontend capabilities and UI/UX preferences.
                                    </p>

                                    <div className="flex gap-2 flex-col lg:flex-row">
                                        <div className="flex flex-2 flex-wrap gap-2 mt-2 justify-center items-center p-2 bg-primary/10 rounded-xl border border-primary/20">
                                            <CardTitle label="Powered By"/>
                                            <CardLogo logoElement={<SiReact size={48} color="white"/>} label="React"/>
                                            <CardLogo logoElement={<SiTailwindcss size={48} color="white"/>} label="Tailwind CSS"/>
                                            <CardLogo logoElement={<TbBrandFramerMotion size={48} color="white"/>} label="Framer Motion"/>
                                            <CardLogo logoElement={<SiMarkdown size={48} color="white"/>} label="React Markdown"/>
                                        </div>
                                        <div className="flex flex-1 flex-wrap gap-2 mt-2 justify-center items-center p-2 bg-primary/10 rounded-xl border border-primary/20">
                                            <CardTitle label="Tech"/>
                                            <CardLogo logoElement={<SiTypescript size={48} color="white"/>} label="TypeScript"/>
                                            <CardLogo logoElement={<SiVite size={48} color="white"/>} label="Vite"/>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </BentoCard>
            </motion.div>
        </div>
    )
}