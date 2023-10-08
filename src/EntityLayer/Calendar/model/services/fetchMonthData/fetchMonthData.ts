import { createAsyncThunk } from '@reduxjs/toolkit'

const fetchUserById = createAsyncThunk(
  'calendar/fetchMonthData',
  async (userId: number, thunkAPI) => {},
)
