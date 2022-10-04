export default function initFetchBitcoin() {
   const span = document.querySelector(`.btc-price`);
   const url = `https://blockchain.info/ticker`;

   async function fetchBitcoin(url) {
      const fetchResponse = await fetch(url);
      const responseJSON = await fetchResponse.json();
      const priceRawBRL = responseJSON.BRL.buy;

      const priceWanted = 1000 / priceRawBRL;
      span.innerText = priceWanted.toFixed(5);
   }

   setInterval(() => {
      fetchBitcoin(url);
   }, 60000);
   fetchBitcoin(url);
}