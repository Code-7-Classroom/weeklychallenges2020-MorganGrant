const me = {
    name:'Grant Morgan',
}
console.log(me)

me.sayHI = name => {console.log(name)}

me.sayHI(me.name)
