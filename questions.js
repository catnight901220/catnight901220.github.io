const questions = {
    // ================== 聽力 (Listening) ==================
    listening: [
      {
        id: 1,
        question: "What does the speaker imply about the quarterly sales targets?",
        audioText: "Despite the market slowdown, our quarterly sales targets were surpassed by nearly 15%. I'd like to thank the entire international team for their diligence. However, we must prepare for fluctuations in the upcoming period due to global uncertainties.",
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
        audioText: "I'm concerned about the upcoming product launch timeline. With our design team behind schedule and the marketing campaign still unfinished, we might miss the initial release date. Let's consider adjusting our promotional strategy to accommodate these delays.",
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
        audioText: "We’ve encountered unexpected costs in software licensing and hardware upgrades. To maintain product quality, we’ll need an additional budget allocation for the next two quarters.",
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
        audioText: "Given the pace of our current projects, we should consider hiring temporary contractors to handle the seasonal workload. Full-time recruitment may not be necessary yet, but we need flexibility in the coming months.",
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
        audioText: "I'm pleased to announce that our overseas branch in Singapore has finalized a joint venture with a local tech startup. This partnership will facilitate our expansion into the Southeast Asian market, providing us with cutting-edge research opportunities.",
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
        audioText: "Our projections indicate a stagnant domestic market for the next quarter, largely due to lower consumer confidence. However, international demand for our premium product line seems promising.",
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
        audioText: "I just received a notice that the key stakeholder from our parent company couldn't catch her flight due to severe weather conditions. So the quarterly review meeting will be postponed until she arrives next week.",
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
        audioText: "Interestingly, the results showed that brand loyalty among younger consumers is lower than anticipated, suggesting we may need a fresh approach to retain this demographic.",
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
        audioText: "Our freight forwarding partner just informed us that there's a congestion issue at the port due to new customs regulations. Until the backlog is cleared, all shipments will be delayed by at least three days.",
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
        audioText: "They've asked us to revise our proposal to include a more comprehensive after-sales support plan. I'll gather feedback from the customer service team and prepare an updated draft by Friday.",
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
      }
    ],
  
    // ================== 閱讀 (Reading) ==================
    reading: [
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
            多益閱讀中常考「調查結果」及「因果關係」。此段落重點是「環保措施 → 增加品牌忠誠度」。
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
            <li>oversight (n.) - 監管、不小心的錯誤 (依文脈為監管)</li>
            <li>decentralization (n.) - 去中心化</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            TOEIC 閱讀題可能問作者態度。此處關鍵字 "cautious stance" 即表「既看好優勢，也警惕風險」。
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
          <p>文章提到部分管理者擔憂 "maintaining cohesive communication among geographically dispersed teams"。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>workforce diversification (n.) - 人力多元化</li>
            <li>turnover (n.) - 人員流動率</li>
            <li>inclusive (adj.) - 包容的</li>
            <li>market penetration (n.) - 市場滲透</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            注意 "concerns" 與 "challenges" 的對應。多益閱讀常考公司策略與其問題。
          </p>
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
          <p>首段主軸是線上認證的普及與爭議，提到其在教育市場的地位，以及傳統學位的競爭性。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>micro-credential (n.) - 微認證</li>
            <li>landscape (n.) - (事物的)全貌、形勢</li>
            <li>democratize (v.) - 使民主化、使普及</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            TOEIC 閱讀常考 "trend" + "debate" 型文章。首段多概述現況與爭議點。
          </p>
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
          <p>文章提到投資人注資 "hoping to capitalize on an emerging market"，暗示他們看好這類市場的盈利與環保效益。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>legislation (n.) - 法規</li>
            <li>petroleum-derived (adj.) - 石油衍生的</li>
            <li>feasible (adj.) - 可行的</li>
            <li>biodegradability (n.) - 生物分解性</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            本題問投資人「為何」關注這項技術，關鍵在於潛在利潤與環保趨勢（"profitable returns" + "environmental benefits"）。
          </p>
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
          <p>第二段結尾強調 "productivity gains often outweighed the inconveniences"。因此，雖有排程問題，整體成效正面。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>absenteeism (n.) - 缺勤</li>
            <li>burnout (n.) - 精疲力竭、職業倦怠</li>
            <li>deter (v.) - 嚇阻</li>
            <li>round-the-clock (adj.) - 24 小時的</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            多益閱讀常考「試點計畫成果」的正負面影響，並讓考生挑出作者或研究的結論。
          </p>
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
          <p>研究顯示當店家公開說明為何變價，就能「緩和可能的負面反應」，故選項指明「透明化能降低負面回饋」。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>dynamic pricing (n.) - 動態定價</li>
            <li>fluctuation (n.) - 波動</li>
            <li>backlash (n.) - 強烈反對、反彈</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            需注意顧客行為與店家策略的因果關係。「透明溝通」和「合理原因」是多益常見考題焦點。
          </p>
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
          <p>第三段強調 CEO 表示成功歸因於 "a corporate culture that values continual learning" 以及跨部門合作。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>comprehensive (adj.) - 全面的</li>
            <li>dataset (n.) - 數據集</li>
            <li>client-centric (adj.) - 以客戶為中心的</li>
            <li>formidable (adj.) - 強大的、令人敬畏的</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            本段聚焦組織文化與成長策略，"culture" 是多益商業類文章的常考重點。
          </p>
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
          <p>雖然單件衣物的汙染減少，但「產量持續攀升」導致整體環境衝擊依然嚴重。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>textile (n.) - 紡織品</li>
            <li>fast-fashion (n.) - 快速時尚</li>
            <li>circular fashion (n.) - 循環時尚</li>
            <li>landfill (n.) - 垃圾掩埋場</li>
          </ul>
          <h4>學習重點：</h4>
          <p>
            常見考點：「綠色生產 vs. 高量生產」的矛盾；要抓住整體趨勢與細節對比。
          </p>
        `
      }
    ],
  
    // ================== 語法 (Grammar) ==================
    grammar: [
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
          <p>這是「與過去事實相反」的假設，屬第三條件句，故用 past perfect + would have p.p.。</p>
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
          <p>多益常考動詞 "suggest, insist, recommend, demand" + "that + 原形" 的用法。</p>
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
          <p>題干表示「CEO 不會批准預算，除非所有部門先提交預測」，故用 "unless" 表示「除非」。</p>
          <h4>重要單字 / 短語：</h4>
          <ul>
            <li>unless - 除非</li>
            <li>forecast (n.) - 預測</li>
          </ul>
          <h4>學習重點：</h4>
          <p>"unless" 和 "if...not" 在多益中容易混淆。此題凸顯「條件不成立就不做」的結構。</p>
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
          <p>此題需被動句，"guidelines" 是被實施的對象，因此用 "will be implemented"。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>implement (v.) - 實施</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益考試常考被動語態；"guidelines will be implemented" 是常見句型。</p>
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
          <p>倒裝句："Not only + 助動詞/Be + 主詞 + 動詞..." → "Not only was it well-organized..."。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>networking opportunities - 人脈建立的機會</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益中 "Not only... but also..." 倒裝用法非常常見，要注意助動詞或 be 動詞放前的結構。</p>
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
          <p>條件句的倒裝：If you should have any questions → Should you have any questions。</p>
          <h4>重要單字 / 短語：</h4>
          <ul>
            <li>Should you have any questions - 若你有任何疑問</li>
          </ul>
          <h4>學習重點：</h4>
          <p>本題測驗「省略 if 的倒裝句」：Should + 主詞 + 動詞...</p>
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
          <p>此為未來完成被動式結構："will have been finalized"。表示在未來某一時點前已完成。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>finalize (v.) - 定案、使結束</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益常考未來完成式 + 被動語態，用於表示「在未來另一事件前已經完成」的動作。</p>
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
          <p>「與過去事實相反」的假設句型，應為 "would have p.p."，所以 "he would have applied earlier"。</p>
          <h4>重要單字 / 短語：</h4>
          <ul>
            <li>Had he known... - 若他當時知道...</li>
          </ul>
          <h4>學習重點：</h4>
          <p>典型第三條件句示例，強調對過去事實的推測。</p>
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
          <p>正確相對子句結構："The employee who recommended the new software..."。</p>
          <h4>重要單字：</h4>
          <ul>
            <li>relative clause - 關係子句</li>
          </ul>
          <h4>學習重點：</h4>
          <p>"who" 用於修飾「人」，且位置緊跟在名詞之後。</p>
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
          <p>本題是與過去事實相反：If + had p.p., would have p.p.</p>
          <h4>重要單字 / 短語：</h4>
          <ul>
            <li>attend (v.) - 出席</li>
          </ul>
          <h4>學習重點：</h4>
          <p>多益語法常考第三條件句：If you had V-ed, you would have V-ed.</p>
        `
      }
    ]
  };
  