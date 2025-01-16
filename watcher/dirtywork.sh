#!/bin/bash
export DEST=test
git clone --depth=1 git@github.com:fwfy/skriptures
rm -rf $DEST
mkdir $DEST
mv skriptures/scripts/*.sk $DEST
rm -rf skriptures
