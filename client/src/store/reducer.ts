export const initialState = {
  user: null,
  recents: null,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_RECENT':
      return {
        ...state,
        recents: action.recents,
      };
    
    default:
      return state;
  }
}
export default reducer;
