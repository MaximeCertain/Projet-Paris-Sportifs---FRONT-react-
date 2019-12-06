const baseUrl = "http://127.0.0.1:3001";
class UserTypeService {
    /**
     * @returns {Promise<Response>}
     */
    static async list() {
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/users_types`, init);
        return call;
    }

    /**
     * @param id
     * @returns {Promise<Response>}
     */
    static async details(id){
        let init = {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/users_types/${id}`, init);
        return call;
    }

    /**
     * @param body
     * @returns {Promise<Response>}
     */
    static async create(body){
        let init = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/users_types`, init);
        return call;
    }

    /**
     * @param id
     * @param body
     * @returns {Promise<Response>}
     */
    static async update(id, body){
        let init = {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/users_types/${id}`, init);
        return call;
    }

    /**
     * @param id
     * @returns {Promise<Response>}
     */
    static async delete(id){
        let init = {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        };
        let call = await fetch(`${baseUrl}/users_types/${id}`, init);
        return call;
    }
}

export default UserTypeService;
