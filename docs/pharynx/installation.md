---
title: Installation
sidebar_label: Installation
sidebar_position: 2
---

## Installation for Windows
1. Go to https://github.com/SOF3/pharynx/releases/latest
2. Download the 3 files (start.cmd, pharynx.phar, bootstrap-plugin-dev.php) and copy them to your server directory. Replace the current start.cmd (or rename the new one).
3. Edit the downloaded start.cmd. Find the line with `set PLUGIN_PATH=dev` and change `dev` to the folder that contains your plugin.yml and src (e.g. `set PLUGIN_PATH=plugins/YourPluginName`).
4. Run the downloaded start.cmd as usual. Your plugin should be loaded when you start the server, and you can find it compiled in `plugins/pharynx-output.phar`.

## Installation for Mac/Linux
1. Run the following (replace `0.2.4` with the latest version at https://github.com/SOF3/pharynx/releases/latest):
```
wget -O start.sh https://github.com/SOF3/pharynx/releases/download/0.3.6/start.sh
wget https://github.com/SOF3/pharynx/releases/download/0.3.6/pharynx.phar
wget https://github.com/SOF3/pharynx/releases/download/0.3.6/bootstrap-plugin-dev.php
```

2. Edit `start.sh`, change `PLUGIN_PATH=dev` to the folder that contains your plugin.yml and src (e.g. `PLUGIN_PATH=plugins/YourPluginName`)
3. Run start.sh as usual. Your plugin should be loaded when you start the server, and you can find it compiled in `plugins/pharynx-output.phar`.