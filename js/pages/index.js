(function () {
    Zfont.init(Zdog);

    // Create Zdog Illustration
    // https://zzz.dog/api#illustration
    var illo = new Zdog.Illustration({
      element: '.zdog-canvas',
      dragRotate: true,
      resize: 'fullscreen',
    });
    
    // Create a Font object
    // You can use any .ttf or .otf font!
    // https://github.com/jaames/zfont#zdogfont
    var font = new Zdog.Font({
      src: ''
    });
    
    // Create a TextGroup object for the title
    // https://github.com/jaames/zfont#zdogtextgroup
    var title = new Zdog.TextGroup({
      addTo: illo,
      font: font,
      value: "Homie",
      fontSize: 60,
      translate: {y: -100},
      textAlign: 'center',
      textBaseline: 'middle',
      color: '#6667AB',
      fill: true,
    });
      illo.updateRenderGraph();
})();
