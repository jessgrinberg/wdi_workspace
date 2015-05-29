#Git Part 2 (of many more) 

##SWBAT
- Go back to previous commits
- Use branching to work on new features
- Use 'git merge' to merge new features back into the master branch

## Wait a second.... what is git again?

## hmmm... so what is github then?

###STARTER TASK - 5 minutes.
The pre-requisites for this lesson are that you can initialize a repo on github, initialize a repo on your machine, and then link them.

*Your task - Make a folder in your workspace called 'git_practice'. It should have a repo in it that is linked to github. Check with your neighbor to see how they are doing it. 

Once you've done this, discuss git and github with your neighbor - likes/dislikes, why we use it, when should we commit, any questions you have about it. 

Now let's start coding together! Let's make an index.html file first.

*How do we add, commit, and then push to github?

*Any questions from this exercise?


----

Let's add a few changes to our file. Every time we make a significant change, we will git add, git commit -m "message", and git push origin master.

### git log

Part of what makes git so useful is that we can look back at all of our commits very easily. Each commit has a unique ID. How can we inspect each commit?


### git checkout

We can check a version out of the repo, just like a book out of the library. The scary message we get is basically telling us that this is an old version of our code, and if we try to make changes here, things could get weird. Just like the librarian telling you not to write in the book you are checking out. 

Let's use git checkout to go.... BACK TO THE FUTURE!

Another way to go back in time is to use:

```
git checkout HEAD~1
git checkout HEAD~2
```

So 'git checkout <version>' just lets you look at old versions of your code.

### git diff
A trickier way to inspect changes you've made is to use git diff:

```
git diff <older commit id> <newer commit id>
```

###Lab 1
1) Check the current status of your repo. Make sure everything that is new has been added and committed.
2) Log all the commits you've made for this repo. Are your commit messages useful?
3) Use the id of a recent commit to go back in time and take a look at your old code.
4) Switch back to the most up-to-date version
4) Now use the HEAD~1 syntax to go back to the old commit you just went to. 
5) And again, switch back to the master.
6) Use the diff command to inspect changes between your most up-to-date version and the old version you have been checking out. Which way is most useful for you?




## Branching
Branches are like alternate realities for your project

go back to your master branch.
git status
git branch 
git checkout my_new_feature
git checkout master
git branch -D <branch name>

(we can do this all in one command with 'git checkout -b my_new_feature')


###Lab 2
1) create a new branch called new_feature
2) switch to this new branch
3) pull up the status for the repo and confirm that you are in the new branch
4) switch back to the master branch
5) use the one command trick to create and switch to a new branch called another_new_feature.
6) Make a change in your index.html
7) Now do 'git branch' to see the names of all our branches.
8) Go back to your master branch
9) Delete all the new branches



## Merging branches back into the master
Let's create and go into the new_feature branch, and add some code to our index.html.
let's add, then commit these changes.

Now let's checkout the master branch again, and merge our new_feature branch.

```
git merge new_feature
```

###Lab 3
1) create a new branch called create_readme and switch into it
2) create a readme.md file, and write some text inside it
3) add and commit the new file in this new branch
4) switch back to your master branch
5) merge the create_readme branch


###Lab 4
1) go into your TTT directory on your computer
2) make sure your most recent changes have been added and committed
3) make a new branch where we will me writing a readme.md
4) in this new branch, create a readme.md file and write a few short sentences about your project - which languages are you using? why are you creating this project? 
5) switch back to the master and merge your branch
6) add, commit and push to github.


###Lab 5 

Make yourself a **master** cheatsheet with all of your favorite git commands.


### Bonus:
Go back to a previous commit and branch off it. 


### Extra Bonus stuff:
https://try.github.io/levels/1/challenges/1
http://pcottle.github.io/learnGitBranching/
https://github.com/gazler/githug


### Extra mega-party bonus stuff:

[cheatsheets.org](http://www.cheat-sheets.org/saved-copy/git-cheat-sheet.pdf)
[git-tower.com](http://www.git-tower.com/blog/git-cheat-sheet)
[hyperglot](http://hyperpolyglot.org/version-control)











