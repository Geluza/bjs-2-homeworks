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
    if (a + b < c || a + c < b || b + c < a) {
     throw new Error ("Треугольник с такими сторонами не существует");
    }
}
    getPerimeter() {
      return this.a + this.b + this.c;
    }
    
    getArea() {
        const halfP = this.getPerimeter() / 2;
        const s = Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c));
        return Number(s.toFixed(3));
     }
     }
    
     class ErrorTriangle {
         getPerimeter() {
             return ("Ошибка! Треугольник не существует");
         }

         getArea() {
             return this.getPerimeter();
         }
     }
   
    function getTriangle(a, b, c) {
     try {
         return new Triangle(a, b, c);
     } catch (error) {
        return new ErrorTriangle;
     }
    }