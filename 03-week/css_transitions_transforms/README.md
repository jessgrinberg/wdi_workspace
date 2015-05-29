#Cool stuff with CSS
Today we are going to be investigating some cool stuff we can build with *CSS 3D transforms* and *CSS transitions*. 

This opens up a whole new world of things we are capable of doing. 

But remember - CSS is there for us to present our pages to an audience. We must always continue to think about the user! Is the user's engagement or understanding of our page going to increase because of the cool styling we have introduced?


Take a look at this image carousel:<br>
https://desandro.github.io/3dtransforms/examples/carousel-02-dynamic.html
<br>
This is a good example of using 3D transforms and transitions to increase the information a user has about our images. The user intuitively knows that when he gets to the last image, he will be presented with the first one again. He is also able to see exactly where in the sequence he is, and how many times he has to click to the left or right to get back to another image.
<br>

Take a look at this:<br>
http://demos.creative-tim.com/rotating-card
<br>
Again, this is a good use of CSS to engage the user. It looks quite cool, and it represents something you might see in real life (a business card) so you already know how to interact with it. It is also clear that the item has two and only two sides of information to it. There is no extra information anywhere.
<br>

Think about how you already use CSS to hint to a user how he or she should interact with your page. 

##SWBAT
- Explain the difference between a transform and a transition.
- Explain the difference between 2D and 3D transforms
- Explain why we need to use vendor prefixes for some CSS3 properties.
- Use CSS3 transitions.

###Your task:<br>
*Make a box with a width and height of 200px, and give it a 1px solid black border.
*Center this box, and give it some margin top so it is moved down the page slightly.
*In your CSS, add ```transform: rotateX(150deg);``` to the box.
*Use your dev tools in the browser to play around with the 150deg value. What happens? What happens when you change it to rotateY? What happens when it just says 'rotate'
<br>
So what is actually happening is you are able to define the style of an element, and then you can rotate it around its 3 axes - X, Y, and Z.
<br>
If we want to rotate all 3 axes in one go, we would do the following:

```
transform: rotateX(50deg) rotateY(50deg) rotateZ(50deg)
```
<br>
Something that is REALLY cool? Try putting some text inside your box.

You already know quite a bit. We can make some 3d objects just using what we already know. 

Nice!

This looks great, let's send my grandmother a link so she can see how cool I am with the information superhighway!

She uses Safari. Let's see what it looks like when she opens it up.
<br>
Womp womp...
<br>
"CSS vendor prefixes or CSS browser prefixes are a way for browser makers to add support for new CSS features in a sort of testing and experimentation period. Browser prefixes are used to add new features that may not be part of a formal specification and to implement features in a specification that hasn’t been finalized."

```
Android: -webkit-
Chrome: -webkit-
Firefox: -moz-
Internet Explorer: -ms-
iOS: -webkit-
Opera: -o-
Safari: -webkit-
```

```
-moz-border-radius: 10px 5px;
-webkit-border-top-left-radius: 10px;
-webkit-border-top-right-radius: 5px;
-webkit-border-bottom-right-radius: 10px;
-webkit-border-bottom-left-radius: 5px;
border-radius: 10px 5px;
```

But now you only need to write:
```
border-radius: 10px 5px;
```
<br>
Let's try something even cooler... perspective!
We need to add perspective to the parent container.
<br>

### Let's move on to more exciting things... transitions!
Whenever you'd like an element to 'transition' into a new state, you simply write ```transition: <property_that_will_change> <time_over_which_it_will_change>```

e.g. if you wanted to width of a box to increase from 100px to 200px over the course of 5 seconds when you hover on it, you could write this in your CSS:

```css
.box {
	width: 100px;
	transition: width 5s;
}

.box:hover {
	width: 200px;
}

```

The default time-frame for the property to change is 'ease', meaning it starts slow, gets faster, then gets slow towards the end again.

Use this for awesome custom timing functions:<br>
http://matthewlein.com/ceaser/


### Your task
*make your box spin/change color/move when you hover on it

##Let's look at the flipping card again...
http://demos.creative-tim.com/rotating-card
<br>


## Your tasks:
*Open up the flipper.html and flipper.css files.
*Make the flip happen in the opposite directions
*Make the card flip up/down, and in other directions.
*What is backface-visibility and  

## Bonus material:
#ANIMATIONS!





