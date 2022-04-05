function searchNames(logins) {
  console.log(logins);

  const lucky = logins.filter(function (logins) {
    console.log(logins);
  });
  return lucky;
}

var a = [
    ["foo", "foo@foo.com"],
    ["bar_", "bar@bar.com"],
  ],
  b = [["bar_", "bar@bar.com"]];

console.log(searchNames(a).join(":"), b.join(":"), "not correct");
