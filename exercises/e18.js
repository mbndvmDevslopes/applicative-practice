/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "../exercises/e17";

export function getGreatestDiscoveryYear(data) {
  return parseInt(
    maxBy(
      Object.entries(
        data.asteroids.reduce((acc, curr) => {
          acc[curr.discoveryYear] = (acc[curr.discoveryYear] || 0) + 1;
          return acc;
        }, {})), (element) => element[1])[0]
  );
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

