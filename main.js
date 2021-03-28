canvas= document.getElementById("my_canvas");
ctx= canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car_image_1.png"
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car_image_2.png"
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add() {
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = background_image;

    car1_image_tag = new Image();
    car1_image_tag.onload = uploadCar1;
    car1_image_tag.src = car1_image;

    car2_image_tag = new Image();
    car2_image_tag.onload = uploadCar2;
    car2_image_tag.src = car2_image;
}
function uploadBackground(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_image_tag, car1_x, car1_y, car1_width, car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2_image_tag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38'){
        car1_up();
        console.log("up_arrow_key");
    }
    if (keyPressed == '40'){
        car1_down();
        console.log("down_arrow_key");
    }
    if (keyPressed == '37'){
        car1_left();
        console.log("left_arrow_key");
    }
    if (keyPressed == '39'){
        car1_right();
        console.log("right_arrow_key");
    }




    if (keyPressed == '87'){
        car2_up();
        console.log("key_w");
    }
    if (keyPressed == '83'){
        car2_down();
        console.log("key_s");
    }
    if (keyPressed == '65'){
        car2_left();
        console.log("key_a");
    }
    if (keyPressed == '68'){
        car2_right();
        console.log("key_d");
    }
    if (car1_x > 900) {
        console.log("car1 won!");
        document.getElementById("game_status").innerHTML = "Car 1 Won!!!";
    }
    if (car2_x > 900) {
        console.log("car2 won!");
        document.getElementById("game_status").innerHTML = "Car 2 Won!!!";
    }
}
function car1_up(){
    if(car1_y >=0){
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1_down(){
    if(car1_y <=300){
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1_left(){
    if(car1_x >=0){
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car1_right(){
    if(car1_x <=900){
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_up(){
    if(car2_y >=0){
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_down(){
    if(car2_y <=300){
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_left(){
    if(car2_x >=0){
        car2_x = car2_x - 10;
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}
function car2_right(){
    if(car2_x <=900){
        car2_x = car2_x + 10;
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}