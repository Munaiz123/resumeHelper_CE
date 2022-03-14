console.log("Whazzzup");
chrome.runtime.onMessage.addListener(gotMessage);

let paragraphs = document.getElementsByTagName("p");
let dictionary = {};

for (paragraph of paragraphs) {
  // console.log(p.innerText);
  let sentences = paragraph.innerText;
  let wordsInSentencesArray = sentences.split(" ").filter((word) => {
    return word !== ".";
  });
  // .split(".").split(",");

  let filteredWordsArray = wordsInSentencesArray.filter(
    (word) => word.length > 3
  );

  for (word of wordsInSentencesArray) {
    if (dictionary[word] === undefined) {
      dictionary[word] = 1;
    } else {
      dictionary[word]++;
    }
  }
}

// console.log(dictionary);

function gotMessage(message, sender, sendResponse) {
  let { txt, color } = message;
  for (para of paragraphs) {
    para.style["background-color"] = color;
  }
}
