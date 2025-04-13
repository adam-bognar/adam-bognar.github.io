import { useEffect, useState } from "react";

export function LeftSide() {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0
            }
        );

        const sections = document.querySelectorAll("#about, #projects");
        sections.forEach((section) => {
            observer.observe(section);
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();

                const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
                const targetElement = document.querySelector(targetId as string);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                }
            });
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });

        };
    }, []);

    return (
        <div className="flex flex-col w-full md:w-1/2 sticky md:top-0 max-h-screen md:p-24 p-6 justify-between">

            <div className="flex flex-col gap-3">
                <div className={"flex flex-row items-center gap-6"}>
                    <img 
                        src="/icons/face3.jpg" 
                        alt="Ádám Bognár" 
                        className={"w-30 h-30 rounded-full object-cover"} 
                    />
                    <div>
                        <h1 className={"text-5xl font-bold text-white/80"}>Ádám Bognár</h1>
                        <h2 className={"text-2xl text-white/60"}>Full stack developer</h2>
                    </div>
                </div>
                <h3 className={"text-md text-white/40 mt-2"}>Passionate about building performant web applications using React, TypeScript,
                    and modern backend technologies. I create software that's both functional and delightful to use.</h3>
            </div>

            <nav className="hidden md:flex flex-col text-white/60">
                <ul>
                    <li>
                        <a
                            className={`group flex items-center py-3`}
                            href="#about"
                        >
                            <span
                                className={`nav-indicator mr-4 h-px transition-all ${activeSection === "about"
                                    ? "w-16 bg-slate-200"
                                    : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                                    } motion-reduce:transition-none`}
                            ></span>
                            <span
                                className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === "about"
                                    ? "text-slate-200"
                                    : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                                    }`}
                            >
                                About
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            className={`group flex items-center py-3`}
                            href="#projects"
                        >
                            <span
                                className={`nav-indicator mr-4 h-px transition-all ${activeSection === "projects"
                                    ? "w-16 bg-slate-200"
                                    : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                                    } motion-reduce:transition-none`}
                            ></span>
                            <span
                                className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === "projects"
                                    ? "text-slate-200"
                                    : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                                    }`}
                            >
                                Projects
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>

            

            <div className="flex flex-row gap-10 md:static fixed bottom-4 left-1/2 transform md:transform-none -translate-x-1/2 md:translate-x-0 justify-center md:justify-start w-full md:w-auto">

                <a
                    href="https://github.com/adam-bognar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                >
                    <img 
                        src="/icons/github.svg" 
                        alt="GitHub" 
                        className="w-5 h-5 filter invert brightness-100"
                    />
                </a>
                <a
                    href="https://linkedin.com/in/ádám-bognár-991429267"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                >
                    <img 
                        src="/icons/linkedin.svg" 
                        alt="LinkedIn" 
                        className="w-5 h-5 filter invert brightness-100" 
                    />
                </a>
                <a
                    href="https://twitter.com/adambognar_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                >
                    <img 
                        src="/icons/x.svg" 
                        alt="X (Twitter)" 
                        className="w-5 h-5 filter invert brightness-100" 
                    />
                </a>
                <a
                    href="https://instagram.com/adambognar_"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-white/60 hover:text-white/90 transition-colors"
                >
                    <img 
                        src="/icons/instagram.svg" 
                        alt="Instagram" 
                        className="w-5 h-5 filter invert brightness-100" 
                    />
                </a>
            </div>

        </div>
    )
}