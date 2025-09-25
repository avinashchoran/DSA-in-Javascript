// filepath: Patterns/Prefix Sum/Range Sum Query 2D - Immutable.js
/**
 * Problem: Range Sum Query 2D - Immutable
 * Difficulty: Medium
 * Description:
 * Given a 2D matrix, handle multiple queries of the following type:
 * 1. Calculate the sum of the elements of the matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 *
 * Implement the NumMatrix class:
 * - NumMatrix(int[][] matrix) Initializes the object with the integer matrix.
 * - int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of the matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 *
 * Example 1:
 * Input:
 * ["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
 * [[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]
 * Output:
 * [null, 8, 11, 12]
 *
 * Explanation:
 * NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
 * numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e. sum of the red rectangle)
 * numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e. sum of the green rectangle)
 * numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e. sum of the blue rectangle)
 *
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 200
 * -10^5 <= matrix[i][j] <= 10^5
 * 0 <= row1 <= row2 < m
 * 0 <= col1 <= col2 < n
 * At most 10^4 calls will be made to sumRegion.
 *
 * LeetCode URL: https://leetcode.com/problems/range-sum-query-2d-immutable/
 */

/**
 * @param {number[][]} matrix
 */
const NumMatrix = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    // Create a 2D prefix sum matrix with an extra row and column to simplify calculations
    this.prefixSum = Array(rows + 1).fill(0).map(() => Array(cols + 1).fill(0));

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            this.prefixSum[r + 1][c + 1] = matrix[r][c] + this.prefixSum[r][c + 1] + this.prefixSum[r + 1][c] - this.prefixSum[r][c];
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    /*
     * Explanation:
     * The core idea is to pre-compute a 2D prefix sum matrix (also known as a summed-area table).
     * `prefixSum[r][c]` will store the sum of all elements in the rectangle from (0, 0) to (r-1, c-1).
     *
     * To calculate the sum of a region from (row1, col1) to (row2, col2), we can use the pre-computed prefix sums.
     * The sum of the desired rectangle can be calculated by taking the sum of the large rectangle from (0,0) to (row2, col2),
     * subtracting the rectangles above and to the left of the desired region, and then adding back the top-left rectangle
     * that was subtracted twice.
     *
     * sum = prefixSum[row2+1][col2+1] - prefixSum[row1][col2+1] - prefixSum[row2+1][col1] + prefixSum[row1][col1];
     *
     * This allows each `sumRegion` query to be answered in O(1) time after an initial O(m*n) preprocessing step.
     */
    return this.prefixSum[row2 + 1][col2 + 1] - this.prefixSum[row1][col2 + 1] - this.prefixSum[row2 + 1][col1] + this.prefixSum[row1][col1];
};

// Add a problem to prefix sum folder
