# 多益考試練習系統 - 增強版

本專案是一個前端單頁式網頁 (Single-Page Application)，可動態載入多份題庫檔（`questions.js`, `questions1.js`, `questions2.js`, ...），並將這些題目合併成一份完整的題庫，用於模擬多益考試情境進行聽力、閱讀與語法三大部分的練習。系統亦包含進度儲存、正確率統計、TTS 語音播放、以及炫麗的五彩紙屑特效等功能。

## 功能特色

1. **動態載入多份題庫**  
   - 會依序嘗試載入 `questions.js`, `questions1.js`, `questions2.js`...，若遇 404 或載入失敗則停止。
   - 各題庫檔採用 IIFE（立即執行函式）方式，將題目內容 `push` 進全域 `window.questionSets`。

2. **自動合併與重新分配 ID**  
   - 在載入完所有題庫後，系統將它們合併到 `allQuestions`，並動態為每題重新分配不重複的 ID，避免 ID 相同導致誤判為「已完成」。

3. **本地進度儲存**  
   - 使用 `localStorage` 存取已做過的題目、當前答題狀態與分數統計，重整後不會遺失進度。

4. **答對特效**  
   - 答對題目後會觸發五彩紙屑效果 (Confetti) 以增添趣味性。

5. **TTS 語音播放**  
   - 聽力題可呼叫瀏覽器的 SpeechSynthesis API 朗讀題目音檔文字，支援男聲/女聲切換（若瀏覽器上語音資源足夠）。

6. **手機 / 桌面模式切換**  
   - 提供「切換成手機版」的功能按鈕，能改變頁面佈局與字級，模擬手機瀏覽體驗。

7. **一鍵重置**  
   - 可重置所有作答進度並清除快取 (Cache / localStorage)，恢復成初始狀態。

---

## 資料結構

- **index.html**  
  主頁面，內含前端邏輯 (JS) 與畫面 (HTML/CSS)。載入後會動態載入題庫並執行練習系統。

- **questions.js** / **questions1.js** / **questions2.js** / ...  
  各題庫檔，請採用以下結構範例：  
  ```js
  (function () {
    window.questionSets = window.questionSets || [];
    window.questionSets.push({
      listening: [ /* 聽力題目陣列 */ ],
      reading: [ /* 閱讀題目陣列 */ ],
      grammar: [ /* 語法題目陣列 */ ]
    });
  })();
  ```
  > **注意：** 若要免除 ID 衝突，最簡單方式就是在合併時重新分配 ID（本專案已內建此功能）。否則要自行確保每支檔案中題目不重複使用相同 ID。

- **questions.js** 示例題庫通常用作「預設」題庫；`questions1.js`, `questions2.js` 則能放額外的題目，系統會自動合併。

---

## 使用方法

1. **下載 / 放置所有檔案**  
   - 將 `index.html`, `questions.js` (與其他 `questionsX.js`), 以及任何相關檔案放在同一個資料夾。

2. **打開 `index.html`**  
   - 直接在瀏覽器中開啟 `index.html`，或架設輕量本地伺服器（例如 VSCode Live Server、Node.js serve 等）並瀏覽該頁。

3. **查看載入狀況**  
   - 主頁面在 `window.onload` 時會動態載入 `questions.js`, `questions1.js`... 直到 `questions9.js` 或載入失敗停止。
   - 載入成功會在 console 顯示訊息：`載入成功: questions1.js`。

4. **開始作答**  
   - 首頁會顯示「聽力、閱讀、語法」三個區塊的題目。  
   - 單擊某題的選項並提交，即可判定正確/錯誤並給出解析。

5. **進度儲存**  
   - 系統自動使用 `localStorage` 記錄已完成題目、分數和正確率。重新整理頁面仍保留進度。

6. **手機/電腦切換**  
   - 點擊「切換成手機版」(或「切換成電腦版」) 可在兩種佈局間切換。

7. **重置進度**  
   - 在頁面上點擊「重置進度」按鈕，會清除所有記錄與快取，並自動重新載入頁面恢復初始狀態。

---

## 若要新增題庫檔

1. **建立新檔案**  
   - 例如 `questions3.js`，並採用 IIFE 寫法：
     ```js
     (function () {
       window.questionSets = window.questionSets || [];
       window.questionSets.push({
         listening: [ /* ... */ ],
         reading: [ /* ... */ ],
         grammar: [ /* ... */ ]
       });
     })();
     ```
2. **放置同一層**  
   - 與 `index.html` 同目錄即可；主程式會嘗試載入 `questions3.js` (若您將 `MAX_QUESTION_FILES` 設足夠)。
3. **不重複的 ID**  
   - 若您自行在檔案裡使用 ID，可確保它們不與先前題庫衝突；或像本專案預設使用「合併時動態分配 ID」則無須擔心。

---

## 常見問題 FAQ

1. **Q**: 載入新題庫後顯示「此部分所有題目已完成」但實際還沒做？  
   **A**: 如果沒重新分配 ID，可能是新題與舊題 ID 重複，系統誤判已完成。請啟用本專案預設的「動態 ID 重分配」，或手動更改題目 ID。  
   同時建議使用者在加新題庫後先「重置進度」，以免 `localStorage` 中的舊記錄對不到新 ID。

2. **Q**: 看不到語音播放按鈕？  
   **A**: 需有聽力題的 `audioText` 字段 + 瀏覽器支援 SpeechSynthesis API 才會顯示。某些瀏覽器需等聲音列表載入，或確認系統語音庫是否可用。

3. **Q**: 為何會有「無法載入題目，請重新整理頁面」訊息？  
   **A**: 可能因為 `questionsX.js` 內部格式錯誤、或題目資料不完整。請檢查檔案語法。

---

## 貢獻方式 (Contributing)

1. **問題回報**  
   - 如果在使用中發現問題或 Bug，歡迎提交 Issue（或在您的溝通平台提出）。

2. **新增題目**  
   - 可直接編輯或新增 `questionsX.js`。若要合併到正式題庫，請確保題目含有「question, options, correctAnswer, explanation」等欄位。

3. **Pull Request**  
   - 如您使用 git 進行版本控制，歡迎發送 PR，合併更多增強功能（如更進階的答題統計、更多語音選擇等）。


以下是一段 **精簡版** 的「AI 生成多益高難度題目」提示詞，並直接附上 **範例輸出**（含聽力、閱讀、語法示例）以供參考。您可據此讓 AI 依規格產生更多題目，並確保不會重複先前內容。

---

## 精簡指令 (Prompt)

```js
請依下列格式與規格生成高難度多益練習題目，並先檢查不要重複舊題。生成的最終結果必須是「questionsX.js」檔案形式，包含下述程式碼開頭和 IIFE 結構：

/**
 * questions2.js
 *
 * 使用 IIFE (立即執行函式)，將題庫 push 到 window.questionSets
 */
;(function () {
  // 若尚未定義 window.questionSets，就先定義為空陣列
  window.questionSets = window.questionSets || [];

  // 將本檔案的題目推入 questionSets
  window.questionSets.push({

    // === 1) 聽力 (Listening) ===
    //    - 題材：商務會議、電話對話、演講等
    //    - 語速快、句子長，含數字、時間、地點、同音/相似詞
    //    - 題數：≥3
    listening: [
      /* 在此生成 高階多益聽力題目 */
    ],

    // === 2) 閱讀 (Reading) ===
    //    - 文章：學術/專業、300~500字，多段
    //    - 詞彙C1-C2，問題含主旨、細節、詞義、作者態度、結構分析
    //    - 題數：≥3
    reading: [
      /* 在此生成 高階多益閱讀題目 */
    ],

    // === 3) 語法 (Grammar) ===
    //    - 高級語法(倒裝、複雜條件、分詞構句、關係子句、虛擬語氣、易混淆時態)
    //    - 題數：≥3
    grammar: [
      /* 在此生成 高階多益語法題目 */
    ]

  });
})();

------------------------------------------------------------
# 需求與範例說明
1. 請先「檢查」並確保不會與之前題庫題目重複。
2. 產生**三大區塊**(listening, reading, grammar)。
3. **每一題**格式包含：
   - question (題目)
   - options (選項)
   - correctAnswer (正確答案索引)
   - explanation (詳細解析)
   - vocabulary (或 key terms) (重要單字)
   - learningPoints (學習重點)
4. 詞彙/難度：C1-C2，高級語法，多益常見陷阱
5. 題數：聽力/閱讀/語法各 **至少 3 題**

## 範例輸出 (示例)
範例僅展示單題結構；實際請輸出完整題庫：
```json
{
  "listening": [
    {
      "id": 1,
      "question": "During the conference call, which concern did the speaker emphasize?",
      "audioText": "We’re facing unexpected licensing issues that could delay production by up to two weeks...",
      "speaker": "male",
      "options": [
        "They have secured all licenses",
        "They need more staff training",
        "They need budget approval",
        "They changed the product name"
      ],
      "correctAnswer": 2,
      "explanation": "...",
      "vocabulary": [
        {"unexpected": "出乎意料的"}
      ],
      "learningPoints": [
        "注意 licensing, budget 等詞彙。"
      ]
    }
  ],
  "reading": [
    {
      "id": 1,
      "question": "What is the main point in paragraph two?",
      "passage": "...(學術/專業文章, 300~500字)...",
      "options": [
        "Incorrect statement A",
        "Correct statement B",
        "Incorrect statement C",
        "Incorrect statement D"
      ],
      "correctAnswer": 1,
      "explanation": "...",
      "vocabulary": [
        {"overhead": "經常性成本"}
      ],
      "learningPoints": [
        "閱讀要點：cross-functional, collaboration, etc."
      ]
    }
  ],
  "grammar": [
    {
      "id": 1,
      "question": "Which sentence correctly applies an inverted conditional?",
      "options": [
        "...",
        "...",
        "...",
        "..."
      ],
      "correctAnswer": 2,
      "explanation": "...",
      "vocabulary": [
        {"inverted conditional": "條件句倒裝"}
      ],
      "learningPoints": [
        "假設語氣第三條件句倒裝用法。"
      ]
    }
  ]
}
```
