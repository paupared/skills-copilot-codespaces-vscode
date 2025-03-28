function calculateNumbers(var1, var2) {
    var sum = var1 + var2;
    var difference = var1 - var2;
    var product = var1 * var2;
    var quotient = var2 !== 0 ? var1 / var2 : 'undefined'; // Avoid division by zero

    return {
        sum: sum,
        difference: difference,
        product: product,
        quotient: quotient
    };
}