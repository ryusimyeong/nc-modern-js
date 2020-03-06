const user = {
    NAME: "nico",
    age: 24,
    password: 12345
};
console.log(user);

const rename = ({NAME:name, ...rest}) => ({name, ...rest});

console.log(rename(user));