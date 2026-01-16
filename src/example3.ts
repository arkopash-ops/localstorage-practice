const increment = document.getElementById("increment") as HTMLButtonElement;
const decrement = document.getElementById("decrement") as HTMLButtonElement;
const countNo = document.getElementById("count") as HTMLHeadingElement;
let currentCount: number = 0;

const storedCount = localStorage.getItem("count");

if (storedCount !== null) {
  currentCount = Number(storedCount);
}

if (countNo && increment && decrement) {
  const updateCountDisplay = () => {
    countNo.textContent = `${currentCount}`;
  };

  increment.addEventListener("click", () => {
    currentCount++;
    localStorage.setItem("count", currentCount.toString());
    updateCountDisplay();
  });

  decrement.addEventListener("click", () => {
    if (currentCount === 0) return;
    currentCount--;
    localStorage.setItem("count", currentCount.toString());
    updateCountDisplay();
  });

  updateCountDisplay();
}
