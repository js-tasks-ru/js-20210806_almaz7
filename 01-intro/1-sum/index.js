/**
 * sum
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
export default function sum(m, n) {
    if (arguments.length !== 2) {
        return 0;
    }

    return parseInt(m, 10) + parseInt(n, 10);
}
