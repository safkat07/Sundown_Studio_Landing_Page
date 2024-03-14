import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function useScroll(start) {
    useEffect(() => {
        if (!start) return;

        const scrollEl = document.querySelector("#main")
        const scroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
        })
    }, [start])
}