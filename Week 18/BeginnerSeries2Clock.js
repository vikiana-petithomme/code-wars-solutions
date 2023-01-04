function past(h, m, s) {
  //#Happy Coding! ^_^
  s += m * 60;
  s += h * 60 * 60;
  let ms = s * 1000;

  return ms;
}
