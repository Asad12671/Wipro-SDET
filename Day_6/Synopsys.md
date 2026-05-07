# Day 6 – JavaScript Problem Solving Synopsis

## Overview

This document contains the synopsis of four JavaScript-based problem-solving tasks focused on data processing, array methods, callbacks, asynchronous programming, filtering, sorting, and object manipulation.

---

# Question 1: Flight Booking Data Cleaner

## Objective

To clean and standardize raw flight booking data received from a travel agency database.

## Concepts Used

- Arrays
- String manipulation
- split() method
- map()
- filter()
- sort()
- JSON.stringify()
- Number conversion
- Validation using isNaN()

## Workflow

1. Read raw flight strings in the format:

   ```javascript
   CITY_A-CITY_B:PRICE
   ```

2. Split the string into:
   - Departure city
   - Destination city
   - Price

3. Convert price into a Number.

4. If the price is invalid or missing:
   - Set price to `0`

5. Filter flights where:
   - Price is between `$100` and `$500`

6. Sort flights in ascending order by price.

7. Return the final result as a JSON string.

## Key Learning

This problem demonstrates how raw string data can be transformed into structured JSON objects while applying validation, filtering, and sorting operations.

---

# Question 2: E-Commerce Discount Applicator

## Objective

To implement a promo-code system for an e-commerce shopping cart using callback functions.

## Concepts Used

- Callback functions
- Higher-order functions
- Array mapping
- Conditional logic
- Object spreading
- Template literals
- setTimeout()

## Workflow

1. Create a callback function named `isEligible()`.

2. The callback checks whether:
   - Product category is `Electronics`
   - Product price is greater than `$200`

3. Use the callback inside `applyPromo()`.

4. Eligible products receive:
   - `10%` discount

5. Add a new property:

   ```javascript
   isDiscounted;
   ```

   - `true` for discounted items
   - `false` for non-discounted items

6. Calculate:
   - Number of discounted items
   - Total savings amount

7. Display summary using Template Literals.

8. Use `setTimeout()` to delay the final output by `1000ms`.

## Key Learning

This problem explains how callback functions help create reusable business logic while also demonstrating asynchronous behavior using `setTimeout()`.

---

# Question 3: Movie Stream Analytics

## Objective

To analyze streaming platform movie data and identify top-performing content.

## Concepts Used

- String parsing
- Object creation
- Number conversion
- Data validation
- Filtering
- Sorting in descending order
- JSON formatting

## Workflow

1. Parse movie strings in the format:

   ```javascript
   MOVIE_NAME | GENRE | VIEW_COUNT;
   ```

2. Convert the data into objects containing:
   - name
   - genre
   - views

3. Convert views into Number format.

4. If views are invalid:
   - Set views to `0`

5. Filter movies where:
   - Genre is `Action` or `Sci‑Fi`
   - Views are greater than `5000`

6. Sort movies by views in descending order.

7. Return final data as a JSON string.

## Key Learning

This task demonstrates how entertainment or analytics platforms process large datasets and generate meaningful filtered reports.

---

# Question 4: Automated Payroll Processor

## Objective

To develop a payroll system that calculates employee tax deductions and net salaries using callback functions.

## Concepts Used

- Callback functions
- Conditional tax calculation
- Array processing
- Object manipulation
- Template literals
- Asynchronous programming with setTimeout()

## Workflow

1. Create a callback function named `taxLogic()`.

2. Tax rules:
   - Salary greater than `$5000` → `20%` tax
   - Otherwise → `10%` tax

3. Inside `calculatePayroll()`:
   - Calculate tax amount
   - Calculate net salary

4. Add employee status:
   - `Premium` if net salary > `$4000`
   - Otherwise `Standard`

5. Calculate total net payout.

6. Display payroll summary using Template Literals.

7. Delay final processed employee output using:

   ```javascript
   setTimeout();
   ```

   for `2000ms`.

## Key Learning

This problem demonstrates practical payroll processing logic using callback functions and asynchronous operations.

---

# Overall Learning Outcomes

Through these four problems, the following JavaScript concepts were practiced:

- Data Parsing
- Object Creation
- Array Methods
- Filtering and Sorting
- Number Validation
- Callback Functions
- Template Literals
- JSON Conversion
- Asynchronous Programming
- setTimeout()
- Clean Code Practices
- Real-world Business Logic Implementation

These exercises simulate real-world applications such as:

- Flight Booking Systems
- E-commerce Platforms
- Streaming Analytics
- Payroll Management Systems

They help improve problem-solving skills and strengthen understanding of core JavaScript programming concepts.
