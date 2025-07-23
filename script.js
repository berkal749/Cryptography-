var coin1 = document.getElementById("right");
async function getData() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    for (let coins of json) {
      console.log(json);

      var tick = document.createElement("div");
      tick.setAttribute("id", json.id);
      tick.setAttribute("class", "tick");

      var name = document.createElement("div");

      name.innerText = coins.name;
      tick.appendChild(name);

      var price = document.createElement("p");
      price.innerText = `currently:${coins.current_price}$`;

      tick.appendChild(price);

      var current = document.createElement("div");
      current.innerText = `${coins.price_change_24h}%`;

      tick.appendChild(current);
      coin1.appendChild(tick);
    }
  } catch (error) {
    console.error(error.message);
  }
}
getData();
