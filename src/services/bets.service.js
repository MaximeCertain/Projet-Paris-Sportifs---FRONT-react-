const baseUrl = "http://127.0.0.1:3001";
class BetsService {
    static async list() {
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/bets`, init);
        return call;
    }
    static async details(id){
        let init = {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/bets/${id}`, init);
        return call;
    }


    static async create(idUser, idMatch, idCote, body){
        let init = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/users/${idUser}/matchs/${idMatch}/cotes/${idCote}/bets`, init);
        return call;
    }
    static async delete(id){
        let init = {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/bets/${id}`, init);
        return call;
    }
}

export default BetsService;
