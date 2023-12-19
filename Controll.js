

addEventListener("keydown", function(e){
    if (e.code == 'KeyD') AX = 2;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'KeyD') AX = 0;
    
})

addEventListener("keydown", function(e){
    if (e.code == 'KeyA') AX = -2;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'KeyA') AX = 0;
    
})

addEventListener("keydown", function(e){
    if (e.code == 'KeyW') AY = -2;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'KeyW') AY = 0;
    
})

addEventListener("keydown", function(e){
    if (e.code == 'KeyS') AY = 2;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'KeyS') AY = 0;
    
})




addEventListener("keydown", function(e){
    if (e.code == 'ArrowRight') vx = 2;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'ArrowRight') vx = 0;
    
})

addEventListener("keydown", function(e){
    if (e.code == 'ArrowLeft') vx = -2;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'ArrowLeft') vx = 0;
    
})

addEventListener("keydown", function(e){
    if (e.code == 'ArrowUp') vy = -2;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'ArrowUp') vy = 0;
    
})

addEventListener("keydown", function(e){
    if (e.code == 'ArrowDown') vy = 2;
    
})

addEventListener("keyup", function(e){
    if (e.code == 'ArrowDown') vy = 0;
    
})