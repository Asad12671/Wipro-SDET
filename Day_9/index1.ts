let userName: string = "Asad";

let result: number | string;

result = 45;
result = "success";

console.log(userName, result);

function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}

console.log(add(5, 10));

let anotherName: string = "Aaryan";

let anotherResult: number | string;

anotherResult = 45;
anotherResult = "success";

console.log(anotherName, anotherResult);

interface Person {
    id: number;
    name: string;
    age: number;
    role: Role;
    isAdmin?: boolean;
}

interface Person {
    email: string;
}

enum Role {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN"
}

const user: Person = {
    id: 1,
    name: "Aaryan",
    age: 25,
    role: Role.User,
    email: "aaryan@gmail.com"
};

const admin: Person = {
    id: 2,
    name: "Arush",
    age: 30,
    email: "arush@gmail.com",
    role: Role.Admin,
    isAdmin: true
};

console.log(user, admin);

let coordinates: [number, string] = [40.7128, "-74.0060"];

console.log("Coordinates:", coordinates);

let arr: number[] = [1, 2, 3];

console.log("Array:", arr);

class DataStorage<T> {
    private items: T[] = [];

    addItems(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index]!;
    }
}

const names = new DataStorage<string>();

names.addItems("Aaryan");
names.addItems("Arush");
names.addItems("Rohan");

console.log(
    names.getItem(0),
    names.getItem(1),
    names.getItem(2)
);