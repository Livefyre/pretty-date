var MONTHS  = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Get a pretty date.
 * @param {Date} date
 * @param [object] i18n
 * @return {string}
 */
module.exports = function (date, i18n) {
    var months = (i18n && i18n.months) || MONTHS;
    return [
        months[date.getMonth()],
        ' ',
        date.getDate(),
        ', ',
        date.getFullYear()
    ].join('');
};

/**
 * Get a pretty time.
 * @param {Date} date
 * @param [object] i18n
 * @return {string}
 */
module.exports = function (date, i18n) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
    return [
        hours < 13 ? hours : hours-12,
        ':',
        minutes < 10 ? '0' : '',
        minutes,
        ' ',
        hours < 13 ? 'am' : 'pm',
    ].join('');
}
