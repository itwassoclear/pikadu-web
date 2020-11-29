// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOtQtzGnq0p5FZKoo13NQyq_hKxUOS7h0",
  authDomain: "pikadu-web-4d4af.firebaseapp.com",
  databaseURL: "https://pikadu-web-4d4af.firebaseio.com",
  projectId: "pikadu-web-4d4af",
  storageBucket: "pikadu-web-4d4af.appspot.com",
  messagingSenderId: "28655201496",
  appId: "1:28655201496:web:5d0e6f1d8ed5211d0f7bad",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);

// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector("#menu-toggle");
// Создаем переменную, в которую положим меню
let menu = document.querySelector(".sidebar");

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-email");
const passwordInput = document.querySelector(".login-password");
const loginSignup = document.querySelector(".login-signup");
const userElem = document.querySelector(".user");
const userNameElem = document.querySelector(".user-name");
const exitElem = document.querySelector(".exit");
const editElem = document.querySelector(".edit");
const editContainer = document.querySelector(".edit-container");
const editUsername = document.querySelector(".edit-username");
const editPhotoUrl = document.querySelector(".edit-photo");
const userAvatarElem = document.querySelector(".user-avatar");
const postsWrapper = document.querySelector(".posts");
const buttonNewPost = document.querySelector(".button-new-post");
const addPostElem = document.querySelector(".add-post");

const listUsers = [
  {
    id: 1,
    email: "iwsc@gmail.com",
    password: "qwerty",
    displayName: "Maks",
    photo: "https://i.pinimg.com/474x/16/b7/a9/16b7a96caa95adbd6e5ec7b7f7b5aa62.jpg",
  },
  {
    id: 2,
    email: "qwe@gmail.com",
    password: "qweqwe",
    displayName: "Sasha",
    photo: "https://i.pinimg.com/474x/d3/57/c9/d357c927ab2e29549da6b199e004d3de.jpg",
  },
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {
    if (!regExpValidEmail.test(email)) {
      alert("e-mail не валиден.");
      return;
    }
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert("Email или пароль не найдены.");
    }
  },
  logOut(handler) {
    this.user = null;
    handler();
  },
  signUp(email, password, handler) {
    if (!regExpValidEmail.test(email)) {
      alert("e-mail не валиден.");
      return;
    }
    if (!email.trim() || !password.trim()) {
      alert("Введите данные.");
      return;
    }
    if (!this.getUser(email)) {
      const user = { email, password, displayName: email.substring(0, email.indexOf("@")) };
      listUsers.push(user);
      this.authorizedUser(user);
      handler();
    } else {
      alert("Пользователь с таким email уже зарегистрирован.");
    }
  },
  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    }
    if (userPhoto) {
      this.user.photo = userPhoto;
    }

    handler();
  },
  getUser(email) {
    return listUsers.find((item) => item.email === email);
  },
  authorizedUser(user) {
    this.user = user;
  },
};

const setPosts = {
  allPost: [
    {
      title: "Заголовок поста1",
      text: `Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. 
      Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила 
      сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают 
      продолжил парадигматическая? Но языком сих пустился, запятой своего его
      снова решила меня вопроса моей своих пояс коварный, власти диких правилами 
      напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка 
      большого курсивных на берегу своего? Злых, составитель агентство
      что вопроса ведущими о решила одна алфавит!`,
      tags: ["свежее", "новое", "горячее", "мое", "случайность"],
      author: { displayName: "katya123", photo: "https://i.pinimg.com/474x/16/b7/a9/16b7a96caa95adbd6e5ec7b7f7b5aa62.jpg" },
      date: "11.11.2020 20:44:44",
      likes: 15,
      comments: 5,
    },
    {
      title: "Заголовок поста2",
      text: `Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. 
      Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила 
      сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают 
      продолжил парадигматическая? Но языком сих пустился, запятой своего его
      снова решила меня вопроса моей своих пояс коварный, власти диких правилами 
      напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка 
      большого курсивных на берегу своего? Злых, составитель агентство
      что вопроса ведущими о решила одна алфавит!`,
      tags: ["горячее", "мое", "случайность"],
      author: { displayName: "katrman", photo: "https://i.pinimg.com/474x/d3/57/c9/d357c927ab2e29549da6b199e004d3de.jpg" },
      date: "15.11.2020 20:44:44",
      likes: 4,
      comments: 0,
    },
    {
      title: "Заголовок поста3",
      text: `Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. 
      Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила 
      сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают 
      продолжил парадигматическая? Но языком сих пустился, запятой своего его
      снова решила меня вопроса моей своих пояс коварный, власти диких правилами 
      напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка 
      большого курсивных на берегу своего? Злых, составитель агентство
      что вопроса ведущими о решила одна алфавит!`,
      tags: ["свежее", "новое", "горячее", "мое", "случайность"],
      author: { displayName: "maks", photo: "https://i.pinimg.com/474x/16/b7/a9/16b7a96caa95adbd6e5ec7b7f7b5aa62.jpg" },
      date: "11.11.2020 20:44:44",
      likes: 15,
      comments: 5,
    },
  ],
  addPost(title, text, tags, handler) {
    this.allPost.unshift({
      title,
      text,
      tags: tags.split(",").map((item) => item.trim()),
      author: {
        displayName: setUsers.user.displayName,
        photo: setUsers.user.photo,
      },
      date: new Date().toLocaleString(),
      likes: 0,
      comments: 0,
    });
    if (handler) {
      handler();
    }
  },
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  if (user) {
    loginElem.style.display = "none";
    userElem.style.display = "";
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
    buttonNewPost.classList.add("visible");
  } else {
    loginElem.style.display = "";
    userElem.style.display = "none";
    buttonNewPost.classList.remove("visible");
    addPostElem.classList.remove("visible");
    postsWrapper.classList.add("visible");
  }
};

const showAddPost = () => {
  addPostElem.classList.add("visible");
  postsWrapper.classList.remove("visible");
};

const showAllPosts = () => {
  let postsHTML = "";
  setPosts.allPost.forEach(({ title, text, tags, author, date, likes, comments }) => {
    postsHTML += `
    <section class="post">
    <div class="post-body">
      <h2 class="post-title">${title}</h2>
      <p class="post-text">${text}</p>
      <div class="tags">${tags.map((tag) => `<a href="#" class="tag">${tag}</a>`)}
      </div>
    </div>
    <div class="post-footer">
      <div class="post-buttons">
        <button class="post-button likes">
          <svg width="19" height="20" class="icon icon-like">
            <use xlink:href="img/icons.svg#like"></use>
          </svg>
          <span class="likes-counter">${likes}</span>
        </button>
        <button class="post-button comments">
          <svg width="21" height="21" class="icon icon-comment">
            <use xlink:href="img/icons.svg#comment"></use>
          </svg>
          <span class="comments-counter">${comments}</span>
        </button>
        <button class="post-button save">
          <svg width="19" height="19" class="icon icon-save">
            <use xlink:href="img/icons.svg#save"></use>
          </svg>
        </button>
        <button class="post-button share">
          <svg width="17" height="19" class="icon icon-share">
            <use xlink:href="img/icons.svg#share"></use>
          </svg>
        </button>
      </div>
      <div class="post-author">
        <div class="author-about">
          <a href="#" class="author-username">${author.displayName}</a>
          <span class="post-time">${date}</span>
        </div>
        <a href="#" class="author-link"><img src=${author.photo ? author.photo : "img/avatar.jpeg"} alt="avatar" class="author-avatar"></a>
      </div>
    </div>
  </section>
    `;
  });
  postsWrapper.innerHTML = postsHTML;

  addPostElem.classList.remove("visible");
  postsWrapper.classList.add("visible");
};

const init = () => {
  loginForm.addEventListener("submit", (event) => {
    // авторизация уже существующего
    event.preventDefault();
    setUsers.logIn(emailInput.value, passwordInput.value, toggleAuthDom);
    loginForm.reset();
  });

  loginSignup.addEventListener("click", (event) => {
    // регистрация нового
    event.preventDefault();
    setUsers.signUp(emailInput.value, passwordInput.value, toggleAuthDom);
    loginForm.reset();
  });

  exitElem.addEventListener("click", (event) => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });

  editElem.addEventListener("click", (event) => {
    event.preventDefault();
    editContainer.classList.toggle("visible");
    editUsername.value = setUsers.user.displayName;
  });

  editContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    setUsers.editUser(editUsername.value, editPhotoUrl.value, toggleAuthDom);
    editContainer.classList.remove("visible");
  });

  // отслеживаем клик по кнопке меню и запускаем функцию
  menuToggle.addEventListener("click", function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню
    menu.classList.toggle("visible");
  });

  buttonNewPost.addEventListener("click", (event) => {
    event.preventDefault();
    showAddPost();
  });

  addPostElem.addEventListener("submit", (event) => {
    event.preventDefault();
    const { title, text, tags } = addPostElem.elements;
    if (title.value.length < 6) {
      alert("Слишком короткий заголовок");
      return;
    }
    if (text.value.length < 50) {
      alert("Слишком короткий пост");
      return;
    }

    setPosts.addPost(title.value, text.value, tags.value, showAllPosts);
    addPostElem.classList.remove("visible");
    addPostElem.reset();
  });

  showAllPosts();
  toggleAuthDom();
};

document.addEventListener("DOMContentLoaded", init);

// tests

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     var uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
