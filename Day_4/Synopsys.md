🌐 HTML Important Topics
🔹 HTML (HyperText Markup Language)

The standard language used to create the structure of web pages.

🔹 Tag

The basic building block of HTML used to define elements (e.g., <p>, <div>).

🔹 Element

A complete HTML unit consisting of an opening tag, content, and a closing tag.

🔹 Attribute

Provides additional information about elements (e.g., class, id, href).

🔹 Heading Tags (<h1> – <h6>)

Used to define headings with different levels of importance.

🔹 Paragraph (<p>)

Defines a block of text.

🔹 Anchor Tag (<a>)

Creates hyperlinks to navigate between pages or resources.

🔹 Image Tag (<img>)

Displays images on a webpage.

🔹 Lists (<ul>, <ol>, <li>)

Used to create unordered and ordered lists.

🔹 Table (<table>)

Displays data in rows and columns.

🔹 Form (<form>)

Used to collect user input.

🔹 Input (<input>)

Creates input fields inside forms.

🔹 Div (<div>)

A block-level container used for layout and grouping elements.

🔹 Span (<span>)

An inline container used for styling or grouping text.

🔹 Semantic Tags

Tags like <header>, <footer>, <section> that describe the meaning of content.

⚡ JavaScript Important Topics
🔹 JavaScript

A programming language used to make web pages interactive.

🔹 Variables

Used to store data using var, let, or const.

🔹 Data Types

Includes types like number, string, boolean, object, etc.

🔹 Function

A reusable block of code designed to perform a specific task.

🔹 Operators

Symbols used to perform operations (e.g., +, -, ==).

🔹 Conditional Statements

Used for decision-making (if, else, switch).

🔹 Loops

Used to repeat code (for, while).

🔹 Array

A collection of multiple values stored in a single variable.

🔹 Object

A collection of key-value pairs representing real-world data.

🔹 DOM (Document Object Model)

Allows JavaScript to access and manipulate HTML elements.

🔹 Events

User actions like click, hover, or keypress.

🔹 Event Listener

Handles events using methods like addEventListener().

🔹 String

A sequence of characters used to represent text.

🔹 Boolean

A data type with two values: true or false.

🔹 Scope

Defines where variables can be accessed.

🔹 Callback Function

A function passed as an argument to another function.

🔹 Arrow Function

A shorter syntax for writing functions using =>.

🔹 JSON (JavaScript Object Notation)

A format for storing and exchanging data.

🔁 Array Methods
map() → Transforms each element into a new array
filter() → Returns elements that satisfy a condition
reduce() → Reduces array to a single value
forEach() → Executes a function on each element
find() → Returns first matching element
some() → Checks if at least one element matches
every() → Checks if all elements match

// 10 API PRACTICE SUMMARY
// =======================

// 1. TODOS
// data → filter id → map title

// 2. POSTS
// data → filter userId → map title

// 3. COMMENTS
// data → filter id → map email

// 4. USERS
// data → filter id → map name

// 5. ALBUMS
// data → filter id → map title

// 6. PHOTOS
// data → filter id → map url

// 7. CAT FACTS
// obj.data → filter length → map fact

// 8. DOG FACTS
// obj.data → map attributes.body

// 9. RANDOM USER
// obj.results → filter gender → map name.first

// 10. POKEMON
// obj.results → filter name → map name

// =======================
// SPECIAL LOGIC
// =======================

Object.entries(data.rates)
.filter(([k, v]) => v > 90)

// =======================
// ERROR HANDLING
// =======================

.catch(err => console.error(err))

// =======================
// MEMORY SHORTCUT
// =======================

/\*
fetch → json → filter → map → output

array → filter/map
object → Object.entries()

data / data.data / data.results

then → success
catch → error

Sync → Promise → setTimeout
\*/
