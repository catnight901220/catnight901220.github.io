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
      // ================== 聽力 (Listening) ==================
      listening: [
        {
          id: 1,
          question: "What does the speaker suggest about the supply chain disruption?",
          audioText: "We've been monitoring the situation in Southeast Asia closely, and it appears that the port congestion is likely to persist for at least another quarter. Although some alternative shipping routes have been established, they're adding approximately 15-20% to transportation costs. I recommend we temporarily increase our inventory buffer by 30% to mitigate potential stockouts, while simultaneously exploring local sourcing options for critical components.",
          speaker: "female",
          options: [
            "It will be completely resolved within a month",
            "It requires increasing inventory and exploring alternative suppliers",
            "It has had no impact on transportation costs",
            "It affects only non-critical components"
          ],
          correctAnswer: 1,
          explanation: `
            <h4>解析：</h4>
            <p>演講者建議 "temporarily increase our inventory buffer by 30%" 以及 "exploring local sourcing options"，表明供應鏈中斷需要透過增加庫存和尋找替代供應商來應對。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>supply chain disruption (n.) - 供應鏈中斷</li>
              <li>port congestion (n.) - 港口擁堵</li>
              <li>persist (v.) - 持續存在</li>
              <li>mitigate (v.) - 減輕、緩和</li>
              <li>stockout (n.) - 缺貨</li>
              <li>inventory buffer (n.) - 庫存緩衝</li>
              <li>sourcing option (n.) - 採購選擇</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              本題考察對商業策略性建議的理解。注意聽力中的因果關係：問題（港口擁堵）→ 影響（成本增加 15-20%）→ 解決方案（增加庫存 30%、尋找本地供應商）。此類問題需綜合多個資訊點才能獲得正確答案。
            </p>
          `
        },
        {
          id: 2,
          question: "According to the conversation, what is the consultant recommending regarding the employee engagement survey?",
          audioText:
            "Man: The results from our annual employee engagement survey show a 12-point drop in satisfaction with internal communication channels. What approach would you suggest?\nWoman: Well, rather than immediately overhauling the entire system, I'd recommend conducting several focused follow-up sessions with cross-functional teams to identify specific pain points. Anonymous feedback mechanisms might reveal issues that weren't captured in the standardized survey. Once these insights are gathered, we can prioritize actions based on potential impact and implementation complexity.",
          speaker: "multiple",
          options: [
            "Implementing an entirely new communication system",
            "Ignoring the survey results as they are not statistically significant",
            "Gathering more detailed feedback before making systemic changes",
            "Terminating employees who provided negative feedback"
          ],
          correctAnswer: 2,
          explanation: `
            <h4>解析：</h4>
            <p>女性顧問建議「進行幾次跨職能團隊的後續聚焦會議以識別具體痛點」，並提到「匿名反饋機制可能會揭示標準化調查未捕捉到的問題」，然後「根據潛在影響和實施複雜性來優先行動」。這都指向選項C：在做系統性改變前收集更詳細的反饋。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>employee engagement survey (n.) - 員工敬業度調查</li>
              <li>overhauling (v.) - 徹底檢修、大修</li>
              <li>cross-functional (adj.) - 跨職能的</li>
              <li>pain point (n.) - 痛點、問題點</li>
              <li>anonymous feedback (n.) - 匿名反饋</li>
              <li>implementation complexity (n.) - 實施複雜性</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              此題測試聽者對建議類對話的理解能力，需能識別顧問建議的核心——分階段解決問題（先詳細調查，後有針對性地實施）而非立即採取全面行動。留意 "rather than" 這類對比表達，它往往暗示說話者偏好的方向。
            </p>
          `
        },
        {
          id: 3,
          question: "What conclusion does the speaker draw about cryptocurrency adoption in corporate finance?",
          audioText:
            "The emergence of digital currencies has certainly captured significant attention in finance circles, with over 20% of Fortune 500 companies now holding cryptocurrency as part of their treasury reserves. However, regulatory frameworks remain fragmented across jurisdictions, posing considerable compliance challenges. Our analysis suggests that while wholesale integration remains premature for most risk-averse organizations, a strategic allocation of 3-5% of liquid assets to selected cryptocurrencies may offer portfolio diversification benefits. Companies should first establish robust governance protocols and expertise before venturing into this asset class.",
          speaker: "male",
          options: [
            "All corporations should immediately convert 50% of their reserves to cryptocurrencies",
            "Digital currencies have no legitimate place in corporate finance",
            "Limited strategic investment may be beneficial if proper governance is established",
            "Cryptocurrency regulations are too clear and restrictive for corporate adoption"
          ],
          correctAnswer: 2,
          explanation: `
            <h4>解析：</h4>
            <p>說話者指出「我們的分析表明，對於大多數規避風險的組織來說，全面整合仍為時過早，但將3-5%的流動資產策略性地分配到所選加密貨幣可能會提供投資組合多樣化的好處」以及「公司應首先建立健全的治理協議和專業知識，然後再涉足這一資產類別」。這支持選項C的觀點。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>cryptocurrency adoption (n.) - 加密貨幣採用</li>
              <li>treasury reserve (n.) - 財政儲備</li>
              <li>regulatory framework (n.) - 監管框架</li>
              <li>fragmented (adj.) - 分散的、碎片化的</li>
              <li>jurisdiction (n.) - 管轄區、司法管轄權</li>
              <li>risk-averse (adj.) - 規避風險的</li>
              <li>governance protocol (n.) - 治理協議</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              此題考察對金融分析的理解能力。關鍵在於把握說話者的平衡觀點——既認識到加密貨幣的潛在好處（portfolio diversification），也強調應對風險的必要性（robust governance protocols）。多益考試中，專家意見通常會給出這種審慎的、多方面的分析，而非極端立場。
            </p>
          `
        }
      ],
  
      // ================== 閱讀 (Reading) ==================
      reading: [
        {
          id: 1,
          question:
            "What conclusion can be drawn about the relationship between organizational culture and innovation based on the passage?",
          passage: `A comprehensive five-year study examining innovation capacity across diverse industries has revealed that organizational culture may be a more significant determinant of innovation outcomes than previously recognized. Researchers analyzed 387 companies, measuring cultural dimensions against quantifiable innovation metrics such as patent filings, successful product launches, and time-to-market efficiencies. Surprisingly, neither R&D expenditure nor technological sophistication demonstrated consistent correlation with innovation performance across the sample.
  
                     The highest-performing innovators exhibited certain distinct cultural characteristics: psychological safety that encouraged risk-taking without fear of punitive consequences; transparent communication structures that facilitated cross-disciplinary collaboration; intrinsic motivation systems that rewarded experimentation rather than merely successful outcomes; and leadership behaviors that balanced strategic guidance with operational autonomy. Notably, even traditionally risk-averse sectors such as financial services and healthcare demonstrated substantial innovation improvements when these cultural elements were systematically cultivated. This suggests that organizations seeking to enhance their innovative capacity should prioritize cultural transformation alongside technological investments and formal innovation processes.`,
          options: [
            "R&D expenditure is the primary driver of corporate innovation",
            "Organizational culture has no measurable impact on innovation outcomes",
            "Cultural factors that encourage risk-taking and collaboration significantly influence innovation performance",
            "Companies in traditional sectors cannot improve their innovation capacity"
          ],
          correctAnswer: 2,
          explanation: `
            <h4>解析：</h4>
            <p>文章表明「組織文化可能是比先前認識到的更重要的創新結果決定因素」，並列舉了高績效創新者的文化特質：心理安全、透明溝通、內在激勵系統和平衡的領導行為。第二段結尾強調「即使是傳統上規避風險的行業也在這些文化元素被系統性培養時展現了實質性的創新改進」，並建議優先考慮文化轉型。這些都指向選項C。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>organizational culture (n.) - 組織文化</li>
              <li>innovation capacity (n.) - 創新能力</li>
              <li>determinant (n.) - 決定因素</li>
              <li>psychological safety (n.) - 心理安全</li>
              <li>punitive (adj.) - 懲罰性的</li>
              <li>intrinsic motivation (n.) - 內在動機</li>
              <li>risk-averse (adj.) - 規避風險的</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              此類文章考察對研究發現的理解和結論推導能力。關注作者強調的因果關係（文化元素 → 創新績效）和結論部分（"This suggests that..."）。多益閱讀常見研究型文章，需注意把握核心發現而非支持細節。
            </p>
          `
        },
        {
          id: 2,
          question:
            "Which of the following best describes the author's stance on algorithmic decision-making in lending practices?",
          passage: `The integration of artificial intelligence into financial lending decisions has dramatically accelerated over the past decade, with algorithmic assessment now determining approximately 73% of consumer credit approvals in developed economies. Proponents argue that these systems democratize access to financial services by efficiently evaluating non-traditional indicators of creditworthiness, potentially expanding the lending pool to previously underserved populations. Initial data suggest that AI-driven systems can process applications 60% faster than manual underwriting while maintaining comparable default rates.
  
                     However, mounting evidence indicates these algorithms may inadvertently perpetuate or even amplify existing social disparities despite their apparent objectivity. When trained on historical lending data that reflects decades of discriminatory practices, these systems inevitably inherit embedded biases. Several recent studies have documented statistically significant approval rate disparities across demographic groups even when controlling for objective risk factors. While algorithmic transparency and regular bias audits represent promising remediation approaches, meaningful progress requires regulatory frameworks that explicitly address the unique challenges of automated decision systems. Financial institutions must balance innovation imperatives against ethical obligations to ensure that technological advancement genuinely promotes financial inclusion rather than merely replicating historical inequities through more sophisticated mechanisms.`,
          options: [
            "Enthusiastically supportive with no reservations",
            "Cautiously optimistic while acknowledging significant ethical concerns",
            "Neutral and purely descriptive without any evaluative position",
            "Entirely opposed to any form of algorithmic decision-making"
          ],
          correctAnswer: 1,
          explanation: `
            <h4>解析：</h4>
            <p>作者在第一段指出演算法評估的潛在好處（「擴大借貸池到之前服務不足的人群」、「比手動承保快60%」），顯示基本的正面態度。但第二段提出重要的顧慮（「無意中延續或甚至放大現有的社會差異」、「繼承嵌入式偏見」），並建議需要「監管框架」和「平衡創新與道德義務」。整體而言，作者保持謹慎樂觀，同時認識到重大的倫理問題。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>algorithmic decision-making (n.) - 算法決策</li>
              <li>lending practice (n.) - 借貸實務</li>
              <li>underwriting (n.) - 承保</li>
              <li>inadvertently (adv.) - 無意地</li>
              <li>perpetuate (v.) - 使持續</li>
              <li>remediation (n.) - 補救</li>
              <li>regulatory framework (n.) - 監管框架</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              作者立場題要求分析文章語氣和表達方式。注意作者如何平衡優點（第一段）和缺點（第二段），以及結論部分的措辭（「必須平衡」而非「必須禁止」或「必須全面採用」）暗示了審慎的態度。
            </p>
          `
        },
        {
          id: 3,
          question:
            "According to the passage, what distinguishes circular supply chains from traditional linear models?",
          passage: `The transition from linear to circular supply chain models represents a fundamental reconceptualization of product lifecycles and material flows in modern manufacturing. Traditional linear approaches—characterized by the "take-make-dispose" paradigm—have dominated industrial production since the Industrial Revolution, prioritizing extraction efficiency and point-of-sale profitability. However, escalating resource scarcity, regulatory pressures regarding waste management, and evolving consumer expectations have catalyzed interest in circular alternatives.
  
                     Circular supply chains fundamentally reimagine product design, manufacturing processes, and end-of-life management to maximize resource conservation through multiple value-recovery loops. Unlike linear systems that consider responsibility for products terminated at point of sale, circular models implement reverse logistics infrastructure to recapture materials after consumer use. This approach extends beyond mere recycling to incorporate remanufacturing, refurbishment, and product-service systems that monetize functionality rather than physical ownership. Companies pioneering these models report significant advantages beyond environmental benefits, including reduced material vulnerability, enhanced customer engagement through take-back programs, and innovative revenue streams from previously discarded assets. Nonetheless, circular transformation requires substantial reconfiguration of supplier relationships, production processes, and performance metrics—investments that may initially strain quarterly financial targets despite promising long-term returns.`,
          options: [
            "They focus exclusively on recycling waste materials",
            "They prioritize extraction efficiency over product quality",
            "They incorporate systems to recapture and reuse materials after consumer use",
            "They eliminate the need for raw material inputs entirely"
          ],
          correctAnswer: 2,
          explanation: `
            <h4>解析：</h4>
            <p>文章對比線性供應鏈（「取-製-棄」範式）與循環供應鏈，並在第二段明確指出：「與將產品責任視為在銷售點終止的線性系統不同，循環模型實施逆向物流基礎設施，以在消費者使用後回收材料」。這直接支持選項C。選項A不完全正確，因為文章強調循環方法「超越單純的回收再利用」；選項B與文章描述相反；選項D過度誇大，文章未暗示完全消除原材料投入。</p>
            <h4>重要單字：</h4>
            <ul>
              <li>circular supply chain (n.) - 循環供應鏈</li>
              <li>linear model (n.) - 線性模型</li>
              <li>paradigm (n.) - 範式、模式</li>
              <li>reverse logistics (n.) - 逆向物流</li>
              <li>remanufacturing (n.) - 再製造</li>
              <li>refurbishment (n.) - 翻新</li>
              <li>vulnerability (n.) - 脆弱性</li>
            </ul>
            <h4>學習重點：</h4>
            <p>
              此題考察對比較概念的精確理解。關鍵在於抓住文章中對循環供應鏈的核心特徵描述，特別是與傳統線性模型的根本區別。注意如何識別文中的定義性陳述（通常包含 "unlike"、"in contrast to" 等表達）。
            </p>
          `
        }
      ],
  
      // ================== 語法 (Grammar) ==================
      grammar: [
        {
          id: 1,
          question:
            "Choose the most appropriate form to complete the sentence: 'By the time the CEO arrives at the conference tomorrow, the executive team ____ their presentation for several hours.'",
          options: [
            "will prepare",
            "will have been preparing",
            "are preparing",
            "have prepared"
          ],
          correctAnswer: 1,
          explanation: `
            <h4>解析：</h4>
            <p>此句需要用未來完成進行式 "will have been preparing"，表示在未來某時間點（CEO抵達時）之前已經開始並仍在持續的動作。句子表達「在明天CEO到達會議時，執行團隊將已經準備簡報好幾個小時了」。</p>
            <h4>重要單字 / 短語：</h4>
            <ul>
              <li>By the time... - 到...的時候</li>
              <li>executive team - 執行團隊</li>
            </ul>
            <h4>學習重點：</h4>
            <p>此題考察未來完成進行式的使用，形式為 will + have + been + V-ing。該時態用於表達在未來某時間點之前已經開始且會持續一段時間的動作。"By the time" 是此時態的常見時間標誌。</p>
          `
        },
        {
          id: 2,
          question: "Select the sentence that uses the subjunctive mood correctly:",
          options: [
            "The board suggested that the company increases its digital marketing budget.",
            "The board suggested that the company increase its digital marketing budget.",
            "The board suggested that the company increasing its digital marketing budget.",
            "The board suggested that the company would increase its digital marketing budget."
          ],
          correctAnswer: 1,
          explanation: `
            <h4>解析：</h4>
            <p>在表示建議、命令或要求的動詞（如 suggest, recommend, insist, demand）之後的 that 子句中，應使用虛擬語氣，即用動詞原形而非第三人稱單數形式。因此 "increase"（原形）正確，而非 "increases"（第三人稱單數）。</p>
            <h4>重要單字 / 短語：</h4>
            <ul>
              <li>subjunctive mood - 虛擬語氣</li>
              <li>suggest that + 主詞 + 動詞原形 - 建議...</li>
              <li>digital marketing budget - 數位行銷預算</li>
            </ul>
            <h4>學習重點：</h4>
            <p>虛擬語氣是多益高階語法的重要考點。記住在 suggest、recommend、insist、demand、require 等表達建議或要求的動詞之後的 that 子句中，要使用動詞原形，而不管主詞是單數還是複數。</p>
          `
        },
        {
          id: 3,
          question: "Choose the correct option to complete the sentence: 'Rarely ____ such comprehensive market research before launching a new product line.'",
          options: [
            "a company conducts",
            "does a company conduct",
            "a company conducting",
            "conducted a company"
          ],
          correctAnswer: 1,
          explanation: `
            <h4>解析：</h4>
            <p>當句子以否定或限制性副詞（rarely, seldom, never, hardly）開頭時，應使用部分倒裝結構，即助動詞置於主詞之前。因此，正確形式是 "does a company conduct"，而非一般語序的 "a company conducts"。</p>
            <h4>重要單字 / 短語：</h4>
            <ul>
              <li>Rarely - 很少、罕見地</li>
              <li>comprehensive (adj.) - 全面的，綜合的</li>
              <li>market research - 市場研究</li>
              <li>product line - 產品線</li>
            </ul>
            <h4>學習重點：</h4>
            <p>此題考察倒裝句結構。當句首為 rarely, seldom, never, hardly, little, nowhere, not only, in no way 等表否定或限制的副詞時，需要使用倒裝結構，將助動詞置於主詞之前。若原句沒有助動詞，則需添加適當的助動詞（如本題中的 does）。</p>
          `
        }
      ]
    });
  
    // 可以在此 console.log() 顯示成功載入
    // console.log("questions2.js 已載入並推入 window.questionSets！");
  })();
  