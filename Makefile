all: yarn build

yarn:
	yarn install

build: alex_settings alex_content_script

alex_settings:
	$(MAKE) -C src/alex_settings/ build

alex_content_script:
	$(MAKE) -C src/alex_content_script/ build

watch: watch_content_script

watch_content_script:
	$(MAKE) -C src/alex_content_script/ watch

clean: clean_yarn clean_settings clean_content_script

clean_yarn:
	rm -rf node_modules

clean_settings:
	$(MAKE) -C src/alex_settings/ clean

clean_content_script:
	$(MAKE) -C src/alex_content_script/ clean
