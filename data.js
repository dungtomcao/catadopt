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

export const addKitty = (newKitty) => {
    const oldLength = kitties.length;
    let found = kitties.find(kitty => {
        return kitty.name === newKitty.name;
    })

    if (!found) {
        kitties.push(newKitty);
    } 

    return {added: oldLength !== kitties.length, total: kitties.length};
};

/*export const deleteKitty = (name) => {
    const oldLength = kitties.length;

    kitties = kitties.filter((kitty) => {
        return kitty.name !== name;
    });
    return {deleted: oldLength !== kitties.length, total: kitties.length};
};*/

export const deleteKitty = (existingKitty) => {
    const oldLength = kitties.length;
    let found = kitties.find(kitty => {
        return kitty.name === existingKitty.name;
    })

    if (found) {
        kitties = kitties.filter(kitty => kitty.name !== existingKitty.name)
    } 

    return {deleted: oldLength !== kitties.length, total: kitties.length};
};