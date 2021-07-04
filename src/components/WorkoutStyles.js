import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import BackButton from "./BackButton";
import programs from "../programs.json";
import WorkoutContainer from "./WorkoutContainer";
import "./styles/slideX.css";
import "./styles/workoutStyles.css";
import info from "../assets/info.svg";
// 1. Toning: Uncover the muscle beneath.
// 2. Fat Burner: Burn fat quickly and easily.
// 3. Beach Body: Look good on and off the beach.
// 4. Gender:
//     Male-> Beast mode: You will go HARD. Not for the light-hearted.
//     Female-> Hourglass: Get the hourglass figure you deserve. 
// 5. Athlete: Get conditioned and reach the top of your game.  
// 6. All Around: A healthy balance of all workouts.
// 7. Beginner: Recommended for beginners new to the gym and working out.
// 8. Strength: Focus on strength and form.
// 9. Endurance: Enhance the body and the mind.
// 10. Hollywood: Train like the celebrities with curated workouts.


export default function WorkoutStyles({
  nextStep,
  prevStep,
  setStyle,
  step,
  isFaq,
  gender,
  isWorkoutInfo,
  workoutInfoShow,
}) {
  const [animationDirection, setanimationDirection] = useState("slideXmiddle");
  const nodeRef = useRef(null);
  const programList =
    gender === "male" ? programs.maleProgramsList : programs.femaleProgramsList;

  const handleBack = () => {
    setanimationDirection("slideXfront");
    prevStep();
  };

  const handleStyle = (style) => {
    setStyle(style);
    nextStep();
  };

  return (
    <CSSTransition
      in={step === 2 && !isFaq && !isWorkoutInfo}
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
            paddingBottom: "3vh",
            paddingRight: "1vh",
            paddingLeft: "1vh",
            marginLeft: "3vh",
            marginRight: "3vh",
            marginBottom: "2vh",
            borderRadius: "30px",
            textAlign: "center",
            boxShadow: "0vw 5px 20px black",
            marginTop: "-1vw",
          }}
          className="workoutQuestion"
        >
          What is your workout style?
          <img
            alt="info"
            src={info}
            style={{
              height: "3.5vh",
              width: "3.5vh",
              marginBottom: "-.5vh",
              marginLeft: "1vh",
              cursor: "pointer",
            }}
            onClick={workoutInfoShow}
          ></img>
        </div>
        <WorkoutContainer programList={programList} handleStyle={handleStyle}/>
        <BackButton onClick={handleBack} />
      </div>
    </CSSTransition>
  );
}
