import React, { useState } from "react";
import styled from "styled-components";

const Title = () => {
  const [activeItem, setActiveItem] = useState(0);
  const item = [
    {
      id: 0,
      title: "HTML",
      desc: "HTML(HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation(CSS) or functionality/ behavior(JavaScript).",
    },
    {
      id: 1,
      title: "CSS",
      desc: " Cascading Style Sheets(CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
    },
    {
      id: 2,
      title: "JavsScript",
      desc: "JavaScript(JS) is a lightweight interpreted or JIT-compiled programming language with first-className functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.",
    },
  ];

  const handleItem = (e) => {
    const index = +e.currentTarget.dataset.index;
    setActiveItem(index);
  };

  return (
    <>
      <Navigator>
        {item.map((item, index) => {
          return (
            <Tab key={item.id} data-index={index} onClick={handleItem}>
              {item.title}
            </Tab>
          );
        })}
        <Glider activeItem={activeItem} />
      </Navigator>
      {item
        .filter((item) => activeItem === item.id)
        .map((item) => {
          return <Contents key={item.id}>{item.desc}</Contents>;
        })}
    </>
  );
};

const Navigator = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 700px;
  height: 50px;
  background-color: #efedef;
  cursor: pointer;
`;

const Tab = styled.div`
  cursor: pointer;
  transition: color 0.15s ease-in;
  z-index: 1000;
  text-align: center;
  line-height: 50px;
`;

const Glider = styled.span`
  position: absolute;
  width: calc(100% / 3);
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  transform: ${({ activeItem }) => `translateX(${activeItem * 100}%)`};
  transition: 0.25s ease-out;
`;

const Contents = styled.div``;
export default Title;
