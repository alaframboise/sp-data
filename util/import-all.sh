#!/usr/bin/env bash

command -v mongoimport >/dev/null 2>&1 || { echo >&2 "Could not find mongoimport. Aborting."; exit 1; }

resources="./resources.txt"

while read -r resource
do
  mongoimport --jsonArray --db banking --file ../json/"$resource".json
done < "$resources"