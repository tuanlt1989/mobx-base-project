export default class StringUtil {
  /// Check is null or empty
  static isNullOrEmpty = (string = '') => {
    return (
      !string ||
      string == undefined ||
      string == '' ||
      string.length == 0 ||
      (typeof string === 'string' && string.trim().length == 0)
    );
  };
}
