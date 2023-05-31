import { getLanguage } from "./getLanguage.js";

export function getMainResults() {
  const language = getLanguage();

  const score = document.querySelector(".score");
  const scoreNum = Number(score.textContent.slice(6));

  document.querySelector(".main-game").innerHTML = "";

  const main = document.querySelector("main");
  main.classList.add("main-results");

  const congratulationsBlock = main.appendChild(document.createElement("div"));
  congratulationsBlock.classList.add("congratulations");

  const resultsHeader = congratulationsBlock.appendChild(
    document.createElement("h1")
  );
  resultsHeader.classList.add("results-header");
  if (language === "ru") resultsHeader.textContent = "Поздравляем!";
  if (language === "en") resultsHeader.textContent = "Congratulations!";

  const resultsInfo = congratulationsBlock.appendChild(
    document.createElement("p")
  );
  resultsInfo.classList.add("results-info");
  if (scoreNum < 30) {
    if (language === "ru")
      resultsInfo.textContent = `Вы прошли викторину и набрали ${scoreNum} из 30 возможных баллов`;
    if (language === "en")
      resultsInfo.textContent = `You completed the quiz and scored ${scoreNum} out of 30 possible points`;
  } else if (scoreNum === 30) {
    if (language === "ru")
      resultsInfo.textContent = `Вы прошли викторину, набрали ${scoreNum} из 30 возможных баллов и стали абсолютным чемпионом! Вы МОЛОДЧИНА! Держите конфетку:`;
    if (language === "en")
      resultsInfo.textContent = `You passed the quiz, scored ${scoreNum} out of 30 possible points and became the absolute champion! You are YOUTH! Hold the candy:`;
    const candy = congratulationsBlock.appendChild(
      document.createElement("img")
    );
    candy.classList.add("candy");
    candy.src = "./assets/icons/candy.png";
  }

  const againBtnLink = congratulationsBlock.appendChild(
    document.createElement("a")
  );
  againBtnLink.classList.add("again-button-link");
  againBtnLink.href = "./game.html";

  const againBtn = againBtnLink.appendChild(document.createElement("button"));
  againBtn.classList.add("again-button");
  if (language === "ru") againBtn.textContent = "Попробовать ещё раз!";
  if (language === "en") againBtn.textContent = "Try one more time!";
}
