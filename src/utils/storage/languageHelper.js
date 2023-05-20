export const setLanguageStorage = (language) => {
  localStorage.setItem("language", language);
};

export const getLanguageStorage = () => {
  let current = localStorage.getItem("language");

  if (current) return current;
  else return "az";
};
