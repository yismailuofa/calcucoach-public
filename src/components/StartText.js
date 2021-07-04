import StartButton from "./StartButton";
import { CSSTransition } from "react-transition-group";
import "./styles/slideX.css";
import { useRef, useState } from "react";

export default function StartText({ nextStep, step, isFaq }) {
  const [animationDirection, setanimationDirection] = useState("slideXmiddle")
  const nodeRef = useRef(null)
  return (
    <CSSTransition
      in={step === 0 && !isFaq}
      timeout={900}
      classNames={animationDirection}
      unmountOnExit={true}
      nodeRef={nodeRef}
      onExited={() => setanimationDirection("slideXbehind")}
      onEntered={() => setanimationDirection("slideXmiddle")}
    >
      <div
        style={{
          fontSize: "5vh",
          background:
            "linear-gradient(180deg, rgba(74,134,186,1) 50%, rgba(51,96,136,1) 100%)",
          padding: "4vh",
          paddingTop: "2vh",
          marginTop: "-4vh",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          justifyText: "center",
          boxShadow: "0vw 5px 20px black",

        }}
        ref={nodeRef}
      >
        Free training.
        <br />
        Made for you.
        <StartButton onClick={nextStep} />
      </div>
    </CSSTransition>
  );
}
