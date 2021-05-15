# Welcome to the exercise!
## CLI & Git Commands
### Prepping the environment:
1. Open your terminal
1. Change directory (`cd`) into desired parent directory: `cd my-directory`
1. Use `mkdir` to make a new directory: `mkdir new-directory`
1. Try out `ls` to list the contents and verify the new directory was created: `ls`
1. `cd` into new directory: `cd new-directory`
### Accessing the repository:
1. Open the GitHub repository (repo) [link](https://github.com/bubbzDotDev/bubbzdev)
1. Click the **Fork** button to fork it into your repo.
1. Click the green **Code** button and copy the URL
1. In your terminal, `git clone` the repo: `git clone https://github.com/*your-user-name*/bubbzdev.git`
1. `cd` into the newly created repo directory: `cd bubbzdev`
1. Open VS Code with this command: `code .` (Or, open VS Code manually and open the *bubbzdev* folder)
### Let's do this:
1. Open the **exercise** folder in VS Code Explorer pane
1. Open **index.html** in the exercise folder
1. Start Live Server and place your browser next to your editor or on another screen if you have one.
1. Open VS Code terminal
1. In the VS Code terminal, create a new branch: `git branch new-branch-name`
1. Change to the branch you created: `git checkout new-branch-name`
1. Send that branch up to GitHub: `git push -u origin new-branch-name`
### Make your changes:
1. Find the `<!-- GUEST ENTRIES ARE ADDED BELOW -->` comment
1. Choose a `<div>` below it to copy
1. Paste the copied `<div>` below that comment. *We want each new addition to be above the rest.*
1. Personalize your `<div>` to your liking
### Wrapping up:
1. Stage your changes: `git add .` or `git add index.html`
1. Commit your changes: `git commit -m "My detailed message goes here."`
1. Switch back to main branch: `git checkout main`
1. Merge branches: `git merge branch-with-changes`
1. Go to repo in the browswer
1. Click **Compare & pull request**
1. git checkout main
1. git merge --no-ff demo
1. git push origin main
### Resources:
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/)
- [GitHub Documentation](https://docs.github.com/en)
- ["What is Git? A Beginner's Guide to Git Version Control"](https://www.freecodecamp.org/news/what-is-git-learn-git-version-control/)
- ["How to Use Branches in Git - the Ultimate Cheatsheet"](https://www.freecodecamp.org/news/how-to-use-branches-in-git/)
- ["How to Use Git and Git Workflows - a Practical Guide"](https://www.freecodecamp.org/news/practical-git-and-git-workflows/)
- [Atlassian tutorials](https://www.atlassian.com/git/tutorials/what-is-version-control)
- [How I learned to format this README.md file](https://www.markdownguide.org/basic-syntax/)
- [Extension I used to preview the markdown file in VS Code](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)