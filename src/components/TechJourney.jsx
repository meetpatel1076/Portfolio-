import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import StackIcon from "tech-stack-icons";


const technologies = [
{icon:<StackIcon name="html5" className=" " />,
  name:"HTML"
},
{
  icon:<StackIcon name="css3" className="  " />,
  name:"CSS"
},
{
  icon:<StackIcon name="js" className="" />,
  name:"JavaScript"
},
{
  icon:<StackIcon name="tailwindcss" className="" />,
  name:"Tailwind"
},
{
  icon:<StackIcon name="react" className="" />,
  name:"React"
}

];

const TechJourney = () => {
  const sectionRef = useRef(null);
  const desktopItems = useRef([]);
  const desktopLines = useRef([]);
  const mobileItems = useRef([]);
  const mobileLines = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* ---------------- DESKTOP ---------------- */

      gsap.set(desktopItems.current, {
        opacity: 0,
        scale: 0.7,
        y: 15,
      });

      gsap.set(desktopLines.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      const desktopTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      desktopItems.current.forEach((item, index) => {
        desktopTimeline.to(
          item,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          index === 0 ? 0 : "-=0.12"
        );

        if (desktopLines.current[index]) {
          desktopTimeline.to(
            desktopLines.current[index],
            {
              scaleX: 1,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.18"
          );
        }
      });


      /* ---------------- MOBILE ---------------- */

      gsap.set(mobileItems.current, {
        opacity: 0,
        x: -20,
      });

      gsap.set(mobileLines.current, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      const mobileTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      mobileItems.current.forEach((item, index) => {
        mobileTimeline.to(
          item,
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          index === 0 ? 0 : "-=0.1"
        );

        if (mobileLines.current[index]) {
          mobileTimeline.to(
            mobileLines.current[index],
            {
              scaleY: 1,
              duration: 0.3,
              ease: "power2.out",
            },
            "-=0.18"
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-16 w-full px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">

        {/* ================= DESKTOP ================= */}

        <div className="flex flex-col hidden md:flex">
          <div className="text-4xl text-amber-300  font-bold mb-6"><span>TECH</span> <span className="text-blue-300"> JOURNEY</span></div>
          <div className="hidden items-center md:flex">

          {technologies.map((tech, index) => (
            <React.Fragment key={tech}>

              <div
                ref={(el) => {
                  desktopItems.current[index] = el;
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="rounded-full flex justify-center items-center h-25 w-25  px-5 py-3 text-lg font-medium text-white ">
                  {tech.icon}
                </div>
                <div className="text-sm text-zinc-400" >{tech.name}</div></div>
              </div>

              {index < technologies.length - 1 && (
                <div className="mx-3 h-px flex-1 overflow-hidden ">
                  <div
                    ref={(el) => {
                      desktopLines.current[index] = el;
                    }}
                    className="h-full w-full bg-amber-300"
                  />
                </div>
              )}

            </React.Fragment>
          ))}

        </div></div>


        {/* ================= MOBILE ================= */}

       <div className="flex justify-between items-center md:hidden"> 
        <div className="w-25 font-extrabold text-amber-300 flex flex-col gap-4 text-4xl"><span>TECH</span> <span className="text-blue-300">JOURNEY</span></div>
        <div className="flex flex-col md:hidden">

          {technologies.map((tech, index) => (
            <React.Fragment key={tech}>

              <div
                ref={(el) => {
                  mobileItems.current[index] = el;
                }}
                className="w-fit"
              >
                <div className="rounded-full flex justify-center items-center h-20 w-20 px-5 py-3  font-medium text-white">
                  {tech.icon}
                </div>
              </div>

              {index < technologies.length - 1 && (
                <div className="ml-[30px] h-10 w-px overflow-hidden ">
                  <div
                    ref={(el) => {
                      mobileLines.current[index] = el;
                    }}
                    className="h-full w-full bg-amber-300"
                  />
                </div>
              )}

            </React.Fragment>
          ))}

        </div></div>

      </div>
    </section>
  );
};

export default TechJourney;