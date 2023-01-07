const initState = {
  Allfood: [],
  Breakfast: [],
  Lunch: [],
  Dinner: [],
  Snacks: [],
};

const FoodReducer = (state = initState, { type, payload }) => {
  if (type === "GETDATA") {
    return {
      ...state,
      Allfood: payload,
    };
  }
  if (type === "Breakfast") {
    return {
      ...state,
      Breakfast: [...state.Breakfast, payload],
    };
  }
  if (type === "Lunch") {
    return {
      ...state,
      Lunch: [...state.Lunch, payload],
    };
  }
  if (type === "Dinner") {
    return {
      ...state,
      Dinner: [...state.Dinner, payload],
    };
  }
  if (type === "Snacks") {
    return {
      ...state,
      Snacks: [...state.Snacks, payload],
    };
  }
  if (type === "RBreakfast") {
    if (payload.name === "Breakfast") {
      const data = state.Breakfast.filter((elem) => {
        return elem.id != payload.id;
      });
      return {
        ...state,
        Breakfast: data,
      };
    } else if (payload.name === "Lunch") {
      const data = state.Lunch.filter((elem) => {
        return elem.id != payload.id;
      });
      return {
        ...state,
        Lunch: data,
      };
    } else if (payload.name === "Dinner") {
      const data = state.Dinner.filter((elem) => {
        return elem.id != payload.id;
      });
      return {
        ...state,
        Dinner: data,
      };
    } else if (payload.name === "Snacks") {
      const data = state.Snacks.filter((elem) => {
        return elem.id != payload.id;
      });
      return {
        ...state,
        Snacks: data,
      };
    }
  }
  return state;
};
export { FoodReducer };
