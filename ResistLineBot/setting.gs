// CHANNEL_ACCESS_TOKENを設定
var CHANNEL_ACCESS_TOKEN = "vxSuMcrwbcxLsEroAnlM028Cu9yViBk0GRsGDXmLfqBvZOseOMIGbQHSa2EtBVbLex+PWutESNQShJ0u2OE+e6n2N1Egl63nSpuJjplXYlKpVte5q2AFZ5CJQ3N9xFd8rpQ0Ou5P+o/3mOVvY1WbOwdB04t89/1O/w1cDnyilFU=";
// 作成したスプレッドシートのURLを入力する
var SPREAD_SHEET_URL = "https://docs.google.com/spreadsheets/d/1c3H3JWbl8Vji33HO78d1wTMousPBLEyZNNS1a9NkYYI/edit#gid=0";
var LINE_ENDPOINT = "https://api.line.me/v2/bot/message/reply";
// SpreadSheetの取得
var spreadSheet = SpreadsheetApp.openByUrl(SPREAD_SHEET_URL);
var sheet = spreadSheet.getSheets()[0];
// 変換に使う連想配列
var COL_STRING_TO_NUMBER = {"A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6 };

/**
 * LINEから情報を受け取るためのもの
 */
function doPost(e) {
  // LINEから受け取ったデータを扱いやすい形式(JSON)に変換する
  var json = JSON.parse(e.postData.contents);
  // 返信するためのトークン(鍵みたいなもの)取得
  var replyToken = json.events[0].replyToken;
  // トークンがない場合は何もせずに処理を終了する
  if (typeof replyToken === "undefined") {
    return;
  }
  // 送られたLINEメッセージを取得
  var lineMessage = json.events[0].message.text;
  // メッセージを求める
  var replyMessage = []
  try {
    replyMessage = [createReply(lineMessage)];
  } catch (e) {
    replyMessage = [e.message];
  }
  // メッセージを返信
  var messages = replyMessage.map(function(v) {
    return { type: "text", text: v };
  });
  UrlFetchApp.fetch(LINE_ENDPOINT, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + CHANNEL_ACCESS_TOKEN
    },
    method: "post",
    payload: JSON.stringify({
      replyToken: replyToken,
      messages: messages
    })
  });
  return ContentService.createTextOutput(
    JSON.stringify({ content: "post ok" })
  ).setMimeType(ContentService.MimeType.JSON);
}

// 列の中からランダムで項目を返す
function getRandomItem(col) {
  var lastRow = sheet.getLastRow();
  var lastCol = sheet.getLastColumn();
  var sheetData = sheet.getSheetValues(1, 1, lastRow, lastCol);
  var colNumber = COL_STRING_TO_NUMBER[col];
  var columnVals = sheet.getRange(col + ":" + col).getValues();
  var rowLength = columnVals.filter(String).length;
  return sheetData[getRandomInt(rowLength)][colNumber];
}