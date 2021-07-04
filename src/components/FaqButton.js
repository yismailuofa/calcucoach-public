export default function FaqButton({onClick}) {
  return (
      <button
      style={{
        fontSize: "max(20px,3.5vw)",
        letterSpacing: "-0.06em",
        textDecoration: "none",
        color: "white",
        fontFamily: "Poppins",
        display: "flex",
        alignItems: "center",
        height: "max(50px,8vw)",
        background: "linear-gradient(180deg, rgba(74,134,186,1) 50%, rgba(51,96,136,1) 100%)",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        left: "85%",
        paddingRight: "0"
      }}
      onClick={onClick}
    >
      faq
    </button>    
  );
}