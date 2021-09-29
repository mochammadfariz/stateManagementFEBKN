const initialState = {
    todos: [
      {
        id: 1,
        title: "title one",
        completed: false
      },
      {
        id: 2,
        title: "title two",
        completed: false
      }
    ]
  }
  const todoReducer = (state = initialState, action) => {
    const { type, payload} = action;
    switch(type){
      default:
        return {
          ...state
        }
    }
  }
  export default todoReducer;