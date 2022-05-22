(function () {
    Zfont.init(Zdog);

    // Create Zdog Illustration
    // https://zzz.dog/api#illustration
    var illo = new Zdog.Illustration({
        element: ".zdog-canvas",
        dragRotate: true,
        resize: "fullscreen",
    });

    // Create a Font object
    // You can use any .ttf or .otf font!
    // https://github.com/jaames/zfont#zdogfont
    var font = new Zdog.Font({
        src: "https://homiemace.github.io/css/fonts/bold.otf",
    });

    // Create a TextGroup object for the title
    // https://github.com/jaames/zfont#zdogtextgroup
    var title = new Zdog.TextGroup({
        addTo: illo,
        font: font,
        value: "Homie",
        fontSize: 60,
        translate: { y: -100 },
        textAlign: "center",
        textBaseline: "middle",
        color: "#6667AB",
        fill: true,
    });
    illo.updateRenderGraph();
})();

(function () {
  const Welcome_Container = documnent.querySelector(".welcome");
  const Logo_Container = Welcome_Container.querySelector(".logo");
  const Logo_Text_Container = Logo_Container.querySelector(".logo-text-container");
  const Logo_Text = Logo_Text_Container.querySelector(".logo-text");
  Logo_Text.innerHTML = Logo_Text.textContent.replace(/\S/g,`<span class="letter">$&</span>`)
  const Slogan_Container = Logo_Container.querySelector(".slogan-container");
  const Slogan_Text = Slogan_Container.querySelector(".slogan-text");
  Slogan_Text.innerHTML = Slogan_Text.textContent.replace(/\S/g,`<span class="letter">$&</span>`)

  var ml4 = {};
    ml4.opacityIn = [0, 1];
    ml4.scaleIn = [0.2, 1];
    ml4.scaleOut = 3;
    ml4.durationIn = 800;
    ml4.durationOut = 600;
    ml4.delay = 500;

    anime
        .timeline({ loop: false })
        .add({
            targets: ".ml4 .letters-1",
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn,
        })
        .add({
            targets: ".ml4 .letters-1",
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay,
        })
        .add({
            targets: ".ml4 .letters-2",
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn,
        })
        .add({
            targets: ".ml4 .letters-2",
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay,
        })
        .add({
            targets: ".ml4 .letters-3",
            opacity: ml4.opacityIn,
            scale: ml4.scaleIn,
            duration: ml4.durationIn,
        })
        .add({
            targets: ".ml4 .letters-3",
            opacity: 0,
            scale: ml4.scaleOut,
            duration: ml4.durationOut,
            easing: "easeInExpo",
            delay: ml4.delay,
        })
        .add({
            targets: ".ml4",
            opacity: 0,
            duration: 500,
            delay: 500,
        });
})();
