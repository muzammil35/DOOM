const TILE_SIZE = 32;
const MAP_NUM_ROWS = 11;
const MAP_NUM_COLS = 15;

const WINDOW_WIDTH = MAP_NUM_COLS * TILE_SIZE
const WINDOW_HEIGHT = MAP_NUM_ROWS * TILE_SIZE

class Map {
    constructor() {
        this.grid = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];

    }
    render() {
        for (var i = 0; i < MAP_NUM_ROWS; i++){
            for (var j = 0; j< MAP_NUM_COLS; j++){
                var tileX = j* TILE_SIZE;
                var tileY = i*TILE_SIZE;
                var tileColor = this.grid[i][j] == 1 ? "#222" : "#fff";
                fill(tileColor);
                stroke("#000");
                rect(tileX, tileY, TILE_SIZE, TILE_SIZE);
            }
        }
    }
}
class Player {
    constructor() {
        this.x = WINDOW_WIDTH / 2;
        this.y = WINDOW_HEIGHT / 2;
        this.radius = 2;
        this.turnDirection = 0;
        this.walkDirection = 0;
        this.rotationAngle = Math.PI / 2;
        this.moveSpeed = 2.0;
        this.rotationSpeed = 2 * (Math.PI / 180);
    }

    update() {
        this.rotationAngle += this.turnDirection * this.rotationSpeed;

        console.log(this.rotationAngle);

        if (this.rotationAngle > 2 * Math.PI) {
            this.rotationAngle = this.rotationAngle % (2 * Math.PI);
        } else if (this.rotationAngle < 0) {
            this.rotationAngle = (2 * Math.PI) - this.rotationAngle;

        }

        this.rotationAngle < Math.PI / 2 || this.rotationAngle > 3*Math.PI/2 ? this.x += this.walkDirection * abs(Math.cos(this.rotationAngle)) : this.x -= this.walkDirection * abs(Math.cos(this.rotationAngle)) 
        this.rotationAngle < Math.PI / 2  || this.rotationAngle < Math.PI ? this.y += this.walkDirection * abs(Math.sin(this.rotationAngle))  : this.y -= this.walkDirection * abs(Math.sin(this.rotationAngle))

        console.log(this.y);
    }

    render() {
        noStroke();
        fill("red");
        circle(this.x, this.y, this.radius);
        stroke("red");
        line(this.x, this.y, this.x + Math.cos(this.rotationAngle) * 20, this.y + Math.sin(this.rotationAngle ) * 20);
    }
}
var grid = new Map();
var player = new Player();

function keyPressed() {

    if (keyCode == UP_ARROW) {
        player.walkDirection = +1;
    } else if (keyCode == DOWN_ARROW) {
        player.walkDirection = -1;
    } else if (keyCode == RIGHT_ARROW) {
        player.turnDirection = 1;
    } else if (keyCode == LEFT_ARROW) {
        player.turnDirection = -1;
    }

}

function keyReleased() {

    if (keyCode == UP_ARROW) {
        player.walkDirection = 0;
    } else if (keyCode == DOWN_ARROW) {
        player.walkDirection = 0;
    } else if (keyCode == RIGHT_ARROW) {
        player.turnDirection = 0;
    } else if (keyCode == LEFT_ARROW) {
        player.turnDirection = 0;
    }

}

function setup() {
    // TODO: initialize all objects
    createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT)
}

function update() {
    player.update();
    // update all game objects before rendering next frame
}

function draw() {
    update();
    grid.render();
    player.render();
    
    
    // render all objects frame by frame
}