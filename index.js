var MONTHS  = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * Get a pretty date.
 * @param {Date} date
 * @param [object] i18n
 * @return {string}
 */
function getPrettyDate (date, i18n) {
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
function getPrettyHour (date, i18n) {
  var am = (i18n && i18n.am) || 'am';
  var pm = (i18n && i18n.pm) || 'pm';
    return [
        date.getHours() < 13 ? date.getHours() : date.getHours()-12,
        ':',
        date.getMinutes(),
        date.getMinutes()%10===0 ? '0 ' : ' ',
        date.getHours() < 13 ? am: pm,
    ].join('');
}

module.exports = {
  getPrettyDate: getPrettyDate,
  getPrettyHour: getPrettyHour
}

