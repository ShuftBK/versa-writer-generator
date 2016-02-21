# versa-writer-generator

[現在Azureサーバーにて公開中](http://versa-writer.azurewebsites.net/)

- バーサライター(versa-writer)のプログラムを生成するプログラムです。
- 出力はC言語で現在PICマイコン12f675での初期ロードになっています。全然普通に書き換えられるから他のマイコンでも動作します。
- 仕様上Electronで動作します。Express使ってます。
- 一応エントリーポイントの差から`electron .`と`npm start`の両方で動きます。
- ~~`npm run build:winzip`でzipにしてくれる~~
- パッケージングは`gulp electron`を推奨(初回は要インターネット環境)

## 今後の課題
- タブの部分の説明を実装する
- Readmeに回路図と説明を掲載する
- レポートへのリンクを貼る

~~生成されたコードがごり押し??気のせいかな…~~