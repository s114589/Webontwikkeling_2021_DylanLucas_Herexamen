let veelvouden: number[] = [];

for (let i = 0; i <= 70 ; i++) {
    veelvouden.push(i);
}

for (let i = 0; i < veelvouden.length; i++) {
    if (veelvouden[i]%3==0&&veelvouden[i]%5==0) {
        
    }
    else if(veelvouden[i]%3==0){
        console.log(veelvouden[i])
    }
    else if(veelvouden[i]%5==0){
        console.log(veelvouden[i])
    }
}
