export default function WorkoutBox({img, name, handleStyle}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(74,134,186,1) 50%, rgba(51,96,136,1) 100%)",
        margin: "1vh",
        padding: "1vh",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1vh",
        height: "13vw",
        width: "13vw",
        minHeight: "190px",
        minWidth: "190px",
        textAlign: "center",
        cursor: "pointer"
      }}
      onClick={handleStyle}
    >
      <img
        src={img}
        alt={name}
        style={{
          height: "9vw",
          width: "9vw",
          minHeight: "110px",
          minWidth: "110px",
          marginBottom: "0.5vw",
          objectFit: "fit",
        }}
      ></img>
      <div style={{ fontSize: "2.5vh" }}>{name}</div>
    </div>
  );
}
