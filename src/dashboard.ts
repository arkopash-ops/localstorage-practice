interface User {
  username: string;
  password?: string;
  email: string;
}

const welcomeText = document.getElementById("welcomeText") as HTMLHeadingElement;
const emailText = document.getElementById("emailText") as HTMLParagraphElement;
const logoutBtn = document.getElementById("logoutBtn") as HTMLButtonElement;

const storedUsers = localStorage.getItem("user");

// Guard: not logged in
if (!storedUsers) {
  window.location.href = "example4.html";
} else {
  const user: User = JSON.parse(storedUsers);

  welcomeText.textContent = `Welcome, ${user.username}`;
  emailText.textContent = `Email: ${user.email}`;
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "example4.html";
});
