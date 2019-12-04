export const orefReducer = (state, action)  => {
    switch (action.type) {
      case 'TODO':
        return {...state};
      default:
        return state;
    }
}