//a class is jest a way to represent an object with multiply items or atributes

class person
{
    constructor(FirstName , SecondName , age)
    {
        this.FirstName = FirstName
        this.SecondName = SecondName
        this.age = age
    }
}
let john = new person("john" , "Doe" , "25")
console.log(john.FirstName)

class Car
{
    constructor(Color , Brand , Wheels)
    {
        this.Color = Color
        this.Brand = Brand
        this.Wheels = Wheels
    }
}
let toyota = new Car("Blue" , "toyota" , "4")
console.log(toyota)