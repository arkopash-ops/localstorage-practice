interface User {
  username: string;
  password?: string;
  email: string;
}

const loginBtn = document.getElementById("loginBtn") as HTMLButtonElement;
const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;

loginBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const email = emailInput.value.trim();

  if (!username || !email) {
    alert("Username and email are required");
    return;
  }

  const users: User = {
    username,
    email,
    ...(password && { password })
  };

  // Store object safely
  localStorage.setItem("user", JSON.stringify(users));

  window.location.href = "dashboard.html";
});
