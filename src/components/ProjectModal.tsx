import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { MarkdownComponents } from "./MarkdownComponents";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { Button, ButtonTypes } from './BentoButtons';
import { useNavigate } from 'react-router-dom';

export function ProjectModal({ projectID, projectTitle, hasProjectPage, isOpen, onClose }: { 
    projectID:string, 
    projectTitle:string,
    hasProjectPage:boolean
    isOpen: boolean, onClose: () => void }) {

    const [markdownContent, setMarkdownContent] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function loadMarkdownFile(){
            if(!projectID) return;
            try{
                const {default:mdFile} = await import(`../data/articles/${projectID?.toLowerCase()}.md?raw`);
                setMarkdownContent(mdFile);
            }
            catch(error){
                console.log(error);
                setMarkdownContent("# Project details coming soon!")
            }
        }
        loadMarkdownFile();
    }, [projectID]);

  const handleViewProject = () => {
    if (onClose) onClose();

    navigate(`/projects/${projectID}`);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-[#1a1f2e] border border-white/10 rounded-3xl p-8 custom-scrollbar scrollbar-visible shadow-2xl"
          >
            <button onClick={onClose} className="absolute cursor-pointer top-6 right-6 text-white/50 hover:text-white transition-colors">
               <span className="text-2xl">&times;</span>
            </button>

            <h2 className="text-3xl font-display uppercase font-bold mb-2 text-primary">{projectTitle}</h2>
            {hasProjectPage && 
              <Button clickFunction={handleViewProject} label="VIEW PAGE" type={ButtonTypes.Normal}/>
            }            
            <div className="h-1 w-20 bg-primary/50 rounded-full mb-6 mt-2" />

            <div className="prose prose-invert max-w-none">
              <ReactMarkdown components={MarkdownComponents} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug]}>
                {markdownContent}
              </ReactMarkdown>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}