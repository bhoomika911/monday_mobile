import Strings_EN from './Strings_EN';

const setLanguage = (lang_code) => {
  switch(lang_code){
    case "ENGLISH" :
      Strings = Strings_EN;
      break;

    default :
      Strings = Strings_EN;
      break;
    }
};

export {
  setLanguage
};
