//задача 1
function parseCount(valueParse) {
let resultParse = Number.parseInt(valueParse);
   if(isNaN(resultParse)) {
       throw new Error("Невалидное значение")
   } 
       return resultParse;
}


function validateCount(valueParse) {
    try {
    return parseCount(valueParse);
    } catch (error) {
       return error;
    }
}


//задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
     throw new Error ("Треугольник с такими сторонами не существует");
    }
}
    getPerimeter () {
      this.p = this.a + this.b + this.c;
      return this.p;
    }
    
    getArea () {
        const halfP = this.p / 2;
        const s = Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));
        return Number(s.toFixed(3));
     }
     }
    
     class ErrorTriangle {
         getPerimeter() {
             return ("Ошибка! Треугольник не существует");
         }

         getArea() {
             return ("Ошибка! Треугольник не существует");
         }
     }
   
    function getTriangle(a, b, c) {
     try {
         return new Triangle(a, b, c);
     } catch (error) {
        return new ErrorTriangle;
     }
    }