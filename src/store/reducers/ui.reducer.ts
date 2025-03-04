export interface IUireducer {
  isLoading: boolean;
}

const INITIAL_STATE = {
  isLoading: false
};

// tslint:disable-next-line: no-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.payload.status };
    default:
      return state;
  }
};

// Types ========================================

export const SET_LOADING = "SET_LOADING";
