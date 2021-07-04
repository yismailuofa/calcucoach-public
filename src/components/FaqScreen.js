import BackButton from "./BackButton";
import FaqText from "./FaqText";
import { CSSTransition } from "react-transition-group";
import "./styles/slideY.css";
import { useRef } from "react";

export default function FaqScreen({ faqHide, isFaq }) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={isFaq}
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
        <FaqText />
        <BackButton onClick={faqHide} />
      </div>
    </CSSTransition>
  );
}
