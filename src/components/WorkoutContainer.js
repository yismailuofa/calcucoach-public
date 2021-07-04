import WorkoutBox from "./WorkoutBox"


import fatBurner from "../assets/fatBurner.svg";
import hollywood from "../assets/hollywood.svg";
import beachBody from "../assets/beachBody.svg";
import hourglass from "../assets/hourglass.svg";
import athlete from "../assets/athlete.svg";
import endurance from "../assets/endurance.svg";
import strength from "../assets/strength.svg";
import beginner from "../assets/beginner.svg";
import balanced from "../assets/balanced.svg";
import toning from "../assets/toning.svg";
import beastMode from "../assets/beastMode.svg";
import "./styles/scrollbar.css";
import "./styles/workoutStyles.css";

const imgMapping = {
    Toning: toning,
    "Fat Burner": fatBurner,
    "Beach Body": beachBody,
    "Beast Mode": beastMode,
    Athlete: athlete,
    Balanced: balanced,
    Beginner: beginner,
    Strength: strength,
    Endurance: endurance,
    Hollywood: hollywood,
    Hourglass: hourglass,
  };

export default function WorkoutContainer({programList, handleStyle}) {
    return (
        <div
        style={{
          height: "54vh",
          width: "89vw",
          marginBottom: "-2vh",
          overflowY: "scroll",
          overscrollBehavior: "contain",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        className="customScroll workoutContainer"
      >
        {Object.keys(programList).map((key) => (
          <WorkoutBox
            key={key}
            img={imgMapping[programList[key]]}
            name={programList[key]}
            handleStyle={() => handleStyle(key)}
          />
        ))}
      </div>
    )
}
