export default () => {
  const aboutDiv = document.createElement("div");
  const content = `
    <h1>About me</h1>
    <hr />
    <div class="info">
      <p>
        My name is Sarah, I am 23 years old and I've been studying programming
        since 2023. I had always been intrigued by programming, to me it seemed
        like magic that the all the websites and apps we use on our everyday
        lives had been made by other humans. Out of pure curiosity, I learned a
        bit about HTML and CSS to customize my own blog, but just as a hobby.
        Honestly, I never thought I could be capable of becoming a professional
        developer. In my mind, I wasn't "that smart"... Looking back at it now,
        I realize how silly it was to think that way.
      </p>

      <p>
        In 2022, I applied to enter a front-end bootcamp for Latin American
        women called
        <a href="https://www.laboratoria.la/pt">Laboratoria</a>, by suggestion of my cousin who had also applied before. She said I
        should try it out since I had good english skills and was interested in
        programming. As always, I wasn't very confident that I would be
        accepted, but I thought "why not?" and filled in the application right
        then and there. Imagine my surprise when I received the news that I got
        accepted!
      </p>

      <p>
        It was a wonderful experience to work with other women, learn about
        their stories and about new things alongside them. I noticed throughout
        that journey how many of them also felt insecure in their capability to
        learn and develop, as I did. But together we persevered, we helped each
        other and came out of the bootcamp with newfound coding skills we never
        imagined we could have!
      </p>

      <p>
        Since then, programming has become a passion for me. I decided to keep
        studying, bettering my skills in hopes of one day becoming the
        professional developer I now dream of being. And that is how I ended up
        finding CS50 and making this very website! As challenging as this
        journey has been, I am glad I ended up where I am today. It's never to
        late to try and every day is an opportunity to learn something new!
      </p>
    </div>
    `;

  aboutDiv.innerHTML += content;

  return aboutDiv;
};
