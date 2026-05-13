"use strict";
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
}
const url = "https://jsonplaceholder.typicode.com/albums/1";
fetchData(url)
    .then((album) => {
    console.log("Album data:", album);
})
    .catch((error) => {
    console.error("Error:", error);
});
// Question no 2.
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Editor"] = "Editor";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
const PermissionMap = {
    Admin: true,
    Editor: true,
    Guest: false
};
function hasAccess(role) {
    return PermissionMap[role];
}
// Test
console.log("Admin access:", hasAccess(Role.Admin)); // true
console.log("Editor access:", hasAccess(Role.Editor)); // true
console.log("Guest access:", hasAccess(Role.Guest)); // false
function handleTask(status) {
    switch (status) {
        case 'Open':
            return "Task is open";
        case 'InProgress':
            return "Task is in progress";
        case 'Closed':
            return "Task is closed";
        default:
            const _exhaustiveCheck = status;
            return _exhaustiveCheck;
    }
}
// Test
console.log(handleTask('Open'));
console.log(handleTask('InProgress'));
console.log(handleTask('Closed'));
