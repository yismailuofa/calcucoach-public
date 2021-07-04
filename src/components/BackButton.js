export default function BackButton({onClick}) {
  return (
    <div>
      <button
        style={{
          marginTop: "4vh",
          marginBottom: "-1vh",
          fontSize: "3vh",
          padding: "1.5vh",
          letterSpacing: "-0.06em",
          textDecoration: "none",
          fontFamily: "Poppins",
          background: "linear-gradient(180deg, rgba(74,134,186,1) 50%, rgba(51,96,136,1) 100%)",
          border: "none",
          cursor: "pointer",
          color: "white",
          borderRadius: "30px",
        }}
        onClick={onClick}
      >
        Go Back
      </button>
    </div>
  );
}
