import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import MaleButton from "./MaleButton";
import FemaleButton from "./FemaleButton";
import BackButton from "./BackButton";
import "./styles/slideX.css";

export default function GenderText({
  nextStep,
  prevStep,
  setGender,
  step,
  isFaq,
}) {
  const [animationDirection, setanimationDirection] = useState("slideXmiddle");
  const nodeRef = useRef(null);

  const handleBack = () => {
    setanimationDirection("slideXfront");
    prevStep();
  };

  const handleGender = (gender) => {
    setGender(gender);
    nextStep();
  };

  return (
    <CSSTransition
      in={step === 1 && !isFaq}
      timeout={900}
      classNames={animationDirection}
      unmountOnExit={true}
      nodeRef={nodeRef}
      onExited={() =>
        animationDirection === "slideXmiddle" &&
        setanimationDirection("slideXbehind")
      }
      onEntered={() => setanimationDirection("slideXmiddle")}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute", 
        }}
        ref={nodeRef}
      >
        <div
          style={{
            fontSize: "3.5vh",
            background:
              "linear-gradient(180deg, rgba(74,134,186,1) 50%, rgba(51,96,136,1) 100%)",
            paddingTop: "4vh",
            paddingBottom: "4vh",
            paddingRight: "2vh",
            paddingLeft: "2vh",
            marginTop: "1vh",
            marginLeft: "2vh",
            marginRight: "2vh",
            borderRadius: "4vh",
            boxShadow: "0vw 5px 20px black",
          }}
        >
          What is your gender?
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "1vh",
            }}
          >
            <MaleButton onClick={() => handleGender("male")}/>
            <FemaleButton onClick={() => handleGender("female")}/>
          </div>
        </div>
        <BackButton onClick={handleBack} />
      </div>
    </CSSTransition>
  );
}
