const categories = document.querySelector("#categories");
const allItems = [...categories.querySelectorAll(".item")];
console.log("Number of categories :", allItems.length);
allItems.forEach((item) => {
  console.log("Category :", item.querySelector("h2").textContent);

  console.log("Elements :", [...item.querySelectorAll("li")]);
});
