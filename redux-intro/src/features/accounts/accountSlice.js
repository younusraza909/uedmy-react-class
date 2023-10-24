import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

//This auto created action only get single arguments
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    // by default request loan will get only one argument but now how would I get by both arguments ?
    // we can prepare our payload
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: {
            amount,
            purpose,
          },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.loanPurpose = "";
      state.balance = state.balance - state.loan;
      state.loan = 0;
    },
    convertingCurrency(state, action) {
      state.isLoading = true;
    },
  },
});

export default accountSlice.reducer;

export const { deposit, withdraw, requestLoan, payLoan, convertingCurrency } =
  accountSlice.actions;
