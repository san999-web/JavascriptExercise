function fetchdata() {
    try {
        let response = fetch("");
        let data = response.json();
        console.log(data);
    } catch (error) {
        console.error("error fetching data:" + error);
    }

}
fetchdata()