/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  if (typeof diameter !== "number" || Number.isNaN(diameter) || diameter < 0) {
    throw new Error('Unsupported type')
  }
  return (4 / 3) * Math.PI * Math.pow(diameter / 2, 3);
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  if (typeof n !== "number" || Number.isNaN(n)){
    throw new Error ('Unsupported type')    
  }
  return Math.round(n * 10) / 10
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  // Write your code here
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  // Write your code here
}