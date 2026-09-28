import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import MaskedHeading from "../animation/MaskedHeading";

const projects = [
    {
        name: "thought",

        description:
            "Reddit-inspired social media platform featuring authentication, posts, comments, likes & image uploads",
        image: "/thought.png",
        live: "https://thought-w1ms.onrender.com/",
        github: "https://github.com/meetpatel1076/Thought-",
    },
    {
        name: "Nirikshak",

        description:
            "A legal metrology inspection platform that uses AI to analyze packaged commodity labels.",
        image: "nirikshak.png",
        live: "#",
        github: "https://github.com/meetpatel1076/SIH-2026",
    },
    {
        name: "TLC Vault",
        description:
            "TLC Vault is a centralized code workspace designed to help developers organize their projects, manage source files, edit code, and keep their development work structured and accessible from a single platform.",
        image: "tlcVault.png",
        live: "https://tlc-vault.vercel.app/",
        github: "https://github.com/meetpatel1076/TLC-VAULT",
    },
    {
        name: "PlugBook",
        description:
            "An EV charging slot booking platform for finding and reserving charging stations.",
        image: "plugbook.png",
        live: "https://plugbook.vercel.app/",
        github: "https://github.com/PranavBirla/PlugBook",
    },
    {
        name: "Offline Note App",
        description:
            "A simple note-taking application.",
        image: "NoteApp.png",

        live: "https://react-note-app-sigma-six.vercel.app/",
        github: "https://github.com/meetpatel1076/React-note-app",
    },
];

const Work = () => {
    const [activeProject, setActiveProject] = useState(0);

    const previewRef = useRef(null);
    const contentRef = useRef(null);

    const project = projects[activeProject];

    const changeProject = (index) => {
        if (index === activeProject) return;

        // Small exit animation
        gsap.to([previewRef.current, contentRef.current], {
            opacity: 0,
            y: 20,
            duration: 0.25,
            ease: "power2.in",
            onComplete: () => {
                setActiveProject(index);
            },
        });
    };

    useLayoutEffect(() => {
        // Entry animation after project changes
        gsap.fromTo(
            [previewRef.current, contentRef.current],
            {
                opacity: 0,
                y: 25,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: "power3.out",
            }
        );
    }, [activeProject]);

    return (
        <section
            id="work"
            className="relative w-full scroll-mt-24 px-6 
             text-white sm:px-6 md:pb-12 lg:px-20">
            <div className="mx-auto max-w-7xl">

                {/* SECTION HEADER */}
                <div className="mb-18">


                    <div className="mb-6 flex items-center gap-4">
                        <span className="font-mono text-sm text-amber-300">
                            02 /
                        </span>

                        <span className="h-px w-16 bg-white/15" />

                        <span className="text-sm uppercase tracking-[0.25em] text-white/40">
                            Work
                        </span>
                    </div>
                    <div className="hidden md:block" > <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                            My
                            <span className="text-amber-300"> Projects / Products</span>
                        </h2></div>

                    <div className="md:hidden "> 
                        
                        <MaskedHeading text="MY PROJECTS /PRODUCTS" src="image3.jpg" fillScale={1.25} parallax={26} drift={18} brightness={1} saturation={1} grayscale={false} reveal="rise" duration={1.1} stagger={0.09} align="left" weight={800} tracking={-0.04} lineHeight={0.95} textScale={0.11}
                    />
                    </div>
                </div>


                {/* PROJECT NAVIGATION */}
                <div className="mb-10 overflow-x-auto scrollbar-hide">
                    <div className="flex min-w-max items-center gap-2  pb-3">

                        {projects.map((item, index) => (
                            <button
                                key={item.name}
                                onClick={() => changeProject(index)}
                                className={`
                  relative whitespace-nowrap px-4 py-3
                  text-sm uppercase tracking-wider
                  transition-all duration-300
                  ${activeProject === index
                                        ? "text-white"
                                        : "text-white/35 hover:text-white/70"
                                    }
                `}
                            >
                                {item.name}

                                {/* ACTIVE LINE */}
                                {activeProject === index && (
                                    <span className="absolute bottom-[-13px] left-0 h-[2px] w-full bg-amber-300" />
                                )}
                            </button>
                        ))}

                    </div>
                </div>


                {/* PROJECT PREVIEW */}
                {/* PROJECT SHOWCASE */}
                <div
                    className="
        flex
        flex-col
        gap-8
        md:flex-row
        md:items-stretch
        md:gap-8
    "
                >

                    {/* ================= PROJECT PREVIEW ================= */}
                    <div
                        ref={previewRef}
                        className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-zinc-950

            md:w-[58%]
        "
                    >

                        {/* Browser bar */}
                        <div className="flex h-11 items-center justify-between border-b border-white/10 px-4 sm:px-5">

                            <div className="flex gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                            </div>

                            <span className="font-mono text-[10px] text-white/30">
                                {project.name.toLowerCase().replaceAll(" ", "-")}
                            </span>

                            <div className="w-10" />

                        </div>


                        {/* Image */}
                        <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">

                            <img
                                src={project.image}
                                alt={project.name}
                                className="
                    h-full
                    w-full
                    object-cover
                    
                "
                            />

                            {/* subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                        </div>

                    </div>


                    {/* ================= PROJECT INFORMATION ================= */}
                    <div
                        ref={contentRef}
                        className="
            flex
            flex-col
            
            rounded-2xl
            
            p-6
            sm:p-8

            md:w-[42%]
        "
                    >

                        {/* Project details */}
                        <div>



                            <h3 className="text-3xl font-medium sm:text-4xl">
                                {project.name}
                            </h3>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                                {project.description}
                            </p>

                        </div>


                        {/* Links */}
                        <div className="mt-8 flex gap-3">

                            <a
                                href={project.live}
                                target="_blank"
                                rel="noreferrer"
                                className="
                    rounded-full
                    border
                    border-white/10
                    px-5
                    py-2.5
                    text-sm
                    text-white/70
                    transition
                    
                "
                            >
                                Live Project ↗
                            </a>

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="
                    rounded-full
                    bg-white
                    px-5
                    py-2.5
                    text-sm
                    text-black
                    transition
                    hover:bg-amber-300
                "
                            >
                                GitHub ↗
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Work;