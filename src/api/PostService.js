import tellCodeShareTo from "./tellCodeShareTo";

const getAll = () => {
    return tellCodeShareTo.get("/posts");
};

const get = (id) => {
    return tellCodeShareTo.get(`/posts/${id}`);
};

const create = (data) => {
    return tellCodeShareTo.post("/posts", data);
};

const update = (id, data) => {
    return tellCodeShareTo.put(`/posts/${id}`, data);
};

const remove = (id) => {
    return tellCodeShareTo.delete(`/posts/${id}`);
};

const getAllComments = (id) => {
    return tellCodeShareTo.get(`/posts/${id}/comments`);
}

const getComments = (id, commentId) => {
    return tellCodeShareTo.get(`/posts/${id}/comments/${commentId}`);
};

const createComment = (id, data) => {
    return tellCodeShareTo.post(`/posts/${id}/comments`, data);
}

const updateComment = (id, commentId, data) => {
    return tellCodeShareTo.put(`/posts/${id}/comments/${commentId}`, data);
}

const removeComment = (id, commentId) => {
    return tellCodeShareTo.delete(`/posts/${id}/comments/${commentId}`);
}

const getAllLikes = (id) => {
    return tellCodeShareTo.get(`/posts/${id}/likes`);
}

const getLikes = (id, likeId) => {
    return tellCodeShareTo.get(`/posts/${id}/likes/${likeId}`);
};

const createLike = (id, data) => {
    return tellCodeShareTo.post(`/posts/${id}/likes`, data);
}

// You can only export default when there's one thing to export (good reminder)
export { 
    getAll, 
    create, 
    get, 
    update, 
    remove, 
    createComment, 
    getAllComments, 
    getComments,
    updateComment, 
    removeComment,
    getAllLikes,
    getLikes,
    createLike 
};