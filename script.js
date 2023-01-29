Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};
const colors = ["6A8759", "CC8242", "7A9EC2", "9E7BB0", "CCCCCC"];
const body = document.body;
const container = document.getElementsByClassName("container")[0];
body.addEventListener("keyup", onType);

function onType(event) {
  const typedKeyElement = document.createElement("p");
  typedKeyElement.classList = "text";
  typedKeyElement.innerText = event.key;
  container.append(typedKeyElement);
  const rndX = generateRandomNumber(-200, 200);
  const rndY = [200, -200].random();
  typedKeyElement.animate(
    [
      {
        opacity: 0.5,
        color: "#fff",
        transform: `translate(0vh, 0vh) scale(${generateRandomNumber(1, 5)}) `,
        color: "#" + colors.random(),
      },

      {
        opacity: 1,
        color: "#fff",
        transform: `translate(${rndX}vw, ${rndY}vh) scale(${generateRandomNumber(1, 5)}) rotate(${generateRandomNumber(
          -180,
          180
        )}deg)`,
        color: "#" + colors.random(),
      },
    ],
    { duration: 15000, fill: "forwards" }
  );
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
