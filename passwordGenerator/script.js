console.clear();

const sliderProps {
    fill: "#0b1edf",
    background: rgba(255, 255, 255, 0.214)
};


//selecting the range sli
const slider = document.querySelector(".range-slider");

const sliderValue = document.querySelector(".length-title");

slider.querySelector("input").addEventListener("input", event => {
    sliderValue.setAttribute("data-length", event.target.value);
    applyFill(event.target);
});

applyFill(slider.querySelector("input"));

function applyFill(slider) {
    const presentage = 100 * (slider.value - slider.min) / (slider.max - slider.min
    );
    const bg = `linear-gradient(90deg, ${sliderProps.fill} ${presentage}%, ${sliderProps.background} ${presentage + 0.1}%)`;

}