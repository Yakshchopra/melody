export const initialState = {
  user: null,
  recents: null,
  playingNow: null,
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
    case 'SET_PLAYING':
      return {
        ...state,
        playingNow: action.playingNow,
      };
    
    default:
      return state;
  }
}
export default reducer;
