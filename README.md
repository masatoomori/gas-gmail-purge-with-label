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

### サービスの追加

プロジェクトのコンソール画面から、`サービス` -> `サービスの追加` -> `Gmail API ドキュメント`を選択し、Gmail API を有効にします。

### アプリの登録

アプリを登録し、OAuth クライアント ID を取得します。

1. プロジェクトのコンソール画面からプロジェクトの設定を開きます。
1. あらかじめ作成しておいた Google Cloud Platform のプロジェクト番号を入力します。
1. `OAuth 同意画面` で必要な情報を入力します。
   - アプリ名：gas-gmail-purge-with-label
   - サポートメール：自分のメールアドレス
   - 連絡先メールアドレス：自分のメールアドレス
   - その他：空欄
1. テストユーザに自分のメールアドレスを追加します。
