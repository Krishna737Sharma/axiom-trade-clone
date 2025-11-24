import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Token } from '@/lib/mockData';

interface MarketState {
  tokens: Token[];
  isLoading: boolean;
}

const initialState: MarketState = {
  tokens: [],
  isLoading: true,
};

export const marketSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.tokens = action.payload;
      state.isLoading = false;
    },
    updatePrices: (state, action: PayloadAction<Token[]>) => {
      // Real-world mein hum map karke update karte, 
      // yahan hum seedha replace kar rahe hain performance ke liye
      state.tokens = action.payload;
    },
  },
});

export const { setTokens, updatePrices } = marketSlice.actions;
export default marketSlice.reducer;