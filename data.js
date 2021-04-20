let kitties = [
    {name: "Yolo",
    age: "kitten",
    breed:"domestic short hair",
    vaccination:"yes",
    location:"Lynnwood, WA",
    },
    {name: "Cubby",
    age: "kitten",
    breed:"American shorthair",
    vaccination:"yes",
    location:"Seattle, WA",
    },
    {name: "Saddie",
    age: "young",
    breed:"domestic short hair",
    vaccination:"yes",
    location:"Seattle, WA",
    },
    {name: "Marie",
    age: "kitten",
    breed:"domestic long hair",
    vaccination:"yes",
    location:"Redmond, WA",
    },
    {name: "Toots",
    age: "young",
    breed:"domestic short hair",
    vaccination:"yes",
    location:"Seattle, WA",
    },

];

export const getKitties = () => {
    return kitties;
};

export const getKitty = (name) => {
    return kitties.find((kitty) => {
        return kitty.name === name;
    });
};
