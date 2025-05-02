---
title: animated history for a git repo
description: A guide to install Gource on linux which show us an animated history of a Git repo
---

## Install Dependencies

```sh
sudo apt install libsdl2-dev libsdl2-image-dev libpcre2-dev libfreetype6-dev libglew-dev libglm-dev libboost-filesystem-dev libpng-dev libtinyxml-dev

```

## Download from Source and extract

```sh
curl -L -o ~/Downloads/gource.tar.gz https://github.com/acaudwell/Gource/releases/download/gource-0.55/gource-0.55.tar.gz &&
tar -xvf ~/Downloads/gource.tar.gz
```

## Compile

```sh
cd ~/Downloads/gource-0.55/ &&
./configure &&
make &&
make install
```
