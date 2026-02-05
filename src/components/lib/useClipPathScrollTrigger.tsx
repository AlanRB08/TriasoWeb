import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Params {
  enabled: boolean;

  boxRef: React.RefObject<HTMLDivElement>;
  nextSectionRef: React.RefObject<HTMLDivElement>;
  clipTargetRef: React.RefObject<HTMLDivElement>;
  imgRef: React.RefObject<HTMLImageElement>;
  otroElementoRef: React.RefObject<HTMLDivElement>;
  optionsRef: React.RefObject<HTMLDivElement>;
  columnGrid1Ref: React.RefObject<HTMLDivElement>;
  columnGrid2Ref: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}

export function useClipPathScrollTrigger({
  enabled,
  boxRef,
  nextSectionRef,
  clipTargetRef,
  imgRef,
  otroElementoRef,
  optionsRef,
  columnGrid1Ref,
  columnGrid2Ref,
  containerRef,
}: Params) {
  const scrollTrigRef = useRef<ScrollTrigger | null>(null);
  const resizeTimerRef = useRef<number | null>(null);
  const isCreatingRef = useRef(false);
  const isIntersectingRef = useRef(false);
  const mutationObserverRef = useRef<MutationObserver | null>(null);
  const pendingRecalcRef = useRef(false);
  const lastRecalcTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  const createScrollTrigger = useCallback(() => {
    if (!enabled) return;
    if (isCreatingRef.current) return;

    isCreatingRef.current = true;

    const box = boxRef.current;
    const target = nextSectionRef.current;
    const clipTarget = clipTargetRef.current;
    const img = imgRef.current;
    const otro = otroElementoRef.current;
    const options = optionsRef.current;
    const col1 = columnGrid1Ref.current;
    const col2 = columnGrid2Ref.current;

    if (!box || !target || !clipTarget || !img || !otro || !options || !col1 || !col2) {
      isCreatingRef.current = false;
      return;
    }

    if (scrollTrigRef.current) {
      scrollTrigRef.current.kill();
      scrollTrigRef.current = null;
    }

    const boxTopAbs = box.getBoundingClientRect().top + window.scrollY;
    const boxHeight = box.offsetHeight;
    const boxBottomAbs = boxTopAbs + boxHeight;
    const targetTopAbs = target.getBoundingClientRect().top + window.scrollY;
    const clipTargetTopAbs = clipTarget.getBoundingClientRect().top + window.scrollY;

    const distanceToMove = targetTopAbs - boxTopAbs;

    const clipStart = (clipTargetTopAbs - boxBottomAbs) / distanceToMove;
    const clipEnd = (clipTargetTopAbs - boxTopAbs) / distanceToMove;

    const clipStartClamped = Math.max(0, Math.min(clipStart, 1));
    const clipEndClamped = Math.max(0, Math.min(clipEnd, 1));

    const scrollDistanceReductionFactor = 0.8;
    const adjustedDistanceToMove = distanceToMove;
    const adjustedScrollDistance = distanceToMove * scrollDistanceReductionFactor;

    const anim = gsap.to(box, {
      y: adjustedDistanceToMove,
      ease: "none",
    });

    const scrollTrig = ScrollTrigger.create({
      id: "boxScroll",
      trigger: box,
      start: "top+=70 20%",
      end: `+=${adjustedScrollDistance}`,
      scrub: true,
      markers: false,
      invalidateOnRefresh: true,
      animation: anim,

      onUpdate: (self: ScrollTrigger) => {
        const p = self.progress;
        let clipProgress = 0;

        if (clipEndClamped > clipStartClamped) {
          clipProgress =
            (p - clipStartClamped) /
            (clipEndClamped - clipStartClamped);
        }

        clipProgress = Math.max(0, Math.min(clipProgress, 1));

        gsap.set(img, {
          clipPath: `inset(0% 0% ${clipProgress * 100}% 0%)`,
        });

        const show80 = p >= 0.8 && p <= 1.0;
        const show90 = p >= 0.9 && p <= 1.0;

        gsap.to(otro, {
          opacity: show80 ? 1 : 0,
          y: show80 ? 0 : -50,
          scale: show80 ? 1 : 0.95,
          duration: 0.3,
        });

        gsap.to(options, {
          opacity: show90 ? 1 : 0,
          y: show90 ? 0 : -50,
          scale: show90 ? 1 : 0.95,
          duration: 0.3,
        });

        gsap.to(col1, {
          opacity: show90 ? 1 : 0,
          x: show90 ? 0 : -50,
          scale: show90 ? 1 : 0.95,
          duration: 0.3,
        });

        gsap.to(col2, {
          opacity: show90 ? 1 : 0,
          x: show90 ? 0 : 50,
          scale: show90 ? 1 : 0.95,
          duration: 0.3,
        });
      },
    });

    scrollTrigRef.current = scrollTrig;
    isCreatingRef.current = false;
    lastRecalcTimeRef.current = Date.now();
  }, [enabled]);

  const scheduleRecalc = useCallback(() => {
    if (!isIntersectingRef.current) {
      pendingRecalcRef.current = true;
      return;
    }

    const now = Date.now();
    const timeSinceLastRecalc = now - lastRecalcTimeRef.current;
    const MIN_RECALC_INTERVAL = 500;

    if (timeSinceLastRecalc < MIN_RECALC_INTERVAL) {
      if (!pendingRecalcRef.current) {
        pendingRecalcRef.current = true;
        setTimeout(() => {
          pendingRecalcRef.current = false;
          scheduleRecalc();
        }, MIN_RECALC_INTERVAL - timeSinceLastRecalc);
      }
      return;
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      createScrollTrigger();
      ScrollTrigger.refresh();
      animationFrameRef.current = null;
      pendingRecalcRef.current = false;
    });
  }, [createScrollTrigger]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wasIntersecting = isIntersectingRef.current;
          isIntersectingRef.current = entry.isIntersecting;

          if (entry.isIntersecting && !wasIntersecting) {
            createScrollTrigger();

            if (pendingRecalcRef.current) {
              pendingRecalcRef.current = false;
              scheduleRecalc();
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "200px",
        threshold: 0,
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [createScrollTrigger, scheduleRecalc]);

  useEffect(() => {
    if (!isIntersectingRef.current) return;

    const observerConfig: MutationObserverInit = {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["style", "class"],
    };

    const handleMutation = (mutations: MutationRecord[]) => {
      const relevantMutation = mutations.some((mutation) => {
        if (
          mutation.target === boxRef.current ||
          mutation.target === imgRef.current ||
          mutation.target === otroElementoRef.current ||
          mutation.target === optionsRef.current ||
          mutation.target === columnGrid1Ref.current ||
          mutation.target === columnGrid2Ref.current
        ) {
          return false;
        }

        if (mutation.type === "attributes") {
          const attrName = mutation.attributeName;
          return attrName === "style" || attrName === "class";
        }

        return mutation.type === "childList";
      });

      if (relevantMutation) {
        scheduleRecalc();
      }
    };

    const observer = new MutationObserver(handleMutation);

    if (containerRef.current) {
      observer.observe(containerRef.current, observerConfig);
    }

    mutationObserverRef.current = observer;

    return () => {
      observer.disconnect();
      mutationObserverRef.current = null;
    };
  }, [scheduleRecalc]);

  useEffect(() => {
    const handleResize = () => {
      if (resizeTimerRef.current) {
        window.clearTimeout(resizeTimerRef.current);
      }

      resizeTimerRef.current = window.setTimeout(() => {
        scheduleRecalc();
      }, 300);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimerRef.current) {
        window.clearTimeout(resizeTimerRef.current);
      }
    };
  }, [scheduleRecalc]);

  useEffect(() => {
    if (enabled && isIntersectingRef.current) {
      scheduleRecalc();
    } else if (!enabled) {
      if (scrollTrigRef.current) {
        scrollTrigRef.current.kill();
        scrollTrigRef.current = null;
      }
    }
  }, [enabled, scheduleRecalc]);

  useEffect(() => {
    return () => {
      if (scrollTrigRef.current) {
        scrollTrigRef.current.kill();
      }
      if (mutationObserverRef.current) {
        mutationObserverRef.current.disconnect();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (resizeTimerRef.current) {
        window.clearTimeout(resizeTimerRef.current);
      }
    };
  }, []);
}
