function getResponseFromAPI() {
  return new Promise((resolve) => {
    // You can perform any asynchronous operation here
    // For simplicity, we'll use a setTimeout to simulate an asynchronous operation
    setTimeout(() => {
      resolve("Response from API");
    }, 2000);
  });
}

export default getResponseFromAPI;

