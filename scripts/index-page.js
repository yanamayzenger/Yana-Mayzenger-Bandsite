const bandSiteApi = new BandSiteApi("cf7bbab3-9fa7-40a2-a428-1207b967000d");

const form = document.querySelector(".comment__input-container");

function displayComments(arr) {
  // Selector updated to match HTML class
  const commentDiv = document.querySelector(".comment__default-comment");
  commentDiv.innerHTML = "";

  arr.forEach((comment) => {
    let m = new Date(comment.timestamp);
    let dateString = `${
      m.getUTCMonth() + 1
    }/${m.getUTCDate()}/${m.getUTCFullYear()}`;

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("comment__default");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("comment__header");

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("comment__header--image-one");
    headerDiv.appendChild(imageDiv);

    const mainName = document.createElement("h2");
    mainName.innerText = comment.name;
    mainName.classList.add("comment__header--name");
    headerDiv.appendChild(mainName);

    const mainTime = document.createElement("aside");
    mainTime.innerText = dateString;
    mainTime.classList.add("comment__header--date");
    headerDiv.appendChild(mainTime);

    mainDiv.appendChild(headerDiv);

    const mainP = document.createElement("p");
    mainP.innerText = comment.comment;
    mainP.classList.add("comment__text-container-default--comment");
    mainDiv.appendChild(mainP);

    commentDiv.appendChild(mainDiv);
  });
}

(async () => {
  try {
    const comments = await bandSiteApi.getComments();
    displayComments(comments);
  } catch (error) {
    console.error("Error loading comments:", error);
  }
})();

form.addEventListener("submit", async (newPost) => {
  newPost.preventDefault();
  try {
    const newComment = {
      name: document.querySelector(".comment__text-container--one").value,
      comment: document.querySelector(".comment__text-container--two").value,
    };

    await bandSiteApi.postComment(newComment);
    const updatedComments = await bandSiteApi.getComments();
    displayComments(updatedComments);
    form.reset();
  } catch (error) {
    console.error("Error posting a new comment:", error);
  }
});
