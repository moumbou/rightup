import React from "react";

function SplitText(node) {
  let text = node.nodeValue.replace(/^\s*|\s(?=\s)|\s*$/g, "");

  for (let i = 0; i < text.length; i++) {
    let letter = document.createElement("span");
    letter.style.display = "inline-block";
    letter.style.position = "absolute";
    letter.appendChild(document.createTextNode(text.charAt(i)));
    node.parentNode.insertBefore(letter, node);

    let positionRatio = i / (text.length - 1);
    let textWidth = letter.clientWidth;

    let indent = 100 * positionRatio;
    let offset = -textWidth * positionRatio;
    letter.style.left = indent + "%";
    letter.style.marginLeft = offset + "px";
  }

  node.parentNode.removeChild(node);
}

function Justify() {
  var TEXT_NODE = 3;
  var elem = document.getElementById("split-char");
  elem = elem.firstChild;

  while (elem) {
    var nextElem = elem.nextSibling;

    if (elem.nodeType == TEXT_NODE) SplitText(elem);

    elem = nextElem;
  }
}

export default function SpacingLetters() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    Justify();
  }, []);
  return (
    <div className="mb-24">
      <p id="split-char" className="max-w-md h2-style relative !text-r-grey">
        professional
        <br />
        impactful
        <br />
        elevating
        <br />
        friendly
      </p>
    </div>
  );
}
