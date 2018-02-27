#!/bin/bash
#Archie Build Script
#(C) Ashware & Arnev Sai Dev Team (ASDT)
echo Step 0: Sync Repo
git pull
echo Step 1: Add files to git
git add .
echo Step 2: Commit
if [[ "$1" == "" ]]; then
     git commit -m "Update Files"
else
     git commit -m "$1"
fi
echo Step 3: Push
git push -u origin master
echo Build finished for Archie
