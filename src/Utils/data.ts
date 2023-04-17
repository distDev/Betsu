export const boardsData = [
  {
    id: "1",
    name: "Fortuna",
  },
  {
    id: "1",
    name: "Excellent",
  },
];

export const listsData = [
  {
    id: "1",
    name: "Нужно сделать",
    idBoard: "1",
    position: 1,
    cover: {
      color: "#F8BD1C",
    },
  },
  {
    id: "2",
    name: "В работе",
    idBoard: "1",
    position: 2,
    cover: {
      color: "#891BE8",
    },
  },
  {
    id: "3",
    name: "Выполнено",
    idBoard: "1",
    position: 3,
    cover: {
      color: "#1AD698",
    },
  },
];

export const cardsData = [
  {
    id: "1",
    description: "",
    name: "Понять как должен работать сайт на сервере",
    position: 1,
    cover: { color: "#1AD698" },
    checkLists: [],
    idBoard: "1",
    idList: "1",
  },
  {
    id: "2",
    description: "",
    name: "Отправка данных из формы на сервер и в телеграм",
    position: 1,
    cover: { color: "#1AD698" },
    checkLists: [],
    idBoard: "1",
    idList: "3",
  },
  {
    id: "3",
    description: "",
    name: "Уменьшить размер бегущей строки на главном экране",
    position: 1,
    cover: { color: "#1AD698" },
    checkLists: [],
    idBoard: "1",
    idList: "2",
  },
  {
    id: "4",
    description:
      "Оплата подключена, поэтому нужно после заказа открывать модальное окно, чтобы пользователь понял, что в данный момент не получится сделать заказ",
    name: "Сделать нормальное открытие корзины, добавить лоадер или скелетон",
    position: 1,
    cover: { color: "#1AD698" },
    checkLists: [],
    idBoard: "1",
    idList: "1",
  },
  {
    id: "5",
    description: "",
    name: "Добавить на страницы head и описание",
    position: 1,
    cover: { color: "#1AD698" },
    checkLists: [],
    idBoard: "1",
    idList: "2",
  },
];
