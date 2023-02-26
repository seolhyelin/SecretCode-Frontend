import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
        <GlobalStyle />
        <h1 class="title">Light / Dark Mode - Toggle Button</h1>
        <Button isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
        <article>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          optio ab porro magni in sunt ipsam, doloremque minima, itaque sapiente
          consequatur, repellat velit voluptatum accusantium aperiam. Nostrum
          sunt reprehenderit nemo!
        </article>
      </ThemeProvider>
    </>
  );
}

export default App;
