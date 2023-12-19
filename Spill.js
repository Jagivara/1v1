
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

function tekst(){
    ctx.font = "15px Arial";
    ctx.fillStyle = "WHITE";
    ctx.fillText("Poeng:" + spillerRød, canvas.width/2 - 80, 20);
}

function tekst2(){
    ctx.font = "15px Arial";
    ctx.fillStyle = "WHITE";
    ctx.fillText("Poeng:" + spillerBlå, canvas.width/2 + 20, 20);
}

function drawCircle(){
    if (CX < 10) {
        CXX = 1;
    };
    if (CX + 15 > canvas.width){
        CXX = -1;
    };
    if (CY < 10) {
        CYY = 1;
    };
    if (CY + 15 > canvas.height){
        CYY = -1;
    }
    CX += CXX;
    CY += CYY;
    ctx.beginPath();
    ctx.arc(CX, CY, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "ORANGE"
    ctx.fill();
}

let x = canvas.width/2 + 20;
let y = canvas.height/2 + 7.5;
let CX = canvas.width/2;
let CY = canvas.height/2 + 15;
let AIX = canvas.width/2 - 35;
let AIY = canvas.height/2 + 7.5;
let vx = 0;
let vy = 0;
let AX = 0;
let AY = 0;
let CXX = 0;
let CYY = 0;

let collision = x - CX;
let collisionRight = x + 15 - CX;
let collisionY = y - CY;
let collisionYDown = y + 15 - CY;

let collisionAI = AIX - CX;
let collisionRightAI = AIX + 15 - CX;
let collisionYAI = AIY - CY;
let collisionYDownAI = AIY + 15 - CY;

let collisionMålY = canvas.height/2 - 10 - CY;
let collisionMålXRød = 5 - CX;
let collisionMålXBlå = 268 - CX;

let spillerBlå = 0;
let spillerRød = 0;

function drawRect(){
    x += vx;
    y += vy;
    ctx.fillStyle = "BLUE"
    ctx.fillRect(x, y, 15, 15)
        if (x < 0) {
            x = 0;
        };
        if (x + 15 > canvas.width){
            x = canvas.width - 15;
        };
        if (y < 0) {
            y = 0
        };
        if (y + 15 > canvas.height){
            y = canvas.height - 15;
        }
    requestAnimationFrame(drawRect);
}
drawRect();

function drawRectAI(){
    AIX += AX;
    AIY += AY;
    ctx.fillStyle = "RED";
    ctx.fillRect(AIX, AIY, 15, 15)
        if (AIX < 0) {
            AIX = 0;
        };
        if (AIX + 15 > canvas.width){
            AIX = canvas.width - 15;
        };
        if (AIY < 0) {
            AIY = 0
        };
        if (AIY + 15 > canvas.height){
            AIY = canvas.height - 15;
        }
    requestAnimationFrame(drawRectAI);
}
drawRectAI()

function drawRect2(){
    ctx.fillStyle = "RED"
    ctx.fillRect(5, canvas.height/2 - 10, 25, 50)
}
drawRect2()

function drawRect3(){
    ctx.fillStyle = "BLUE"
    ctx.fillRect(268, canvas.height/2 - 10, 25, 50)
}

function spilllaging(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRect2()
    drawRect3()
    drawCircle()
    tekst()
    tekst2()
    collision = CX - x;
    collisionRight = x + 15 - CX;
    collisionY = y - CY;
    collisionYDown = y + 15 - CY;

    collisionAI = CX - AIX;
    collisionRightAI = AIX + 15 - CX;
    collisionYAI = AIY - CY;
    collisionYDownAI = AIY + 15 - CY;

    collisionMålY = canvas.height/2 - 10 - CY;
    collisionMålXRød = 5 - CX;
    collisionMålXBlå = 268 - CX;

    if(collisionMålY >= -60 && collisionMålY <= 10){
        if(collisionMålXRød >= -35 && collisionMålXRød <= 0){
            spillerBlå += 1;
            CX = canvas.width/2;
            CY = canvas.height/2 + 15;
            CXX = 0;
            CYY = 0;
        }
        if(collisionMålXBlå >= -20 && collisionMålXBlå <= 10){
            spillerRød += 1;
            CX = canvas.width/2;
            CY = canvas.height/2 + 15;
            CXX = 0;
            CYY = 0;
        }
    }

    if(collision >= -10 && collision <= 10){
        if(collisionY >= -10 && collisionY <= 10){
            if(vx > 1){
                CXX = 2;
            }
            else{
                if(vx < -1){
                    CXX = -2;
                }
                else{
                    CXX = 0;
                }
            }
            if(vy > 1){
                CYY = 2;
            }
            else{
                if(vy < -1){
                    CYY = -2;
                }
                else{
                    CYY = 0;
                }
            }
        }
    }
    if(collisionRight >= -10 && collisionRight <= 10){
        if(collisionY >= -10 && collisionY <= 10){
            if(vx > 1){
                CXX = 2;
            }
            else{
                if(vx < -1){
                    CXX = -2;
                }
                else{
                    CXX = 0;
                }
            }
            if(vy > 1){
                CYY = 2;
            }
            else{
                if(vy < -1){
                    CYY = -2;
                }
                else{
                    CYY = 0;
                }
            }
        }
    }
    if(collision >= -10 && collision <= 10){
        if(collisionYDown >= -10 && collisionYDown <= 10){
            if(vx > 1){
                CXX = 2;
            }
            else{
                if(vx < -1){
                    CXX = -2;
                }
                else{
                    CXX = 0;
                }
            }
            if(vy > 1){
                CYY = 2;
            }
            else{
                if(vy < -1){
                    CYY = -2;
                }
                else{
                    CYY = 0;
                }
            }
        }
    }
    if(collisionRight >= -10 && collisionRight <= 10){
        if(collisionYDown >= -10 && collisionYDown <= 10){
            if(vx > 1){
                CXX = 2;
            }
            else{
                if(vx < -1){
                    CXX = -2;
                }
                else{
                    CXX = 0;
                }
            }
            if(vy > 1){
                CYY = 2;
            }
            else{
                if(vy < -1){
                    CYY = -2;
                }
                else{
                    CYY = 0;
                }
            }
        }
    }


    if(collisionAI >= -10 && collisionAI <= 10){
        if(collisionYAI >= -10 && collisionYAI <= 10){
            if(AX > 1){
                CXX = 2;
            }
            else{
                if(AX < -1){
                    CXX = -2;
                }
                else{
                    CXX = 0;
                }
            }
            if(AY > 1){
                CYY = 2;
            }
            else{
                if(AY < -1){
                    CYY = -2;
                }
                else{
                    CYY = 0;
                }
            }
        }
    }
    if(collisionRightAI >= -10 && collisionRightAI <= 10){
        if(collisionYAI >= -10 && collisionYAI <= 10){
            if(AX > 1){
                CXX = 2;
            }
            else{
                if(AX < -1){
                    CXX = -2;
                }
                else{
                    CXX = 0;
                }
            }
            if(AY > 1){
                CYY = 2;
            }
            else{
                if(AY < -1){
                    CYY = -2;
                }
                else{
                    CYY = 0;
                }
            }
        }
    }
    if(collisionAI >= -10 && collisionAI <= 10){
        if(collisionYDownAI >= -10 && collisionYDownAI <= 10){
            if(AX > 1){
                CXX = 2;
            }
            else{
                if(AX < -1){
                    CXX = -2;
                }
                else{
                    CXX = 0;
                }
            }
            if(AY > 1){
                CYY = 2;
            }
            else{
                if(AY < -1){
                    CYY = -2;
                }
                else{
                    CYY = 0;
                }
            }
        }
    }
    if(collisionRightAI >= -10 && collisionRightAI <= 10){
        if(collisionYDownAI >= -10 && collisionYDownAI <= 10){
            if(AX > 1){
                CXX = 2;
            }
            else{
                if(AX < -1){
                    CXX = -2;
                }
                else{
                    CXX = 0;
                }
            }
            if(AY > 1){
                CYY = 2;
            }
            else{
                if(AY < -1){
                    CYY = -2;
                }
                else{
                    CYY = 0;
                }
            }
        }
    }
}
setInterval(spilllaging)