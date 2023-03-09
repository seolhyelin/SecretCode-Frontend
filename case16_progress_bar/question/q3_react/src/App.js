import { useState, useRef } from "react";
import ProgressBar from "./ProgressBar";
import Button from "./Button";

function App() {
  const [current, setCurrent] = useState(0);
  const limit = 4;
  const range = 100 / limit;
  const animationSpeed = 1000;
  const isLoading = useRef(false);

  const delay = () => {
    isLoading.current = true;
    return new Promise(() =>
      setTimeout(() => (isLoading.current = false), animationSpeed)
    );
  };

  const handleNext = async () => {
    // Do Something Here!
    // 다음 스텝으로 이동
    if (isLoading.current) return;
    if (current === limit) return;
    setCurrent(current + 1);
    await delay();
  };

  const handlePrev = async () => {
    // Do Something Here!
    // 이전 스텝으로 이동
    if (isLoading.current) return;
    if (current === 0) return;
    setCurrent(current - 1);
    await delay();
  };

  return (
    <div>
      <ProgressBar width={current * range} animationSpeed={animationSpeed} />

      <br />
      <br />

      <Button text={"이전"} onClick={handlePrev} />
      <Button text={"다음"} onClick={handleNext} />
    </div>
  );
}

export default App;
