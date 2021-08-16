let items:number[] = [2,8,4,56,14,37,1,5,67,13];

const search = (numbers:number[],numberToFind:number):number =>{
    for (let i:number=0; i<items.length; i++) {
        if (numberToFind=== numbers[i]) {
            return i;
        }
    }
    return -1;
}
console.log(search(items, 37))