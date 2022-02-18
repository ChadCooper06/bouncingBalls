### Purpose

* Create a page that generates balls that are a random color and a random size (within a range).
* Make the randomly generated balls bounce around the page.
* Make the balls change colors every time they come in contact with another ball.

# PSEUDOCODE

Turn the webpage into a 2 dimensional screen for the balls to bounce around on.
  * make the width and height equal to the window it's displayed in.

Generate a random number in a range.
  * make a function that uses Math to find a random number

Generate balls of random colors.
  * using rgb language, randomly choose a color value for each ball created
  
1. Create the balls.
   * make a class called ball
   * make a constructor object that uses the x axis, y axis, velocity, color and size to generate the required properties of each ball
   * draw the balls using radius to make the balls circular
   * fill the balls in with the color they are so they appear solid

2. Set up those balls to move using velocity across the x and y axes.
   * update their positions beyond just a random spot on the page
   * make them change direction each time they hit the edge of the window

3. Ensure they bounce off the "walls" of the page.
   * animate the balls to make them actually move and make them appear on the wall
   * make the background semi-transparent so the balls leave a faint trail as to where they came from.

4. When the balls collide with other balls they should change color.
   * create an object that determines when two balls collide and makes each change colors as a result
   * make this part of the loop

Loop the entire process so it runs on the screen
  * call the loop created earlier to build, move and color the balls
