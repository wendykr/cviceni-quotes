import './style.css';

export const Quote = (props) => {

    const { text, author } = props;

    const element = document.createElement('div');
    element.classList.add('quotes');

    element.innerHTML = `
        <h2 class="quotes__text">${text}</h2>
        <p class="quotes__author">${author}</p>
    `;

    return element;
}