for(let i = 0; i < 10; i++){
    setTimeout(() => {
        console.log(i)
    }, 10);
}
a = function (i) {
    console.log(i)
}
for(let i = 0; i < 10; i++){
    setTimeout(a(i), 100*i);
}