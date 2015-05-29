#[Ruby on Rails + Bootstrap](https://github.com/twbs/bootstrap-sass)


#Lesson objectives:

1. Understand Bootstrap, what it does, and [how to set it up in Rails](bootstrap_cheat.md)
2. Understand the grid system
3. Create a responsive website

Why use Bootstrap?

Preprocessors:
	
	Bootstrap ships with vanilla CSS, but its source code utilizes the two most popular CSS preprocessors, Less and Sass. Quickly get started with precompiled CSS or build on the source.
	
One framework, every device.

	Bootstrap easily and efficiently scales your websites and applications with a single code base, from phones to tablets to desktops with CSS media queries.
	
Full of features

	With Bootstrap, you get extensive and beautiful documentation for common HTML elements, dozens of custom HTML and CSS components, and awesome jQuery plugins.
	
##Grid system

	Bootstrap grids a page by 12 components
	
	col-xs-(number) = extra small screens (mobile phones)
	col-sm-(number) = small screens (tablets)
	col-md-(number) = medium screens (some desktops)
	col-lg-(number) = large screens (remaining desktops)
	hidden-(xs, sm, md, lg)
	
	
---

#SASS

Stands for: `Syntactically Awesome Style Sheets`

	SASS is a CSS extension language. It allows users to utilize features that don't current exist in CSS. You can use:
	
	- variables
	- nesting
	- mixins
	
	Your preprocessed Sass (.scss) file is saved as normal CSS that is utilized on the web site.

##Variables


Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. 

	$font-stack:    Helvetica, sans-serif;
	$primary-color: #333;
	
	body {
	  font: 100% $font-stack;
	  color: $primary-color;
	}

##Nesting

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.

```
section{
  ul {
  margin: 0;
  padding: 0;
  }

  li {
    display: inline-block;
  }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: line-through;
  }

}
```
	
would be the equivalent of

```
section ul {
  margin: 0;
  padding: 0;
}

section li {
  display: inline-block;
}

section a {
  display: block;
  padding: 6px 12px;
  text-decoration: line-through;
}
```

##Mixins

Mixin in programming is a special kind of multiple inheritance. You use it when:

- You want to provide a lot of optional features for a class
- You want to use one particular feature in a lot of different classes


```
@mixin border-stuff($radius) {
  border: 1px solid green;
  -webkit-border-radius: $radius;
  -moz-border-radius:    $radius;
  -ms-border-radius:     $radius;
       border-radius:    $radius;
    }
		
.box { @include border-stuff(10px); }
		
```

