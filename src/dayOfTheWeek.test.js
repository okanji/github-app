const dayOfTheWeek = (date = new Date()) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date.getDay()];
};

try {
  document.getElementById("day").innerText = dayOfTheWeek();
} catch (err) {
  console.error(err);
}

test("getDay returns the long-format day of the week", () => {
  const day = dayOfTheWeek(new Date("3/11/2020"));
  expect(day).toBe("Wednesday");
});
