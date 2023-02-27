import React from "react";
import styled from "styled-components";

const Tabs = () => {
  return (
    <TabsContainer>
      <div className="tab-content active">
        HTML(HyperText Markup Language) is the most basic building block of the
        Web. It describes and defines the content of a webpage along with the
        basic layout of the webpage. Other technologies besides HTML are
        generally used to describe a web page's appearance/presentation(CSS) or
        functionality/ behavior(JavaScript).
      </div>
      <div className="tab-content">
        Cascading Style Sheets(CSS) is a stylesheet language used to describe
        the presentation of a document written in HTML or XML (including XML
        dialects such as SVG, MathML or XHTML). CSS describes how elements
        should be rendered on screen, on paper, in speech, or on other media.
      </div>
      <div className="tab-content">
        JavaScript(JS) is a lightweight interpreted or JIT-compiled programming
        language with first-className functions. While it is most well-known as
        the scripting language for Web pages, many non-browser environments also
        use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is
        a prototype-based, multi-paradigm, dynamic language, supporting
        object-oriented, imperative, and declarative (e.g. functional
        programming) styles.
      </div>
    </TabsContainer>
  );
};

const TabsContainer = styled.div``;
export default Tabs;
