let Brands: string[] = ["Ford", "Chevrolet", "Fiat"];

let Brands2: Array<string> = ["Ford", "Chevrolet", "Fiat"];


const prom2: Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2022);
  }, 2000);
})

const prom = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Hello World!");
  }, 2000);
})

prom.then((data) => {
  console.log(data);
})

prom2.then((data) => {
  console.log(data);
})



function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  return { ...a, ...b };
}

const NameAge = mergeObjects({ name: "John" }, { age: 30 });
const NameAge2 = mergeObjects({ model: "Ford" }, { year: 2020 });
console.log(NameAge);
console.log(NameAge2);



// interface Leng  {
//    length: number
// }

function withCount2(value: string): { value: string, count: string } {
  return {
    value,
    count: `This is a count ${value.length} characters`
  }

}
console.log(withCount2("Hello Typescript!"));


function withCount<T extends string>(value: T): { value: T, count: string } {
  return {
    value,
    count: `This is a count ${value.length} characters`
  }
}

console.log(withCount("Hello Typescript"));

// -----------------------------------------------------


const getObjectKey = <T extends object, R extends keyof T>(obj: T, key: R) => {
  return obj[key]
}

const Person = {
  name: "John",
  age: 30,
  job: "Developer"
}

console.log(getObjectKey(Person, 'name'))
console.log(getObjectKey(Person, 'age'))
console.log(getObjectKey(Person, 'job'))


// =====================================================

class Collection<T extends number | string | boolean> {
  // private _items: T[] = [];
  constructor(private _items: T[] = []) { }

  addItem(item: T) {
    this._items.push(item)
  }

  removeItem(item: T) {
    this._items = this._items.filter(i => i !== item)
  }

  getItems(): T[] {
    return this._items
  }

}

// const strings = new Collection(['I', 'am', 'string!']);
// strings.addItem("am");
// strings.removeItem('am');
// console.log(strings.getItems());


// =====================================================

interface Car {
  model: string,
  year: number,
}


const CreateCar = (model: string, year: number): Car => {
  const car: Partial<Car> = {}

  if (model.length > 3) {
    car.model = model;
  }

  if (year > 2000) {
    car.year = year;
  }

  return car as Car
}


const carc: Readonly<Car> = {
  model: "Ford",
  year: 2020
}
// carc.model = "Fiesta";
