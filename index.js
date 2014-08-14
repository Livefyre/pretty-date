var MONTHS  = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Get a pretty date.
 * @param {Date} date
 * @return {string}
 */
module.exports = function (date) {
    return [
        MONTHS[date.getMonth()],
        ' ',
        date.getDate(),
        ', ',
        date.getFullYear()
    ].join('');
};
