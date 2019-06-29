clean:
	rm -rf dist .cache

build: build_ts build_css

build_ts: *.ts
	parcel build index.ts

build_css: *.css

watch: watch_ts

watch_ts:
	parcel watch index.ts
