const employees = []

function Employees(name, title, salary, status){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = "full-time"
    this.printEmployeeForm = function(){
        console.log(this.name + ", " + this.title + ", " + this.salary + ", " + this.status)
    }
}

const einstein = new Employees("Albert", "scientist", "$20/hour")

const cousteau = new Employees("Jacques", "scuba diver", ".14/hour")

const dog = new Employees("Dog", "dog", "$1,000,000/second")

einstein.status = "part-time"

einstein.printEmployeeForm()

cousteau.printEmployeeForm()

dog.printEmployeeForm()

employees.push(einstein)
employees.push(cousteau)
employees.push(dog)

console.log(employees)