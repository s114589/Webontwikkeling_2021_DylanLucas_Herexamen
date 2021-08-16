enum Color {
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    Indigo,
    Violet
};

let colors: string[]=[];
for (let i=0; i<7; i++) {
    colors.push(Color[i]);
    console.log(Color[i])
};

console.log("________________________")

while (colors.length>0) {
    console.log(colors.pop());
}