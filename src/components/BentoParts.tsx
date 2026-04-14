import { Link } from "react-router-dom"
import { ProjectStatus } from "../data/ProjectsData"
import type { MouseEventHandler } from "react"

export function MiniBentoCard({ children, href = undefined, fullHeight = false }: {
    children:any, 
    href?:string
    fullHeight?:boolean
    }){

    if(href){
        return (
            <Link
            to={href}    
            style={{
                height:(fullHeight ? "100%" : "auto")
            }}        
            className="w-full p-2 m-1 cursor-pointer rounded-3xl shrink-0
                ring ring-primary/20
                hover:ring-2 hover:ring-primary/80 duration-300 transition-all">
                    <div className="flex justify-center items-center flex-col">
                        {children}
                    </div>
            </Link>   
        )
    }
    else{
        return (
            <div 
            style={{
                height:(fullHeight ? "100%" : "auto")
            }} 
            className="w-full p-2 m-1 rounded-3xl shrink-0
                ring ring-primary/20
                hover:ring-2 hover:ring-primary/80 duration-300 transition-all">
                    <div className="flex justify-center items-center flex-col">
                        {children}
                    </div>
            </div>   
        )
    }


}


function CardThumbnailLabel({status}: {status:number}){
    switch(status){
        case ProjectStatus.Finished:{
            return (
                <div className="absolute top-1 right-1 z-20 bg-primary/70 p-2 rounded-xl">
                    <p className="font-display font-semibold text-bright text-shadow-xs uppercase select-none text-shadow-black">Finished</p>
                </div>
            );
        }
        case ProjectStatus.InProgress:{
            return (
                <div className="absolute top-1 right-1 z-20 bg-green-500/70 p-2 rounded-xl">
                    <p className="font-display font-semibold text-bright text-shadow-xs uppercase select-none text-shadow-black">In Progress</p>
                </div>
            );
        }  
        case ProjectStatus.Prototype:{
            return (
                <div className="absolute top-1 right-1 z-20 bg-yellow-500/70 p-2 rounded-xl">
                    <p className="font-display font-semibold text-bright text-shadow-xs uppercase select-none text-shadow-black">Prototype</p>
                </div>
            );
        }                  
    }


}

export function CardThumbnail({ 
    image, 
    status = undefined 
}: { 
    image: string, 
    status?: number | undefined
}) {
    return (
        <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-2xl border border-white/10 group bg-black/20 flex items-center justify-center">
            
            {/* Background Layer - Blurred */}
            <img 
                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-110 pointer-events-none" 
                src={image} 
                alt="" 
                aria-hidden="true"
            />

            {/* Actual Image */}
            <img 
                className="relative w-full h-full object-contain z-10 transition-transform duration-500 group-hover:scale-[1.03]" 
                src={image} 
                alt="Project Thumbnail" 
            />

            {status && 
                <CardThumbnailLabel status={status}/>
            }
           
        </div>
    )
}

export function CardTitle({title = "", label= ""}:{title?:string, label?:string}){
    return (
            <div className="w-full flex items-center justify-between mt-2 px-2 mb-1 select-none">
                    {title.length > 0 && (
                            <div className="text-bright font-display font-semibold uppercase tracking-tighter text-2xl">
                                {title}
                            </div>
                    )}
                    {label.length > 0 && (
                            <div className="text-primary text-center font-display bg-primary/20 rounded-lg px-1 py-0.5 font-light uppercase text-md">
                                {label}
                            </div>
                    )}
            </div>
    )
}

export function CardDescription({content}:{content:string}){
    return (
        <div className="px-2">
            <p className="text-lg text-muted font-medium font-display select-none">
                {content}
            </p>
        </div>
    );
}

export function CardScrollView({children}:{children:any}){
    return (
        <div className="flex-1 pb-2 pr-2 min-h-0 w-full overflow-x-auto overflow-y-hidden flex flex-nowrap gap-2 items-center custom-scrollbar justify-center">
            {children}
        </div>
    );
}

export function CardScrollViewItem({children, itemWidth = undefined, clickEvent = undefined}:{children:any, 
    itemWidth?:number | undefined
    clickEvent?:MouseEventHandler
    }){
     return (
        <div onClick={(clickEvent && clickEvent)} 
        className="shrink-0 h-full cursor-pointer" style={{
            width:(itemWidth ? (itemWidth*0.25 + "rem") : "auto"),
            cursor:(clickEvent ? "pointer" : "default")
        }}>
            {children}
        </div>
    );
}

export function CardLogo({logoElement, label = ""}:{logoElement:any, label?:string}){
    return (
        <div className="select-none flex flex-col items-center justify-center p-2 rounded-2xl bg-background/30 border-2 border-primary/10 w-24 shrink-0 h-24">
           <div>{logoElement}</div>
           {label && <p className="text-muted font-display text-center text-[10px] uppercase font-bold mt-1">{label}</p>}           
        </div>
    )
}