/**
 * questions.js
 * 
 * 1. 使用 IIFE (立即執行函式)。
 * 2. 將原本的 questions 物件，改為 push 到 window.questionSets。
 */
(function () {
  // 若全域陣列不存在，就先定義一個空陣列
  window.questionSets = window.questionSets || [];

  // 把本檔案的題庫物件推進 questionSets
  window.questionSets.push({
    // ================== 聽力 (Listening) ==================
    listening: [
      // ===== 原本的 10 題 (id: 1 ~ 10) =====
      {
        id: 1,
        question: "What does the speaker imply about the quarterly sales targets?",
        audioText:
          "Despite the market slowdown, our quarterly sales targets were surpassed by nearly 15%. I'd like to thank the entire international team for their diligence. However, we must prepare for fluctuations in the upcoming period due to global uncertainties.",
        speaker: "male",
        options: [
          "They exactly met the initial targets",
          "They fell short of the expected figures",
          "They exceeded expectations by 15%",
          "They remained unaffected by global changes"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>說話者提到 "our quarterly sales targets were surpassed by nearly 15%"，顯示銷售業績超標。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>surpass (v.) - 超越</li>
            <li>diligence (n.) - 勤勉、努力</li>
            <li>fluctuation (n.) - 波動</li>
            <li>uncertainty (n.) - 不確定性</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            要注意 "surpassed" 代表「超過、優於」，這也是多益中常考的商業用字。
            另外 "due to global uncertainties" 暗示未來可能面臨變數。
          </p>
        `
      },
      {
        id: 2,
        question: "What is the main concern expressed by the woman?",
        audioText:
          "I'm concerned about the upcoming product launch timeline. With our design team behind schedule and the marketing campaign still unfinished, we might miss the initial release date. Let's consider adjusting our promotional strategy to accommodate these delays.",
        speaker: "female",
        options: [
          "The product design is already complete",
          "They are worried about missing the release deadline",
          "The marketing campaign is ahead of schedule",
          "They plan to cancel the upcoming product launch"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>談話中強調 "we might miss the initial release date"，顯示主要擔憂是無法如期上市。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>behind schedule - 落後進度</li>
            <li>accommodate (v.) - 適應、容納</li>
            <li>timeline (n.) - 時程</li>
            <li>promotional strategy (n.) - 行銷策略</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            多益聽力常考「時程、進度」等商務焦點字；"behind schedule" 與 "miss the release date" 的結合是常見考題陷阱。
          </p>
        `
      },
      {
        id: 3,
        question: "According to the conversation, why will the team need extra funding?",
        audioText:
          "We’ve encountered unexpected costs in software licensing and hardware upgrades. To maintain product quality, we’ll need an additional budget allocation for the next two quarters.",
        speaker: "male",
        options: [
          "To hire more staff for new projects",
          "To invest in overseas marketing",
          "To cover extra software and hardware costs",
          "To expand office facilities"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>說話者提到 "unexpected costs in software licensing and hardware upgrades" 需要額外資金。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>encounter (v.) - 遭遇</li>
            <li>licensing (n.) - 授權</li>
            <li>allocation (n.) - 分配</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            多益商務情境中，預算問題常考。關鍵字 "extra funding"、"additional budget allocation" 都暗示財務壓力來源。
          </p>
        `
      },
      {
        id: 4,
        question: "What does the woman suggest to address the shortage of staff?",
        audioText:
          "Given the pace of our current projects, we should consider hiring temporary contractors to handle the seasonal workload. Full-time recruitment may not be necessary yet, but we need flexibility in the coming months.",
        speaker: "female",
        options: [
          "Hiring more full-time employees",
          "Postponing all new projects",
          "Outsourcing to temporary contractors",
          "Canceling non-essential tasks"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>她建議 "hiring temporary contractors" 以解決人力不足問題，並強調需要彈性。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>pace (n.) - 步調</li>
            <li>contractor (n.) - 承包商、外包人員</li>
            <li>recruitment (n.) - 招聘</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            多益考試中常見 "temporary staff" 與 "outsourcing" 的情境，反映當前商務趨勢。
          </p>
        `
      },
      {
        id: 5,
        question: "What is the main purpose of the man's announcement?",
        audioText:
          "I'm pleased to announce that our overseas branch in Singapore has finalized a joint venture with a local tech startup. This partnership will facilitate our expansion into the Southeast Asian market, providing us with cutting-edge research opportunities.",
        speaker: "male",
        options: [
          "To discontinue operations in Asia",
          "To announce a partnership with a startup",
          "To hire additional research personnel",
          "To close the Singapore branch"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>談話中強調 "finalized a joint venture with a local tech startup" 及市場擴張，顯示要宣布的是合作案。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>joint venture (n.) - 合資企業、合作計畫</li>
            <li>facilitate (v.) - 促進</li>
            <li>cutting-edge (adj.) - 尖端的</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            注意 "joint venture" 與 "facilitate expansion" 是國際商務常見詞彙，易考在聽力段落中。
          </p>
        `
      },
      {
        id: 6,
        question: "What does the woman say about the market forecast?",
        audioText:
          "Our projections indicate a stagnant domestic market for the next quarter, largely due to lower consumer confidence. However, international demand for our premium product line seems promising.",
        speaker: "female",
        options: [
          "She believes domestic demand will increase significantly",
          "She expects the local market to remain stagnant",
          "She wants to discontinue the premium line",
          "She thinks consumer confidence is at its peak"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>她提到 "stagnant domestic market" 表示本土市場不振，但國際需求良好。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>stagnant (adj.) - 停滯的</li>
            <li>consumer confidence (n.) - 消費者信心</li>
            <li>premium product (n.) - 高端產品</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            聽力中若聽到 "stagnant" 或 "slowdown" 等，就代表需求下滑；需留意後續國際市場的對比。
          </p>
        `
      },
      {
        id: 7,
        question: "According to the male speaker, why is the meeting postponed?",
        audioText:
          "I just received a notice that the key stakeholder from our parent company couldn't catch her flight due to severe weather conditions. So the quarterly review meeting will be postponed until she arrives next week.",
        speaker: "male",
        options: [
          "Because the venue is under renovation",
          "Because the stakeholder missed her flight",
          "Because the project data is incomplete",
          "Because they decided to hold an online meeting instead"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>男性說話者明確指出 "couldn't catch her flight due to severe weather conditions" 為延期原因。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>stakeholder (n.) - 利害關係人</li>
            <li>parent company (n.) - 母公司</li>
            <li>severe (adj.) - 嚴重的</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            "postpone" 與 "delay" 等字眼常出現在多益考試的會議安排情境中，要注意是誰或什麼導致延期。
          </p>
        `
      },
      {
        id: 8,
        question: "What does the woman imply about the recent marketing survey?",
        audioText:
          "Interestingly, the results showed that brand loyalty among younger consumers is lower than anticipated, suggesting we may need a fresh approach to retain this demographic.",
        speaker: "female",
        options: [
          "They have decided to ignore younger consumers",
          "They are satisfied with current brand loyalty levels",
          "They need a new strategy to engage younger audiences",
          "They believe older consumers are no longer relevant"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>談到 "brand loyalty among younger consumers is lower" 與 "a fresh approach to retain this demographic" 表示需採新策略。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>brand loyalty (n.) - 品牌忠誠度</li>
            <li>retain (v.) - 保留</li>
            <li>demographic (n.) - 人口群體、客群</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            多益常考市場調查、客群分析相關字彙，如 "survey results"、"brand loyalty"、"demographic" 等。
          </p>
        `
      },
      {
        id: 9,
        question: "What is the main reason behind the shipping delay?",
        audioText:
          "Our freight forwarding partner just informed us that there's a congestion issue at the port due to new customs regulations. Until the backlog is cleared, all shipments will be delayed by at least three days.",
        speaker: "male",
        options: [
          "A sudden increase in product demand",
          "A major truck driver strike",
          "New customs rules causing port congestion",
          "An internal scheduling error"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>音檔說明 "congestion issue at the port" 與 "new customs regulations" 造成延誤。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>freight forwarding (n.) - 貨運代理</li>
            <li>congestion (n.) - 壅塞</li>
            <li>backlog (n.) - 積壓的工作或訂單</li>
            <li>customs regulations (n.) - 海關法規</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            進出口物流議題常見於多益聽力，"port congestion" 與 "customs regulations" 是經常出現的關鍵詞。
          </p>
        `
      },
      {
        id: 10,
        question: "What will the speaker likely do next regarding the client's request?",
        audioText:
          "They've asked us to revise our proposal to include a more comprehensive after-sales support plan. I'll gather feedback from the customer service team and prepare an updated draft by Friday.",
        speaker: "female",
        options: [
          "Refuse to revise the proposal",
          "Include a free trial instead of support",
          "Consult with the service team and rewrite the document",
          "Send the final invoice immediately"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>她明確表示 "gather feedback from the customer service team" 並 "prepare an updated draft"。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>revise (v.) - 修訂</li>
            <li>comprehensive (adj.) - 全面的</li>
            <li>draft (n.) - 草稿</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            多益聽力中常出現與提案書 (proposal) 修訂有關的動作，如 "revise"、"update"、"draft" 等。
          </p>
        `
      },

      // ===== 新增的 10 題 (id: 11 ~ 20) =====
      {
        id: 11,
        question: "According to the conversation, what led to the staff reorganization?",
        audioText:
          "After reviewing our sales performance, we realized that some departments were overstaffed, while others were lacking key personnel. To optimize efficiency and reduce overlapping responsibilities, we've decided to reassign certain teams. This should help us better meet client demands without increasing payroll costs.",
        speaker: "male",
        options: [
          "A shortage of qualified applicants",
          "An unexpected decrease in sales",
          "An imbalance in departmental staffing",
          "A directive from the government"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>對話中提到「部分部門過度用人，其他部門卻人手不足」，因此重新配置人力。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>overstaffed (adj.) - 人員過多的</li>
            <li>personnel (n.) - 人員、人事</li>
            <li>overlapping responsibilities - 重疊的職責</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            人力配置與預算控管是多益商業聽力常見考題，需注意「效率」與「成本」的關鍵字。
          </p>
        `
      },
      {
        id: 12,
        question: "What concern does the woman mention about the upcoming webinar?",
        audioText:
          "Our marketing team scheduled the webinar for 9 AM Eastern Time, but we've had feedback from European clients saying it's too late in their day. We might lose potential participants unless we adjust the schedule or provide a recorded session afterward.",
        speaker: "female",
        options: [
          "The webinar topic is too technical for new clients",
          "The session might be too long and detailed",
          "European clients find the time inconvenient",
          "They do not have enough marketing materials"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>女性提到歐洲客戶反映時間太晚，可能導致參與度下降。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>webinar (n.) - 線上研討會</li>
            <li>participant (n.) - 與會者</li>
            <li>recorded session - 錄製版的會議</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            常見商業情境：跨時區活動安排。注意時差問題以及「提供錄製回放」作為解決方案。
          </p>
        `
      },
      {
        id: 13,
        question: "Why does the male speaker believe the advertising budget needs to be increased?",
        audioText:
          "We've seen a surge in online traffic following our recent promotional campaigns, but conversions remain low. Allocating more funds to targeted ads could help us reach the right demographics and significantly improve our sales figures.",
        speaker: "male",
        options: [
          "To launch a global office expansion",
          "To update outdated product designs",
          "To invest in targeted advertising",
          "To cover rising shipping costs"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>男性說話者認為要投入更多預算於「精準投放廣告」，以提升轉換率。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>surge (n.) - 激增</li>
            <li>conversion (n.) - 轉換（此處指瀏覽者轉換成購買者）</li>
            <li>demographic (n.) - 人口群體、目標客層</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            多益聽力中常考「行銷成效」和「廣告預算」，要特別留意「轉換率」等用語。
          </p>
        `
      },
      {
        id: 14,
        question: "What does the woman imply about next quarter's market trends?",
        audioText:
          "Considering the recent shift in consumer preferences toward eco-friendly packaging, we anticipate a rise in demand for biodegradable containers. However, we should also prepare for possible supply chain disruptions if raw materials remain scarce.",
        speaker: "female",
        options: [
          "Consumers no longer care about sustainability",
          "Demand for biodegradable packaging will likely go up",
          "Eco-friendly products are becoming too expensive",
          "They should stop investing in new materials"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>女性表示「綠色包裝」的需求將提高，但需留意材料短缺風險。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>biodegradable (adj.) - 可生物分解的</li>
            <li>disruption (n.) - 中斷、干擾</li>
            <li>raw material (n.) - 原料</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            考生需掌握「市場趨勢預測」以及「供應鏈中斷」等商業用語，特別是綠色商品需求的關鍵詞。
          </p>
        `
      },
      {
        id: 15,
        question: "What is the main purpose of the woman's phone call?",
        audioText:
          "Hello, this is Rita from Megastar Logistics. I'm calling to confirm the pickup date for your bulk shipment. We noticed the items haven't cleared customs yet, so we want to discuss the revised timeline and any additional documents required.",
        speaker: "female",
        options: [
          "To promote a new product line",
          "To reschedule a shipment pickup",
          "To request a refund for damaged goods",
          "To change the shipping destination"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>她來電是為了確認交貨時間並討論延後時程，主因是貨品尚未通關。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>pickup (n.) - 提貨、取貨</li>
            <li>bulk shipment (n.) - 大宗貨物運輸</li>
            <li>revised timeline - 修訂後的時程</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            物流場景中常考「運送/提貨時間確認」、海關問題與文件需求。
          </p>
        `
      },
      {
        id: 16,
        question: "According to the man, what is the biggest challenge in international expansion?",
        audioText:
          "Although we have sufficient capital to open new branches abroad, our main hurdle is adapting to different regulatory environments. Navigating local labor laws and tax codes can be time-consuming, and we need legal experts to ensure compliance in each region.",
        speaker: "male",
        options: [
          "Finding enough financial resources",
          "Recruiting local marketing staff",
          "Understanding and complying with local regulations",
          "Securing office space in major cities"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>男性強調法規差異是最大的挑戰，需要聘請法律專家因應各國勞動法與稅制。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>hurdle (n.) - 障礙、困難</li>
            <li>compliance (n.) - 遵守</li>
            <li>tax code (n.) - 稅法</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            國際擴張的常見考題面向：融資、法規、文化差異等。此題著重於「合規性」的挑戰。
          </p>
        `
      },
      {
        id: 17,
        question: "What does the woman suggest doing to address the drop in customer satisfaction ratings?",
        audioText:
          "We've been receiving complaints about delayed support responses and unclear return policies. I'd recommend setting up a dedicated hotline for urgent inquiries and revising our FAQ section to clarify our product warranty and refund procedures.",
        speaker: "female",
        options: [
          "Eliminate the return policy entirely",
          "Hire more sales representatives",
          "Establish a specialized customer support channel",
          "Provide fewer details in the FAQ section"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>她建議開設專門的客服熱線，並更新常見問題區，以改善客戶滿意度。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>dedicated hotline - 專用電話線</li>
            <li>inquiry (n.) - 詢問</li>
            <li>refund procedures - 退款流程</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            多益常考「客服與售後服務」情境；要留意問題點（延遲回覆、不清楚退貨規範）與解決方案。
          </p>
        `
      },
      {
        id: 18,
        question: "What does the male speaker propose to streamline the product testing phase?",
        audioText:
          "Given the complexity of our new prototype, I suggest incorporating automated testing tools to reduce manual errors. This will speed up the quality assurance process and allow the team to focus on critical design improvements.",
        speaker: "male",
        options: [
          "Extending the product launch deadline",
          "Replacing the current QA team",
          "Using automation to expedite testing",
          "Eliminating testing entirely"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>男性提議使用自動化測試工具，縮短測試時間並減少人工失誤。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>prototype (n.) - 原型</li>
            <li>automated testing (n.) - 自動化測試</li>
            <li>quality assurance (QA) - 品質保證</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            在科技與研發情境的多益聽力題中，常出現測試、品質保證與效率提升等關鍵詞。
          </p>
        `
      },
      {
        id: 19,
        question: "How does the woman plan to handle the rising material costs?",
        audioText:
          "Because steel prices have nearly doubled, I've negotiated a long-term supply contract with our primary vendor. This way, we lock in current rates, even if the market continues to fluctuate. We'll also explore alternative materials, but for now, the contract offers some stability.",
        speaker: "female",
        options: [
          "She will discontinue production altogether",
          "She will raise product prices immediately",
          "She will establish a fixed-rate agreement with the supplier",
          "She will reduce the quality of the materials used"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>她透過與供應商簽訂長期合約，鎖定材料價格，以對抗市場波動。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>lock in (v.) - 鎖定</li>
            <li>fluctuate (v.) - 波動</li>
            <li>stability (n.) - 穩定性</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            在多益聽力中，價格談判和供應鏈管理是常考場景，特別是「長期合約」作為因應策略。
          </p>
        `
      },
      {
        id: 20,
        question: "What does the man imply about the holiday season sales strategy?",
        audioText:
          "We need to launch our holiday promotions earlier this year, given last quarter's underperformance. A tiered discount system could attract both budget shoppers and those looking for premium bundles. Timing is crucial, so I'd like our marketing team to finalize the campaign details by next Monday.",
        speaker: "male",
        options: [
          "He believes starting promotions later will increase demand",
          "He wants to target only high-end customers",
          "He plans a multi-level discount approach to appeal to different buyers",
          "He suggests canceling the holiday campaign altogether"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>他打算採用「分級折扣」策略，能同時吸引預算型消費者與尋求高價組合的客群。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>tiered discount system - 分層式折扣系統</li>
            <li>underperformance (n.) - 表現不佳</li>
            <li>bundle (n.) - 組合包</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            在多益商業銷售情境中，促銷策略與時機 (timing) 是常見考點，需抓住關鍵細節。
          </p>
        `
      }
    ],

    // ================== 閱讀 (Reading) ==================
    reading: [
      // ===== 原本的 10 題 (id: 1 ~ 10) =====
      {
        id: 1,
        question: "What is the main purpose of this article?",
        passage: `In an effort to address declining consumer trust, the Global Data Privacy Summit recently convened in Brussels to discuss stricter regulations on data collection and usage. Over 500 delegates from technology firms, government agencies, and advocacy groups participated in panel discussions examining the long-term impact of unregulated data mining. The summit's keynote speaker, a leading cybersecurity expert, highlighted the urgent need for transparent corporate practices and consumer education.

                    Conference attendees also explored emerging technologies designed to safeguard user data. Biometric authentication and end-to-end encryption were showcased as potential solutions. However, many raised concerns about the scalability of these technologies, particularly in regions with limited internet infrastructure. Despite the challenges, there was a consensus that collaboration between private and public sectors is essential to creating a balanced framework for data governance.`,
        options: [
          "To introduce a new technological device for data encryption",
          "To summarize discussions from the Global Data Privacy Summit",
          "To advertise government-led cybersecurity initiatives",
          "To recruit experts for an upcoming technology event"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>文章一開始提到 "the Global Data Privacy Summit recently convened..." 並描述大會討論重點，因此主要目的是「總結隱私高峰會的討論」。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>delegate (n.) - 代表、與會者</li>
            <li>unregulated (adj.) - 未受管制的</li>
            <li>biometric (adj.) - 生物識別技術的</li>
            <li>scalability (n.) - 可擴展性</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            文章結構以「引言 - 技術討論 - 後續展望」呈現，重點是隱私與數據安全問題，以及不同組織的觀點。
          </p>
        `
      },
      {
        id: 2,
        question: "Which of the following best describes the research findings mentioned in paragraph 2?",
        passage: `A recent study conducted by the International Council on Sustainable Development has revealed that companies integrating environmentally friendly practices not only reduce their carbon footprint but also experience a surge in brand loyalty. Researchers surveyed over 10,000 consumers across 15 countries, finding that 78% were more likely to support businesses that actively reduce waste, conserve energy, or employ green manufacturing processes.

                     Interestingly, the study also noted a significant correlation between transparent reporting of sustainability goals and increased consumer engagement. When companies publicly shared their progress on cutting emissions or minimizing plastic use, customers were more likely to engage positively on social media and recommend the brand to friends. The findings suggest that proactive environmental measures, combined with open communication, can substantially bolster a company's competitive edge in a crowded global market.`,
        options: [
          "They indicate that consumers do not value environmental policies",
          "They show a decrease in brand loyalty for eco-friendly companies",
          "They highlight a link between green practices and increased customer support",
          "They primarily focus on the financial drawbacks of sustainability"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>第二段強調 "78% were more likely to support businesses that actively reduce waste..."，顯示綠色作為與顧客支持度有關。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>sustainable (adj.) - 可持續的</li>
            <li>carbon footprint (n.) - 碳足跡</li>
            <li>proactive (adj.) - 主動積極的</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            文章提到環保措施可帶動顧客忠誠度，是「環保」和「品牌忠誠」之間的正向關係。
          </p>
        `
      },
      {
        id: 3,
        question: "Which statement best captures the author's attitude in the third paragraph?",
        passage: `While the recent expansion of cryptocurrency markets has garnered widespread media coverage, many analysts remain skeptical about the long-term stability of digital coins. According to financial experts, the market's rapid fluctuations—often triggered by social media sentiment—highlight a lack of regulatory oversight. This volatility raises concerns that inexperienced investors might incur substantial losses, further fueling debates on implementing stricter investor protection laws.

                     Nevertheless, some proponents argue that digital assets represent a revolutionary shift in how financial transactions are conducted, offering decentralization and potential cost savings. The author, however, maintains a cautious stance, acknowledging both the innovative potential and the inherent risks that cryptocurrencies pose to ordinary consumers and institutional investors alike.`,
        options: [
          "Enthusiastic about the unlimited potential of cryptocurrencies",
          "Indifferent to the debates on financial innovations",
          "Alarmed by the widespread acceptance and promotion of crypto",
          "Cautiously acknowledging both the benefits and risks"
        ],
        correctAnswer: 3,
        explanation: `
          <h4>解析：</h4>
          <p>文末提到作者 "maintains a cautious stance"。說明作者同時看到 "innovative potential" 與 "inherent risks"。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>fluctuation (n.) - 波動</li>
            <li>oversight (n.) - 監管</li>
            <li>decentralization (n.) - 去中心化</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            TOEIC 閱讀題常問作者態度；此處關鍵字 "cautious stance" 即表示「既看好優勢，也警惕風險」。
          </p>
        `
      },
      {
        id: 4,
        question: "What can be inferred from the details about the company's workforce strategy?",
        passage: `Global Tech Solutions, a multinational software provider, recently announced a robust workforce diversification plan aimed at expanding its remote and cross-functional teams. Over the past fiscal year, they have increased international hires by 40%, embracing a broader range of technical backgrounds and language proficiencies to better serve regional markets. Additionally, they have implemented flexible working arrangements, allowing employees to choose schedules that align with varying time zones and family commitments.

                     Internal surveys show that this approach not only decreases turnover but also enhances employee satisfaction. However, some managers expressed concerns about maintaining cohesive communication among geographically dispersed teams. To address this, Global Tech Solutions has invested heavily in virtual collaboration tools and intercultural training programs. While still in its early stages, the company believes this initiative will foster a more inclusive, dynamic environment, ultimately driving innovation and global market penetration.`,
        options: [
          "Global Tech Solutions is reducing its remote workforce",
          "Flexible scheduling has increased employee turnover",
          "Cohesive communication is a potential challenge for international teams",
          "The company focuses only on local hires and time zones"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>文章提到一些管理者擔心分散團隊間的溝通問題，故溝通是一大挑戰。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>workforce diversification - 人力多元化</li>
            <li>turnover (n.) - 人員流動率</li>
            <li>inclusive (adj.) - 包容的</li>
            <li>market penetration (n.) - 市場滲透</li>
          </ul>
          <h4>學習重點：</h4>
          <p>跨國或遠距工作模式帶來的溝通問題，是多益常見考題焦點。</p>
        `
      },
      {
        id: 5,
        question: "What does the author primarily emphasize in the first paragraph?",
        passage: `The growing popularity of online certification programs has led many professionals to question the long-standing value of traditional degrees. With institutions ranging from Ivy League universities to local community colleges now offering digital badges and micro-credentials, the educational landscape appears more competitive and accessible. However, critics argue that not all programs maintain consistent quality, and some question whether these shorter courses sufficiently develop the critical thinking skills typically associated with extended study.

                     To address these concerns, several accrediting bodies have begun establishing universal standards for online programs, ensuring that course outcomes meet industry requirements. The shift also places greater responsibility on learners to research program reputations and verify accreditation. Nonetheless, many see the rise of online credentials as a transformative force that democratizes education and fosters continuous learning in fast-evolving job markets.`,
        options: [
          "The cost-effectiveness of traditional degree programs",
          "The need to ban online certification programs",
          "The growing trend and debate around online credentials",
          "The irrelevance of critical thinking in modern education"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>首段重點為線上認證普及，以及與傳統學位價值的爭論。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>micro-credential (n.) - 微認證</li>
            <li>landscape (n.) - (事物的)全貌、形勢</li>
            <li>democratize (v.) - 使民主化、使普及</li>
          </ul>
          <h4>學習重點：</h4>
          <p>TOEIC 閱讀常見「新趨勢 vs. 傳統」對比，並問文章主要強調點。</p>
        `
      },
      {
        id: 6,
        question: "According to the passage, why are investors closely monitoring bio-plastics research?",
        passage: `As environmental legislation tightens around the globe, many corporations have begun exploring bio-based plastics as an alternative to traditional petroleum-derived materials. Researchers claim these innovative polymers could reduce carbon emissions and mitigate landfill waste by decomposing more rapidly under the right conditions. However, cost and scalability remain significant barriers to widespread adoption, forcing companies to weigh immediate expenses against long-term sustainability gains.

                     In response, venture capitalists and private equity firms have funneled considerable funding into bio-plastics startups, hoping to capitalize on an emerging market that promises both environmental benefits and profitable returns. Analysts predict that if mass production becomes feasible, early investors stand to gain substantial rewards. Nonetheless, skepticism persists regarding the actual biodegradability of certain bio-plastics, with critics demanding more comprehensive lifecycle assessments before fully endorsing these materials.`,
        options: [
          "Because petroleum-derived materials are cheaper to produce",
          "Because bio-plastics may become a profitable and eco-friendly market",
          "Because they believe environmental legislation will be relaxed soon",
          "Because companies refuse to fund research in that area"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>投資人看好「環保 + 利潤」並存的潛力市場。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>legislation (n.) - 法規</li>
            <li>petroleum-derived (adj.) - 石油衍生的</li>
            <li>feasible (adj.) - 可行的</li>
            <li>biodegradability (n.) - 生物分解性</li>
          </ul>
          <h4>學習重點：</h4>
          <p>投資與潛力市場的題材常出現在 TOEIC 閱讀，重點為「利潤 + 環境效益」雙重吸引。</p>
        `
      },
      {
        id: 7,
        question: "Which statement is most strongly supported by the details in paragraph 2?",
        passage: `Contrary to popular belief, implementing a four-day workweek does not necessarily compromise productivity. A pilot program conducted across multiple international offices demonstrated that employees, given an extra day of rest, exhibited higher morale and efficiency. Absenteeism also dropped significantly, with workers feeling more recharged and motivated. Despite initial concerns, team collaboration improved due to better work-life balance, leading to fewer burnout cases and enhanced creativity.

                    Managers, however, reported logistical challenges. Scheduling client meetings across time zones grew more complex, and meeting deadlines for large-scale projects demanded stricter planning. Some executives worried that the compressed schedule might deter potential clients who expect round-the-clock availability. Nevertheless, the overall results indicated that productivity gains often outweighed the inconveniences, suggesting that a four-day workweek could be a viable option for companies prioritizing employee well-being.`,
        options: [
          "Employees in the pilot program reported decreased morale",
          "Executives found the four-day workweek unsustainable",
          "The four-day workweek pilot indicated higher productivity despite scheduling issues",
          "Burnout cases increased due to a compressed schedule"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>整段結論為：儘管排程更複雜，但實施結果顯示「生產力」依然提升。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>absenteeism (n.) - 缺勤</li>
            <li>burnout (n.) - 職業倦怠</li>
            <li>round-the-clock (adj.) - 24 小時的</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益閱讀常問試點計畫成果及優劣勢。此題重點：四天工作制仍能提高效率。</p>
        `
      },
      {
        id: 8,
        question: "What can be inferred about consumer behavior from the study mentioned?",
        passage: `A major retail chain initiated a pilot study to analyze consumer responses to dynamic pricing—a strategy that adjusts product costs based on demand, time of day, or stock levels. Researchers discovered that shoppers are generally receptive to slight price fluctuations when they perceive a fair rationale behind them, such as off-peak discounts or limited promotional inventory. However, sudden or unjustified hikes in price led to customer dissatisfaction and negative reviews on social media.

                    Interestingly, the data also showed that transparent communication about pricing policies can alleviate potential backlash. Stores that displayed detailed notices explaining why prices changed saw fewer complaints and, in some cases, improved customer loyalty. This suggests that while dynamic pricing can increase profit margins, it must be implemented with careful messaging to maintain consumer trust.`,
        options: [
          "Consumers never react negatively to changing prices",
          "Shoppers appreciate hidden price adjustments",
          "Transparent communication can reduce negative feedback",
          "Dynamic pricing does not affect customer loyalty at all"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>研究顯示商家若公開說明變價原因，就能減少負面反應。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>dynamic pricing (n.) - 動態定價</li>
            <li>backlash (n.) - 強烈反對</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益閱讀愛考「策略 vs. 消費者行為」；透明度常能降低負面聲量。</p>
        `
      },
      {
        id: 9,
        question: "Which aspect of the company's development is emphasized in the third paragraph?",
        passage: `Founded just five years ago, WaveAnalytics rapidly evolved from a niche data visualization tool into a comprehensive business intelligence platform. After securing multiple venture capital rounds, the company attracted top talent from leading tech firms and expanded its product suite to cater to diverse industries. Currently, WaveAnalytics software is used by major retail chains, healthcare providers, and financial institutions seeking real-time insights from large datasets.

                     In the third year of operation, strategic partnerships with cloud service providers propelled WaveAnalytics into international markets. The platform’s advanced analytics and customizable dashboards garnered recognition for reducing clients’ decision-making time. Most notably, CEO Samantha Davis attributed the company's success to a corporate culture that values continual learning, encouraging employees to attend workshops and collaborate across departments. This internal ethos, combined with an outward focus on client-centric product innovation, has positioned WaveAnalytics as a formidable challenger to established industry players.`,
        options: [
          "Its reliance on outdated analytics methods",
          "Its focus on hardware manufacturing",
          "Its emphasis on a collaborative company culture",
          "Its plan to discontinue cloud service partnerships"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>第三段強調 CEO 提到「公司文化」重視持續學習與跨部門合作，是成功關鍵。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>comprehensive (adj.) - 全面的</li>
            <li>dataset (n.) - 數據集</li>
            <li>client-centric (adj.) - 以客戶為中心的</li>
            <li>formidable (adj.) - 強大的</li>
          </ul>
          <h4>學習重點：</h4>
          <p>常考：公司文化對於發展的重要性，以及技術與文化並重。</p>
        `
      },
      {
        id: 10,
        question: "Which statement can be inferred about the global textile market from paragraph 2?",
        passage: `The global textile market has seen a gradual shift towards more sustainable practices, with major brands adopting organic fabrics and water-efficient dyeing technologies. However, a recent industry report by GreenEarth Insights highlights that despite these positive developments, fast-fashion consumer habits continue to drive up overall production volumes. This paradoxical situation means that even though per-garment pollution may be decreasing, the total environmental impact remains high.

                     Experts argue that genuine progress requires not just greener manufacturing methods, but also a cultural change in how consumers perceive and dispose of clothing. Overproduction leads to enormous waste in landfills and puts a strain on natural resources. While several pilot projects aim to promote recycling and circular fashion, the report concludes that a collective effort, involving retailers, policymakers, and consumers, is necessary to achieve real and lasting environmental benefits.`,
        options: [
          "Sustainable methods alone have completely solved pollution issues",
          "The public has stopped buying fast-fashion items",
          "The overall environmental impact remains high due to high production volumes",
          "Organic fabrics are no longer used by major brands"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>文章指出「單件污染雖減少，但產量仍很高」→ 整體環境衝擊依舊巨大。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>fast-fashion (n.) - 快速時尚</li>
            <li>circular fashion (n.) - 循環時尚</li>
            <li>landfill (n.) - 垃圾掩埋場</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益常考「局部環保成效 vs. 整體產業規模」的反差。</p>
        `
      },

      // ===== 新增的 10 題 (id: 11 ~ 20) =====
      {
        id: 11,
        question: "What is the main concern discussed in the first paragraph?",
        passage: `In recent years, digital marketplaces have surged in popularity, allowing entrepreneurs of all sizes to reach a global customer base with minimal overhead costs. However, this rapid expansion has also led to increasing scrutiny over seller accountability and product authenticity. Many online platforms face the challenge of verifying the legitimacy of thousands of new vendors each month, raising concerns about counterfeit goods, privacy breaches, and consumer trust.

        In response, major e-commerce giants are implementing stricter onboarding procedures, including background checks and mandatory identity verification. Some have even introduced automated systems to detect fraudulent listings by analyzing pricing anomalies and suspicious seller activities. While these measures can bolster trust, critics argue they may inadvertently create barriers for small businesses lacking extensive documentation. Thus, the digital marketplace realm remains a dynamic frontier, balancing innovation with the need for robust consumer protections.`,
        options: [
          "Rising costs of running traditional retail stores",
          "Decreasing global demand for online shopping",
          "Challenges in ensuring seller authenticity and consumer trust",
          "Opportunities for small entrepreneurs to open local shops"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>文章重點為「平台需驗證大量新賣家，造成假貨、隱私漏洞與信任度問題」。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>scrutiny (n.) - 審查</li>
            <li>authenticity (n.) - 真實性</li>
            <li>counterfeit (adj.) - 偽造的</li>
            <li>fraudulent (adj.) - 欺詐的</li>
          </ul>
          <h4>學習重點：</h4>
          <p>線上市場常見考題：安全性、假貨、第三方賣家核實等。</p>
        `
      },
      {
        id: 12,
        question: "What is one potential downside of the automated systems mentioned?",
        passage: `E-commerce platforms employ advanced algorithms to identify red flags associated with fraudulent seller behavior. For instance, a sudden spike or drastic reduction in product prices can trigger an investigation. Additionally, AI tools scan product descriptions for misleading keywords or repeated listings, flagging suspicious activity in real time. While these mechanisms significantly reduce scam incidents, they also risk penalizing legitimate sellers who employ aggressive promotional strategies or engage in rapid inventory turnover.

        To mitigate such risks, platforms often provide an appeal process, allowing flagged vendors to submit documentation to verify their authenticity. Nonetheless, small businesses, especially those operating on thin margins, may find it challenging to gather the extensive paperwork required to clear their names quickly. Overreliance on automated detection could potentially discourage budding entrepreneurs, affecting market diversity. Critics suggest that a hybrid approach—combining algorithmic monitoring with human oversight—would strike a better balance between security and inclusivity.`,
        options: [
          "They allow scammers to operate freely without detection",
          "They heavily rely on human input rather than algorithms",
          "They could unjustly penalize legitimate sellers with abrupt price changes",
          "They ignore seller-provided documentation entirely"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>演算法系統可能誤判採用促銷手段的合法賣家，導致不公平懲罰。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>flag (v.) - 標記</li>
            <li>turnover (n.) - (庫存)周轉率；(人員)流動率</li>
            <li>margins (n.) - 利潤空間</li>
          </ul>
          <h4>學習重點：</h4>
          <p>程式誤判導致合法賣家被阻擋，是常見電商議題。</p>
        `
      },
      {
        id: 13,
        question: "Which statement is best supported by the data on employee engagement mentioned in the passage?",
        passage: `A multinational electronics firm conducted a comprehensive survey assessing employee engagement across its various global branches. Results indicated that offices with proactive management styles and ample professional development opportunities scored significantly higher in job satisfaction. Furthermore, locations where employees felt empowered to voice concerns without retaliation showed a 25% increase in overall productivity metrics.

        Despite these positive correlations, the report highlighted notable discrepancies: some regional branches struggled to implement open-door policies due to cultural norms or hierarchical structures. Additionally, limited training budgets constrained career advancement, particularly in emerging markets. Analysts suggest that bridging these gaps will be crucial for maintaining cohesive corporate values and reducing turnover, which can otherwise cost the firm millions in recruitment and onboarding expenses.`,
        options: [
          "Employees are generally less productive in branches with open-door policies",
          "Providing career development and open communication enhances employee satisfaction",
          "Cultural norms have no effect on engagement levels",
          "Limiting training budgets has no impact on turnover"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>數據顯示「專業成長機會 + 能暢所欲言」的辦公室擁有更高員工滿意度與生產力。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>engagement (n.) - 參與度、投入度</li>
            <li>hierarchical (adj.) - 階級制的</li>
            <li>turnover (n.) - 人員流動率</li>
          </ul>
          <h4>學習重點：</h4>
          <p>此題強調員工投入度的影響因素：溝通、培訓、管理風格等。</p>
        `
      },
      {
        id: 14,
        question: "Why does the report suggest a hybrid office model could be advantageous?",
        passage: `With the global pandemic reshaping work environments, a growing number of companies are adopting hybrid office models, where employees split their time between remote work and on-site collaboration. According to a recent consultancy report, this approach not only reduces operational costs but also provides flexibility that can improve employee morale. By leveraging digital tools, teams can maintain effective communication and real-time project tracking.

        However, some challenges persist. For instance, remote workers may feel isolated if not given adequate support or clear performance metrics. Meanwhile, on-site teams might struggle to coordinate schedules across different time zones and work styles. The report concludes that while the hybrid model strikes a balance between autonomy and face-to-face interaction, companies must invest in robust infrastructure and supportive management practices to maximize the benefits. This includes offering professional development courses tailored for remote work and setting transparent guidelines for team coordination.`,
        options: [
          "It simplifies all scheduling conflicts without any infrastructure costs",
          "It eliminates the need for on-site interactions altogether",
          "It can lower expenses while improving overall employee satisfaction",
          "It only benefits companies with a small workforce"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>報告指出混合辦公可「降低營運成本 & 提高員工士氣」，但需投資管理和基礎設施。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>hybrid office model - 混合辦公模式</li>
            <li>autonomy (n.) - 自主性</li>
            <li>infrastructure (n.) - 基礎設施</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益商業文章常考混合辦公優勢：彈性、成本、士氣提升等。</p>
        `
      },
      {
        id: 15,
        question: "Which factor is highlighted as a key driver for the new tourism trends?",
        passage: `Tourism boards worldwide have noticed a marked shift in traveler preferences. Instead of typical sightseeing tours in metropolitan hotspots, tourists are increasingly seeking immersive cultural experiences, wellness retreats, and ecologically responsible accommodations. Industry analysts attribute this change partly to social media influencers who share personal narratives and authentic local interactions, enticing followers to explore off-the-beaten-path destinations.

        Moreover, the impact of growing environmental awareness cannot be underestimated. Many travelers consciously select eco-friendly lodgings that implement solar energy, rainwater harvesting, or sustainable waste management. Government authorities in popular regions now impose stricter guidelines on resorts to protect local habitats and minimize ecological footprints. This synergy between consumer demand and regulatory measures suggests a future where sustainable tourism is not just a niche segment but a mainstream expectation.`,
        options: [
          "A decline in global environmental consciousness",
          "A surge in low-cost travel options worldwide",
          "An increased desire for experiential and sustainable travel",
          "A preference for traditional guided city tours"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>文章強調旅客想要「深度文化體驗+環保住宿」，以及環保意識的成長。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>immersive (adj.) - 身臨其境的</li>
            <li>off-the-beaten-path (adj.) - 不走尋常路的</li>
            <li>rainwater harvesting (n.) - 雨水收集</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益閱讀裡「旅遊趨勢」常考「消費者偏好變化」與「永續、在地體驗」等方向。</p>
        `
      },
      {
        id: 16,
        question: "What can be inferred about the collaboration between the robotics start-up and the automotive manufacturer?",
        passage: `ZenMech Robotics recently entered a strategic partnership with NovaDrive, a leading automotive manufacturer, to develop autonomous assembly line technologies. By integrating ZenMech's cutting-edge robotic arms and NovaDrive's production expertise, the two companies aim to reduce human error, accelerate manufacturing speed, and enhance workplace safety. Prototypes demonstrated a 30% reduction in assembly time and a notable decrease in material waste.

        Despite these advancements, engineers face persistent challenges in synchronizing complex robotic operations with existing factory layouts. Additionally, labor unions have voiced concerns about potential job displacement, urging both companies to commit to reskilling initiatives. If successfully implemented, however, this collaboration could set a new standard for smart manufacturing, potentially reshaping the industry on a global scale.`,
        options: [
          "They plan to eliminate all labor unions in existing factories",
          "They aim to integrate advanced robotics to improve manufacturing efficiency",
          "They are scaling back on automation due to high error rates",
          "They intend to reduce the safety measures currently in place"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>合作目標是在生產線導入先進機器人技術，提高生產效率並減少人為錯誤。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>autonomous assembly line - 自動化生產線</li>
            <li>prototype (n.) - 原型</li>
            <li>displacement (n.) - 取代</li>
          </ul>
          <h4>學習重點：</h4>
          <p>看出文中兩家公司合作的主要目的：提升效率、安全與國際競爭力。</p>
        `
      },
      {
        id: 17,
        question: "Which reason best explains why some branches struggled with supply chain issues?",
        passage: `Magnus Foods, a global distributor of packaged snack products, revealed in its latest quarterly report that certain branches experienced prolonged shipping delays and production bottlenecks. Contributing factors include fluctuating commodity prices, tighter border regulations, and inconsistent quality from third-party suppliers. In some cases, raw materials like cocoa and almonds were held up due to increased inspection protocols aimed at ensuring safety standards.

        Compounding these challenges, sudden spikes in consumer demand for healthier snack alternatives meant that plants using newly-sourced organic ingredients lacked robust vendor networks. Consequently, the company had to scramble for secondary suppliers to maintain production schedules. Executives acknowledge that while overall sales remain strong, localized disruptions can jeopardize brand reliability. The report emphasizes the need for agile contingency planning and diversified sourcing strategies moving forward.`,
        options: [
          "They focused solely on local suppliers without expanding globally",
          "They used the same strategies as their competitors",
          "They encountered stricter regulations, inconsistent suppliers, and sudden demand changes",
          "They had an abundance of raw materials but no buyers"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>報告指出「法規更嚴、供應商不穩、健康零食需求暴增」等是導致供應鏈問題的主因。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>bottleneck (n.) - 瓶頸</li>
            <li>inspection protocol (n.) - 檢驗程序</li>
            <li>contingency planning - 應變計畫</li>
          </ul>
          <h4>學習重點：</h4>
          <p>TOEIC 閱讀裡常見的供應鏈延誤因素：法規、供應不穩、需求劇增等多重因素疊加。</p>
        `
      },
      {
        id: 18,
        question: "Which conclusion can be drawn about the company's sustainability policy?",
        passage: `EcoMarine Cargo Solutions has long prided itself on its green policies, claiming a 40% reduction in carbon emissions over the past five years. However, an independent audit revealed inconsistencies in their offshore shipping routes, suggesting that actual emissions might be higher than reported. While the company did invest in cleaner fuel alternatives for its fleet, the audit indicates that inefficient route planning offset much of the environmental benefit.

        In light of these findings, EcoMarine announced a partnership with an AI-based logistics platform to optimize navigation paths and improve tracking of fuel consumption. The executive team also pledged greater transparency by releasing quarterly updates verified by a third party. Although critics question whether these measures can swiftly rectify past discrepancies, experts note that EcoMarine's open acknowledgment of shortcomings is a step toward genuine accountability.`,
        options: [
          "EcoMarine has fully resolved all emission-related issues",
          "The audit proved that EcoMarine never reduced emissions",
          "Inefficient route planning undermined some of EcoMarine’s sustainability efforts",
          "EcoMarine refuses to work with third-party auditors"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>審核指出雖然使用清潔燃料，但航線規劃不善使減排成果被抵消了一部分。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>offset (v.) - 抵消</li>
            <li>discrepancy (n.) - 落差、不一致</li>
            <li>accountability (n.) - 問責、負責</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益題常考公司聲明 vs. 審計結果。關鍵在「是否存在矛盾或不足之處」。</p>
        `
      },
      {
        id: 19,
        question: "Why have some local business owners opposed the construction of a new resort?",
        passage: `In an effort to attract foreign visitors, the Lakeshore City Council approved plans for a new luxury resort near the iconic lakefront. Proponents of the project argue it will bolster the local economy by creating jobs and modernizing recreational facilities. However, many small business owners remain skeptical, fearing that the massive development could overshadow family-run establishments and inflate property values.

        Furthermore, environmental groups have expressed concerns about disrupting the lake's fragile ecosystem. Dredging activities required for the resort's marina could alter water quality, affecting local fisheries. While the council insists that they will enforce stringent environmental guidelines, activists demand comprehensive impact assessments. With public opinion divided, the city must weigh economic gains against potential social and ecological repercussions.`,
        options: [
          "They believe it will significantly improve the local environment",
          "They expect it to create more affordable housing for residents",
          "They are worried that the resort will overshadow smaller businesses and raise property costs",
          "They plan to run new eco-tours in partnership with the resort"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>小商家擔心大型度假村出現後會衝擊當地生意並推高房價。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>dredging (n.) - 疏浚</li>
            <li>marina (n.) - 遊艇碼頭</li>
            <li>repercussion (n.) - 後果、影響</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益中，城市開發通常涉及「經濟收益 vs. 生態/在地商家」之平衡。</p>
        `
      },
      {
        id: 20,
        question: "What common theme do the examples in paragraph 2 illustrate?",
        passage: `A growing body of evidence suggests that a lack of cross-departmental collaboration can stifle innovation, no matter how talented individual teams may be. For instance, in a large pharmaceutical firm, the research division developed groundbreaking compounds but failed to communicate their potential applications to the marketing and distribution branches. Consequently, promising products languished in late-stage trials without commercial support.

        Similarly, a tech startup boasting an impressive coding team launched a platform with cutting-edge features, yet the user interface remained unintuitive due to insufficient input from the design department. In both cases, the absence of integrated feedback loops inhibited timely refinements and undermined final outcomes. Experts argue that fostering a culture of transparency and routine inter-team evaluations is vital for converting specialized expertise into market-ready innovations.`,
        options: [
          "They highlight the benefits of isolated departmental efforts",
          "They demonstrate how separate teams excel independently",
          "They show that poor inter-team communication harms product success",
          "They prove that design alone determines a product’s fate"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>兩個例子都顯示部門間缺乏溝通導致好東西無法成功商業化。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>languish (v.) - 被忽視、受冷落</li>
            <li>feedback loop (n.) - 回饋循環</li>
            <li>stifle (v.) - 抑制</li>
          </ul>
          <h4>學習重點：</h4>
          <p>TOEIC 閱讀常考跨部門合作的重要性及失敗案例。</p>
        `
      }
    ],

    // ================== 語法 (Grammar) ==================
    grammar: [
      // ===== 原本的 10 題 (id: 1 ~ 10) =====
      {
        id: 1,
        question: "Select the correct form: Had it not been for the unexpected delay, ____ .",
        options: [
          "we will finish the project on time",
          "we would have finished the project on time",
          "we would finish the project on time",
          "we will have finished the project on time"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>句型 "Had it not been for..." 為倒裝用法，暗示與過去事實相反，故使用 "would have + p.p."。</p>
          <h4>重要單字 / 短語：</h4>
          <ul>
            <li>Had it not been for... - 若不是因為...</li>
          </ul>
          <h4>學習重點：</h4>
          <p>這是「與過去事實相反」的假設（第三條件句）。</p>
        `
      },
      {
        id: 2,
        question: "Choose the correct usage: Our manager insisted that the issue ____ immediately.",
        options: [
          "will be investigated",
          "be investigated",
          "is investigated",
          "would be investigated"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>"insist" 搭配虛擬語氣時，從句用原形動詞 "be investigated"。</p>
          <h4>重要單字 / 短語：</h4>
          <ul>
            <li>insist that + S + (should) + V (原形) - 堅持要...</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益常考動詞 "suggest, insist, recommend, demand" + that + 原形。</p>
        `
      },
      {
        id: 3,
        question: "Select the best completion: The CEO will not approve the budget proposal ____ .",
        options: [
          "unless all departments have submitted their forecasts",
          "if all departments have submitted their forecasts",
          "in case all departments had submitted their forecasts",
          "whereas all departments submit their forecasts"
        ],
        correctAnswer: 0,
        explanation: `
          <h4>解析：</h4>
          <p>句意為「除非所有部門先交預測，否則CEO不批准預算提案」，用 "unless"。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>forecast (n.) - 預測</li>
          </ul>
          <h4>學習重點：</h4>
          <p>"unless" 等於 "if...not" 的結構，是多益常考的條件連接詞。</p>
        `
      },
      {
        id: 4,
        question: "Fill in the blank with the correct verb form: The new guidelines ____ next Monday.",
        options: [
          "are implementing",
          "will implement",
          "will be implemented",
          "implement"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>「新指引被實施」，需被動："will be implemented"。</p>
          <h4>學習重點：</h4>
          <p>多益常考被動語態。注意主動 vs. 被動區別。</p>
        `
      },
      {
        id: 5,
        question: "Complete the sentence: Not only ____ the conference well-organized, but it also provided valuable networking opportunities.",
        options: [
          "it was",
          "was",
          "was it",
          "it is"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>倒裝句，"Not only was it well-organized..."。</p>
          <h4>學習重點：</h4>
          <p>「Not only + 助動詞/Be + 主詞 + 動詞... but also...」。</p>
        `
      },
      {
        id: 6,
        question: "Which sentence is correctly written?",
        options: [
          "Should you have any questions, you can contact the HR department.",
          "Should have you any questions, you contact can the HR department.",
          "You should any questions have contact if the HR department.",
          "Should you contacted the HR department, you have any questions."
        ],
        correctAnswer: 0,
        explanation: `
          <h4>解析：</h4>
          <p>條件句倒裝：If you should have any questions → Should you have any questions。</p>
        `
      },
      {
        id: 7,
        question: "Choose the correct form: By the time the new director arrives, the hiring plan ____ finalized.",
        options: [
          "will be",
          "will have been",
          "had been",
          "would be"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>未來完成被動式："will have been finalized"。</p>
        `
      },
      {
        id: 8,
        question: "Which option correctly completes the sentence? 'Had he known about the policy change, ____ .'",
        options: [
          "he would apply earlier",
          "he would have applied earlier",
          "he will be applying earlier",
          "he had applied earlier"
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>與過去事實相反 (第三條件)："he would have applied earlier"。</p>
        `
      },
      {
        id: 9,
        question: "Which sentence correctly uses a relative clause?",
        options: [
          "The employee who recommended the new software is receiving an award.",
          "The employee which recommended the new software he is receiving an award.",
          "The employee recommended the new software is receiving who an award.",
          "Who the employee recommended the new software is receiving an award."
        ],
        correctAnswer: 0,
        explanation: `
          <h4>解析：</h4>
          <p>"The employee who recommended the new software..."。關係代名詞用 who 修飾人。</p>
        `
      },
      {
        id: 10,
        question: "Choose the correct conditional sentence structure:",
        options: [
          "If you had attended the workshop, you would learn a lot.",
          "If you attended the workshop, you would have learned a lot.",
          "If you had attended the workshop, you would have learned a lot.",
          "If you attend the workshop, you would learn a lot."
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>與過去事實相反（第三條件）："If you had attended..., you would have learned..."。</p>
        `
      },

      // ===== 新增的 10 題 (id: 11 ~ 20) =====
      {
        id: 11,
        question: "Which sentence correctly uses inversion for emphasis?",
        options: [
          "Never have I seen such a dedicated team in all my years of management.",
          "Never I have seen such a dedicated team in all my years of management.",
          "Never seen I have such a dedicated team in all my years of management.",
          "I never have seen such a dedicated team in all my years of management."
        ],
        correctAnswer: 0,
        explanation: `
          <h4>解析：</h4>
          <p>否定副詞置句首 → 倒裝："Never have I seen..."。</p>
        `
      },
      {
        id: 12,
        question: "Complete the sentence with correct subjunctive form: The board demands that every team member ____ the new security protocol.",
        options: [
          "implement",
          "implements",
          "will implement",
          "implemented"
        ],
        correctAnswer: 0,
        explanation: `
          <h4>解析：</h4>
          <p>虛擬語氣，demand + that + S + V原形："implement"。</p>
        `
      },
      {
        id: 13,
        question: "Identify the grammatically correct sentence:",
        options: [
          "Had the client accepted our offer, we would now sign the contract.",
          "Had the client accept our offer, we would now sign the contract.",
          "If the client accepts our offer, we would have signed the contract.",
          "Had the client accepted our offer, we would now be signing the contract."
        ],
        correctAnswer: 3,
        explanation: `
          <h4>解析：</h4>
          <p>「混合條件句」：若過去接受（Had the client accepted...），現在（would now be signing）。</p>
        `
      },
      {
        id: 14,
        question: "Choose the best sentence that correctly uses a complex relative clause with a preposition at the end:",
        options: [
          "The contract which we agreed upon it last week is now invalid.",
          "The contract which we agreed upon last week is now invalid.",
          "The contract upon which we agreed last week it is now invalid.",
          "The contract that upon we agreed last week is now invalid."
        ],
        correctAnswer: 1,
        explanation: `
          <h4>解析：</h4>
          <p>正確寫法：「The contract (which) we agreed upon last week is now invalid.」</p>
        `
      },
      {
        id: 15,
        question: "Which sentence demonstrates a correct use of the present perfect continuous tense?",
        options: [
          "We have been discuss this issue for over an hour.",
          "We have discussing this issue for over an hour.",
          "We have been discussing this issue for over an hour.",
          "We had been discussing this issue for over an hour."
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>現在完成進行式：have/has + been + V-ing。"We have been discussing..."。</p>
        `
      },
      {
        id: 16,
        question:
          "Select the correct form in this sentence: If our competitors lower their prices, we ____ in trouble unless we adjust our strategy.",
        options: [
          "would be",
          "were",
          "will be",
          "would have been"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>第一條件句：If + 現在式 → will + 原形動詞（"will be in trouble"）。</p>
        `
      },
      {
        id: 17,
        question: "Which sentence uses the causative form correctly?",
        options: [
          "We got our legal team reviewing the document carefully.",
          "We had our legal team to review the document carefully.",
          "We had our legal team review the document carefully.",
          "We have been our legal team reviewed the document."
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>"have + 受詞 + V原形" → "We had our legal team review the document..."。</p>
        `
      },
      {
        id: 18,
        question:
          "Which sentence correctly uses a future perfect tense to indicate an action completed before another future event?",
        options: [
          "By next month, we have completed the software update.",
          "By next month, we had completed the software update.",
          "By next month, we will have completed the software update.",
          "By next month, we will be completing the software update."
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>未來完成式：will have + p.p.。</p>
        `
      },
      {
        id: 19,
        question: "Which option includes a correctly used appositive phrase?",
        options: [
          "Mr. Wang, our chief financial officer, will announce the new budget tomorrow.",
          "Mr. Wang our chief financial officer will announce, the new budget tomorrow.",
          "Mr. Wang our chief financial officer will announce the new budget, tomorrow.",
          "Mr. Wang, our chief financial officer will announce the new budget tomorrow."
        ],
        correctAnswer: 0,
        explanation: `
          <h4>解析：</h4>
          <p>同位語以逗號前後分隔："Mr. Wang, our chief financial officer, will announce..."。</p>
        `
      },
      {
        id: 20,
        question: "Identify the sentence that uses the correct sequence of tenses:",
        options: [
          "I realized that if you miss the deadline, you will pay the penalty.",
          "I realize that if you missed the deadline, you would pay the penalty.",
          "I realized that if you missed the deadline, you would pay the penalty.",
          "I realize that if you miss the deadline, you would pay the penalty."
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>主句用過去 (realized) → 條件用過去 (if you missed) → 結果用 would。</p>
        `
      }
    ]
  });

  //（非必須）可視需要保留或移除：
  // console.log("questions.js 已載入並推入 window.questionSets！");
})();
