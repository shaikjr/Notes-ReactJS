const getInitialData = () => [
  {
    id: 1,
    title: "Monday",
    body: "wake up fajr namaz revision qurhan check imp mails driving school bridge course online class break zuhur namaz",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Tuesday",
    body: "wake up fajr namaz revision qurhan check imp mails driving school bridge course online class break zuhur namaz",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Wednesday",
    body: "wake up fajr namaz revision qurhan check imp mails driving school bridge course online class break zuhur namaz",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Thursday",
    body: "wake up fajr namaz revision qurhan check imp mails driving school bridge course online class break zuhur namaz",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "Friday",
    body: "wake up fajr namaz revision qurhan check imp mails driving school bridge course online class break zuhur namaz",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
  {
    id: 6,
    title: "Saturday",
    body: "wake up fajr namaz revision qurhan check imp mails driving school bridge course online class break zuhur namaz",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
