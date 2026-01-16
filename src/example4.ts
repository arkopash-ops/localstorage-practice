interface Data {
  name: string;
  email: string;
  message: string;
}

const inputName = document.getElementById("name") as HTMLInputElement;
const inputEmail = document.getElementById("email") as HTMLInputElement;
const messageTxtArea = document.getElementById(
  "message"
) as HTMLTextAreaElement;
const draftBtn = document.getElementById("draftBtn") as HTMLButtonElement;
const sendBtn = document.getElementById("sendBtn") as HTMLButtonElement;
const clearBtn = document.getElementById("clearBtn") as HTMLButtonElement;

function clearAll(): void {
  inputName.value = "";
  inputEmail.value = "";
  messageTxtArea.value = "";
}

function emptyField(): boolean {
  if (
    !inputName.value.trim() ||
    !inputEmail.value.trim() ||
    !messageTxtArea.value.trim()
  ) {
    alert("All fields are required!");
    return true;
  }
  return false;
}

draftBtn.addEventListener("click", () => {
  if (emptyField()) return;

  const data: Data = {
    name: inputName.value,
    email: inputEmail.value,
    message: messageTxtArea.value,
  };
  console.log("object of Data: ", data);

  const strData = JSON.stringify(data);
  localStorage.setItem("draft", strData);
  alert("Message has been draft.");
  console.log("Drafted Message:", strData);

  clearAll();
});

clearBtn.addEventListener("click", () => {
  clearAll();
});

sendBtn.addEventListener("click", () => {
  if (emptyField()) return;

  alert("Successfully send the msessage!");
  clearAll();
});
