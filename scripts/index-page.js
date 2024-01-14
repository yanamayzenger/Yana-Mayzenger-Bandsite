const form = document.querySelector(".comments__input-form");

function displayComments(arr) {
  const commentDiv = document.querySelector(".comments__section");
  commentDiv.innerHTML = "";

  for (let comment of arr) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("comments__new");

    const subDiv = document.createElement("div");
    subDiv.classList.add("comments__container");
    mainDiv.appendChild(subDiv);

    const mainName = document.createElement("h2");
    mainName.innerText = comment.name;
    mainName.classList.add("comments__new-name");
    subDiv.appendChild(mainName);

    let m = new Date(comment.timestamp);
    let dateString =
      m.getUTCMonth() + 1 + "/" + m.getUTCDate() + "/" + m.getUTCFullYear();

    const mainTime = document.createElement("aside");
    mainTime.innerText = dateString;
    mainTime.classList.add("comments__new-time");
    subDiv.appendChild(mainTime);

    const mainP = document.createElement("p");
    mainP.innerText = comment.comment;
    mainP.classList.add("comments__new-comment");
    subDiv.appendChild(mainP);

    commentDiv.appendChild(mainDiv);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.querySelector(".comments__input-info-name").value;
  const comment = event.target.querySelector(
    ".comments__input-info-comment"
  ).value;

  if (name && comment) {
    axios
      .post(
        "https://project-1-api.herokuapp.com/comments?api_key=cf7bbab3-9fa7-40a2-a428-1207b967000d",
        {
          name: name,
          comment: comment,
        }
      )
      .then(() => {
        getComments();
        event.target.reset();
      });
  }
});

function getComments() {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=cf7bbab3-9fa7-40a2-a428-1207b967000d"
    )
    .then((response) => {
      displayComments(
        response.data.sort(function (a, b) {
          return b.timestamp - a.timestamp;
        })
      );
    });
}
getComments();
