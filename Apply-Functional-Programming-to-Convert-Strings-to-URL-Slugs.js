var globalTitle = "Winter Is Coming GoT";

// Only change code below this line
function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {
      return obj !== "";
    })
    .join("-")
    .toLowerCase();
}
