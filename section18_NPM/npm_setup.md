<!-- install node.js -->
<!-- sudo apt-get install npm -->

```bash
node --version
#v8.10.0
sudo apt-get install npm
npm --version
#3.5.2
sudo npm install -g npm@latest
reboot
npm --version
#6.14.6
npm init
```

<!-- update node.js -->
```bash
#install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
nvm --version
#0.35.1
#clean cache
npm cache clean -f

#install node.js v12.18.2
nvm install 12.18.2
node --version
#v12.18.2
```

<!-- generate package.json -->
```{bash}
node init
```

<!-- install live-server/lodash npm -->
```bash
#lodash
#install locally (added to package.json)
sudo npm install lodash
#live-server
#-g means globally
sudo npm install -g live-server

#install browserify
sudo npm install -g browserify
browserify script.js > bundle.js
```

