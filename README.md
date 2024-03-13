# gas-gmail-purge-with-label

Gmail のラベルを指定して、古いメールを削除する Google Apps Script です。

## 使い方

### コードのデプロイ

1. [Google Apps Script](https://script.google.com/) で適当なプロジェクトを作成します。
1. `clasp login` でログインし、`.envrc` に `PRED_PATH` を設定します。
1. 作成したプロジェクトの設定画面から`スクリプトID`を確認し、`.envrc` の `PROJECT_ID` に設定します。
1. `bash clone.sh` でプロジェクトをクローンします。
1. このリポジトリを編集し、`clasp push` でプロジェクトに反映します。
