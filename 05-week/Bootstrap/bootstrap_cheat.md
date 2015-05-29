#Bootstrap in Rails Cheat Sheet

bootstrap-sass is easy to drop into Rails with the asset pipeline.

In your Gemfile you need to add the bootstrap-sass gem, and ensure that the sass-rails gem is present - it is added to new Rails applications by default.

```
gem 'bootstrap-sass', '~> 3.3.4'
gem 'sass-rails', '>= 3.2'
```

`bundle install` and restart your server to make the files available through the 
pipeline.

Import Bootstrap styles in app/assets/stylesheets/application.scss:

```
// "bootstrap-sprockets" must be imported before "bootstrap" and "bootstrap/variables"
@import "bootstrap-sprockets";
@import "bootstrap";
```

bootstrap-sprockets must be imported before bootstrap for the icon fonts to work.

Make sure the file has .scss extension (or .sass for Sass syntax). If you have just generated a new Rails app, it may come with a .css file instead. If this file exists, it will be served instead of Sass, so rename it:

`$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss`

Then, remove all the //= require and //= require_tree statements from the file. Instead, use @import to import Sass files.

Do not use //= require in Sass or your other stylesheets will not be able to access the Bootstrap mixins or variables.

Require Bootstrap Javascripts in app/assets/javascripts/application.js:

```
//= require jquery
//= require bootstrap-sprockets
bootstrap-sprockets and bootstrap should not both be included in application.js.
```

bootstrap-sprockets provides individual Bootstrap Javascript files (alert.js or dropdown.js, for example), while bootstrap provides a concatenated file containing all Bootstrap Javascripts.

***Add Viewport to application.html.erb***

```
* This ensures proper rendering and touch zooming on mobile devices.

<meta name="viewport" content="width=device-width, initial-scale=1">
```


---
