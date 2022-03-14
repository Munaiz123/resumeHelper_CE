console.log("Background be running");

chrome.browserAction.onClicked.addListener(buttonCLicked);

function buttonCLicked(tab) {
  let msg = {
    txt: "",
    color: "pink",
  };

  chrome.tabs.sendMessage(tab.id, msg); // sending message to content script
  console.log("sending?");
}
