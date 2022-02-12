import axios from "axios";

const Card = (article) => {
  const cardWrapper = document.createElement('div');
  const headLine = document.createElement('div');
  const author = document.createElement('div');
  const imageContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  cardWrapper.classList.add('card');
  headLine.classList.add('headline');
  author.classList.add('author');
  imageContainer.classList.add('img-container');

  headLine.textContent = article.headline;
  img.src = article.authorPhoto;
  img.alt = `Photo of ${article.authorName}`;
  authorName.textContent = `By ${article.authorName}`;
  
  cardWrapper.appendChild(headLine);
  cardWrapper.appendChild(author);
  author.appendChild(imageContainer);
  imageContainer.appendChild(img);
  author.appendChild(authorName);

  cardWrapper.addEventListener("click", evt => {
    console.log(article.headline);
  })

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return cardWrapper;
}


const cardAppender = (selector) => {
  axios.get(`http://localhost:5000/api/articles`)
    .then(res => {
      const resObject = res.data.articles;
      for (const cat in resObject) {
        resObject[cat].forEach(art => {
          document.querySelector(selector).appendChild(Card(art));
        })
      }
    })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
