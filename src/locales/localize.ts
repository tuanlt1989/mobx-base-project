import LocalizedStrings from "react-native-localization";
import english from './en';
import vietnam from './vi';

const localize = new LocalizedStrings({
  "en": english,
  "vi": vietnam
});

export default localize;