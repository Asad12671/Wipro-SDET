async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
}

interface Album {
    userId: number;
    id: number;
    title: string;
}

const url = "https://jsonplaceholder.typicode.com/albums/1";

fetchData<Album>(url)
    .then((album) => {
        console.log("Album data:", album);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

    // Question no 2.

    enum Role {
    Admin = "Admin",
    Editor = "Editor",
    Guest = "Guest"
}

const PermissionMap: Record<Role, boolean> = {
    Admin: true,
    Editor: true,
    Guest: false
};

function hasAccess(role: Role): boolean {
    return PermissionMap[role];
}

// Test
console.log("Admin access:", hasAccess(Role.Admin));   // true
console.log("Editor access:", hasAccess(Role.Editor)); // true
console.log("Guest access:", hasAccess(Role.Guest));   // false



// Question no 3.

type TaskStatus = 'Open' | 'InProgress' | 'Closed';

function handleTask(status: TaskStatus): string {
    switch (status) {
        case 'Open':
            return "Task is open";
        case 'InProgress':
            return "Task is in progress";
        case 'Closed':
            return "Task is closed";
        default:
            const _exhaustiveCheck: never = status;
            return _exhaustiveCheck;
    }
}

// Test
console.log(handleTask('Open'));
console.log(handleTask('InProgress'));
console.log(handleTask('Closed'));


// Question no 4.


type FolderNode = {
    name: string;
    files?: string[];
    subFolders?: FolderNode[];
};
const fileSystem: FolderNode = {
    name: "root",
    files: ["index.ts", "README.md"],
    subFolders: [
        {
            name: "src",
            files: ["app.ts", "utils.ts"],
            subFolders: [
                {
                    name: "components",
                    files: ["header.ts", "footer.ts"]
                }
            ]
        },
        {
            name: "assets",
            files: ["logo.png"]
        }
    ]
};

console.log(JSON.stringify(fileSystem, null, 2));

// Question no 5.

type MarginValue = `${number}px` | `${number}rem` | `${number}vh`;

let margin1: MarginValue = "10px";   
let margin2: MarginValue = "2rem";   
let margin3: MarginValue = "50vh";  
 

function setMargin(value: MarginValue) {
    console.log("Margin set to:", value);
}

setMargin("20px");   
setMargin("5rem");   
setMargin("100vh");  

// Question no 6.

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// Case 1: Promise type
type A = UnwrapPromise<Promise<string>>;  
// string

// Case 2: Non-promise type
type B = UnwrapPromise<number>;  
//  number

// Case 3: Nested Promise
type C = UnwrapPromise<Promise<Promise<boolean>>>;  


// Question no 7.

type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';

type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>;
// 👉 'click' | 'dbclick'

type NonFormEvents = Exclude<AllEvents, 'submit' | 'reset'>;
// 👉 'click' | 'dbclick' | 'keypress'

let mouseEvent: MouseEvents = 'click';     // ✅
let otherEvent: NonFormEvents = 'keypress'; // ✅

// let error1: MouseEvents = 'submit'; ❌
// let error2: NonFormEvents = 'reset'; ❌

// Question no 8.

function safeExecute<T, Args extends any[]>(
    asyncFn: (...args: Args) => Promise<T>
) {
    return async (...args: Args): Promise<T | null> => {
        try {
            return await asyncFn(...args);
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };
}


// Question no 9.

interface UserMetadata {
    createdAt: Date;
    [key: string]: string | number | boolean | Date;
}

const userMeta: UserMetadata = {
    createdAt: new Date(),
    username: "asad",
    age: 22,
    isActive: true,
    role: "admin"
};

// Question no 10.

interface Car {
    make: string;
    model: string;
}

type ApiResponse<T> = {
    [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K];
};

type CarApiResponse = ApiResponse<Car>;

/*
Result:
type CarApiResponse = {
    DATA_MAKE: string;
    DATA_MODEL: string;
}
*/

const carData: CarApiResponse = {
    DATA_MAKE: "Toyota",
    DATA_MODEL: "Camry"
};