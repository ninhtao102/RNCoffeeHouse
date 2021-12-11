const initialState = {
    gifts: ["banh", "keo", "nuoc ngot"]
  };
  
  export default function itemReducer(state = initialState, action) {
    switch (action.type) {
      case "SEND_FROM_FATHER1":
        // console.log(action) => { type: 'SEND_FROM_FATHER', data: laptop }
        const laptopWithStickey = action.data + " stickey";
        return {
          items: [...state.items, laptopWithStickey]
        };
      case "SEND_FROM_GIRL_FRIEND11":
        console.log("aaaaa", action);
        return {
          gifts: [...state.gifts, action.data]
        };
      default:
        return state;
    }
  }
  