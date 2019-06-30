all: yarn build

yarn:
	yarn install

archive: all
	npx web-ext build --source-dir src --overwrite-dest

build: alex_options alex_content_script

alex_options:
	$(MAKE) -C src/alex_options/ build

alex_content_script:
	$(MAKE) -C src/alex_content_script/ build

watch: watch_content_script watch_options

watch_content_script:
	$(MAKE) -C src/alex_content_script/ watch

watch_options:
	$(MAKE) -C src/alex_options/ watch

clean: clean_yarn clean_settings clean_content_script

clean_yarn:
	rm -rf node_modules

clean_settings:
	$(MAKE) -C src/alex_options/ clean

clean_content_script:
	$(MAKE) -C src/alex_content_script/ clean
