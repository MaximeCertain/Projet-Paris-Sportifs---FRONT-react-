const baseUrl = "http://127.0.0.1:3001";
class UserServices {
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
        let call = await fetch(`${baseUrl}/users`, init);
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
        let call = await fetch(`${baseUrl}/users/${id}`, init);
        return call;
    }

    /**
     * @param body
     * @returns {Promise<Response>}
     */
    static async checkLogin(body){
        let init = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        };
        let call = await fetch(`${baseUrl}/check_login`, init);
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
        let call = await fetch(`${baseUrl}/users`, init);
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
        let call = await fetch(`${baseUrl}/users/${id}`, init);
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
        let call = await fetch(`${baseUrl}/users/${id}`, init);
        return call;
    }
}

export default UserServices;
