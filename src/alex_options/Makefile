clean:
	rm -rf dist .cache

build: index.html index.ts
	npx parcel build index.html --public-url /alex_options/dist

watch: index.html index.ts
	npx parcel watch index.html --public-url /alex_options/dist