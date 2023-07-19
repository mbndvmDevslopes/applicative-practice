/**
 * Make sure to read the e16.md file!
 * For this exercise we want you to make a custom `find` method. 
 * In order to do this it is ok to use any type of FOR loops.
 * REQUIREMENT: A find function should
 * * Take an array of things
 * * Return a the first thing where the applied callback is truthy
 * The function MUST NOT use the find() method.
 */


/*****************************************************************************************
*   To solve this problem, I did some research, including investigation on Devslope's    *
*   discord, which led me to this solution.  I started typing code based on              *
*   the above instructions, and somehow produced the correct answer.  Unfortunately, I   *   
*   truly do not understand the purpose/functionality of this code.                      *
*   Most obviously, my goal is to become a strong developer and it seems wrong to        *
*   proceed without truly understanding.  Historically, my learning curve tends to be    *
*   unusual...it takes me an extraordinary amount of time to grasp a concept;  once I've *
*   grasped it, however, because of the effort I've expended attempting to learn, I tend *
*   to have a deep understanding.                                                        *
*   To that end, would you be willing to take a moment to expound on this code, or,      *
*   alternatively provide some resources for me to study so I can understand?            *
*   I thank you in advance for your assistance.  The feedback videos, thus far, have been*
*   VERY helpful in my learning process.  Thanks!!                                       *
/*****************************************************************************************/

export function find(array, callback) {
  for (let element of array) {
    if (callback(element)) {
      return element
    }
  }
}
function callback(item){
if(!item) {
  return true;
}

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function