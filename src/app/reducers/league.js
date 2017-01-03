
const leagueReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_LEAGUE_SUCCESS":
      return action.payload;
  }
  return state;
};

export default leagueReducer;
