//GET
async function fetchDataAPI() {
    try {
        const response = await fetch("https://dummyjson.com/products/1");
        // console.log(response);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data with format JSON:========>", data);
        return data;
    }
    catch (error) {
        console.error("Fetch error:", error);
    }
}
// fetchDataAPI();
export default fetchDataAPI;
//# sourceMappingURL=apiServices.js.map