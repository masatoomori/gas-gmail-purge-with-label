var defaultDelayDays = "7d"; // 検索条件に使用するデフォルトの日数
var defaultPurgeLabel = "gas-purge-in-one-week"; // 検索条件に使用するデフォルトのラベル名

// delayDays以上前に受信した labelName ラベルがついているメールを削除する
function purgeEmailsWithLabel() {
  var delayDays = defaultDelayDays;
  var purgeLabel = defaultPurgeLabel;

  // "older_than" とラベル名を組み合わせた検索クエリ
  var searchQuery = "label:" + purgeLabel + " older_than:" + delayDays;

  // 検索クエリに基づいてメールスレッドを検索
  var deleteThreads = GmailApp.search(searchQuery);

  // 検索条件に合致するメールスレッドをゴミ箱に移動
  for (var i = 0; i < deleteThreads.length; i++) {
    deleteThreads[i].moveToTrash();
  }
}
