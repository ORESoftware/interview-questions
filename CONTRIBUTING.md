

Workflow:

To make changes to master (master has no answers).

git checkout answers
git pull
git checkout -b answers-update-x
# make changes
git push -u origin answers-update-x
# merge answers-update-x to the answers branch with a PR on Github
git checkout -b answers-update-x-without-answers
# remove answers 
git push -u origin answers-update-x-without-answers
# merge answers-update-x-without-answers into master with a PR on Github