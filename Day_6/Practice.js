const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95",
];

//Question 2:
function cleanFlightData(flights) {
  const cleanedFlights = flights
    .map((flight) => {
      const [route, rawPrice] = flight.split(":");
      const [from, to] = route.split("-");

      let price = Number(rawPrice);

      if (isNaN(price)) {
        price = 0;
      }

      return {
        from,
        to,
        price,
      };
    })
    .filter((flight) => flight.price >= 100 && flight.price <= 500)
    .sort((a, b) => a.price - b.price);

  return JSON.stringify(cleanedFlights, null, 2);
}

console.log(cleanFlightData(rawFlights));
console.log();

const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" },
];

function isEligible(product) {
  return product && product.category === "Electronics" && product.price > 200;
}

function applyPromo(cart, promoCallback) {
  if (!Array.isArray(cart)) {
    return;
  }

  let discountedItems = 0;
  let totalSavings = 0;

  const updatedCart = cart.map((product) => {
    if (promoCallback(product)) {
      const discount = product.price * 0.1;

      discountedItems++;
      totalSavings += discount;

      return {
        ...product,
        price: product.price - discount,
        isDiscounted: true,
      };
    }

    return {
      ...product,
      isDiscounted: false,
    };
  });

  console.log(
    `Promotion applied! ${discountedItems} items were discounted for a total saving of $${totalSavings}.`,
  );

  console.log();

  setTimeout(() => {
    console.log(updatedCart);
    console.log();
  }, 1000);
}

applyPromo(cart, isEligible);

//Question 3:

const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500",
];

function processMovies(movies) {
  const updatedMovies = movies
    .map((movie) => {
      const [name, genre, rawViews] = movie.split("|");

      let views = Number(rawViews);

      if (isNaN(views)) {
        views = 0;
      }

      return {
        name,
        genre,
        views,
      };
    })
    .filter(
      (movie) =>
        (movie.genre === "Action" || movie.genre === "Sci-Fi") &&
        movie.views > 5000,
    )
    .sort((a, b) => b.views - a.views);

  return JSON.stringify(updatedMovies, null, 2);
}

console.log(processMovies(rawMovies));
console.log();

// Question 4:

const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 },
];

function taxLogic(salary) {
  return salary > 5000 ? 0.2 : 0.1;
}

function calculatePayroll(employees, taxCallback) {
  if (!Array.isArray(employees)) {
    return;
  }

  let totalNetPayout = 0;

  const processedEmployees = employees.map((employee) => {
    const taxRate = taxCallback(employee.salary);
    const taxAmount = employee.salary * taxRate;
    const netSalary = employee.salary - taxAmount;

    totalNetPayout += netSalary;

    return {
      ...employee,
      netSalary,
      status: netSalary > 4000 ? "Premium" : "Standard",
    };
  });

  console.log(
    `Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employees.length} employees.`,
  );

  console.log();

  setTimeout(() => {
    console.log(processedEmployees);
    console.log();
  }, 2000);
}

calculatePayroll(employees, taxLogic);
