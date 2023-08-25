# tic-tac-toe

After doing a tuturial on youtube: https://www.youtube.com/watch?v=qZXt1Aom3Cs to learn the basics of vue js, this project is to learn how to build a simple app without the help of another person instructing my every move. Though I know it is going to be hard, it will teach me valuable lessons on how to start thinking on front end development.

I am going to put the following constraints on this development.
- I need to start from scratch and directly with TDD.
- I can search for examples on how to do a specific thing, but I do not want to use other peoples code to solve big parts of the game.
- I will try to build a CI/CD pipeline around the development
- The end product should run in a docker container
- This is a learning project, so I can make mistakes.

Even though I have never used a test suite with Javascript, it is necessary to learn to design things well and to learn to grasp the thinking of this style of developing.

## update 1

Ok so its time to start. To understand the vitest unit testing I have already created a small Header  test and module. It is a very simple one. For now I just need it to be able to take in a title and a color in case I want to make the title change color. It has very little to do with the game, but at least I now know how to start with TDD.

Next I need think about the whole solution. I guess the first thing would be to create is a game board that has 9 tiles. Come to think of it, I also need to make a module that represents a tile. 