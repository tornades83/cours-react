import { createSlice } from "@reduxjs/toolkit";

export const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState: {

    darkmode: false,

  },
  reducers: {
    setDarkMode: (state, { payload }) => {
       console.log("Payload: ", payload);
      state.darkmode = payload;
    },


  },
});

// export quis servira pour mes fonctions
export const { setDarkMode   } = darkmodeSlice.actions;


export const getDarkMode = (state) => {
   console.log("state in redux", state.darkmode.darkmode)
  return state.darkmode.darkmode
}

export default darkmodeSlice.reducer;
