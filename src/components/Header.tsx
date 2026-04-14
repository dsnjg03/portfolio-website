import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, LogOut } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

function NavButton({ label = "NOT SET", active = false, path, isMobile = false, onClick = undefined }: {
    label?: string,
    active?: boolean,
    path: string,
    isMobile?: boolean,
    onClick?: React.MouseEventHandler | undefined
}) {
    return (
        <Link
            to={path}
            onClick={onClick}
            className={`
            px-4 m-1 flex justify-center items-center select-none uppercase rounded-xl font-medium transition-all duration-200 cursor-pointer
            ${active
                    ? 'bg-primary/10 text-primary hover:bg-primary/20'
                    : 'text-muted hover:text-bright hover:bg-white/5'}

            ${isMobile
                    ? "h-16 text-2xl"
                    : "text-xl"
                }
            `}>

            {label}
        </Link>

    );
}

const NAV_BUTTONS = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About", path: "/about" }
]

export default function Header() {

    const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
    const location = useLocation();

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (latest > previous && latest > 50 && !mobileNavbarOpen) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <header className="h-24 md:h-36 w-full flex items-center px-6 lg:px-40 justify-between z-100">
            <Link
            to="/"
            className="hover:scale-105 duration-300 transition-all"
            >
                <h1 className="md:text-6xl lg:mr-10 lg:-ml-20 mt-2 ml-4 md:mt-0 xl:-ml-10 2xl:ml-4 xl:mr-0 text-4xl
                font-bold tracking-tight pointer-events-none select-none md:block flex flex-col items-center">
                    <span className="bg-linear-to-r p-1 -mb-2 md:mb-0 md:p-0 from-primary to-accent bg-clip-text text-transparent">
                        Domagoj
                    </span>
                    <span className="text-muted font-medium">
                        \\Portfolio
                    </span>
                </h1>
            </Link>

            {/* DESKTOP AND TABLET NAV BUTTONS */}
            <div className="hidden h-[50%] lg:flex">
                {NAV_BUTTONS.map((nav) => {
                    return <NavButton
                        key={nav.path}
                        label={nav.label}
                        path={nav.path}
                        active={(location.pathname == nav.path)}
                    />
                })}
            </div>

            {/* MOBILE NAV BAR TOGGLE */}
            <motion.button
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                
                onClick={() => setMobileNavbarOpen(!mobileNavbarOpen)}

                className="fixed right-6 mt-4 md:-mt-1 w-12 h-12 lg:hidden hover:bg-primary/30 active:bg-accent/40 transition-colors button-border-glass bg-primary/20 backdrop-blur-md z-110 rounded-2xl flex justify-center items-center text-primary"
            >
                {mobileNavbarOpen ? <LogOut /> : <Menu />}
            </motion.button>

            <AnimatePresence>
                {mobileNavbarOpen &&
                    (
                        <motion.div
                            initial={{ x: 50 }}
                            animate={{ x: 0 }}
                            exit={{ x: 50 }}
                            transition={{ duration: 0.2 }}
                            className="fixed top-20 left-0 w-full z-100 p-6 flex justify-center items-center"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="bg-surface/60 backdrop-blur-xl w-full ring-accent ring-2 border-t-white/10 rounded-2xl p-2 overflow-hidden shadow-2xl"
                            >
                                {NAV_BUTTONS.map((nav) => {
                                    return <NavButton
                                        key={nav.path}
                                        isMobile={true}
                                        label={nav.label}
                                        path={nav.path}
                                        active={(location.pathname == nav.path)}
                                        onClick={() => {
                                                setMobileNavbarOpen(false);
                                                window.scrollTo(0, 0);
                                            }
                                        }
                                    />
                                })}
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </header>
    )
}