import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const email = "pmeet9700@gmail.com";

    const copyEmail = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <section
            id="contact"
            className="relative w-full px-6 py-22 text-white sm:px-10 md:py-32 lg:px-20"
        >
            <div className="mx-auto max-w-7xl">

                {/* SECTION LABEL */}
                <div className="mb-16 flex items-center gap-4">
                    <span className="font-mono text-sm text-cyan-300">
                        03 /
                    </span>

                    <span className="h-px w-16 bg-white/15" />

                    <span className="text-sm uppercase tracking-[0.25em] text-white/40">
                        Contact
                    </span>
                </div>


                {/* MAIN CONTENT */}
                <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

                    {/* LEFT */}
                    <div>

                        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-white/30">
                            Have an idea?
                        </p>

                        <h2 className="max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[6rem]">
                            LET'S BUILD
                            <br />
                            <span className="text-white/25">
                                SOMETHING
                            </span>
                            <br />
                            USEFUL.
                        </h2>

                        <div className="flex" ><p className="mt-10 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
                            It's always fun turning interesting ideas into useful Products
                        </p><span><Sparkles color="#ffffff" /></span>
                        </div>
                    </div>


                    {/* RIGHT */}
                    <div className="lg:pb-2">

                        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
                            Get in touch
                        </p>


                        {/* EMAIL */}
                        <button
                            onClick={copyEmail}
                            className="
                                group
                                flex
                                w-full
                                items-center
                                justify-between
                                border-b
                                border-white/15
                                pb-4
                                text-left
                                transition-colors
                                duration-300
                                hover:border-cyan-300/60
                            "
                        >

                            <span
                                className="
                                    text-xl
                                    text-white/75
                                    transition-all
                                    duration-300
                                    group-hover:text-cyan-300
                                    sm:text-2xl
                                "
                            >
                                {copied ? "Email copied!" : email}
                            </span>

                            <span className="flex items-center gap-2 text-white/40 transition-all duration-300 group-hover:text-cyan-300">

                                {copied ? (
                                    <Check size={20} />
                                ) : (
                                    <>
                                        <Copy
                                            size={17}
                                            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        />

                                        <ArrowUpRight
                                            size={22}
                                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </>
                                )}

                            </span>

                        </button>



                        {/* SOCIAL LINKS */}
                        <div className="mt-10 flex items-center gap-6">

                            {/* GitHub */}
                            <a
                                href="https://github.com/meetpatel1076/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="text-white/50 transition-all duration-300 hover:text-white hover:scale-110"
                            >
                                <FaGithub size={24} />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/meet-patel-3640b8234"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-white/50 transition-all duration-300 hover:text-white hover:scale-110"
                            >
                                <FaLinkedinIn size={24} />
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/meet.patel1076/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-white/50 transition-all duration-300 hover:text-white hover:scale-110"
                            >
                                <FaInstagram size={24} />
                            </a>

                        </div>

                    </div>

                </div>




            </div>
        </section>
    );
};

export default Contact;