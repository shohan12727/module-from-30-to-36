function a() {
    b()
    console.log("a")
}
function b() {
    c()
    console.log("b")
}
function c() {
    d()
    console.log("c")
}
setTimeout(()=>{
    console.log("ami set timeout");
    
},1000)
setTimeout(()=>{
    console.log("ami set timeout 2 ");
    
},1000)
function d() {
    e()
    console.log("d")
}
function e() {
    console.log("e")
}

a();