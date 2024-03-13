# gas-gmail-purge-with-label

Gmail のラベルを指定して、古いメールを削除する Google Apps Script です。

## 使い方

### 変数の設定

`main.js` の下記を任意の値に設定します。

```javascript
var defaultDelayDays = "7d"; // 検索条件に使用するデフォルトの日数
var defaultPurgeLabel = "gas-purge-in-one-week"; // 検索条件に使用するデフォルトのラベル名
```

### コードのデプロイ

1. [Google Apps Script](https://script.google.com/) で適当なプロジェクトを作成します。
1. `clasp login` でログインし、`.envrc` に `PRED_PATH` を設定します。
1. 作成したプロジェクトの設定画面から`スクリプトID`を確認し、`.envrc` の `PROJECT_ID` に設定します。
1. `bash clone.sh` でプロジェクトをクローンします。
1. このリポジトリを編集し、`clasp push` でプロジェクトに反映します。
