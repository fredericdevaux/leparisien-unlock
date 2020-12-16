import { Result } from "../models/result";

chrome.runtime.onMessage.addListener(async (msg, sender, response) => {
  if (msg.subject === "unlockArticle") {
    const blurredText = document.querySelectorAll(".blurText");
    blurredText.forEach((text) => {
      text.classList.remove("blurText");
    });
    const payWall = document.getElementsByClassName("piano-paywall") as HTMLCollectionOf<HTMLElement>;
    payWall[0].style.display = "none"
  }

  response();
  return true;
});
