#!/bin/bash
export DEST=/home/smp45/new/data/plugins/Skript/scripts
git clone --depth=1 git@github.com:fwfy/skriptures
rm -rf $DEST
mkdir $DEST
mv skriptures/scripts/*.sk $DEST
rm -rf skriptures
