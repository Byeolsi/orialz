import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		email: "slemfkdlqm@naver.com",
		nickname: "pill",
		filter: [
			{
				name:'bug',
				filter: true
			},
			{
				name:'knife',
				filter: false
			},
			{
				name:'monkey',
				filter: true
			},
			{
				name:'clown',
				filter: false
			},
			{
				name:'mouse',
				filter: true},
			{
				name:'chair',
				filter: false
			},
			{
				name:'ghost',
				filter: true
			},
			
		]
  	},
  	reducers: {
		uploadUser: (state, user) => {
			state.email = user.payload.email;
			state.nickname = user.payload.nickname;
		},
		discardUser: (state) => {
			state.email = "";
			state.nickname = "";
		},
		uploadFilter: (state, newFilter) => {
			state.filter = newFilter.payload;
			console.log(newFilter.payload);
		}
  	},
})

export const { uploadUser, discardUser, uploadFilter } = userSlice.actions

export const selectUser = (state) => state.user;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`