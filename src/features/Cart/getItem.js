const localStorageKey = "cart";

export const saveItemInLocalStorage = (item, expirationMinutes = 15) => {
  const data = {
    value: item,
    expirationTime: Date.now() + expirationMinutes * 60 * 1000,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(data));
};

export const getItemInLocalStorage = () => {
  const storedData = JSON.parse(localStorage.getItem(localStorageKey));
  if (!storedData) return [];

  const { value, expirationTime } = storedData;
  if (Date.now() > expirationTime) {
    localStorage.removeItem(localStorageKey);
    return [];
  }

  return value;
};
