import { useEffect } from "preact/hooks";
import { LeftSide } from "./Components/LeftSide/LeftSide";
import { RightSide } from "./Components/RightSide/RightSide";

export function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const spotlight = document.querySelector(".spotlight") as HTMLElement;
      if (spotlight) {
        spotlight.style.setProperty("--x", `${e.clientX}px`);
        spotlight.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="w-full min-h-screen flex bg-[#0a192f] relative">
      <div className="spotlight" />

      <div className="flex flex-col md:flex-row w-full">

        <LeftSide />

        <RightSide />
      </div>

    </main>
  );
}
