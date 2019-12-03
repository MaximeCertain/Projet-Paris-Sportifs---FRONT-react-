const baseUrl = "http://127.0.0.1:3001";
class CotesService {
    static async list() {
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/cotes`, init);
        return call;
    }
    static async details(id){
        let init = {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/cotes/${id}`, init);
        return call;
    }

    static async create(body, id){
        let init = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/matchs/${id}/cotes`, init);
        return call;
    }
    static async update(id, body){
        let init = {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/cotes/${id}`, init);
        return call;
    }
    static async delete(id){
        let init = {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/cotes/${id}`, init);
        return call;
    }
}

export default CotesService;
