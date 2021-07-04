import BackButton from "./BackButton";
import WorkoutInfoText from "./WorkoutInfoText";
import { CSSTransition } from "react-transition-group";
import "./styles/slideY.css";
import { useRef } from "react";

export default function WorkoutInfo({ isWorkoutInfo, isFaq, workoutInfoHide }) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={isWorkoutInfo && !isFaq}
      timeout={900}
      classNames="slideY"
      unmountOnExit={true}
      nodeRef={nodeRef}
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
        <WorkoutInfoText/>
        <BackButton onClick={workoutInfoHide} />
      </div>
    </CSSTransition>
  );
}
