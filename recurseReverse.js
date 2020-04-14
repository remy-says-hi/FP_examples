////////////////////////////////////////////////////////////////
// This is from the lesson describing how to reverse a string using a recursive function. It demonstrates how the JavaScript call stack works by the "Last In First Out" principle.
////////////////////////////////////////////////////////////
const recurseReverse = (string) => {
    if (string === "") {
        console.log("base case ''");
      return "";
    } else {
      console.log(string.substring(1), string[0]);
      return recurseReverse(string.substring(1)) + string[0];
    }
  }

console.log(recurseReverse("fern"));