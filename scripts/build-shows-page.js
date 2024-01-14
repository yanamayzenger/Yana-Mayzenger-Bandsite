function displayShows(arr) {
  const shows = document.querySelector(".shows");
  const showsTitle = document.createElement("h2");
  showsTitle.classList.add("shows__title");
  showsTitle.innerText = "Shows";
  shows.appendChild(showsTitle);
  const showsContainer = document.createElement("div");
  showsContainer.classList.add("shows__container");
  shows.appendChild(showsContainer);
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("shows__top");
  showsContainer.appendChild(infoDiv);
  const datesTitle = document.createElement("h3");
  datesTitle.classList.add("shows__top-date");
  datesTitle.innerText = "DATES";
  infoDiv.appendChild(datesTitle);
  const venuesTitle = document.createElement("h3");
  venuesTitle.classList.add("shows__top-venue");
  venuesTitle.innerText = "VENUE";
  infoDiv.appendChild(venuesTitle);
  const locationsTitle = document.createElement("h3");
  locationsTitle.classList.add("shows__top-location");
  locationsTitle.innerText = "LOCATION";
  infoDiv.appendChild(locationsTitle);
  const hiddenEle = document.createElement("span");
  hiddenEle.classList.add("shows__hidden");
  hiddenEle.innerText = ".";
  infoDiv.appendChild(hiddenEle);
  for (let key in arr) {
    const showsParent = document.createElement("div");
    showsParent.classList.add("shows__new");
    showsContainer.appendChild(showsParent);
    const dateTitle = document.createElement("h4");
    dateTitle.classList.add("shows__date");
    dateTitle.innerText = "DATE";
    showsParent.appendChild(dateTitle);
    const dateStr = arr[key]["date"];
    const date = new Date(dateStr);
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const dateShow = document.createElement("h3");
    dateShow.classList.add("shows__date-actual");
    dateShow.innerText = formattedDate;
    showsParent.appendChild(dateShow);
    const venueTitle = document.createElement("h4");
    venueTitle.classList.add("shows__venue");
    venueTitle.innerText = "VENUE";
    showsParent.appendChild(venueTitle);
    const venueShow = document.createElement("h3");
    venueShow.classList.add("shows__venue-actual");
    venueShow.innerText = arr[key]["place"];
    showsParent.appendChild(venueShow);
    const locationTitle = document.createElement("h4");
    locationTitle.classList.add("shows__location");
    locationTitle.innerText = "LOCATION";
    showsParent.appendChild(locationTitle);
    const locationShow = document.createElement("h3");
    locationShow.classList.add("shows__location-actual");
    locationShow.innerText = arr[key]["location"];
    showsParent.appendChild(locationShow);
    const buyTickets = document.createElement("button");
    buyTickets.classList.add("shows__button");
    buyTickets.innerText = "BUY TICKETS";
    showsParent.appendChild(buyTickets);
  }
}
const showDates = axios.get(
  "https://project-1-api.herokuapp.com/showdates?api_key=cf7bbab3-9fa7-40a2-a428-1207b967000d"
);
showDates.then((response) => {
  displayShows(response.data);
});
showDates.catch((error) => {
  console.log("you did something wrong");
});
