import { RefObject, useEffect, useMemo, useRef, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>)
{
    const [intersecting, setIntersecting] = useState(false);

    let observer = useRef<IntersectionObserver>();// = useMemo(() => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting)), [ref]);

    useEffect(() => {
        observer.current = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

        if (ref.current != null)
            observer.current.observe(ref.current);

        return () => observer.current.disconnect();
    }, []);

    return intersecting;
}