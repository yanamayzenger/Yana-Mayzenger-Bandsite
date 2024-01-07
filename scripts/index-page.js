// Default comments array with sample comments
let comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

// Function to create and append elements with class
function createElementWithClass(tagName, className) {
  const element = document.createElement(tagName);
  element.classList.add(className);
  return element;
}

// Function to create a comment element
function createCommentElement(name, comment) {
  const commentContainer = createElementWithClass("div", "comment__default");

  // Image container
  const imageContainer = createElementWithClass(
    "div",
    "comment__image-container-one"
  );
  commentContainer.appendChild(imageContainer);

  // Header container
  const headerContainer = createElementWithClass("div", "comment__header");
  commentContainer.appendChild(headerContainer);

  // Image
  const image = createElementWithClass("div", "comment__header--image-one");
  imageContainer.appendChild(image);

  // Name
  const nameElement = createElementWithClass("h2", "comment__header--name");
  nameElement.innerText = name;
  headerContainer.appendChild(nameElement);

  // Date (formatted)
  const today = new Date();
  const formattedDate = `${
    today.getMonth() + 1
  }/${today.getDate()}/${today.getFullYear()}`;
  const dateElement = createElementWithClass("h3", "comment__header--date");
  dateElement.innerText = formattedDate;
  headerContainer.appendChild(dateElement);

  // Text container
  const textContainer = createElementWithClass(
    "div",
    "comment__text-container-default"
  );
  commentContainer.appendChild(textContainer);

  // Comment
  const commentElement = createElementWithClass(
    "p",
    "comment__text-container-default--comment"
  );
  commentElement.innerText = comment;
  textContainer.appendChild(commentElement);

  return commentContainer;
}

// Function to display comments
function displayComments(arr) {
  const commentContainer = document.querySelector(".comment__default-comment");
  arr.forEach((commentData) => {
    const commentElement = createCommentElement(
      commentData.name,
      commentData.comment
    );
    commentContainer.appendChild(commentElement);
  });
}

// Function to handle form submission
function handleFormSubmit(submitEvent) {
  submitEvent.preventDefault();

  const newComment = {
    name: submitEvent.target.name.value,
    comment: submitEvent.target.comment.value,
  };

  const commentContainer = document.querySelector(".comment__default-comment");
  const commentElement = createCommentElement(
    newComment.name,
    newComment.comment
  );

  // Insert new comment at the top
  commentContainer.insertBefore(commentElement, commentContainer.childNodes[0]);

  // Clear input fields
  submitEvent.target.reset();
}

// Attach event listener for form submission
const form = document.querySelector(".comment__input-container");
form.addEventListener("submit", handleFormSubmit);

// Initial display of existing comments
displayComments(comments);
