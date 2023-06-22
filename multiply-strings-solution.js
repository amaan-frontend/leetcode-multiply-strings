/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }

    var m = num1.length;
    var n = num2.length;
    var result = Array(m + n).fill(0);

    for (var i = m - 1; i >= 0; i--) {
        var x = parseInt(num1.charAt(i));
        var carry = 0;

        for (var j = n - 1; j >= 0; j--) {
            var y = parseInt(num2.charAt(j));
            var product = x * y + carry + result[i + j + 1];

            carry = Math.floor(product / 10);
            result[i + j + 1] = product % 10;
        }

        result[i] += carry;
    }

    if (result[0] === 0) {
        result.shift();
    }

    return result.join('');
}