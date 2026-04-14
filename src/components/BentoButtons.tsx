import type { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

export const ButtonTypes = {
    Normal:1,
    Destructive:2,
};
type ButtonType = (typeof ButtonTypes)[keyof typeof ButtonTypes];

export function Button({label, type, clickFunction = undefined}:{label:string, type:ButtonType, clickFunction?:MouseEventHandler}){
    switch(type){
        case ButtonTypes.Normal:{
            return NormalButton({label, clickFunction});
        }
        case ButtonTypes.Destructive:{
            return DestructiveButton({label, clickFunction});
        }
    }
}
export function LogoButton({label = "", 
    Icon, 
    color = "#38bdf8", 
    logoSize = 48, 
    buttonHeight = 20,
    buttonWidth = "stretch",
    href = undefined}:{
        label?:string, 
        Icon:any, 
        color?:string, 
        logoSize?:number, 
        buttonHeight?:number,
        buttonWidth?:string | number,
        href?:string | undefined}){
    
    
    const buttonClass = `button-border-glass 
        hover:shadow-accent hover:shadow-xs 
        bg-primary/10 p-2
        rounded-xl hover:brightness-110 
        duration-300 hover:scale-105 cursor-pointer
        flex justify-center items-center flex-col
        ${buttonWidth == "stretch" ? "flex-1" : `w-${Number(buttonWidth)}`} h-${buttonHeight}
        `

    if(href){
            return (
            <Link 
            to={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}>
                <Icon size={logoSize} color={color}/>
                {label.length > 0 && (
                    <p className="text-primary font-display select-none text-center text-[10px] uppercase font-bold mt-1">{label}</p>
                )}
            </Link>
        );
    }

    return (
        <div className={buttonClass}>
            <Icon size={logoSize} color={color}/>
            {label.length > 0 && (
                <p className="text-primary font-display select-none text-center text-[10px] uppercase font-bold mt-1">{label}</p>
            )}
        </div>
    );
}

function NormalButton({label, clickFunction = undefined}:{
    label:string,
    clickFunction?:MouseEventHandler | undefined
    }){
    return (
        <div
        onClick={clickFunction}
        className="button-border-glass w-fit hover:shadow-accent hover:shadow-xs bg-primary/40 p-2 rounded-xl hover:brightness-110 duration-300 hover:scale-105 cursor-pointer">
            <p className="text-primary select-none text-lg uppercase font-semibold font-display">{label}</p>
        </div>
    )
}
function DestructiveButton({label, clickFunction = undefined}:{
    label:string,
    clickFunction?:MouseEventHandler | undefined
    }){
    return (
        <div
        onClick={clickFunction}
        className="ring-2 ring-red-500 w-fit hover:shadow-red-900 hover:bg-red-400/40 hover:shadow-xs bg-red-500/40 p-2 rounded-xl hover:brightness-110 duration-300 hover:scale-105 cursor-pointer">
            <p className="text-red-300 text-lg uppercase select-none font-semibold font-display">{label}</p>
        </div>
    )
}