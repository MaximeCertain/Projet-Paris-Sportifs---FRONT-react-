const baseUrl = "https://jsonplaceholder.typicode.com";
class MatchesService {
    static async list() {
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/posts`, init);
        return call;
    }
}

export default MatchesService;
