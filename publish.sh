#!/bin/bash
echo "Adding files"
git add .
echo "Comming files"
git commit -a -m "Publishing content"
echo "Pushing"
git push
cd ../scrumdo-static
echo "Pulling down changes into prod"
git pull dev gh-pages
echo "Pushing"
git push
cd ../scrumdo-static-dev
