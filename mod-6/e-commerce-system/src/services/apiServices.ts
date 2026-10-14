// Part 2: API Research
// API Research:
// Research and analyze the Dummy JSON Products API .
// You will be implementing features that interact with this API.

// Part 3: Implementation
// 3. Handle Asynchronous Operations:
// API Service (apiService.ts):
// Create API requests using async/await and Promises.
// Implement functions to fetch product data and handle errors using try/catch.

import { DataError, NetworkError } from "../utils/errorHandler.js";


//GET
async function fetchDataAPI() {

  // 1. fetch API

  const response = await fetch("https://dummyjson.com/products/1");

  // console.log(response);
  // 2. HTTP error
  if (!response.ok) {
    throw new NetworkError(`API request failed: ${response.status}`);
  }

  // 3. Format JSON
  try {
    const data = await response.json();
    console.log("Fetched data products with format JSON:========>", data);
    return data;

  } catch {
    throw new DataError("response is not valid JSON");
  }

}

fetchDataAPI();

export default fetchDataAPI;
