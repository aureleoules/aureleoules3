export const getLanguage = () => {
    const navigatorLang = navigator.language.substr(0, 2);
    let lang = localStorage.getItem("language") || navigatorLang;
    if(lang !== "fr" && lang !== "en") {
        lang = "en";
    }
    return lang;
}