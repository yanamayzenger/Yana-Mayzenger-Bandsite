const arrDates = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Pres Club",
    location: "San Francisco, CA",
  },
];

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

  arr.forEach((show) => {
    const showsParent = document.createElement("div");
    showsParent.classList.add("shows__new");
    showsContainer.appendChild(showsParent);

    const dateTitle = document.createElement("h4");
    dateTitle.classList.add("shows__date");
    dateTitle.innerText = "DATE";
    showsParent.appendChild(dateTitle);

    const dateShow = document.createElement("h3");
    dateShow.classList.add("shows__date-actual");
    dateShow.innerText = show.date;
    showsParent.appendChild(dateShow);

    const venueTitle = document.createElement("h4");
    venueTitle.classList.add("shows__venue");
    venueTitle.innerText = "VENUE";
    showsParent.appendChild(venueTitle);

    const venueShow = document.createElement("h3");
    venueShow.classList.add("shows__venue-actual");
    venueShow.innerText = show.venue;
    showsParent.appendChild(venueShow);

    const locationTitle = document.createElement("h4");
    locationTitle.classList.add("shows__location");
    locationTitle.innerText = "LOCATION";
    showsParent.appendChild(locationTitle);

    const locationShow = document.createElement("h3");
    locationShow.classList.add("shows__location-actual");
    locationShow.innerText = show.location;
    showsParent.appendChild(locationShow);

    const buyTickets = document.createElement("button");
    buyTickets.classList.add("shows__button");
    buyTickets.innerText = "BUY TICKETS";
    showsParent.appendChild(buyTickets);

    showsParent.addEventListener("click", function () {
      document
        .querySelectorAll(".shows__new")
        .forEach((item) => item.classList.remove("selected-show"));
      showsParent.classList.add("selected-show");
    });
  });
}

displayShows(arrDates);
