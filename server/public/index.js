const stripe = Stripe('pk_test_51MZnT6HXwt4BpIBQAyCb0LxDAclJ2qxMU1KlO8Lle2NawVWVDK5LPcma7hUIGGBRMMMYzJDo3v1WHCzi7hOEVh9E00xUfeIGEM'); // Your Publishable Key
const elements = stripe.elements();

console.log('hello')
// Create our card inputs
var style = {
  base: {
    color: "#fff",
    height: "50px",
    display: "block"
  }
};

const card = elements.create('card', { style });
card.mount('#card-element');

const form = document.querySelector('form');
const errorEl = document.querySelector('#card-errors');

// Give our token to our form
const stripeTokenHandler = token => {
  const hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  form.submit();
}

// Create token from card data
form.addEventListener('submit', e => {
  e.preventDefault();

  stripe.createToken(card).then(res => {
    if (res.error) errorEl.textContent = res.error.message;
    else stripeTokenHandler(res.token);
  })
})