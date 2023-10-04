# Git Cheat Sheet
> If you're viewing this in VS Code, press **ctrl+shift+v**



### Install
**Github for Windows**
<br>
https://windows.github.com

**Git**
<br>
https://git-scm.com

<br>


## Configuring git
Configure user information for all local repositories

> **$ git config --global user.name "[name]"**
>
> Sets the name you want to attached to your commit transactions
<br>

**Usage example:**
<br>
$ git config user.name "user"

<br>

> **$ git config --global user.email "[name]"**
>
>Sets the email you want to attached to your commit transactions
<br>

**Usage example:**
<br>
$ git config user.email "user@gmail.com"

<br>


## Create repositories
**Note:** Make sure you're in the folder you want initialize a repository.

> **$ git init**
>
> Turn an existing directory into a git repository

> **$ git clone [url]** 
>
>Clone (download) a repository that already exists on github
<br>

**git clone usage example:** 
<br>
$ git clone https://github.com/jesaspiring/cs3-class-resources

<br>


## Adding remote branch/repository
Adding repository after initializing a new local git repository and a newly created remote repository in Github.com

> **$ git remote add [name] [url]**
>
> Create a new connection record to a remote repository in Github.com
<br>

**git remote usage example:**
<br>
$ git remote add origin https://github.com/jesaspiring/cs3-class-resources 

<br>


## Make Changes

> **$ git add [File]**
>
> Snapshots the file in preparation for version (before commit)
<br>

**Usage example**
<br>
1. Adding all files

    $ git add .

2. Adding specific file

    $ git add index.html

<br>

> **$ git commit -m "[descriptive message]"**
>
> Records file snapshots permanently in version history
<br>


## Synchronize changes
Synchronize your local repository with the remote repository in Github,com

<br>

> **$ git fetch**
>
> Downloads all history from remote tracking branches

> **$ git merge**
>
> Combines remote tracking branch into current local branch

> **$ git push**
>
>Uploads all local branch commits to Github

> **$ git pull**
>
>Updates current local working branch with all new commits from corresponding remote branch. It is a combination of `git fetch` and `git merge`

<br>


