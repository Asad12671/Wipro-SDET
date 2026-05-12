interface AppUser {
    id: number;
    name: string;
    email: string;
    age: number;

    address: {
        city: string;
        state: string;
        country: string;
        zip: string;
    };

    skills: {
        java: {
            spring: string;
        };
    };
}

// Initial User Object
const u1: AppUser = {
    id: 1,
    name: "Aryan",
    email: "aryan@gmail.com",
    age: 22,

    address: {
        city: "Patna",
        state: "Bihar",
        country: "India",
        zip: "800001"
    },

    skills: {
        java: {
            spring: "low"
        }
    }
};

// DeepPartial Generic Type
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object
        ? DeepPartial<T[P]>
        : T[P];
};

// Deep Update Function
function deepUpdate<T>(
    target: T,
    source: DeepPartial<T>
): T {

    const output: any = { ...target };

    for (const key in source) {

        const sourceValue = source[key as keyof T];
        const targetValue = output[key];

        // Check if value is an object
        if (
            typeof sourceValue === "object" &&
            sourceValue !== null &&
            !Array.isArray(sourceValue)
        ) {

            output[key] = deepUpdate(
                targetValue,
                sourceValue as any
            );

        } else {

            output[key] = sourceValue;
        }
    }

    return output;
}

// Simple Update Function
function updateUser(
    existingUser: AppUser,
    updates: Partial<Omit<AppUser, "id">>
): AppUser {

    return {
        ...existingUser,
        ...updates
    };
}

// Partial Update Example
const updatedUser = updateUser(u1, {
    email: "xyz@gmail.com",
    age: 23
});

console.log("Updated User:");
console.log(updatedUser);

// Deep Update Example
const deepUpdatedUser = deepUpdate(u1, {

    address: {
        country: "India",
        zip: "005"
    },

    skills: {
        java: {
            spring: "high"
        }
    }

});

console.log("Deep Updated User:");
console.log(deepUpdatedUser);