import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    loggedin: false,
    name: "",
    showLoginModel: true
  },
  reducers: {
    rdx_loggedin: (state, params) => {
      state.loggedin = true;
      state.name = params.payload
      console.log(params);
      localStorage.setItem("loggedin", params.payload);

    },
    rdx_loggedout: (state) => {
      state.loggedin = false;
      state.name = "";
      localStorage.removeItem('loggedin')
      state.showLoginModel = true
    },
    rdx_show_login_model: state =>{
      state.showLoginModel = true
    }, 
    rdx_hideLoginModel: state=>{
      state.showLoginModel = false
    }
  },
});

export default userReducer.reducer;

export const { rdx_loggedin, rdx_loggedout, rdx_show_login_model,rdx_hideLoginModel } = userReducer.actions;
