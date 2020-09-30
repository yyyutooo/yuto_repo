/**
 * LINEに返すメッセージを作成する
 * @param {string} lineMessage
 */
function createReply(lineMessage) {
  // 返信する内容をいれる箱を用意
  var replyMessage = "";

  if(lineMessage.length == 4){
    
    if(lineMessage.charAt(0) == "黒"){
      var digitOne = 0;
    }else if(lineMessage.charAt(0) == "茶"){
      var digitOne = 1;  
    }else if(lineMessage.charAt(0) == "赤"){
      var digitOne = 2;
    }else if(lineMessage.charAt(0) == "橙"){
      var digitOne = 3;
    }else if(lineMessage.charAt(0) == "黄"){
      var digitOne = 4;
    }else if(lineMessage.charAt(0) == "緑"){
      var digitOne = 5;
    }else if(lineMessage.charAt(0) == "青"){
      var digitOne = 6;
    }else if(lineMessage.charAt(0) == "紫"){
      var digitOne = 7;
    }else if(lineMessage.charAt(0) == "灰"){
      var digitOne = 8;
    }else if(lineMessage.charAt(0) == "白"){
      var digitOne = 9;
    }else{
      replyMessage = "抵抗のカラーコードを正確に入力してください。\n (例)茶黒赤金"
    }
    
    if(lineMessage.charAt(1) == "黒"){
      var digitTwo = 0;
    }else if(lineMessage.charAt(1) == "茶"){
      var digitTwo = 1;  
    }else if(lineMessage.charAt(1) == "赤"){
      var digitTwo = 2;
    }else if(lineMessage.charAt(1) == "橙"){
      var digitTwo = 3;
    }else if(lineMessage.charAt(1) == "黄"){
      var digitTwo = 4;
    }else if(lineMessage.charAt(1) == "緑"){
      var digitTwo = 5;
    }else if(lineMessage.charAt(1) == "青"){
      var digitTwo = 6;
    }else if(lineMessage.charAt(1) == "紫"){
      var digitTwo = 7;
    }else if(lineMessage.charAt(1) == "灰"){
      var digitTwo = 8;
    }else if(lineMessage.charAt(1) == "白"){
      var digitTwo = 9;
    }else{
      replyMessage = "抵抗のカラーコードを正確に入力してください。\n (例)茶黒赤金"
    }
    
    if(lineMessage.charAt(2) == "黒"){
      var digitThree = 1;
    }else if(lineMessage.charAt(2) == "茶"){
      var digitThree = 10;  
    }else if(lineMessage.charAt(2) == "赤"){
      var digitThree = 100;
    }else if(lineMessage.charAt(2) == "橙"){
      var digitThree = 1000;
    }else if(lineMessage.charAt(2) == "黄"){
      var digitThree = 10000;
    }else if(lineMessage.charAt(2) == "緑"){
      var digitThree = 100000;
    }else if(lineMessage.charAt(2) == "青"){
      var digitThree = 1000000;
    }else if(lineMessage.charAt(2) == "紫"){
      var digitThree = 10000000;
    }else if(lineMessage.charAt(2) == "白"){
      var digitThree = 0.001;
    }else if(lineMessage.charAt(2) == "金"){
      var digitThree = 0.1;
    }else if(lineMessage.charAt(2) == "銀"){
      var digitThree = 0.01;
    }else{
      replyMessage = "抵抗のカラーコードを正確に入力してください。\n (例)茶黒赤金"
    }
    
    if(lineMessage.charAt(3) == "茶"){
      var digitFour = "±1%";
    }else if(lineMessage.charAt(3) == "赤"){
      var digitFour = "±2%";  
    }else if(lineMessage.charAt(3) == "橙"){
      var digitFour = "±0.05%";
    }else if(lineMessage.charAt(3) == "緑"){
      var digitFour = "±0.5%";
    }else if(lineMessage.charAt(3) == "青"){
      var digitFour = "±0.25%";
    }else if(lineMessage.charAt(3) == "紫"){
      var digitFour = "±0.1%";
    }else if(lineMessage.charAt(3) == "金"){
      var digitFour = "±5%";
    }else if(lineMessage.charAt(3) == "銀"){
      var digitFour = "±10%";
    }else{
      replyMessage = "抵抗のカラーコードを正確に入力してください。\n (例)茶黒赤金"
    }
    
    var ResistanceValue = ((digitOne*10) + digitTwo) * digitThree;
    
    if(ResistanceValue >= 1000 && ResistanceValue < 1000000){
      ResistanceValue = ResistanceValue/1000 + "kΩ";
      
    }else if(ResistanceValue >= 1000000){
      ResistanceValue = ResistanceValue/1000000 + "MΩ";
      
    }else{
      ResistanceValue = ResistanceValue + "Ω";
    }
    
    replyMessage = ResistanceValue + digitFour;
    replyMessage = "その抵抗値は\n" + replyMessage + "\nだね！";
    
  }else if(lineMessage.length == 5){
    
    if(lineMessage.charAt(0) == "黒"){
      var digitOne = 0;
    }else if(lineMessage.charAt(0) == "茶"){
      var digitOne = 1;  
    }else if(lineMessage.charAt(0) == "赤"){
      var digitOne = 2;
    }else if(lineMessage.charAt(0) == "橙"){
      var digitOne = 3;
    }else if(lineMessage.charAt(0) == "黄"){
      var digitOne = 4;
    }else if(lineMessage.charAt(0) == "緑"){
      var digitOne = 5;
    }else if(lineMessage.charAt(0) == "青"){
      var digitOne = 6;
    }else if(lineMessage.charAt(0) == "紫"){
      var digitOne = 7;
    }else if(lineMessage.charAt(0) == "灰"){
      var digitOne = 8;
    }else if(lineMessage.charAt(0) == "白"){
      var digitOne = 9;
    }else{
      replyMessage = "抵抗のカラーコードを正確に入力してください。\n (例)茶黒赤金"
    }
    
    if(lineMessage.charAt(1) == "黒"){
      var digitTwo = 0;
    }else if(lineMessage.charAt(1) == "茶"){
      var digitTwo = 1;  
    }else if(lineMessage.charAt(1) == "赤"){
      var digitTwo = 2;
    }else if(lineMessage.charAt(1) == "橙"){
      var digitTwo = 3;
    }else if(lineMessage.charAt(1) == "黄"){
      var digitTwo = 4;
    }else if(lineMessage.charAt(1) == "緑"){
      var digitTwo = 5;
    }else if(lineMessage.charAt(1) == "青"){
      var digitTwo = 6;
    }else if(lineMessage.charAt(1) == "紫"){
      var digitTwo = 7;
    }else if(lineMessage.charAt(1) == "灰"){
      var digitTwo = 8;
    }else if(lineMessage.charAt(1) == "白"){
      var digitTwo = 9;
    }else{
      replyMessage = "抵抗のカラーコードを正確に入力してください。\n (例)茶黒赤金"
    }
    
    if(lineMessage.charAt(2) == "黒"){
      var digitThree = 0;
    }else if(lineMessage.charAt(2) == "茶"){
      var digitThree = 1;  
    }else if(lineMessage.charAt(2) == "赤"){
      var digitThree = 2;
    }else if(lineMessage.charAt(2) == "橙"){
      var digitThree = 3;
    }else if(lineMessage.charAt(2) == "黄"){
      var digitThree = 4;
    }else if(lineMessage.charAt(2) == "緑"){
      var digitThree = 5;
    }else if(lineMessage.charAt(2) == "青"){
      var digitThree = 6;
    }else if(lineMessage.charAt(2) == "紫"){
      var digitThree = 7;
    }else if(lineMessage.charAt(2) == "灰"){
      var digitThree = 8;
    }else if(lineMessage.charAt(2) == "白"){
      var digitThree = 9;
    }else{
      replyMessage = "抵抗のカラーコードを正確に入力してください。\n (例)茶黒赤金"
    }
    
    if(lineMessage.charAt(3) == "黒"){
      var digitFour = 1;
    }else if(lineMessage.charAt(3) == "茶"){
      var digitFour = 10;  
    }else if(lineMessage.charAt(3) == "赤"){
      var digitFour = 100;
    }else if(lineMessage.charAt(3) == "橙"){
      var digitFour = 1000;
    }else if(lineMessage.charAt(3) == "黄"){
      var digitFour = 10000;
    }else if(lineMessage.charAt(3) == "緑"){
      var digitFour = 100000;
    }else if(lineMessage.charAt(3) == "青"){
      var digitFour = 1000000;
    }else if(lineMessage.charAt(3) == "紫"){
      var digitFour = 10000000;
    }else if(lineMessage.charAt(3) == "白"){
      var digitFour = 0.001;
    }else if(lineMessage.charAt(3) == "金"){
      var digitFour = 0.1;
    }else if(lineMessage.charAt(3) == "銀"){
      var digitFour = 0.01;
    }else{
      replyMessage = "抵抗のカラーコードを正確に入力してください。\n (例)茶黒赤金"
    }
    
    if(lineMessage.charAt(4) == "茶"){
      var digitFive = "±1%";
    }else if(lineMessage.charAt(4) == "赤"){
      var digitFive = "±2%";  
    }else if(lineMessage.charAt(4) == "橙"){
      var digitFive = "±0.05%";
    }else if(lineMessage.charAt(4) == "緑"){
      var digitFive = "±0.5%";
    }else if(lineMessage.charAt(4) == "青"){
      var digitFive = "±0.25%";
    }else if(lineMessage.charAt(4) == "紫"){
      var digitFive = "±0.1%";
    }else if(lineMessage.charAt(4) == "金"){
      var digitFive = "±5%";
    }else if(lineMessage.charAt(4) == "銀"){
      var digitFive = "±10%";
    }else{
      replyMessage = "抵抗のカラーコードを正確に入力してください。\n (例)茶黒赤金"
    }
    
    var ResistanceValue = ((digitOne*100) + (digitTwo*10) + digitThree) * digitFour;
    
    if(ResistanceValue >= 1000 && ResistanceValue < 1000000){
      ResistanceValue = ResistanceValue/1000 + "kΩ";
      
    }else if(ResistanceValue >= 1000000){
      ResistanceValue = ResistanceValue/1000000 + "MΩ";
      
    }else{
      ResistanceValue = ResistanceValue + "Ω";
    }
    
    replyMessage = ResistanceValue + digitFive;
    replyMessage = "その抵抗値は\n" + replyMessage + "\nだね！";
    
  }else {
    replyMessage = "抵抗のカラーコードを入力してください。\n (例)茶黒赤金"
  }

  // LINEに返す
  return replyMessage;
}