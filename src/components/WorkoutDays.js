import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import BackButton from "./BackButton";
import ThreeButton from "./ThreeButton";
import FourButton from "./FourButton";
import FiveButton from "./FiveButton";
import "./styles/slideX.css";

export default function WorkoutDays({
  nextStep,
  prevStep,
  setDay,
  step,
  isFaq,
}) {
  const [animationDirection, setanimationDirection] = useState("slideXmiddle");
  const nodeRef = useRef(null);

  const handleBack = () => {
    setanimationDirection("slideXfront");
    prevStep();
  };

  const handleDays = (day) => {
    setDay(day);
    nextStep();
  };

  return (
    <CSSTransition
      in={step === 3 && !isFaq}
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
            fontSize: "4vh",
            background:
              "linear-gradient(180deg, rgba(74,134,186,1) 50%, rgba(51,96,136,1) 100%)",
            padding: "4vh",
            marginTop: "-10vh",
            borderRadius: "30px",
            boxShadow: "0vw 5px 20px black",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            width: "63vw",
          }}
        >
          How many days a week do you want to workout?
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "1vh",
              flexWrap: "wrap",
              alignItems: "center"
            }}
          >
            <ThreeButton onClick={() => handleDays(3)} />
            <FourButton onClick={() => handleDays(4)} />
            <FiveButton onClick={() => handleDays(5)} />
          </div>
        </div>
        <BackButton onClick={handleBack} />
      </div>
    </CSSTransition>
  );
}
