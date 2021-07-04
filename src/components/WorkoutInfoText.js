import "./styles/scrollbar.css";

export default function WorkoutInfoText() {
  return (
    <div
      style={{
        fontSize: "4vh",
        width: "45vw",
        maxHeight: "55vh",
        background:
          "linear-gradient(180deg, rgba(74,134,186,1) 50%, rgba(51,96,136,1) 100%)",
        padding: "4vh",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        justifyText: "center",
        boxShadow: "0vw 5px 20px black",
        overflowY: "scroll",
        overscrollBehavior: "contain",
        minWidth: "270px",
        marginTop: "max(-21vw,-20px)",
      }}
      className="customScroll textBox"
    >
      Toning:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
      Uncover the muscle beneath.
      </div>
      <br />
      Fat Burner:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
      Burn fat quickly and easily.
      </div>
      <br />
      Beach Body:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
      Look good on and off the beach.
      </div>
      <br />
      Beast Mode:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
      You will go HARD. Not for the light-hearted.
      </div>
      <br />
      Hourglass:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
      Get the hourglass figure you deserve. 
      </div>
      <br />
      Athlete:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
      Get conditioned and reach the top of your game.
      </div>
      <br />
      Balanced:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
      A healthy balance to target your whole body.
      </div>
      <br />
      Beginner:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
      Recommended for those new to the gym and working out.
      </div>
      <br />
      Strength:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
      Train with an attention to strength and form.
      </div>
      <br />
      Endurance:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
      Enhance your body and your mind.
      </div>
      <br />
      Hollywood:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
      Train like the celebrities with curated workouts.
      </div>
    </div>
  );
}
