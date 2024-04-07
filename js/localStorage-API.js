

export function addDataToLocalStorage(key, value) {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.log(error.message);
  }
}

export function getDataFromLocalStorage(key) {
  try {
    const serializedData = JSON.parse(localStorage.getItem(key));
    return serializedData === null ? undefined : serializedData;
  } catch (error) {
    console.log(error.message);
  }
}


export function removeDataFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error.message);
  }
}

function removeAllData() {
  localStorage.clear();
}