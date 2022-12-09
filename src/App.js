import { useState } from "react";
import { Btn } from "./elements/Btn";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const handleClick = () => {
    setBackgroundColor("red");
  };
  return (
    <>
      <Btn bgColor={backgroundColor} onClick={handleClick}>
        sdfdsfs
      </Btn>
    </>
  );
}

export default App;
