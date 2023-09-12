"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const colors = require("./colors.js");
const generateGrandients = (baseColor = [243, 98, 67], position = [], previousPosition, speed) => {
  if (typeof baseColor === "string") {
    baseColor = colors.hex.toHsl(baseColor);
  }
  const { bottomColor, randomColors } = generateGrandientsColor("analogous", baseColor);
  const curPosition = [];
  const len = position.length;
  if (previousPosition.length <= 0) {
    previousPosition = new Array(len).fill([100, 100]);
  }
  const gradients = [];
  randomColors.forEach((color, index) => {
    let positionX = 0;
    let positionY = 0;
    if (position.length <= 0) {
      positionX = getRandomPosition();
      positionY = getRandomPosition();
    } else {
      if (position[index][0] >= 100) {
        previousPosition[index][0] = 100;
      } else if (position[index][0] <= 1) {
        previousPosition[index][0] = 0;
      }
      if (position[index][1] >= 100) {
        previousPosition[index][1] = 100;
      } else if (position[index][1] <= 1) {
        previousPosition[index][1] = 0;
      }
      if (previousPosition[index][0]) {
        positionX = position[index][0] - Math.random() * speed;
      } else {
        positionX = position[index][0] + Math.random() * speed;
      }
      if (previousPosition[index][1]) {
        positionY = position[index][1] - Math.random() * speed;
      } else {
        positionY = position[index][1] + Math.random() * speed;
      }
    }
    curPosition.push([positionX, positionY]);
    gradients.push(`radial-gradient(at ${positionX}% ${positionY}%, ${color} 0px, transparent 55%)`);
  });
  return { baseColor: bottomColor, grandients: gradients.join(","), position: curPosition, previousPosition };
};
const getRandomPosition = () => {
  return Math.floor(Math.random() * 100);
};
const generateGrandientsColor = (mode = "analogous", baseColor = [243, 98, 67]) => {
  if (typeof baseColor === "string") {
    baseColor = colors.hex.toHsl(baseColor);
  }
  if (baseColor.length == 0)
    baseColor = [243, 98, 67];
  const colorHSL = baseColor;
  const hslArray = [];
  if (mode == "analogous") {
    for (let i = 0; i < 6; i++) {
      const hsl = colorHSL;
      hsl[0] = hsl[0] + 30;
      if (hsl[0] > 360) {
        hsl[0] = hsl[0] - 360;
      }
      hslArray.push("hsl(" + hsl[0] + "," + hsl[1] + "%," + hsl[2] + "%)");
    }
  }
  return { randomColors: hslArray, bottomColor: "hsl(" + colorHSL[0] + "," + colorHSL[1] + "%," + colorHSL[2] + "%)" };
};
exports.generateGrandients = generateGrandients;
