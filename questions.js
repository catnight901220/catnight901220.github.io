// questions.js

const questions = {
    listening: [
      {
        id: 1,
        question: "What does the man want to do?",
        audioText: "I'd like to schedule a meeting with the marketing team to discuss our new campaign strategy.",
        speaker: "male",
        options: [
          "Schedule a meeting",
          "Cancel an appointment",
          "Change the time",
          "Make a reservation"
        ],
        correctAnswer: 0,
        explanation: `
          <h4>解析：</h4>
          <p>關鍵字 "schedule a meeting" 表示安排會議。</p>
        `
      },
      {
        id: 2,
        question: "What time is the next train to New York?",
        audioText: "The next train to New York will depart at 11:30 AM from platform 3.",
        speaker: "female",
        options: [
          "10:30 AM",
          "11:00 AM",
          "11:30 AM",
          "12:00 PM"
        ],
        correctAnswer: 2,
        explanation: `
          <h4>解析：</h4>
          <p>關鍵時間 "11:30 AM"。</p>
        `
      },
      {
        id: 3,
        question: "What is the woman's problem?",
        audioText: "I'm having trouble accessing my email account. The system keeps showing an error message.",
        speaker: "female",
        options: [
          "Her computer is broken",
          "She can't access her email",
          "She lost her password",
          "Her internet is down"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "What does the man suggest?",
        audioText: "Why don't we meet at the coffee shop around the corner? It's usually quiet in the morning.",
        speaker: "male",
        options: [
          "Meeting at a restaurant",
          "Meeting at a coffee shop",
          "Meeting in the office",
          "Meeting at a park"
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "What is the main topic of the presentation?",
        audioText: "Today, I'll be discussing our quarterly financial performance and strategic initiatives for the upcoming fiscal year.",
        speaker: "male",
        options: [
          "Company history",
          "Financial performance",
          "Marketing strategy",
          "Employee training"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "What does the woman suggest about the project timeline?",
        audioText: "I think we should extend the project deadline by two weeks to allow more thorough testing.",
        speaker: "female",
        options: [
          "Complete it earlier",
          "Extend the deadline",
          "Reduce the scope",
          "Add more resources"
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "What does the man say about the team performance?",
        audioText: "Our sales team has exceeded quarterly targets by 20%, which is better than expected.",
        speaker: "male",
        options: [
          "They performed poorly",
          "They met expectations",
          "They exceeded expectations",
          "They didn't meet the target"
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "Where will the meeting take place?",
        audioText: "The meeting will be held in Conference Room B on the second floor at 2 PM.",
        speaker: "female",
        options: [
          "In the lobby",
          "In Conference Room B",
          "At a nearby cafe",
          "No location was mentioned"
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "Which product is the best-seller?",
        audioText: "Currently, our best-selling product is the new wireless headphone model.",
        speaker: "male",
        options: [
          "Smartwatch",
          "Wireless headphone",
          "Laptop bag",
          "Bluetooth speaker"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "How will the man travel to the conference?",
        audioText: "I'm planning to drive there because the train schedule doesn't fit my timetable.",
        speaker: "male",
        options: [
          "By train",
          "By bus",
          "He will not attend",
          "By car"
        ],
        correctAnswer: 3
      }
    ],
    reading: [
      {
        id: 1,
        question: "According to the passage, what is the main purpose of the new policy?",
        passage: `The company has recently implemented a new flexible working hours policy to increase employee productivity and work-life balance. This policy allows employees to choose their working hours between 7 AM and 7 PM, as long as they complete their required 8 hours per day.`,
        options: [
          "To increase productivity",
          "To reduce costs",
          "To improve employee satisfaction",
          "To enhance customer service"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "What is the main idea of the second paragraph?",
        passage: `The company's new product launch has been highly successful in the market. Sales have exceeded expectations by 50% in the first quarter, and customer feedback has been overwhelmingly positive.`,
        options: [
          "The company's history",
          "The new product launch",
          "The marketing strategy",
          "The financial results"
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "Which of the following best describes the author's tone?",
        passage: `The future of renewable energy looks promising. Recent technological advances have made solar and wind power more efficient and cost-effective than ever before.`,
        options: [
          "Optimistic",
          "Critical",
          "Neutral",
          "Skeptical"
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        question: "What can be inferred about the company's future plans?",
        passage: `The company's R&D team has been working on several new products in the healthcare sector. Recent patent filings suggest that the company is planning to expand its product line with innovative medical devices.`,
        options: [
          "They will expand internationally",
          "They will reduce staff",
          "They will launch new products",
          "They will merge with another company"
        ],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "The word 'innovative' in paragraph 3 is closest in meaning to:",
        passage: `The company's innovative approach to customer service has set it apart from competitors. By implementing cutting-edge technology, the company has improved customer satisfaction.`,
        options: [
          "Traditional",
          "Creative",
          "Expensive",
          "Simple"
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        question: "According to the passage, what is the primary factor affecting market trends?",
        passage: `Recent market analysis indicates that technological innovation is the primary driver of market trends in the healthcare sector.`,
        options: [
          "Government regulations",
          "Technological innovation",
          "Consumer preferences",
          "Economic conditions"
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: "What is the main challenge mentioned in the paragraph?",
        passage: `Despite the success of the new policy, many employees struggle with scheduling meetings when each colleague has a different work schedule. This has occasionally caused delays in team projects.`,
        options: [
          "Lack of resources",
          "Employee dissatisfaction",
          "Meeting scheduling conflicts",
          "Budget constraints"
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "Which of the following can be inferred about the company?",
        passage: `The company's latest report shows a significant investment in AI technology. This suggests a strategic focus on automating repetitive tasks and improving data analytics for better decision-making.`,
        options: [
          "They are reducing overall spending",
          "They focus only on marketing",
          "They are heavily interested in automation",
          "They have no interest in technology"
        ],
        correctAnswer: 2
      },
      {
        id: 9,
        question: "What is the main benefit of the new software system?",
        passage: `The newly implemented software system allows employees to access documents from any location. This has increased productivity for remote teams and reduced the reliance on physical office space.`,
        options: [
          "It limits remote access",
          "It allows employees to work remotely more efficiently",
          "It completely replaces the physical office",
          "It decreases overall productivity"
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: "What does the paragraph suggest about future training sessions?",
        passage: `Managers have noted that while employees quickly adopted the software, many still need additional guidance on advanced features. Therefore, more comprehensive training sessions will be held next quarter.`,
        options: [
          "They will be canceled",
          "They won't cover advanced features",
          "They will be more in-depth",
          "They will only be for new employees"
        ],
        correctAnswer: 2
      }
    ],
    grammar: [
      {
        id: 1,
        question: "Choose the correct form of the verb: The report _____ by next Friday.",
        options: [
          "will be completed",
          "will complete",
          "will have completed",
          "will be completing"
        ],
        correctAnswer: 0
      },
      {
        id: 2,
        question: "Select the correct preposition: The meeting is scheduled _____ 2 PM.",
        options: [
          "at",
          "in",
          "on",
          "for"
        ],
        correctAnswer: 0
      },
      {
        id: 3,
        question: "Choose the correct article: I saw _____ interesting movie yesterday.",
        options: [
          "a",
          "an",
          "the",
          "no article needed"
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "Select the correct conditional form: If I _____ rich, I would travel the world.",
        options: [
          "am",
          "were",
          "was",
          "be"
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Choose the correct relative pronoun: The book _____ I bought yesterday is very interesting.",
        options: [
          "which",
          "who",
          "whom",
          "whose"
        ],
        correctAnswer: 0
      },
      {
        id: 6,
        question: "Select the correct form: Not only _____ the project completed on time, but it also exceeded expectations.",
        options: [
          "was",
          "were",
          "has been",
          "have been"
        ],
        correctAnswer: 0
      },
      {
        id: 7,
        question: "Choose the correct tense: I _____ my homework before I went out.",
        options: [
          "did",
          "have done",
          "had done",
          "was doing"
        ],
        correctAnswer: 2
      },
      {
        id: 8,
        question: "Which is correct? 'Everyone _____ to do their best.'",
        options: [
          "want",
          "wants",
          "wanted",
          "wanting"
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        question: "Fill in the blank: They are looking forward _____ their parents this weekend.",
        options: [
          "to visit",
          "visiting",
          "to visiting",
          "visited"
        ],
        correctAnswer: 2
      },
      {
        id: 10,
        question: "Which sentence uses the correct parallel structure?",
        options: [
          "He likes swimming, to run, and bicycling.",
          "He likes swimming, running, and biking.",
          "He likes to swim, running, and to bike.",
          "He likes swim, run, and bike."
        ],
        correctAnswer: 1
      }
    ]
  };
  