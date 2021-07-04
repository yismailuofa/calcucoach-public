export default function FiveButton({onClick}) {
    return (
        <button
        style={{
          fontSize: "4vh",
          paddingLeft: "3vh",
          paddingRight: "3vh",
          letterSpacing: "-0.06em",
          textDecoration: "none",
          fontFamily: "Poppins",
          backgroundColor: "white",
          border: "none",
          cursor: "pointer",
          color: "#4a86ba",
          display: "flex",
          justifyContent: "center",
          borderRadius: "30px",
          height: "100%",
          margin: "1vh"
        }}
        onClick={onClick}
      >
        Five Days
      </button>
    )
}
