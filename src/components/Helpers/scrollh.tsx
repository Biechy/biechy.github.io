import React, { useRef, useEffect } from "react";

export const ScrollHorizontal: React.FC<React.ReactNode> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    isScrollingRef.current = true;
    startXRef.current = event.pageX - containerRef.current!.offsetLeft;
    scrollLeftRef.current = containerRef.current!.scrollLeft;
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isScrollingRef.current) return;
    const x = event.pageX - containerRef.current!.offsetLeft;
    const walk = x - startXRef.current;
    containerRef.current!.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isScrollingRef.current = false;
  };

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: event.deltaY * 2,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (
        containerRef.current &&
        containerRef.current.contains(event.target as Node)
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={"relative flex " + className}>
      <div
        ref={containerRef}
        className="flex overflow-x-scroll scrollbar-hide"
        onWheel={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="flex gap-4 mr-24 sm:mr-32">{children}</div>
        <div className="flex right-0 absolute w-24 sm:w-36 h-full  bg-gradient-to-r from-transparent to-background-color dark:to-background-color-dark  group-hover:to-neutral-50 dark:group-hover:to-neutral-900 " />
      </div>
    </div>
  );
};

export default ScrollHorizontal;
