# gas-gmail-purge-with-label

Gmail のラベルを指定して、古いメールを削除する Google Apps Script です。

## 使い方

### 変数の設定

`main.js` の下記を任意の値に設定します。

```javascript
var defaultDelayDays = "7d"; // 検索条件に使用するデフォルトの日数
var defaultPurgeLabel = "gas-purge-in-one-week"; // 検索条件に使用するデフォルトのラベル名
```

`defaultPurgeLabel` に設定したラベルをメールに付与するルールはあらかじめ Gmail の機能を利用して設定しておきます。

### コードのデプロイ

1. [Google Apps Script](https://script.google.com/) で適当なプロジェクトを作成します。
1. `src` ディレクトリに移動します。
1. `.envrc.example` を `.envrc` にリネームします。
1. `clasp login` でログインし、`.envrc` に `PRED_PATH` を設定します。
1. 作成したプロジェクトの設定画面から`スクリプトID`を確認し、`.envrc` の `PROJECT_ID` に設定します。
1. `bash clone.sh` でプロジェクトをクローンします。
1. 必要に応じて `src` ディレクトリのファイルを編集します。
1. `clasp push` でプロジェクトに反映します。

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

### トリガーの設定

プロジェクトのコンソール画面から、`トリガー` -> `トリガーの追加` を選択し、スクリプトを定期実行させる

- 実行する関数を選択：`purgeEmailsWithLabel`
- 実行するデプロイを選択：`Head`
- イベントのソースを選択：`時間主導型`
- 時間ベースのトリガーのタイプを選択：`日付ベースのタイマー`
- 時刻を選択：任意の時間
