function isToday(date) {
    let today = new Date()
    console.log(today);
    console.log(date);
    // today = Date.now()
    if (date === today) {
        return true
    }
    else{
        return false
    }
  }

  const today = new Date();
  let actualToday = isToday(today);
  console.log(actualToday, true)

  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  console.log(isToday(tomorrow), false);

  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  console.log(isToday(yesterday), false);