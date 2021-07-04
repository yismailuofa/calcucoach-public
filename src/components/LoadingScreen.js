import { useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Player } from "@lottiefiles/react-lottie-player";
import "./styles/slideX.css";

export default function LoadingScreen({ nextStep, step }) {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (step === 4) {
      const time = setTimeout(() => nextStep(), 3000);
      return () => {
        clearTimeout(time);
      };
    }
  });

  return (
    <CSSTransition
      in={step === 4}
      timeout={900}
      classNames="slideXmiddle"
      unmountOnExit={true}
      mountOnEnter={true}
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
        <div
          style={{
            fontSize: "4vh",
            display: "flex",
            padding: "2vh",
            borderRadius: "4vh",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "80vw",
            maxWidth: "500px",
            background:
              "linear-gradient(180deg, rgba(74,134,186,1) 50%, rgba(51,96,136,1) 100%)",
            marginTop: "-10vh",
          }}
        >
          Creating your perfect workout
          <Player
            src="https://assets1.lottiefiles.com/packages/lf20_vhhoyvvc.json"
            speed={0.5}
            autoplay={true}
            style={{
              width: "30vh",
              height: "30vh",
            }}
          />
        </div>
      </div>
    </CSSTransition>
  );
}
