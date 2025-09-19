function setup() {
  createCanvas(800, 800)
  background("skyblue")

  fill("lightgray")
  ellipse(400, 500, 200, 200)

  triangle(320, 420, 360, 400, 340, 360)
  triangle(480, 420, 440, 400, 460, 360)

  fill("black")
  circle(370, 490, 20, 20)
  circle(430, 490, 20, 20)

  fill("pink")
  triangle(390, 510, 410, 510, 400, 520)

  line(400, 520, 400, 540)
  line(400, 540, 380, 550)
  line(400, 540, 420, 550)
  line(340, 510, 380, 520)
  line(340, 530, 380, 530)
  line(340, 540, 380, 550)
  line(460, 510, 420, 520)
  line(460, 530, 420, 530)
  line(460, 540, 420, 550)

}
