export default () => {
  const journeyDiv = document.createElement("div");
  const content = `
      <h1>My learning journey</h1>
      <hr />
      <div class="info">
        <p>
          The course is divided by ten weeks of different topics, with an entire
          video lecture taught by Professor David J. Malan, a section and shorts
          about the lecture's topic, as well as problem sets to complete.
        </p>

        <p>
          I watched every lecture and the following sections when I wanted to
          understand the concepts a little better before moving on to the problem
          sets. It took me a while to complete most of them, but every minute I
          spent trying, researching, reading and studying was so valuable!
        </p>

        <p>
          Going from Scratch to C, to learning about data structures and
          algorithms, Python and SQL and finally arriving to HTML, CSS and
          JavaScript was a very interesting journey for me, having started
          learning about programming from the very last topics presented in the
          course. I think it gave me a new perspective on things I already knew
          (or at least I thought I did), making me take a different approach to
          coding.
        </p>

        <p>
          I'm incredibly thankful to Harvard, Professor Malan and everyone
          involved in the course for making such a enriching course public and
          free for students around the world. CS50 truly taught me more than I
          could ever think of learning and gave me a newfound fascination for
          Computer Science!
        </p>
      </div>
      `;

  journeyDiv.innerHTML += content;

  return journeyDiv;
};
