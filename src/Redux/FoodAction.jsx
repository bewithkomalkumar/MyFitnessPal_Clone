const GetFoodItemActionCreator = (payload) => {
  return {
    type: "GETDATA",
    payload,
  };
};

const AddFooditemToBreakfastActionCreator = (payload) => {
  return {
    type: "Breakfast",
    payload,
  };
};
const AddFooditemToLunchActionCreator = (payload) => {
  return {
    type: "Lunch",
    payload,
  };
};
const AddFooditemToDinnerActionCreator = (payload) => {
  return {
    type: "Dinner",
    payload,
  };
};
const AddFooditemToSnacksActionCreator = (payload) => {
  return {
    type: "Snacks",
    payload,
  };
};
const RemoveFooditemToBreakfastActionCreator = (payload) => {
  console.log(payload);
  return {
    type: "RBreakfast",
    payload,
  };
};

export {
  GetFoodItemActionCreator,
  AddFooditemToBreakfastActionCreator,
  RemoveFooditemToBreakfastActionCreator,
  AddFooditemToLunchActionCreator,
  AddFooditemToDinnerActionCreator,
  AddFooditemToSnacksActionCreator,
};
