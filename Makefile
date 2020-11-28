install: #npmInstall
	npm install

start: #screenShit
	node -r esm bin/brain-games.js

publish: #NamesIsHard
	npm publish --dry-run