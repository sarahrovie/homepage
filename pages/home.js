export default () => {
  const homeDiv = document.createElement("div");
  const content = `
  <h1>Welcome to my homepage</h1>
  <hr />
  <div class="info">
    <p>
    This website is a project for Week 8 of Harvard's
    <a href="https://cs50.harvard.edu/x/">CS50x</a>
    course, which consists of building a simple
    <a href="https://cs50.harvard.edu/x/psets/8/homepage/">homepage</a>
    with multiple pages using HTML, CSS and JavaScript, as well as
    Bootstrap.
    </p>

    <p>
    I decided to create a website inspired by CS50'S own website, to share a
    bit about myself and my experience with CS50, such as the topics I
    learned about throughout the course and how my learning journey affected
    the way I think about programming.
    </p>

    <p>
    I hope that maybe some of what you read here inspires you to take on new
    challenges with your own studies! Thank you for reading :)
    </p>
  </div>
  `;

  homeDiv.innerHTML += content;

  return homeDiv;
};
