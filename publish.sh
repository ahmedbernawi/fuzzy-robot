#!/bin/bash

# Automate publishing a repository to GitHub

# Variables
REPO_NAME="fuzzy-robot"
GITHUB_USER="ahmedbernawi"
REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"

# Step 1: Initialize Git
echo "Initializing Git repository..."
git init

# Step 2: Add all files
echo "Adding files to Git..."
git add .

# Step 3: Commit the files
echo "Committing files..."
git commit -m "Initial commit"

# Step 4: Create a GitHub repository using GitHub CLI
echo "Creating GitHub repository..."
gh repo create $GITHUB_USER/$REPO_NAME --public --source=. --remote=origin

# Step 5: Push the code to GitHub
echo "Pushing code to GitHub..."
git push -u origin main

# Step 6: Confirm success
echo "Repository published successfully at $REPO_URL"

# Remote repository details
origin  https://github.com/ahmedbernawi/fuzzy-robot.git (fetch)
origin  https://github.com/ahmedbernawi/fuzzy-robot.git (push)