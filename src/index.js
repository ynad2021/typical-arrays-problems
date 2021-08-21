exports.min = function min(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    } else {
        return Math.min.apply(null, array);
    }
};

exports.max = function max(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    } else {
        return Math.max.apply(null, array);
    }
};

exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
      }
      let avg = sum / array.length
      return avg;
    }
};
