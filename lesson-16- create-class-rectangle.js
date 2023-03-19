class Rectangle {
    width;
    height;
    constructor (width,height){
        this.width = width;
        this.height = height;

    }
    getWidth(){
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(){
        this.width = width;
    }
    setHeight(){
        this.height = height;
    }
    getArea(){
        return this.width*this.height;
    }
    getPerimete(){
        return (this.width+this.height)*2;
        
    }
}
let newRectangle = new Rectangle(150,50);
let width = newRectangle.width;
let height = newRectangle.height;
let area = newRectangle.getArea();
let perimete = newRectangle.getPerimete();
//document.write(newRectangle);
var ctx = document.getElementById('myCanvas').getContext('2d');
ctx.fillStyle = "#fa4b2a";
ctx.fillRect(10,10, width, height);

document.write(`<br>Chu vi hình chữ là: ${area} `);
document.write(`<br>Chu vi hình chữ là: ${perimete} `);

  
