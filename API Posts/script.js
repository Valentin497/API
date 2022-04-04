const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      console.log(card);
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = `Title: ${user.title}`;
      body.textContent = `Body: ${user.body}`;
      userCardContainer.append(card);
    });
  });
