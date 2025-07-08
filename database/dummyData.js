export const categories = [
  {
    title: "Programming",
    description: "Programming and computer science topics",
    color: "#2196F3",
    icon: "code",
  },
  {
    title: "Knowledge",
    description: "General knowledge and science topics",
    color: "#4CAF50",
    icon: "lightbulb",
  },
  {
    title: "Languages",
    description: "Language learning topics",
    color: "#FF9800",
    icon: "language",
  },
];

export const topics = [
  {
    categoryId: 1, // Programming
    title: "Fundamentals of Computer Science",
    description: "Basic concepts and principles of computer science",
    color: "#2196F3",
  },
  {
    categoryId: 1, // Programming
    title: "Data Structures & Algorithms",
    description: "Essential data structures and algorithmic concepts",
    color: "#1976D2",
  },
  {
    categoryId: 2, // Knowledge
    title: "Knowledge about Environmental & Science",
    description: "Environmental science and sustainability topics",
    color: "#4CAF50",
  },
  {
    categoryId: 2, // Knowledge
    title: "Physics Fundamentals",
    description: "Basic physics concepts and principles",
    color: "#388E3C",
  },
  {
    categoryId: 3, // Languages
    title: "Spanish Basics",
    description: "Basic Spanish vocabulary and grammar",
    color: "#FF9800",
  },
];

export const cards = [
  // Computer Science Fundamentals Cards (Topic ID: 1)
  {
    topicId: 1,
    concept: "Algorithm",
    description: "A step-by-step procedure for solving a problem or completing a task",
  },
  {
    topicId: 1,
    concept: "Binary System",
    description: "A number system using only 0s and 1s, fundamental to computer operations",
  },
  {
    topicId: 1,
    concept: "Variable",
    description: "A storage location with an associated name that contains data",
  },

  // Data Structures & Algorithms Cards (Topic ID: 2)
  {
    topicId: 2,
    concept: "Array",
    description: "A collection of elements stored in contiguous memory locations",
  },
  {
    topicId: 2,
    concept: "Linked List",
    description: "A linear data structure where elements are stored in nodes, each pointing to the next",
  },
  {
    topicId: 2,
    concept: "Binary Search Tree",
    description: "A hierarchical data structure where left child < parent < right child",
  },

  // Environmental & Science Cards (Topic ID: 3)
  {
    topicId: 3,
    concept: "Carbon Footprint",
    description: "The total amount of greenhouse gases produced directly and indirectly by human activities",
  },
  {
    topicId: 3,
    concept: "Photosynthesis",
    description: "The process by which plants use sunlight, water, and CO2 to produce glucose and oxygen",
  },
  {
    topicId: 3,
    concept: "Renewable Energy",
    description: "Energy from sources that naturally replenish, like solar, wind, and hydroelectric",
  },

  // Physics Fundamentals Cards (Topic ID: 4)
  {
    topicId: 4,
    concept: "Newton's First Law",
    description: "An object at rest stays at rest, and an object in motion stays in motion, unless acted upon by force",
  },
  {
    topicId: 4,
    concept: "Energy Conservation",
    description: "Energy cannot be created or destroyed, only transformed from one form to another",
  },
  {
    topicId: 4,
    concept: "Gravity",
    description: "The force that attracts objects toward each other, proportional to their masses",
  },

  // Spanish Basics Cards (Topic ID: 5)
  {
    topicId: 5,
    concept: "Hola",
    description: "Hello - A common greeting used throughout the Spanish-speaking world",
  },
  {
    topicId: 5,
    concept: "Gracias",
    description: "Thank you - Used to express gratitude in Spanish",
  },
  {
    topicId: 5,
    concept: "Ser vs Estar",
    description: "Two forms of 'to be' - Ser for permanent states, Estar for temporary conditions",
  },
];