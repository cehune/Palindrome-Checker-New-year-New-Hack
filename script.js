function palindrome() {
    var valueCheck = document.getElementsByName("enter")[0].value;
    const removeSpecialCharacters = valueCheck
      .replace(/[^A-Z0-9]/g, "")
      .toLowerCase();
    let checkPalindrome = removeSpecialCharacters
      .toString()
      .split("")
      .reverse()
      .join("");
  
    if (removeSpecialCharacters === checkPalindrome) {
      document.write("<div>" + valueCheck + " is a Palindrome <div>");
    } else {
      document.write("<div>" + valueCheck + " is not a palindrome <div>");
    }
  }
  
  
  
  