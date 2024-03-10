import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCars } from '../../services/connectionsAPI';

export const fetchAdvertsThunk = createAsyncThunk('adverts/getAll', getCars);
