export const initialState = {
    todos: []
};
const reducer = (state, action) => {


    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            };
        case "REMOVE_TODO":
            return {
                ...state,
                todos: [...state.todos].filter(todo => todo.id !== action.payload)
            };
        case "COMPLETE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id !== action.payload) {
                        return todo;
                    }
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted,
                    }
                })
            };
        case "UPDATE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id !== action.payload.id) {
                        return todo;
                    }
                    return {
                        ...todo,
                        todo_name: action.payload.todo_name,
                    }
                })
            };
        default:
            return {
                ...state
            };
    }
}
export default reducer;