const initialState = {
    value: 0,
    color: "red"
}

const reducer = (state = initialState, action) => {
    let { type, color, number } = action;
    if (type === "INCREMENT+5") {
        return {
            value: state.value + 5,
            color: state.color
        }
    } else if (type === "INCREMENT+1"){
        return {
            value: state.value + 1,
            color: state.color
        }
    } else if (type === "DECREMENT-1"){
        return {
            value: state.value - 1,
            color: state.color
        }
    } else if (type === "DECREMENT-5"){
        return {
            value: state.value - 5,
            color: state.color
        }
    }

    if (type === "color"){
        return {
            value: state.value,
            color: color
        }
    }

    if (type === "number"){
        return {
            value: number,
            color: state.color
        }
    }

    return state
}