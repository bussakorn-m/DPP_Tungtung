#!/bin/sh

if [ "$#" -eq 0 ]; then
    echo "No argument supplied"
else
    for arg in "$@"; do
        mkdir -p "ex$arg"
    done
fi