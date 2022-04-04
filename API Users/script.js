const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");

fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const name = card.querySelector("[data-name]");
      const username = card.querySelector("[data-username]");
      const email = card.querySelector("[data-email]");
      const street = card.querySelector("[data-street]");
      const suite = card.querySelector("[data-suite]");
      const city = card.querySelector("[data-city]");
      const zipcode = card.querySelector("[data-zipcode]");
      const lat = card.querySelector("[data-lat]");
      const lng = card.querySelector("[data-lng]");

      name.textContent = `Name: ${user.name}`;
      username.textContent = `Username: ${user.username}`;
      email.textContent = `Email: ${user.email}`;
      street.textContent = `Street: ${user.address.street} `;
      suite.textContent = `Suite: ${user.address.suite} `;
      city.textContent = `City: ${user.address.city} `;
      zipcode.textContent = `Zipcode: ${user.address.zipcode} `;
      lat.textContent = `Lat: ${user.address.geo.lat} `;
      lng.textContent = `Lng: ${user.address.geo.lng} `;

      userCardContainer.append(card);
    });
  });
