const initialState = {
    value: 0
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value++
        }
    } else if (type === "DECREMENT"){
        return {
            value: state.value--
        }
    }
    return state
}