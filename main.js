var canvas=new fabric.Canvas('my_canvas');

player_x=10;
player_y=10;

block_img_width=150;
block_img_height=150;

player_object="";
block_img_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:player_y,
    left:player_x
});
canvas.add(player_object);
    });
}

function new_img(get_img){
fabric.Image.fromURL(get_img,function(Img){
 block_img_object=Img;
 block_img_object.scaleToWidth(block_img_width);
 block_img_object.scaleToHeight(block_img_height);
 block_img_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_img_object);
});
}
window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);

    if(e.shiftKey==true && key_pressed=='80'){
        console.log("Shift+P is pressed");
        block_img_height=block_img_height+10;
        block_img_width=block_img_width+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey==true && key_pressed=='77'){
        console.log("Shift+M is pressed");
        block_img_height=block_img_height-10;
        block_img_width=block_img_width-10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }    
   
   if(key_pressed=='70'){
   new_img('ironman_face.png');
   console.log("F key is pressed")
   }
   if(key_pressed=='66'){
   new_img('spiderman_boby.png');
   console.log("B key is pressed")
   }
   if(key_pressed=='76'){
   new_img('hulk_legs.png');
   console.log("L key is pressed");
   }
   if(key_pressed=='82'){
   new_img('thor_right_hand.png');
   console.log("R key is pressed");
   }
   if(key_pressed=='72'){
   new_img('captain_america_left_hand.png');
   console.log("H key is pressed");
   }
   if(key_pressed =='37'){
    left();
    console.log("Left key is pressed");
   }
   if(key_pressed =='38'){
    up();
    console.log("up key is pressed");
   }
   if(key_pressed =='39'){
    right();
    console.log("right key is pressed");
   }
   if(key_pressed =='40'){
    down();
    console.log("down key is pressed")
   }
}   