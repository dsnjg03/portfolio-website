import { useNavigate } from "react-router-dom"
import { Button, ButtonTypes } from "./components/BentoButtons"
import Header from "./components/Header"
import {Frown} from "lucide-react"

export default function NotFound(){

    const navigate = useNavigate();

    return (
        <>
        <Header />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col text-red-400">
            <Frown size={96}/>
            <p className="font-display font-semibold text-lg m-2">The requested page could not be found!</p>

            <Button 
                label="GO BACK"
                type={ButtonTypes.Destructive}
                clickFunction={() => navigate(-1)}
            />
        
        </div>
        </>
     
    )
}