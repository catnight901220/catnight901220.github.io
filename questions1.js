/**
 * questions1.js
 *
 * 1. 使用 IIFE（立即執行函式）。
 * 2. 將原本的題庫物件推進全域的 window.questionSets。
 */
;(function () {
    // 若尚未定義 window.questionSets，就先定義一個空陣列
    window.questionSets = window.questionSets || [];
  
    // 將本檔案的題目集合 push 進 questionSets
    window.questionSets.push({
      // ================== 聽力 (Listening) ==================
      listening: [
        {
          id: 1,
          question: "What is suggested about the upcoming business acquisition?",
          audioText:
            "As we move forward with the acquisition of Stellar Technologies, we need to exercise caution regarding information disclosure. The confidentiality agreements are still binding, and any premature announcements could adversely impact share prices in both companies. Let's maintain discretion until the legal team confirms all regulatory approvals have been secured.",
          speaker: "male",
          options: [
            "It has already been publicly announced",
            "It requires maintaining confidentiality for now",
            "It has received all necessary regulatory approvals",
            "It will likely cause share prices to increase immediately"
          ],
          correctAnswer: 1,
          explanation: `
            <h4>解析：</h4>
            <p>說話者強調 "we need to exercise caution regarding information disclosure" 並提到 "confidentiality agreements are still binding"，表示此收購案目前仍需保密。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>acquisition (n.) - 收購、獲得</li>
              <li>exercise caution (phr.) - 謹慎行事</li>
              <li>confidentiality agreement (n.) - 保密協議</li>
              <li>binding (adj.) - 有約束力的</li>
              <li>premature (adj.) - 過早的、不成熟的</li>
              <li>adversely (adv.) - 不利地</li>
              <li>discretion (n.) - 謹慎、保密</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              本題考察商業併購情境中的保密概念。注意 "exercise caution"、"confidentiality"、"premature announcements" 等商務術語，以及其暗示的行動步驟與時機。
            </p>
          `
        },
        {
          id: 2,
          question: "What is the speaker's position on implementing the new workflow system?",
          audioText:
            "I appreciate the potential efficiencies of the proposed workflow system, particularly regarding customer order processing. Nevertheless, we shouldn't overlook the substantial investment required for migration and staff training, which would strain this quarter's budget considerably. Perhaps we could implement it in phases rather than all at once, starting with the department that would benefit most.",
          speaker: "female",
          options: [
            "Strongly against it due to budget constraints",
            "Completely in favor of immediate implementation",
            "Neutral and waiting for more information",
            "Supportive but suggesting a gradual approach"
          ],
          correctAnswer: 3,
          explanation: `
            <h4>解析：</h4>
            <p>說話者先肯定新系統的潛在效益 ("appreciate the potential efficiencies")，但也提出預算考量，最後建議 "implement it in phases rather than all at once"，顯示她支持但偏好漸進式實施。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>workflow system (n.) - 工作流程系統</li>
              <li>efficiency (n.) - 效率</li>
              <li>overlook (v.) - 忽視</li>
              <li>substantial (adj.) - 可觀的、重大的</li>
              <li>migration (n.) - 遷移、轉移</li>
              <li>strain (v.) - 使緊張、使承受壓力</li>
              <li>implement in phases (phr.) - 分階段實施</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              此題測試聽者對說話者態度的理解能力。注意聽取肯定詞（"appreciate"）和保留詞（"nevertheless"、"shouldn't overlook"）之間的平衡，以及最終提出的折衷方案暗示的立場。
            </p>
          `
        },
        {
          id: 3,
          question: "What does the CFO want the department heads to do before the next fiscal year?",
          audioText:
            "As we approach the next fiscal year, I'm requesting that all department heads reexamine their operational expenditures and identify at least three areas where costs could be reduced without compromising service quality. Additionally, please prioritize your capital investment requests according to anticipated ROI and strategic alignment with our five-year growth plan. Submit these analyses by the 15th so we can incorporate them into our preliminary budget discussions.",
          speaker: "male",
          options: [
            "Hire additional staff members",
            "Identify cost reduction areas and prioritize investments",
            "Complete the five-year growth plan document",
            "Increase departmental operational expenditures"
          ],
          correctAnswer: 1,
          explanation: `
            <h4>解析：</h4>
            <p>CFO要求部門主管做兩件事：一是 "reexamine operational expenditures and identify areas where costs could be reduced"，二是 "prioritize capital investment requests"。選項B正確涵蓋了這兩個要求。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>fiscal year (n.) - 會計年度</li>
              <li>operational expenditure (n.) - 營運支出</li>
              <li>capital investment (n.) - 資本投資</li>
              <li>ROI (Return on Investment) - 投資回報率</li>
              <li>strategic alignment (n.) - 策略一致性</li>
              <li>preliminary (adj.) - 初步的、預備的</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              本題考察多步驟指示的理解能力。財務相關聽力常出現專業術語如 "fiscal year"、"operational expenditures"、"capital investment" 和 "ROI"，需特別留意這類詞彙在商業情境中的應用。
            </p>
          `
        },
        {
          id: 4,
          question: "What concern does the woman express about the digital marketing strategy?",
          audioText:
            "I've been analyzing our digital marketing performance metrics from the last quarter, and while our click-through rates have improved significantly, I'm concerned about the conversion rates, which haven't kept pace. We're attracting more traffic, but it's not translating into proportional sales growth. I think we should reevaluate our landing page optimization and possibly adjust our target demographics to achieve better ROI on our advertising spend.",
          speaker: "female",
          options: [
            "The click-through rates are too low",
            "The advertising budget is insufficient",
            "The sales growth doesn't match increased traffic",
            "The target demographics are too narrowly defined"
          ],
          correctAnswer: 2,
          explanation: `
            <h4>解析：</h4>
            <p>女性表達的擔憂是 "conversion rates haven't kept pace" 以及 "attracting more traffic, but it's not translating into proportional sales growth"，意即網站流量增加但銷售成長不成比例。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>digital marketing (n.) - 數位行銷</li>
              <li>performance metrics (n.) - 績效指標</li>
              <li>click-through rate (n.) - 點擊率</li>
              <li>conversion rate (n.) - 轉換率</li>
              <li>landing page optimization (n.) - 著陸頁優化</li>
              <li>ROI (Return on Investment) - 投資回報率</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              此題考察數位行銷專業術語的理解。注意區分 "click-through rates"（點擊率）和 "conversion rates"（轉換率）的不同，前者高並不保證後者也高，這是說話者擔憂的核心。
            </p>
          `
        },
        {
          id: 5,
          question: "Based on the conversation, what is the status of the Copenhagen project?",
          audioText:
            "Man: Have you received any updates on the Copenhagen project timeline? I understood they were aiming for a mid-June completion.\nWoman: Actually, I just got off a conference call with the project manager. They've encountered some regulatory hurdles regarding environmental compliance that weren't anticipated in the initial assessment.\nMan: Does that mean we're looking at a delay then?\nWoman: Unfortunately, yes. They're projecting at least a two-month extension, putting completion closer to late August, which will affect our Q3 projections significantly.",
          speaker: "multiple",
          options: [
            "It's ahead of schedule and will be completed early",
            "It's on track for the mid-June completion date",
            "It's been cancelled due to environmental concerns",
            "It's delayed by approximately two months"
          ],
          correctAnswer: 3,
          explanation: `
            <h4>解析：</h4>
            <p>對話中女性明確表示 "They're projecting at least a two-month extension, putting completion closer to late August"，顯示項目將延遲約兩個月。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>timeline (n.) - 時間表</li>
              <li>regulatory hurdle (n.) - 法規障礙</li>
              <li>environmental compliance (n.) - 環境合規</li>
              <li>anticipate (v.) - 預期</li>
              <li>initial assessment (n.) - 初步評估</li>
              <li>projection (n.) - 預測</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              此題測試考生對多人對話中關鍵信息的捕捉能力。需注意女性最後一句話中的明確時間表述（"two-month extension"、"late August"），以及這種延遲對公司的影響（"affect our Q3 projections"）。
            </p>
          `
        }
      ],
  
      // ================== 閱讀 (Reading) ==================
      reading: [
        {
          id: 1,
          question: "According to the passage, what is the primary barrier to widespread quantum computing adoption?",
          passage: `Quantum computing has made remarkable strides in recent years, with several technology conglomerates and specialized startups demonstrating increasingly powerful prototype systems. These machines leverage quantum mechanical phenomena—superposition and entanglement—to perform computations that would be practically impossible for traditional computers. A 100-qubit quantum computer, for instance, theoretically utilizes more computational states than there are atoms in the observable universe.
  
                     Despite this theoretical advantage, significant challenges remain. Quantum systems require operating temperatures approaching absolute zero (-273.15°C) and are extraordinarily sensitive to environmental interference, a phenomenon known as quantum decoherence. Even minor electromagnetic fluctuations or thermal variations can destroy the delicate quantum states necessary for computation. Consequently, error correction has emerged as the field's central challenge, with researchers developing complex algorithms requiring thousands of physical qubits to create a single fault-tolerant logical qubit. Until these stability issues are resolved, quantum computing's transformative potential for cryptography, material science, and pharmaceutical development remains largely unrealized.`,
          options: [
            "Limited interest from major technology companies",
            "Insufficient computing power in current prototypes",
            "Extreme sensitivity to environmental conditions",
            "High costs of developing quantum algorithms"
          ],
          correctAnswer: 2,
          explanation: `
            <h4>解析：</h4>
            <p>文章第二段強調：「量子系統極度敏感於環境干擾（extraordinarily sensitive to environmental interference）」，並指出「即使微小的電磁波動或溫度變化都會破壞量子計算所需的精細量子態」。這表明環境敏感性是主要障礙。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>quantum computing (n.) - 量子計算</li>
              <li>conglomerate (n.) - 企業集團</li>
              <li>leverage (v.) - 利用</li>
              <li>superposition (n.) - 疊加態</li>
              <li>entanglement (n.) - 量子糾纏</li>
              <li>decoherence (n.) - 退相干</li>
              <li>fault-tolerant (adj.) - 容錯的</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              科技類文章通常包含大量專業術語。解讀此類文章時，需把握文章整體邏輯結構，特別是「問題-原因-結果」的因果鏈。本文段的核心是解釋「儘管有理論優勢，但環境敏感性造成的實際挑戰阻礙了廣泛應用」。
            </p>
          `
        },
        {
          id: 2,
          question: "What inference can be made about gig economy workers from paragraph two?",
          passage: `The gig economy—characterized by short-term, flexible work arrangements facilitated through digital platforms—has experienced exponential growth over the past decade. Companies like Uber, Deliveroo, and Fiverr have disrupted traditional employment models by connecting service providers directly with consumers. Proponents argue that this model offers unprecedented flexibility, allowing workers to determine their own hours and select assignments aligned with their preferences and skills.
  
                     Recent longitudinal studies, however, reveal a more nuanced reality. While 68% of gig workers reported satisfaction with their scheduling flexibility, nearly 71% expressed concerns about income volatility and the absence of benefits traditionally provided by employers. Many rely on multiple platforms simultaneously to achieve financial stability, working longer-than-anticipated hours across various applications. The demographic composition has also shifted significantly, with an increasing proportion of workers depending on gig work as their primary income source rather than supplementary earnings. This trend has intensified calls for regulatory frameworks that provide adequate protections while preserving the flexibility that initially attracted workers to the model.`,
          options: [
            "They uniformly prefer gig work to traditional employment",
            "Most dislike the scheduling flexibility offered by platforms",
            "Many work longer hours across multiple platforms for stability",
            "They are primarily interested in supplementary income"
          ],
          correctAnswer: 2,
          explanation: `
            <h4>解析：</h4>
            <p>第二段中提到「許多人同時依靠多個平台來獲得財務穩定性，在各種應用程式上工作的時間比預期的更長」("Many rely on multiple platforms simultaneously to achieve financial stability, working longer-than-anticipated hours across various applications")，這直接支持選項C。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>gig economy (n.) - 零工經濟</li>
              <li>longitudinal study (n.) - 縱向研究</li>
              <li>nuanced (adj.) - 細微差別的</li>
              <li>volatility (n.) - 波動性</li>
              <li>demographic composition (n.) - 人口構成</li>
              <li>supplementary (adj.) - 補充的</li>
              <li>regulatory framework (n.) - 監管框架</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              此類推論題要求讀者理解細節並作出合理結論。注意文中的對比關係：第一段提出正面觀點（彈性），第二段則提供更複雜的實際情況（需要較長工時和多平台工作以維持穩定）。
            </p>
          `
        },
        {
          id: 3,
          question: "What is the author's primary purpose in writing this article?",
          passage: `The implementation of artificial intelligence in healthcare diagnostics represents one of the most promising applications of machine learning technology. AI systems have demonstrated remarkable accuracy in identifying patterns within medical imaging that might elude even experienced clinicians. For instance, deep learning algorithms can now detect early-stage diabetic retinopathy with over 95% sensitivity, potentially preserving vision for millions worldwide through timely intervention.
  
                     Nevertheless, healthcare AI implementations face substantial obstacles beyond mere technical capabilities. Patient privacy concerns, particularly regarding data security and consent for algorithmic training, remain paramount. Equally challenging is the "black box" nature of many AI systems, which obscures the reasoning behind specific diagnoses and recommendations. This opacity creates significant liability questions and complicates regulatory approval processes. Furthermore, AI tools require extensive clinical validation across diverse patient populations to ensure they don't perpetuate or amplify existing healthcare disparities. While the potential of AI to democratize specialized diagnostic capabilities is enormous, thoughtful governance frameworks and clinician education programs are essential prerequisites for responsible deployment.`,
          options: [
            "To argue that AI will soon replace human healthcare providers",
            "To explain why AI diagnostic tools should not be used in healthcare",
            "To highlight the advantages and challenges of AI in medical diagnostics",
            "To propose a specific regulatory framework for healthcare AI systems"
          ],
          correctAnswer: 2,
          explanation: `
            <h4>解析：</h4>
            <p>文章第一段介紹AI在醫療診斷中的優勢和潛力（"demonstrated remarkable accuracy"、"95% sensitivity"），第二段則詳述面臨的挑戰（"privacy concerns"、"black box nature"、"liability questions"等）。整體而言，作者既呈現優點也討論問題，目的是全面介紹AI在醫療診斷中的優勢與挑戰。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>artificial intelligence (n.) - 人工智能</li>
              <li>diagnostics (n.) - 診斷學</li>
              <li>deep learning (n.) - 深度學習</li>
              <li>diabetic retinopathy (n.) - 糖尿病視網膜病變</li>
              <li>opacity (n.) - 不透明性</li>
              <li>perpetuate (v.) - 使永存、使持續</li>
              <li>disparities (n.) - 差異、不平等</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              判斷作者目的題要求考生把握文章整體結構和論點分布。本文採用「優點-挑戰-平衡結論」的結構，雖未直接表明立場，但通過選詞和資訊呈現方式，顯示目的是提供全面分析而非僅推廣或批評。
            </p>
          `
        },
        {
          id: 4,
          question: "Based on the passage, which statement best reflects the author's view on sustainable architecture?",
          passage: `The evolution of sustainable architecture over the past two decades reflects a fundamental shift in design philosophy. Early green buildings primarily emphasized energy efficiency through improved insulation and alternative energy sources—worthy objectives that nonetheless addressed only a fraction of a structure's environmental impact. Contemporary sustainable design has matured considerably, embracing a holistic approach that encompasses the entire building lifecycle from material sourcing to eventual demolition or repurposing.
  
                     Particularly promising is the emergence of regenerative architecture, which aims not merely to reduce environmental harm but to actively restore ecological systems. These buildings may incorporate living walls that filter air pollutants, rainwater harvesting systems that replenish aquifers, and locally-sourced materials that support regional economies. Critics argue that such features add prohibitive costs to construction projects and remain largely aspirational for mainstream development. However, longitudinal analyses of operating expenses reveal that many regenerative elements deliver substantial returns through reduced resource consumption and enhanced occupant productivity. Rather than viewing sustainability as an expensive add-on, forward-thinking firms increasingly recognize that ecological considerations, when integrated from the earliest design phases, can yield both environmental and economic dividends.`,
          options: [
            "Sustainable building practices are too expensive for practical implementation",
            "Energy efficiency should be the primary focus of green architecture",
            "Regenerative design elements can provide both environmental and economic benefits",
            "Most architects exaggerate the positive impacts of sustainable buildings"
          ],
          correctAnswer: 2,
          explanation: `
            <h4>解析：</h4>
            <p>作者雖然提及批評者認為永續建築成本過高（"Critics argue that such features add prohibitive costs"），但接著反駁這種觀點，指出「縱向分析顯示，許多再生元素通過減少資源消耗和提高使用者生產力帶來可觀回報」，並在結尾強調生態考量可以帶來「環境和經濟雙重紅利」。這直接支持選項C的觀點。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>sustainable architecture (n.) - 永續建築</li>
              <li>holistic (adj.) - 整體的</li>
              <li>regenerative (adj.) - 再生的</li>
              <li>aquifer (n.) - 含水層</li>
              <li>prohibitive (adj.) - 禁止的、過高的</li>
              <li>aspirational (adj.) - 有抱負的、理想的</li>
              <li>longitudinal analysis (n.) - 縱向分析</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              此題考察對作者立場的理解。注意文中先提出反對觀點（"Critics argue..."），然後用 "However" 轉折表達作者的真正立場。結尾句通常包含作者的核心觀點，這裡強調永續建築設計具有環境和經濟雙重效益。
            </p>
          `
        },
        {
          id: 5,
          question: "What conclusion can be drawn about corporate diversity initiatives based on the passage?",
          passage: `Corporate diversity initiatives have proliferated across global organizations over the past decade, with 87% of Fortune 500 companies implementing formal programs according to recent surveys. These initiatives typically encompass recruitment strategies targeting underrepresented populations, unconscious bias training, and mentorship opportunities designed to support career advancement for diverse employees. Numerous organizations highlight these programs prominently in annual reports and marketing materials, positioning diversity as a core organizational value.
  
                     Despite widespread adoption, empirical assessment of these initiatives reveals mixed results. While representation metrics have improved modestly at entry and mid-management levels across various industries, executive leadership remains predominantly homogeneous. Longitudinal studies examining promotion rates and compensation equity show persistent disparities even within organizations with well-funded diversity programs. Research indicates that the most effective approaches incorporate accountability mechanisms linking executive compensation to diversity outcomes, regular independent audits, and structural changes to organizational policies rather than standalone training sessions. Organizations achieving meaningful progress typically embed diversity considerations into core business operations rather than treating them as separate human resources initiatives disconnected from strategic decision-making.`,
          options: [
            "They have completely failed to achieve their objectives",
            "They are primarily implemented for marketing purposes",
            "The most effective approaches include accountability and structural changes",
            "They have eliminated disparities at executive leadership levels"
          ],
          correctAnswer: 2,
          explanation: `
            <h4>解析：</h4>
            <p>文章第二段中明確指出：「研究表明，最有效的方法包括將高管薪酬與多元化成果掛鉤的問責機制、定期獨立審計和組織政策的結構性變革，而不是獨立的培訓課程」。這直接支持選項C。文章並未表明這些計劃完全失敗（選項A），僅用於行銷（選項B），或已消除高層差距（選項D）。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>diversity initiative (n.) - 多元化計劃</li>
              <li>proliferate (v.) - 激增、大量增加</li>
              <li>unconscious bias (n.) - 無意識偏見</li>
              <li>empirical assessment (n.) - 實證評估</li>
              <li>homogeneous (adj.) - 同質的</li>
              <li>disparity (n.) - 差異、不平等</li>
              <li>accountability mechanism (n.) - 問責機制</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              本題考察從文章得出結論的能力。關鍵是找出文章對「有效方法」的明確描述（"the most effective approaches..."），並注意該段落後半部分對「取得有意義進展的組織」的描述。
            </p>
          `
        }
      ],
  
      // ================== 語法 (Grammar) ==================
      grammar: [
        {
          id: 1,
          question:
            "Choose the correct option to complete the sentence: 'Not until the company implemented the new security protocols ____ the frequency of cyber attacks.'",
          options: [
            "did they notice a significant reduction in",
            "they noticed a significant reduction in",
            "a significant reduction was noticed in",
            "they did notice a significant reduction in"
          ],
          correctAnswer: 0,
          explanation: `
            <h4>解析：</h4>
            <p>當句子以否定副詞短語 "Not until..." 開頭時，主句需要用倒裝結構。因此應選用 "did they notice"（助動詞在主詞前）而非一般語序的 "they noticed"。</p>
            <h4>重要單字 / 短語：</h4>
            <ul>
              <li>Not until... - 直到...才</li>
              <li>implement (v.) - 實施</li>
              <li>protocol (n.) - 協議</li>
              <li>cyber attack (n.) - 網絡攻擊</li>
            </ul>
            <h4>學習重點：</h4>
            <p>此題考察否定副詞開頭的倒裝句型。當句首為 "Not until"、"Never"、"Rarely" 等否定或限制性副詞時，主句需使用倒裝結構：助動詞 + 主詞 + 動詞。</p>
          `
        },
        {
          id: 2,
          question: "Select the grammatically correct sentence:",
          options: [
            "The CEO, along with his executive team, are planning to attend the conference.",
            "The CEO, along with his executive team, is planning to attend the conference.",
            "The CEO, along with his executive team, have plans to attend the conference.",
            "The CEO, along with his executive team, were planning to attend the conference."
          ],
          correctAnswer: 1,
          explanation: `
            <h4>解析：</h4>
            <p>"along with his executive team" 是插入語，不影響主詞動詞一致性。主詞是單數的 "The CEO"，因此動詞應用單數形式 "is planning"。</p>
            <h4>重要單字 / 短語：</h4>
            <ul>
              <li>along with - 和...一起（作為附加說明）</li>
              <li>executive team - 執行團隊</li>
            </ul>
            <h4>學習重點：</h4>
            <p>當主詞後接 "along with"、"as well as"、"in addition to" 等片語時，動詞仍應與主要主詞一致，而非與片語中的名詞一致。這是多益語法常考的主謂一致性問題。</p>
          `
        },
        {
          id: 3,
          question:
            "Complete the sentence with the correct form: 'Had the marketing team ____ the demographic data more carefully, they would have developed a more effective campaign.'",
          options: ["analyze", "analyzed", "analyzing", "been analyzing"],
          correctAnswer: 1,
          explanation: `
            <h4>解析：</h4>
            <p>此句為虛擬語氣第三條件句的倒裝形式："Had + 主詞 + 過去完成式..." 等同於 "If + 主詞 + had + 過去分詞..."，表示與過去事實相反的假設。</p>
            <h4>重要單字 / 短語：</h4>
            <ul>
              <li>demographic data - 人口統計數據</li>
              <li>Had + 主詞 + 過去分詞 - 如果...（與過去事實相反的假設，倒裝形式）</li>
            </ul>
            <h4>學習重點：</h4>
            <p>本題考察虛擬語氣的倒裝結構。"Had the team analyzed" 相當於 "If the team had analyzed"，表示過去沒有發生但假設發生的情況。這類高級語法結構在多益中屬於難點。</p>
          `
        },
        {
          id: 4,
          question:
            "Choose the correct option: 'The financial implications of the merger are far more complex than ____ by the initial analysis.'",
          options: ["suggested", "suggesting", "suggest", "to suggest"],
          correctAnswer: 0,
          explanation: `
            <h4>解析：</h4>
            <p>此處需要過去分詞形式作為被動語態。完整的結構是 "than [they were] suggested by..."，其中方括號內容被省略。</p>
            <h4>重要單字 / 短語：</h4>
            <ul>
              <li>financial implication - 財務影響</li>
              <li>merger (n.) - 合併</li>
              <li>complex (adj.) - 複雜的</li>
              <li>than + 過去分詞 - 比...所（被動形式）</li>
            </ul>
            <h4>學習重點：</h4>
            <p>此題考察比較結構中的省略用法和被動語態。在 "than" 之後若表達被動意義，需用過去分詞。完整句應為 "than they were suggested by..."，但 "they were" 通常被省略。</p>
          `
        },
        {
          id: 5,
          question: "Identify the sentence with correct usage of participle clauses:",
          options: [
            "Having completed the audit, legal compliance was ensured by the financial team.",
            "Having completed the audit, the financial team ensured legal compliance.",
            "The financial team ensured legal compliance, having been completed the audit.",
            "Legal compliance was ensured by the financial team, having the audit completed."
          ],
          correctAnswer: 1,
          explanation: `
            <h4>解析：</h4>
            <p>分詞子句的主詞必須與主句主詞一致。選項B中，"Having completed the audit" 的隱含主詞與主句主詞 "the financial team" 一致，表示「完成審計後，財務團隊確保了法律合規性」。</p>
            <h4>重要單字 / 短語：</h4>
            <ul>
              <li>participle clause - 分詞子句</li>
              <li>audit (n.) - 審計</li>
              <li>legal compliance - 法律合規性</li>
              <li>Having completed... - 完成...之後（完成式分詞）</li>
            </ul>
            <h4>學習重點：</h4>
            <p>此題考察分詞子句的正確使用。分詞子句的隱含主詞必須與主句主詞一致，否則會造成「懸垂修飾語」(dangling modifier) 錯誤。選項A的問題是分詞子句主詞應該是 "the financial team"，但主句主詞變成了 "legal compliance"，造成邏輯不通。</p>
          `
        }
      ]
    });
  
    //（非必須）可在此 console.log() 表示已載入檔案
    // console.log("questions1.js 已載入並推入 window.questionSets！");
  })();
  