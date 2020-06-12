console.log("Symbol");

const symA = Symbol();
const synB = Symbol();
console.log(symA, synB)


const MY_KEY = Symbol();
const MY_kEY2 = Symbol();
let obj = { x: "hola", y: "yeah", [MY_kEY2]: "foo" };

obj[MY_KEY] = 123;
console.log(obj[MY_KEY]); // 123
console.log(obj[MY_kEY2]); // foo
console.dir(obj, { color: true });
/*
El symbolo es un valor primitivo, es único
se puede usar como una llave única en un objeto
*/

let obj2 = {
    [Symbol("description")]: 1,
    [Symbol()]: 4,
    enum: 2,
    nonEnum: 3,
};
console.log(obj2)
Object.defineProperty(obj2,
    'nonEnum', { enumerable: false });
console.log(obj2)
console.log(Object.getOwnPropertyNames(obj)) // ignores symbol-valued property keys:
console.log(Object.getOwnPropertySymbols(obj)) // ignores string-valued property keys:
console.log(Reflect.ownKeys(obj)) // considers all kinds of keys:
console.log(obj2['enum'])
console.log(Object.keys(obj2)) // The name of Object.keys() doesn’t really work, anymore: it only considers enumerable property keys that are strings.


/*As unique keys*/

const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();

/*An object is iterable if it has a method whose key is the symbol (stored in) 
Symbol.iterator. In the following code, obj is iterable*/

let obj3 = {
    data: ['Pater', 'noster', 'qui es in', 'caelis'],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++]
                    };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (let x of obj3) {
    console.log({ x });
}

console.log("more about symbols: https://2ality.com/2014/12/es6-symbols.html")