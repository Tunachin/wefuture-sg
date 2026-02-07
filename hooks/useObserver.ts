import {useEffect, useRef, useState} from "react";

export default function useObserver(elementId: string) {
  const observerRef: any = useRef()
  const [percent, setPercent] = useState<number>(1)
  useEffect(() => {
    const observeId = document.getElementById(elementId)
    if (observeId) {
      observerRef.current = new IntersectionObserver((entries, observer) => {
        let percent_ = entries[0].intersectionRatio * 100;
        setPercent(percent_)
      }, {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      });
      observerRef.current.observe(observeId)
    }
    return () => observerRef.current.unobserve(observeId)
  }, [])
  return percent
}
