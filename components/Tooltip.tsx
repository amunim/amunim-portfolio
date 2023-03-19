import { useEffect, useRef, useState } from "react";

export default function Tooltip({ text, visiblity }: { text: string, visiblity: boolean }) {
    const ref = useRef<HTMLDivElement>(null);
    const [tooltipX, setXCordinate] = useState(0);
    const [tooltipY, setYCordinate] = useState(0);

    const [width, setWidth] = useState(0);
    const [height, setheight] = useState(0);

    useEffect(() => {
        setWidth(ref.current?.offsetWidth ?? 0);
        setheight(ref.current?.offsetHeight ?? 0);
    });

    useEffect(() => {
        window.onmousemove = onMouseMove;
    })

    function onMouseMove(event: MouseEvent) {
        if (!visiblity) return;

        setXCordinate(event.x);
        setYCordinate(event.y);
    }

    return (
        <>
            <div ref={ref} style={{ top: `${(tooltipY - (height / 2)) - 55}px`, left: `${tooltipX - (width / 2)}px`, scale: visiblity ? "100%" : "0%", opacity: visiblity ? 1 : 0.3 }} className="fixed max-w-xs text-center bg-black text-white z-[1000] rounded-md py-2 px-1 transition-[opacity] duration-300 after:content[' '] after:absolute after:top-full after:left-1/2 after:-ml-1 after:border-[5px] after:border-solid after:border-transparent after:border-t-black pointer-events-none">
                <span>{text}</span>
            </div>
        </>
    );
}