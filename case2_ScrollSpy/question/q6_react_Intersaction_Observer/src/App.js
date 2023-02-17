import React, { useState, useRef, useEffect } from "react";
import Nav from "./Nav";
import Content from "./Content";
import "./style.css";

const pages = Array.from({ length: 8 }).map((_, i) => i + 1);

const App = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const contentRef = useRef([]);

  const moveToPage = (index) => () => {
    // do something
    contentRef.current[index].scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  const scrollSpyObserver = new IntersectionObserver(
    (entries) => {
      // do something
      entries.forEach((entry) => {
        // const { isIntersecting, boundingClientRect } = entry;
        // const scrollTop = window.pageYOffset;
        // const { height } = boundingClientRect;
        // if (isIntersecting) {
        //   const index = Math.round(scrollTop / height);
        //   setViewIndex(index);
        // }
      });

      const { target } = entries.find((entry) => entry.isIntersecting) || {};
      const index = contentRef.current.indexOf(target);
      setViewIndex(index);
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% 정도 보일때 실행
    }
  );

  useEffect(() => {
    contentRef.current.forEach((item) => scrollSpyObserver.observe(item));
    return () => {
      contentRef.current.forEach((item) => scrollSpyObserver.unobserve(item));
    };
  }, []);

  return (
    <div id="app">
      <Nav pages={pages} viewIndex={viewIndex} moveToPage={moveToPage} />
      <div id="contents">
        {pages.map((p, i) => (
          <Content key={p} ref={(r) => (contentRef.current[i] = r)} page={p} />
        ))}
      </div>
    </div>
  );
};

export default App;
