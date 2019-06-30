all: yarn build logo

yarn:
	yarn install

archive: all
	npx web-ext build --source-dir src --overwrite-dest

build: alex_options alex_content_script

logo: logo_48 logo_96 logo_128

logo_48: src/alex_logo.svg
	npx svgexport src/alex_logo.svg src/alex_logo_48.png pad 48:48

logo_96: src/alex_logo.svg
	npx svgexport src/alex_logo.svg src/alex_logo_96.png pad 96:96

logo_128: src/alex_logo.svg
	npx svgexport src/alex_logo.svg src/alex_logo_128.png pad 128:128

alex_options:
	$(MAKE) -C src/alex_options/ build

alex_content_script:
	$(MAKE) -C src/alex_content_script/ build

watch: watch_content_script watch_options

watch_content_script:
	$(MAKE) -C src/alex_content_script/ watch

watch_options:
	$(MAKE) -C src/alex_options/ watch

clean: clean_yarn clean_logo clean_settings clean_content_script

clean_yarn:
	rm -rf node_modules

clean_logo:
	rm src/alex_logo.png

clean_settings:
	$(MAKE) -C src/alex_options/ clean

clean_content_script:
	$(MAKE) -C src/alex_content_script/ clean
