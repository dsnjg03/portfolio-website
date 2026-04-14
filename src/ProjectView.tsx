import { useParams, useNavigate } from "react-router-dom"
import { ProjectsData } from "./data/ProjectsData";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";
import { MarkdownComponents } from "./components/MarkdownComponents";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { Button, ButtonTypes } from "./components/BentoButtons";

export default function ProjectView(){

    const navigate = useNavigate();

    const params = useParams();
    const {project:projectID} = params;

    const projectData = ProjectsData.find(p => p.id.toLowerCase() == projectID?.toLowerCase());

    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        async function loadMarkdownFile(){
            try{
                const {default:mdFile} = await import(`./data/articles/${projectID?.toLowerCase()}.md?raw`);
                setMarkdownContent(mdFile);
            }
            catch(error){
                console.log(error);
                setMarkdownContent("# Project details coming soon!")
            }
        }
        loadMarkdownFile();
    }, [projectID]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if(!projectID){
        return (
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-red-400 font-display">A Project ID must be provided!</h1>
            </div>
        )
    }
    if(!projectData){
        return (
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-red-400 font-display">No project with that ID has been found!</h1>
            </div>
        )
    }

    return (
        <div className="w-full px-5 lg:px-40 flex justify-center items-center">
            <div className="w-full relative bg-surface rounded-2xl border-primary/20 border-2 overflow-hidden">

                <h1 className="font-display py-1 select-none text-primary font-semibold w-full text-center uppercase text-3xl">{projectData.title}</h1>
                <div className="h-1 w-64 mx-auto bg-primary/50 rounded-full mb-2" />
                <div className="w-full flex justify-center">
                    <Button type={ButtonTypes.Normal} label="BACK" clickFunction={() => navigate(-1)}/>
                </div>

                <article className="prose prose-invert prose-primary mx-auto max-w-4xl p-5 w-full
                                    font-display">
                    <Markdown components={MarkdownComponents} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug]}>
                        {markdownContent}
                    </Markdown>
                </article>
            </div>
        </div>
    )
}