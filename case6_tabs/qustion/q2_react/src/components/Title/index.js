import React, { useState } from "react";
import styled from "styled-components";

const Title = () => {
  const [activeItem, setActiveItem] = useState(0);
  const item = ["HTML", "CSS", "JavsScript"];

  const handleItem = (e) => {
    const index = +e.currentTarget.dataset.index;
    setActiveItem(index);
  };

  return (
    <Navigator>
      {item.map((item, index) => {
        return (
          <Tab
            key={item[index]}
            data-index={index}
            onClick={handleItem}
            isActive={activeItem === index}
          >
            {item}
          </Tab>
        );
      })}
      <Glider activeItem={activeItem} />
    </Navigator>
  );
};

const Navigator = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 700px;
  height: 50px;
`;

const Tab = styled.button`
  border: none;
  cursor: pointer;
  background-color: #cedbdf;
  /* background-color: ${({ isActive }) => (isActive ? "#fff" : "#cedbdf")}; */
  transition: 0.3s ease-out;
  z-index: 1000;
`;

const Glider = styled.span`
  position: absolute;
  width: calc(100% / 3);
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  transform: ${({ activeItem }) => `translateX(${activeItem * 100}%)`};
  transition: 0.3s ease-out;
`;
export default Title;
