import tellCodeShareTo from "./tellCodeShareTo";
import * as tokenService from "../utils/tokenService";

const create = (data) => {
    return tellCodeShareTo.post("/users", data);
};

const login = (data) => {
    return tellCodeShareTo.post("/auth/login", data);
};

function getUser() {
    let user = tokenService.getUserFromToken();
    console.log("DECODED USER FROM GET USER FUNCTION IN USER SERVICE: ", user);
    return user;
}

const update = (id, data) => {
    return tellCodeShareTo.put(`/users/${id}`, data)
}

export { create, login, getUser, update };
