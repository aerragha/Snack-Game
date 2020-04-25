const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext("2d")

const scale = 10;

const rows = canvas.height / scale;
const cols = canvas.width / scale;


var snack;

(function setup() {
    snack = new Snack()
    fruit = new Fruit()

    fruit.pickLocation()



    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        fruit.draw()
        snack.update()
        snack.draw()

        if (snack.eat(fruit)) {
            fruit.pickLocation()

        }

    }, 250)
}())

window.addEventListener('keydown', (evt) => {
    const direction = evt.key.replace('Arrow', '')
    snack.chnageDirection(direction)
})