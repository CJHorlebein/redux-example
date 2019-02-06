const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

const colorField = document.getElementById("color")
colorField.addEventListener('change', e => {
    dispatch({
        type: "color",
        color: e.target.value
    })
})

const numberField = document.getElementById('number');
numberField.addEventListener('change', e => {
    dispatch({
        type: "number",
        number: parseInt(e.target.value)
    });
});

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButtonPos5 = document.getElementById('increment+5');
incrementButtonPos5.addEventListener('click', e => {
    dispatch({ 
        type: "INCREMENT+5",
    });
});

const incrementButtonPos1 = document.getElementById('increment+1');
incrementButtonPos1.addEventListener('click', e => {
    dispatch({ 
        type: "INCREMENT+1",
    })
});

const decrementButtonNeg1 = document.getElementById('decrement-1');
decrementButtonNeg1.addEventListener('click', e => {
    dispatch({ 
        type: "DECREMENT-1",
    })
});

const decrementButtonNeg5 = document.getElementById('decrement-5');
decrementButtonNeg5.addEventListener('click', e => {
    dispatch({ 
        type: "DECREMENT-5",
    })
});

