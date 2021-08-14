export default class DateUtil {
  static FORMAT_DATE = 'DD/MM/YYYY';
  static FORMAT_DATE_SQL = 'YYYY-MM-DD';
  static FORMAT_DATE_TIME_ZONE = 'YYYY-MM-DD HH:mm:ss.SSSZZZ';
  static FORMAT_DATE_TIME_ZONE_T = 'YYYY-MM-DDTHH:mm:ss.sssZ';
  static FORMAT_DATE_TIME_ZONE_A = 'HH:mm DD/MM/YYYY';
  static FORMAT_TIME = 'HH:mm';
  static FORMAT_TIME_SECOND = 'HH:mm:ss';
  static FORMAT_TIME_SECONDS = 'hh:mm:ss';
  static FORMAT_DATE_TIME = DateUtil.FORMAT_DATE + ' - ' + DateUtil.FORMAT_TIME;
  static FORMAT_DATE_TIMES =
    DateUtil.FORMAT_DATE_SQL + ' ' + DateUtil.FORMAT_TIME_SECONDS;
  static FORMAT_DATE_TIME_SQL =
    DateUtil.FORMAT_DATE + ' ' + DateUtil.FORMAT_TIME_SECOND;

  static now() {
    return new Date(Date.now());
  }
}
