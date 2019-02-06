const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    counterDOM.innerHTML = `<span style="color:${state.color};">${state.value}</span>`;
}