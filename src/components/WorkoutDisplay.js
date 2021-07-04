import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import BackButton from "./BackButton";
import "./styles/slideX.css";
import programs from "../programs.json";

export default function WorkoutDisplay({
  prevStep,
  step,
  isFaq,
  gender,
  workoutStyle,
  workoutDays,
}) {
  const [animationDirection, setanimationDirection] = useState("slideXmiddle");
  const nodeRef = useRef(null);

  const handleBack = () => {
    setanimationDirection("slideXfront");
    prevStep();
  };

  const workoutDict = programs[`${gender}Programs${workoutDays}`][workoutStyle];

  return (
    <CSSTransition
      in={step === 5 && !isFaq}
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
            marginTop: "-10vh",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            alignItems: "center",
            overflowY: "scroll",
            height: "60vh",
          }}
        >
          {Object.keys(workoutDict).map((key) => (
            <div
              style={{
                background:
                  "linear-gradient(180deg, rgba(74,134,186,1) 50%, rgba(51,96,136,1) 100%)",
                width: "90vw",
                margin: "13px",
                borderRadius: "30px",
                boxShadow: "0vw 2px 10px black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "700px",
                fontSize: "clamp(16px,3.5vw,32px)",
                border: "5px solid white",
              }}
              key={key}
            >
              <div style={{ fontSize: "clamp(20px,4.5vw,43px)" }}>{key}</div>
              <ul style={{ marginTop: "-1px" }}>
                {workoutDict[key].map((workout, index) => (
                  <li key={index}>
                    {workout.name}: {workout.freq}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <BackButton onClick={handleBack} />
      </div>
    </CSSTransition>
  );
}
