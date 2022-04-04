const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];

      const name = card.querySelector("[data-name]");
      const email = card.querySelector("[data-email]");
      const body = card.querySelector("[data-body]");
      name.textContent = `Name: ${user.name}`;
      email.textContent = `Email: ${user.email}`;
      body.textContent = `Comment: ${user.body}`;
      userCardContainer.append(card);
    });
  });
