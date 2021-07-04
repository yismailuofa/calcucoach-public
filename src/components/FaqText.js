import "./styles/scrollbar.css"

export default function FaqText() {
  return (
    <div
      style={{
        fontSize: "3vh",
        width: "75vw",
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
        marginTop: "max(-21vw,-20px)",
        }}
      className="customScroll textBox"
    >
      Q: What does A x B mean?
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: This notation means A sets of B reps. This means you do the exercise
        A times and repeat the motion within the exercise B times.
      </div>
      <br />
      Q: How do I do this exercise?
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: All the exercises are designed to be easily found with a Google
        Search. We are working on developing training videos for you to follow
        along with.
      </div>
      <br />
      Q: How long do these workouts take?
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: These workouts are designed to take about 1 hour in the gym. This
        depends on things such as experience level and rest time.
      </div>
      <br />
      Q: When will I see results?
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: This is a tough question because results depend on a number of
        factors such as diet, exeperience, intensity, form, and many more. A
        general estimate is that you can see results within 3 months.
      </div>
      <br />
      Q: What is Pyramid?:
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: Pyramid is a style of workout where you ramp to your max and then ramp down
    similar to a pyramid. If you have 5 x 5 as your frequency, you will build to your max
    weight in 2 sets, do your max for 1 set, and turn down the weight for the last two sets.
      </div>
      <br />
      Q: What is a Dropset?
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: A Dropset is when you perform another set after your main one with less weight to push
        your muscle even harder.
      </div>
      <br />
      Q: What is HIIT?
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: HIIT stands for High Intensity Interval Training. For this type of workout,
      you exercise at a high intensity for a short interval followed by lower intensity  
      for a longer interval. This helps to get the heart rate high and burn calories.
      </div>
      <br />
      Q: What is Explosive Training?
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: Explosive Training is when the reps are done in an explosive manner. This means that
      the push/pull movement is done as fast and powerful as possible followed by a slow return
      to the initial position. 
      </div>
      <br />
      Q: Do I have to follow the weekdays given?
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: No, the days are just a recommendation to allow for recovery. Feel free to make your
      own custom schedule.
      </div>
      <br />
      Q: Why are there only two options for gender?
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: These two options simply indicate the nature of the workouts you will be doing and the
        bodyparts they target. This question is purely to determine the bodytype you are working towards.
      </div>
      <br />
      Q: How are the workouts generated?
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: The workouts are generated based on the answers you provide us and calculated accordingly.
        The exercises are developed through a number of resources including our years of training experience,
        fitness professionals and scientific literature.
      </div>
      <br />
      Q: Do you guys collect data on us?
      <br />
      <div style={{ fontSize: "2.5vh" }}>
        A: Nope! We don't store any data on our users and your privacy is our utmost concern.
      </div>
      <br />
      <div style={{ fontSize: "2vh", textAlign: "center" }}>
      Calcucoach is not responsible or liable for any advice, 
      workout programs, or any other information, 
      that you obtain through this site. 
      We are not medical health practitioners or mental health 
      providers and we are not holding ourselves out to be in any capacity. 
      Rather, we serve as coaches, mentors and guides who help you reach your own health and wellness goals.
      </div>
      <br />
      <div style={{ fontSize: "2.5vh", textAlign: "center" }}>
      Developed in Edmonton by&nbsp;
      <a href="https://www.linkedin.com/in/youssefismailuofa/" style={{ color: "white"}}>Youssef Ismail</a>
      &nbsp;and&nbsp; 
       <a href="https://www.linkedin.com/in/kourosh-kehtari-889aa6203/" style={{color: "white"}}>Kourosh Kehtari.</a>
      </div>
       
    </div>
  );
}
