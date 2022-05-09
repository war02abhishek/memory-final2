import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";
//????? WHY HERE WE DONT IMPORT USE DISPATCH 

import * as api from "../api/index.js";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
console.log('doing get posts request so that i can get data from data base');
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
console.log("doing create posts request  so that i can push data to data base");

    dispatch({ type: CREATE, payload: data }); //apne store mai daaldo
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
console.log("doing update posts request so that i can get data from data base to update");
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id); //accha like karne hai API ke pass bhejdo vo like karke de dega
console.log(
  "doing like posts request so that i can increse like number data from data base to update"
);
    dispatch({ type: LIKE, payload: data }); //like karke dene ke baad apne store mai daaldo
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

