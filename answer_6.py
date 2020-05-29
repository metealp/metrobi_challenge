#imports
import turtle
import random

#window setup
window = turtle.Screen()
window.setup(width=1080, height=920, startx=10, starty=0.5)
window.colormode(255)

#declaring little turtles, objects that will move
Achilles = turtle.Turtle()
Tortoise = turtle.Turtle()

Achilles.shape("arrow")
Tortoise.shape("turtle")
Achilles.speed(0)
Tortoise.speed(1)

#Achilles position
Achilles.penup()
Achilles.setpos(-960, 100)
Achilles.pendown()

#Tortoise position, it has some advantage according to
Tortoise.penup()
Tortoise.setpos(-160,-100)
Tortoise.pendown()

#directions of characters
Achilles.setheading(0)
Tortoise.setheading(0)

next_step_achilles = 0
for i in range(1000//80 +1):
    next_step_achilles += 10*((1/10)**i)

print(next_step_achilles*80)

for i in range(1000//80 +1):
    print("***")
    print(Achilles.pos()[0])
    print(Tortoise.pos()[0])
    print("***")
    Achilles.forward(80)
    if Achilles.pos()[0] + 960 > next_step_achilles*80:
        print("===")
        Achilles.color(255, 0, 0)
    Tortoise.forward(8)
    

turtle.done()
