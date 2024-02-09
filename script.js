const type1_str = "Hi, my name's Priscilla, & welcome to my website ♥";

window.addEventListener("load", function() {
  executeAsynchronously([
    [type1_str, "type1", 100],
  ]);
});

function executeAsynchronously(texts) {
  texts.forEach(args => type(...args));
}

function type(text, id, delay) {
  const elem = document.getElementById(id);
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      elem.textContent += text.charAt(i);
    }, i * delay);
  }
}



