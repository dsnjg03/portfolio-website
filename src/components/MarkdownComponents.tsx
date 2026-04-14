import { DownloadIcon, ExternalLink } from "lucide-react";
import { PiFilePdfFill } from "react-icons/pi";
import { SiGithub } from "react-icons/si";

export const MarkdownComponents = {
    // CUSTOM MARKDOWN
    webmvideo: ({ src, alt, margintop = 0 }:any) => {
        return (
            <div 
            className="flex flex-col items-center"
            style={{ marginTop: `${margintop * 0.25}rem` }}
            >
                <a 
                href={src}
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <video
                        src={src}
                        autoPlay loop muted playsInline
                        className="block overflow-hidden rounded-3xl hover:scale-[1.02] duration-300 border border-white/10 shadow-2xl group transition-all"
                    />
                </a>
                    {alt && <span className="-mt-6 text-sm text-muted italic">{alt}</span>}
            </div>

        )
    },
    centeredimage: ({ src, alt, size = "auto", height:imageHeight = 120, marginbottom = 4, margintop = 4 }: any) => {

        const sizeClasses:any = {
            sm: "max-w-md",
            md: "max-w-2xl",
            lg: "max-w-4xl",
            xl: "max-w-6xl",
            full: "max-w-full",
            auto: "max-w-max"
        };

        return (
            <div className={`flex flex-col items-center 
            ${marginbottom < 0 ? `-mb${marginbottom}` : `mb-${marginbottom}`} 
            ${margintop < 0 ? `-mt${margintop}` : `mt-${margintop}`} `}>
                <a 
                href={src}
                target="_blank" 
                rel="noopener noreferrer"
                style={{ maxHeight:`${(imageHeight*0.25)}rem` }} // 0.25rem * height like in Tailwind
                className={`aspect-movie relative flex justify-center items-center cursor-pointer
                    w-full ${sizeClasses[size] || "max-w-max"} overflow-hidden rounded-3xl border group border-white/10 shadow-2xl`}>

                    <img 
                        src={src} 
                        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-110"
                        aria-hidden="true"
                    />

                    <img 
                        className="relative w-full h-full object-contain z-10 transition-transform duration-300 group-hover:scale-[1.02]" 
                        src={src} 
                        alt="Project Thumbnail" 
                    />
                </a>
                {alt && <span className="mt-1 text-sm text-muted italic">{alt}</span>}
            </div>
        );
    },
    centertext:({ children }:any) => {
        return (
            <div className="w-full text-center">{children}</div>
        )
    },
    resourceitem:({ href, children, icon }:any) => {
        const isExternal = href?.startsWith('http');

        const iconMap:any = {
            "github":<SiGithub className="mr-1 hover:text-accent" size={24}/>,
            "pdf":<PiFilePdfFill className="mr-1 hover:text-accent" size={24}/>
        }


        return (
            <a
                href={href}
                target={isExternal && "_blank"}
                rel={isExternal && "noopener noreferrer"}
                className="inline-flex items-center text-primary hover:scale-105 hover:text-accent font-display underline underline-offset-4 decoration-primary/30 transition-all"
            >
                {
                    iconMap[icon]! || <DownloadIcon className="mr-1" size={24}/>
                }
                {children}
                {isExternal && 
                (
                    <ExternalLink size={12}  className="opacity-60 mb-1 group-hover:opacity-100 transition-opacity"/>
                )}
            </a>
        )
    },
    // ---
    code:({ children }:any) => (
        <div className="bg-background/40 text-sm p-1 font-mono rounded-lg text-bright/80 leading-relaxed inline">{children}</div>
    ),
    h1:({ children, id }:any) => (
        <div id={id} className="mb-2 mt-14 border-b border-white/10">
            <h1 className="text-4xl font-bold font-display text-bright mb-4 tracking-tight">
                {children}
            </h1>
        </div>
    ),
    h2:({ children, id }:any) => (
        <div id={id} className="mb-2 mt-8 border-b border-white/10">
            <h1 className="text-3xl font-semibold font-display text-bright mb-4 tracking-tight">
                {children}
            </h1>
        </div>
    ),
    p:({ children }:any) => (
        <div className="text-bright/80 my-6 leading-relaxed">{children}</div>
    ),
    a:({ href, children }:any) => {
        const isExternal = href?.startsWith('http');

        return (
            <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center text-primary hover:text-accent font-display underline underline-offset-4 decoration-primary/30 transition-all"
            >
                {children}
                {isExternal && 
                (
                    <ExternalLink size={12}  className="opacity-60 mb-1 group-hover:opacity-100 transition-opacity"/>
                )}
            </a>
        )
     
    }
}