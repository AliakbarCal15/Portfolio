import { useState, useEffect, useRef } from 'react';

export const useSectionObserver = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.4, // 40% of the section needs to be visible
      rootMargin: '-80px 0px 0px 0px' // Offset for the navbar height
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get section id from the element
          const id = entry.target.id;
          if (id) {
            setActiveSection(id);
            // Update URL hash without scrolling
            history.replaceState(null, '', `#${id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Get all sections with IDs
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return { activeSection, sectionRefs };
};
