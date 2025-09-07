// filepath: Patterns/Prefix Sum/Find the Highest Altitude.js
/**
 * Problem: Find the Highest Altitude
 * Difficulty: Easy
 * Description:
 * There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal to 0.
 * You are given an integer array `gain` of length `n` where `gain[i]` is the net gain in altitude between points `i` and `i + 1` for all (0 <= i < n). Return the highest altitude of a point.
 *
 * Example 1:
 * Input: gain = [-5,1,5,0,-7]
 * Output: 1
 * Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
 *
 * Example 2:
 * Input: gain = [-4,-3,-2,-1,4,3,2]
 * Output: 0
 * Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
 *
 * Constraints:
 * n == gain.length
 * 1 <= n <= 100
 * -100 <= gain[i] <= 100
 */

/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = (gain) => {
    /*
     * Explanation:
     * This problem can be solved using the prefix sum technique. We are asked to find the highest altitude reached during a road trip.
     * We start at an altitude of 0. The `gain` array represents the change in altitude between consecutive points.
     *
     * The altitude at each point is the sum of all previous gains, which is a classic prefix sum.
     * We can iterate through the `gain` array, keeping track of the current altitude and the maximum altitude seen so far.
     *
     * The algorithm is as follows:
     * 1. Initialize `maxAltitude = 0` and `currentAltitude = 0`. The starting altitude is 0, so the initial max is also 0.
     * 2. Iterate through the `gain` array.
     * 3. In each iteration, add the current gain to `currentAltitude` to get the altitude of the next point.
     * 4. Compare `currentAltitude` with `maxAltitude` and update `maxAltitude` if the current altitude is higher.
     * 5. After iterating through all the gains, `maxAltitude` will hold the highest altitude reached.
     *
     * This approach has a time complexity of O(n) because we only need to iterate through the `gain` array once.
     */

    let maxAltitude = 0;
    let currentAltitude = 0;

    // Iterate through the gain array to calculate the altitude at each point.
    for (const g of gain) {
        // Add the gain to the current altitude.
        currentAltitude += g;

        // Update the maximum altitude if the current one is higher.
        if (currentAltitude > maxAltitude) {
            maxAltitude = currentAltitude;
        }
    }

    return maxAltitude;
};

// LeetCode URL: https://leetcode.com/problems/find-the-highest-altitude/
