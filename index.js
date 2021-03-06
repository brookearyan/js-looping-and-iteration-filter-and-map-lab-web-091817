

function driversWithRevenueOver (drivers, num) {
  return drivers.filter(function (driver) {
    return driver.revenue > num;
  });
}

function driverNamesWithRevenueOver(drivers, num) {
  return driversWithRevenueOver (drivers, num)
    .map(function (driver) {
      return driver.name;
  });
}

function exactMatch(drivers, match) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in match) {
      matches = driver[key] === match[key];
      }

  return matches;
  });
}

function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match)
    .map(function (driver) {
      return driver.name;
  });
}
