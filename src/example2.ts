interface Theme {
  isDark: boolean;
}

const toggleBtn = document.getElementById("toggleBtn") as HTMLButtonElement;
const toggleh1 = document.getElementById("toggleh1") as HTMLHeadingElement;

function applyTheme(isDark: boolean): void {
  document.body.classList.toggle("dark", isDark);
  toggleBtn.classList.toggle("dark", isDark);
  toggleh1.classList.toggle("dark", isDark);
}

const storedTheme = localStorage.getItem("theme");
console.log("stored theme: ", storedTheme);

if (storedTheme) {
  const theme: Theme = JSON.parse(storedTheme);
  applyTheme(theme.isDark);
  console.log("theme: ", theme);
}

toggleBtn.addEventListener("click", () => {
  const storedTheme = localStorage.getItem("theme");

  let isDark = false;

  if (storedTheme) {
    const theme: Theme = JSON.parse(storedTheme);
    isDark = theme.isDark;
  }

  const newTheme: Theme = {
    isDark: !isDark,
  };

  localStorage.setItem("theme", JSON.stringify(newTheme));
  applyTheme(newTheme.isDark);
});
