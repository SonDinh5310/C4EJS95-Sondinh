let listUser = [
  {
    id: 1,
    email: "username1@gmail.com",
    user: "username1",
    pass: "123tnvn",
    address: "gfjhsafkjsd",
    phone: "0123456789",
    role: "user",
  },
  {
    id: 2,
    email: "username2@gmail.com",
    user: "username2",
    pass: "123tnvn1",
    address: "gfjhsafkjsd",
    phone: "0123456786",
    role: "user",
  },
  {
    id: 3,
    email: " username3@gmail.com",
    user: "username3",
    pass: "123tnvn2",
    address: "gfjhsafkjsd",
    phone: "0123456787",
    role: "user",
  },
  {
    id: 4,
    email: " username4@gmail.com",
    user: "username4",
    pass: "123tnvn3",
    address: "gfjhsafkjsd",
    phone: "0123456788",
    role: "user",
  },
];

const loginBox = document.getElementById("login");
const regBox = document.getElementById("register");
const forgetBox = document.getElementById("forgot");
const loginTab = document.getElementById("lt");
const regTab = document.getElementById("rt");
const emailInput = document.getElementById("re");
const passwordInput = document.getElementById("rp");
const passwordRetypeInput = document.getElementById("rrp");
const usernameInput = document.getElementById("un");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");

let emailArray = [];
let passwordArray = [];

function register() {
  if (!emailInput.value) {
    alert("Email required.");
    return;
  } else if (!passwordInput.value) {
    alert("Password required.");
    return;
  } else if (!passwordRetypeInput.value) {
    alert("Password required.");
    return;
  } else if (passwordInput.value !== passwordRetypeInput.value) {
    alert("Password don't match retype your Password.");
    return;
  } else if (!usernameInput.value) {
    alert("User name required.");
    return;
  } else if (!phoneInput.value) {
    alert("Phone required.");
    return;
  } else {
    for (let i = 0; i < listUser.length; i++) {
      if (listUser[i].user === usernameInput.value) {
        alert("Account already exists");
        return;
      }
      if (listUser[i].email === emailInput.value) {
        alert(email + " is already register.");
        return;
      }
    }
  }

  const newUser = {
    id: listUser.length + 1,
    email: emailInput.value,
    user: usernameInput.value,
    pass: passwordInput.value,
    address: addressInput.value,
    phone: phoneInput.value,
    role: "user",
  };
  listUser.push(newUser);
  alert(emailInput.value + "  Thanks for registration. \nTry to login Now");
}

function login() {
  const email = document.getElementById("se").value;
  const password = document.getElementById("sp").value;
  console.log(email);
  console.log(password);
  if (!email || !password) {
    alert("require input");
  }

  for (const user of listUser) {
    if (user.email === email && user.pass === password) {
      if (user.role === "hotel") {
        alert("Hello hotel role");
      } else {
        alert("Hello user");
      }
      break;
    }
  }
}

function forgot() {
  let email = document.getElementById("fe").value;
  for (const user of listUser) {
    if (email === "") {
      alert("Email required.");
      return;
    }
    if (user.email === email) {
      alert("email is send to your email check it in 24hr. \n Thanks");
      return;
    }
    alert("Email does not exist.");
    return;
  }

  //   if (listUser.indexOf(email) === -1) {
  //     if (email == "") {
  //       alert("Email required.");
  //       return;
  //     }
  //     alert("Email does not exist.");
  //     return;
  //   } else {
  //     alert("email is send to your email check it in 24hr. \n Thanks");
  //   }
  document.getElementById("fe").value = "";
}
