interface Users {
  username: string;
}

const input = document.getElementById("username") as HTMLInputElement;
const saveBtn = document.getElementById("saveBtn") as HTMLButtonElement;
const deleteBtn = document.getElementById("deleteBtn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLParagraphElement;

saveBtn.addEventListener("click", () => {
  const users: Users = {
    username: input.value,
  };
  console.log("Object", users);

  const strUser = JSON.stringify(users);
  localStorage.setItem("user", strUser);
  output.textContent = "User saved!";
  console.log("strUser:", strUser);
});

const storedUser = localStorage.getItem("user");
console.log("storedUser", storedUser);

if (storedUser) {
  const user: User = JSON.parse(storedUser);
  output.textContent = `Welcome back, ${user.username}`;
}

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  output.textContent = "User Removed.";
});
