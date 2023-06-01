  function getRating(rating) {
  let res = "";
  let star_count = 0;
  let full_star = parseInt(rating);
  let rest_star = rating - full_star;
  star_count = full_star;
  res = Array(full_star).fill("<img src='image/full.svg'>").join("");
  if (0.25 <= rest_star && rest_star <= 0.5) {
    star_count++;
    res += "<img src='image/half.svg'>";
  }
  if (0.5 < rest_star) {
    star_count++;
    res += "<img src='image/empty.svg'>";
  }
  free_star = 5 - star_count;
  res += Array(free_star).fill("<img src='image/empty.svg'>").join("");
  return res;
}