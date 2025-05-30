export default () => {
  const learnedDiv = document.createElement("div");
  const content = `
      <h1>What I learned with CS50</h1>
      <hr />
      <div class="info">
        <p>
          Although I knew a lot about HTML, CSS and JavaScript, having learned
          from the bootcamp I enrolled in and my own personal studies, I was still
          lacking in knowledge to feel confident enough to make things myself, and
          even more so to move on to more complicated languages. Which is why I
          decided to try out CS50!
        </p>

        <p>
          Albeit very challenging, the course was a game changer for me in terms
          of learning the fundamentals of programming, from how the computer
          itself works under the hood to the actual logic behind building
          algorithms within your code. Learning more about memory and data
          structures as we worked with C was very interesting, since it is a
          language that requires managing memory yourself, as opposed to Python
          and JavaScript. It made it easier to understand how those higher-level
          languages worked when we moved on to them in later weeks. It also made me
          appreciate them a lot more!
        </p>

        <p>
          With CS50, I gained a lot more confidence with the knowledge I acquired to
          tackle new projects head-on, so much so that I felt completely confident
          to make this very project! It was surprising to me, because even though I
          knew a lot about HTML, CSS and JavaScript before, I felt a little lost
          when it came to actually implementing it. I'm very happy I decided to
          study with CS50, because taking the time to understand the fundamentals of
          programming completely changed how I view my own coding process now.
        </p>
      </div>
      `;

  learnedDiv.innerHTML += content;

  return learnedDiv;
};
