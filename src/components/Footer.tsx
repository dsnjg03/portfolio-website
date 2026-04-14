import { Link } from "react-router-dom";

export default function Footer()
{
    return (
        <footer className="w-full py-2 flex flex-col md:flex-row justify-center items-center border-t border-white/10 select-none">
            <p className="text-sm text-bright font-display">Built by <span className="text-bright/80">Domagoj Šenjug</span> © 2026</p>

            <p className="mx-2 text-bright font-semibold font-display mb-[0.15rem]">•</p>

            <Link
            to="/about"
            className="text-primary/80 hover:text-primary font-display cursor-pointer"
            >
                About
            </Link>

            <p className="mx-2 text-bright font-semibold font-display mb-[0.15rem]">•</p>

            <Link
            to="/projects"
            className="text-primary/80 hover:text-primary font-display cursor-pointer"
            >
                Projects
            </Link>

            <p className="mx-2 text-bright font-semibold font-display mb-[0.15rem]">•</p>

            <Link
            to="mailto:domagojsenjug03@gmail.com"
            className="text-primary/80 hover:text-primary font-display cursor-pointer"
            >
                Contact
            </Link>

            <p className="mx-2 text-bright font-semibold font-display mb-[0.15rem]">•</p>

            <Link
            to="https://github.com/dsnjg03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary/80 hover:text-primary font-display cursor-pointer"
            >
                Source Code
            </Link>
        </footer>
    );
}