// function copytext() {
//    var textToCopy = document.getElementById("CopyMeID");

//    var currentRange;
//    if (document.getSelection().rangeCount > 0)
//       ; {
//       currentRange = document.getSelection().getRangeAt(0);
//       window.getSelection().removeRange(currentRange);
//    }
//      else
//    {
//       currentRange = false;
//    }
//    var CopyRange = document.createRange();
//    CopyRange.selectNode(textToCopy);
//    window.getSelection().addRange(CopyRange);
//    document.execCommand("copy");
//    window.getSelection().removeRange(CopyRange);
//    if (currentRange) {
//       window.getSelection().addRange(currentRange);
//    }
// }