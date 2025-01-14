const Header = (title, date, temp) => {

 const hwrapper = document.createElement('div');
 const dateEl = document.createElement('span')
 const headerEl = document.createElement('h1');
 const tempEl = document.createElement('span');

 hwrapper.classList.add('header');
 dateEl.classList.add('date');
 tempEl.classList.add('temp');

 hwrapper.appendChild(dateEl);
 hwrapper.appendChild(headerEl);
 hwrapper.appendChild(tempEl);

 dateEl.textContent = date;
 headerEl.textContent = title;
 tempEl.textContent = temp;

 return hwrapper
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
   const head1 =  Header('Moby Dick', 'June 19th', '98'); 
  document.querySelector(selector).appendChild(head1);
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
