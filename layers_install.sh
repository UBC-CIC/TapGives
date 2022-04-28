#!/bin/zsh
echo 'Navigating to unirest layer...'
cd ussd-app/layers/unirest/nodejs
echo 'Installing dependencies...'
npm i
echo 'Navigating to ussd-menu-builder layer...'
cd ../../ussd-menu-builder/nodejs
echo 'Installing dependencies'
npm i
echo 'Done.'