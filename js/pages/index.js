(function () {
    const Welcome_Container = document.querySelector(".welcome");
    const Logo_Container = Welcome_Container.querySelector(".logo");
    const Logo_Text_Container = Logo_Container.querySelector(".logo-text-container");
    const Logo_Text = Logo_Text_Container.querySelector(".logo-text");
    Logo_Text.innerHTML = Logo_Text.textContent.replace(/\S/g, `<span class="letter">$&</span>`);
    const Logo_Text_Letters = Logo_Text.querySelectorAll(".letter");
    const Slogan_Container = Logo_Container.querySelector(".slogan-container");
    const Slogan_Text = Slogan_Container.querySelector(".slogan-text");
    Slogan_Text.innerHTML = Slogan_Text.textContent.replace(/\S/g, `<span class="letter">$&</span>`);
    const Slogan_Text_Letters = Slogan_Text.querySelectorAll(".letter");

    anime
        .timeline({ loop: false })
        .add({
            targets: Logo_Text_Letters,
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 1000,
            delay: anime.stagger(50),
            begin: () => {
                Logo_Text.style["display"] = "block";
                Slogan_Text.style["display"] = "block";
            },
        })
        .add({
            targets: Slogan_Text_Letters,
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 1000,
            delay: anime.stagger(50),
        });
})();

(function () {
    const Site_Banner = document.querySelector(".page-section.welcome .site-banner");
    const Bottom_Layer = Site_Banner.querySelector(".bottom-layer");

    function Update() {
        Site_Banner.style["width"] = `${window.innerWidth}px`;
        Site_Banner.style["height"] = `${window.innerHeight}px`;
        Site_Banner.setAttribute("viewBox", `0 0 ${window.innerWidth / 2} ${window.innerHeight / 2}`);
        Bottom_Layer.setAttribute("transform", `translate(${window.innerWidth / 2}, ${window.innerHeight / 2})`);
    }

    Update();

    window.addEventListener("resize", Update);
})();
