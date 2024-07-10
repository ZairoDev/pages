export interface InviewPortType {
    distanceFromEnd: number;
    callback: () => boolean;
    target: HTMLElement;
  }
  
  const checkInViewIntersectionObserver = ({
    target,
    distanceFromEnd,
    callback,
  }: InviewPortType) => {
    const _funCallback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          // NEED CALLBACK WILL RETURN BOOLEAN ---- IF TRUE WE WILL UNOBSERVE AND FALSE IS NO
          const unobserve = callback();
          unobserve && observer.unobserve(entry.target);
        }
      });
    };
  
    // _checkBrowserSupport-----
    if (typeof window.IntersectionObserver === "undefined") {
      console.error(
        "window.IntersectionObserver === undefined! => Your Browser does not support IntersectionObserver"
      );
      return;
    }
  
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: `${distanceFromEnd}px 0px`,
      threshold: 0,
    };
  
    const observer = new IntersectionObserver(_funCallback, options);
    target && observer.observe(target);
  };
  
  export default checkInViewIntersectionObserver;
  