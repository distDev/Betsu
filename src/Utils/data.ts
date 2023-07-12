export const boardsData = [
  {
    id: "1",
    idBoard: "1",
    name: "Fortuna",
    position: 16454,
  },
  {
    id: "2",
    idBoard: "2",
    name: "Excellent",
    position: 60000,
  },
];

export const listsData = [
  {
    id: "1",
    name: "Нужно сделать",
    idBoard: "1",
    cover: {
      color: "#F8BD1C",
    },
  },
  {
    id: "2",
    name: "В работе",
    idBoard: "1",
    cover: {
      color: "#891BE8",
    },
  },
];

export const cardsData = [
  {
    id: "12r23",
    description: "",
    name: "Понять как должен работать сайт на сервере",
    position: 16454,
    cover: { color: "#1AD698" },
    checkLists: [],
    idBoard: "1",
    idList: "1",
  },
  {
    id: "r23r23r2",
    description: "",
    name: "Отправка данных из формы на сервер и в телеграм",
    position: 16454,
    cover: { color: "#1AD698" },
    checkLists: [],
    idBoard: "1",
    idList: "3",
  },
  {
    id: "3r32r23",
    description: "",
    name: "Уменьшить размер бегущей строки на главном экране",
    position: 16454,
    cover: { color: "#1AD698" },
    checkLists: [],
    idBoard: "1",
    idList: "2",
  },
  {
    id: "4r23rr32r23",
    description:
      "Оплата подключена, поэтому нужно после заказа открывать модальное окно, чтобы пользователь понял, что в данный момент не получится сделать заказ",
    name: "Сделать нормальное открытие корзины",
    position: 32908,
    cover: { color: "#1AD698" },
    checkLists: [],
    idBoard: "1",
    idList: "1",
  },
  {
    id: "5r2332r23r",
    description: "",
    name: "Добавить на страницы head и описание развернутое",
    position: 32908,
    cover: { color: "#1AD698" },
    checkLists: [],
    idBoard: "1",
    idList: "2",
  },
];

let cardFromTrello = {
  id: "645bf38f2ea5eb282a2e5d8b",
  badges: {
    subscribed: false,
    checkItems: 3,
    checkItemsChecked: 1,
    checkItemsEarliestDue: null,
    comments: 2,
    attachments: 2,
    description: false,
    due: "2023-09-09T15:26:00.000Z",
    dueComplete: false,
    start: "2023-06-09T15:26:00.000Z",
  },
  cardRole: null,
  closed: false,
  dateLastActivity: "2023-07-12T18:26:18.897Z",
  desc: "",
  due: "2023-09-09T15:26:00.000Z",
  dueComplete: false,
  dueReminder: -1,
  idAttachmentCover: "6478b96ba9989852cc98f332",
  idList: "63720eac6316060400259a91",
  idBoard: "63720e4d0437d303ebc6fe3d",
  idMembers: [],
  idShort: 134,
  name: "На странице товара добавить описание доставки",
  pos: 1728,
  subscribed: false,
  start:  "2023-06-09T15:26:00.000Z",
  labels: [
    {
      id: "63720e4d8291ac8742b8654f",
      idBoard: "63720e4d0437d303ebc6fe3d",
      name: "",
      color: "green",
      uses: 124,
    },
    {
      id: "63720e4d8291ac8742b86555",
      idBoard: "63720e4d0437d303ebc6fe3d",
      name: "",
      color: "orange",
      uses: 1,
    },
    {
      id: "63720e4d8291ac8742b8655c",
      idBoard: "63720e4d0437d303ebc6fe3d",
      name: "",
      color: "green_light",
      uses: 9,
    },
  ],
  attachments: [
    {
      bytes: 432351,
      date: "2023-06-01T15:29:47.075Z",
      edgeColor: "#3c3c3c",
      fileName: "main-banner.jpg",
      idMember: "61eb0532dcb7521a5b3bef19",
      isUpload: true,
      mimeType: "image/jpeg",
      name: "main-banner.jpg",
      pos: 16384,
      url: "https://trello.com/1/cards/645bf38f2ea5eb282a2e5d8b/attachments/6478b96ba9989852cc98f332/download/main-banner.jpg",
      id: "6478b96ba9989852cc98f332",
    },
  ],
  checklists: [
    {
      id: "6478b99734fdddd4a043512b",
      idBoard: "63720e4d0437d303ebc6fe3d",
      idCard: "645bf38f2ea5eb282a2e5d8b",
      name: "Чек-лист",
      pos: 16384,
    },
    {
      id: "6478f564db0e4b62953a54cd",
      idBoard: "63720e4d0437d303ebc6fe3d",
      idCard: "645bf38f2ea5eb282a2e5d8b",
      name: "Чек-лист",
      pos: 32768,
    },
  ],
};

let columnFromTrello = {
  id: "63720e9f249498013ab4056c",
  name: "Нужно сделать",
  closed: false,
  idBoard: "63720e4d0437d303ebc6fe3d",
  pos: 114687,
  status: null,
  subscribed: false,
};

let board = [
  {
    id: "63720e4d0437d303ebc6fe3d",
    name: "Fortuna",
    closed: false,
    dateLastActivity: "2023-07-12T18:26:18.897Z",
    dateLastView: "2023-07-12T18:26:37.287Z",
    memberships: [
      {
        idMember: "61eb0532dcb7521a5b3bef19",
        memberType: "admin",
        unconfirmed: false,
        deactivated: false,
        id: "63720e4d0437d303ebc6fe45",
      },
    ],
  },
];

let members = [
  {
    id: "61eb0532dcb7521a5b3bef19",
    activityBlocked: false,
    avatarUrl:
      "https://trello-members.s3.amazonaws.com/61eb0532dcb7521a5b3bef19/d3468f8489f95800d9b6f00691100149",
    bio: "",
    bioData: null,
    confirmed: true,
    fullName: "Дмитрий Ставер",
    idMemberReferrer: null,
    initials: "ДС",
    memberType: "normal",
    nonPublicAvailable: true,
    nonPublic: {
      fullName: "Дмитрий Ставер",
      avatarHash: null,
    },
    username: "user11423295",
  },
];
