function purgeEmailsInOneWeek() {
  // 1週間以上前に受信した "gas-purge-in-one-week" ラベルがついているメールを削除する
  var delayDays = "7d"; // 検索条件に使用する日数
  var labelName = "gas-purge-in-one-week"; // 検索条件に使用するラベル名

  // "older_than" とラベル名を組み合わせた検索クエリ
  var searchQuery = "label:" + labelName + " older_than:" + delayDays;

  // 検索クエリに基づいてメールスレッドを検索
  var deleteThreads = GmailApp.search(searchQuery);

  // 検索条件に合致するメールスレッドをゴミ箱に移動
  for (var i = 0; i < deleteThreads.length; i++) {
    deleteThreads[i].moveToTrash();
  }
}
