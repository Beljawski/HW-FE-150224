// Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.
// const form = document.querySelector(".myForm");
// const submit = document.querySelector(".btn");
// const firstname = document.querySelector('input[name="firstname"]');
// const lastname = document.querySelector('input[name="lastname"]');
// const age = document.querySelector('input[name="age"]');

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("Vorname:", firstname.value);
//   console.log("Nachname:",lastname.value);
//   console.log("Alter:", age.value);
// });

// Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.

// const form = document.querySelector(".myForm");
// const submit = document.querySelector(".btn");
// const firstname = document.querySelector('input[name="firstname"]');
// const lastname = document.querySelector('input[name="lastname"]');
// const age = document.querySelector('input[name="age"]');
// const users = []

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const user = {
//     Firstname: firstname.value,
//     Lastname: lastname.value,
//     Age: age.value,
//   };
//   users.push(user)

//   console.log(users);
// });
// Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.

// const form = document.querySelector(".myForm");
// const submit = document.querySelector(".btn");
// const firstname = document.querySelector('input[name="firstname"]');
// const lastname = document.querySelector('input[name="lastname"]');
// const age = document.querySelector('input[name="age"]');
// const users = [];

// function createUserCard(user) {
//   const card = document.createElement("div");
//   card.classList.add("userCard");
//   card.innerText = `${user.Firstname} ${user.Lastname}, ${user.Age}`;
//   return card;
// }

// function rerender() {
//   const container = document.querySelector(".userContainer");
//   container.innerHTML = "";

//   users.forEach(user => {
//     const card = createUserCard(user);
//     container.appendChild(card);
//   });
// }

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const user = {
//     Firstname: firstname.value,
//     Lastname: lastname.value,
//     Age: age.value,
//   };
//   users.push(user);

//   rerender();
// });

// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.
// ???