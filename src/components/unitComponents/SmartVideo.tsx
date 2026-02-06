import React, { useRef, useEffect, useState } from 'react';

interface SmartVideoProps {
  src: string;
  poster?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  autoplayOnMobile?: boolean; 
  isLoop?: boolean;
  desktopWidth?: string | number;
  desktopHeight?: string | number;
}

const SmartVideo: React.FC<SmartVideoProps> = ({ 
  src, 
  poster, 
  width = "100%", 
  height = "auto",
  className = "",
  autoplayOnMobile = false,
  isLoop = false,
  desktopHeight,
  desktopWidth
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    setIsMobile(mediaQuery.matches);
    
    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting && !isVideoLoaded) {
          setIsVideoLoaded(true);
        }
        const shouldAutoplay = !isMobile || (isMobile && autoplayOnMobile);

        if (isVideoLoaded && shouldAutoplay) {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
              });
            }
          } else {
            video.pause();
          }
        }
      });
    }, { threshold: 0.5 });

    observer.observe(video);
    return () => video && observer.unobserve(video);
  }, [isMobile, isVideoLoaded, autoplayOnMobile]);

  const currentWidth = isMobile ? width : (desktopWidth ?? width);
  const currentHeight = isMobile ? height : (desktopHeight ?? height);

  const showControls = isMobile && !autoplayOnMobile;
  const isMuted = !isMobile || autoplayOnMobile;

  return (
    <div className={`smart-video-container ${className}`} style={{ width:currentWidth, height:currentHeight }}>
      <video
        ref={videoRef}
        poster={poster}
        src={isVideoLoaded ? src : undefined}
        width="100%"
        height="100%"
        controls={showControls}
        muted={isMuted}
        loop={isLoop} 
        playsInline 
        preload="metadata"
        style={{ objectFit: 'cover', display: 'block', background:"#f4f5f6" }}
      />
    </div>
  );
};

export default SmartVideo;