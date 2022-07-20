// preparing the canvas
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const gravity = 0.2
canvas.height = 600
canvas.width = 1024
var height = canvas.height
var width = canvas.width
c.fillRect(0, 0, height, width) 


// all classes go here
class Sprite{
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.height = 150
    }

    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    update(){
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y >= height){
            this.velocity.y = 0
        } else{
            this.velocity.y += gravity
        }
    }
}


// creating instances of the classes
const Player = new Sprite({position:{x:40, y:50}, velocity:{x:0, y:0}})
const Enemy = new Sprite({position:{x:200, y:50}, velocity:{x:0, y:0}})

Player.draw()
Enemy.draw()






//all functions go here 
function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, height, width)
    Player.update()
    Enemy.update()
}

//call functions here
animate()



//adding eventlisteners
window.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'd':
            Player.velocity.x = 1
            break
        case 'e':
            Player.velocity.x = 0
            break
        case 'r':
            Player.velocity.x = -1
            break
        case 'f':
            Player.velocity.y = -10
    }
    console.log(event.key)
})
