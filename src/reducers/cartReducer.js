const initialState = {
    cart: []
  };
  
  export default function itemReducer(state = initialState, action) {
    switch (action.type) {
      case "SEND_FROM_FATHER":
        // console.log(action) => { type: 'SEND_FROM_FATHER', data: laptop }
        const laptopWithStickey = action.data + " stickey";
        return {
          items: [...state.items, laptopWithStickey]
        };
      case "SEND_FROM_GIRL_FRIEND1":
        console.log("aaaaa", action);
        return {
          gifts: [...state.gifts, action.data]
        };
      default:
        return state;
    }
  }
  