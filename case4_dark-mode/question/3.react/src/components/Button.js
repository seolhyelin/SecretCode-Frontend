import { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";

export const Button = ({ isDarkMode, handleDarkMode }) => {
  const [toggle, setToggle] = useState(0);
  const themeContent = ["light", "dark"];

  const handleToggle = (e) => {
    const index = +e.currentTarget.dataset.index;
    setToggle(index);
    handleDarkMode();
  };

  useEffect(() => {
    if (toggle) localStorage.setItem("theme", "dark");
    else {
      localStorage.setItem("theme", "light");
    }
  }, [toggle]);

  return (
    <ToggleButton>
      <ToggleSwitch toggle={toggle} />
      {themeContent.map((theme, index) => {
        return (
          <ToggleText
            data-index={index}
            isDarkMode={isDarkMode}
            onClick={handleToggle}
            key={index}
            isSelect={index === toggle}
          >
            {theme}
          </ToggleText>
        );
      })}
    </ToggleButton>
  );
};

const ToggleButton = styled.div`
  display: flex;
  position: relative;
  width: 100px;
  height: 50px;
  margin: 0 auto;
  cursor: pointer;
`;
const ToggleSwitch = styled.div`
  position: absolute;
  top: 2px;
  left: ${({ toggle }) =>
    toggle ? theme.dark.toggleButtonSwitch : theme.light.toggleButtonSwitch};
  width: 46px;
  height: 46px;
  background-color: #fff;
  border-radius: 100%;
  transition: left 0.3s;
`;
const ToggleText = styled.div`
  padding: 10px;
  width: 50%;
  display: flex;
  text-align: center;
  /* background-color: #3dbf87; */
  background-color: ${({ isSelect }) =>
    isSelect ? theme.dark.bgColor : theme.light.bgColor};
  color: ${({ isSelect }) =>
    isSelect ? theme.dark.toggleTextColor : theme.light.toggleTextColor};
  box-shadow: 2px 2px 5px 0 rgba(50, 50, 50, 0.75);
  transition: background-color 0.3s;
`;
