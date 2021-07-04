import FaqButton from "./FaqButton";
import Title from "./Title";

export default function Header({faqShow}) {
  return (
    <div
      style={{
        width: "100vw",
        height: "max(50px,8vw)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0vw 2px 20px black",
        position: "relative",
        background: "linear-gradient(180deg, rgba(74,134,186,1) 50%, rgba(51,96,136,1) 100%)",
      }}
    >
      <Title />
      <FaqButton onClick={faqShow}/>
    </div>
  );
}
