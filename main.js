let a = ["1","2","3"];

for (i=0;i<3;i++){
    console.log(a[i]);
}
a[3] = "yves";
console.log(a[3]);
a[2] = "cocquibus";
console.log(a[2]);


a.splice(0,1);
for (i=0;i<3;i++){
    console.log(a[i]);
}

