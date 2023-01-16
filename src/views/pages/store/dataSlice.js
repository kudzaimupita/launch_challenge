import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
  "launchData/data/getData",
  async (dataMethod) => {
    const response = await dataMethod?.queryLaunches(dataMethod?.query);
    if (dataMethod.param) {
      return response?.data.data[dataMethod.param];
    } else {
      return {
        latestLaunch: response?.data.data.launchLatest.launch_date_utc,
        nextLaunch: response?.data.data.launchNext.launch_date_utc,
      };
    }
  }
);

const dataSlice = createSlice({
  name: "launchData/data",
  initialState: {
    loading: false,
    launch: {},
  },

  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.launch = action.payload;
      state.loading = false;
    },
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default dataSlice.reducer;
