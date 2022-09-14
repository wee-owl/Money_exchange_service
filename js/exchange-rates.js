// Get exchange rates list

const exchangeRatesList = document.querySelector('.exchange-rates__list');

const socket = new WebSocket('wss://web-socket-current.herokuapp.com');

const renderExchange = (wrapper, data) => {
    const {from, to, rate, change} = JSON.parse(data);

    const li = document.createElement('li');
    li.classList.add('exchange-rates__item', change === 1 ? 'item__up' : 'item__down');

    const currency = document.createElement('span');
    currency.classList.add('exchange-rates__currency');
    currency.textContent = `${from}/${to}`;

    const value = document.createElement('span');
    value.classList.add('exchange-rates__value');
    value.textContent = rate;

    li.append(currency, value);
    wrapper.prepend(li);

    if (wrapper.children.length > 4) {
        wrapper.children[4].remove();
    };
};

socket.addEventListener('message', (e) => {
    renderExchange(exchangeRatesList, e.data);
});

socket.addEventListener('error', (err) => {
    console.log(err);
});
