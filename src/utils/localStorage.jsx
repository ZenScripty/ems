const Employees = [
  {
    "id": 1,
    "email": "user1@gmail.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Weekly Report",
        "description": "Compile and summarize weekly performance metrics.",
        "date": "2025-08-01",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Discuss progress and upcoming deadlines.",
        "date": "2025-08-02",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "user2@gmail.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update Documentation",
        "description": "Revise API docs for new release.",
        "date": "2025-08-03",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Bug Triage",
        "description": "Review and prioritize reported bugs.",
        "date": "2025-08-04",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "user3@gmail.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design Logo",
        "description": "Create new logo for product launch.",
        "date": "2025-08-05",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Presentation",
        "description": "Present project updates to client.",
        "date": "2025-08-06",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "user4@gmail.com",
    "password": "123",
    "tasks": [
      {
        "title": "Test Mobile App",
        "description": "Run QA tests on mobile application.",
        "date": "2025-08-07",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update Privacy Policy",
        "description": "Ensure compliance with new regulations.",
        "date": "2025-08-08",
        "category": "Legal",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 5,
    "email": "user5@gmail.com",
    "password": "123",
    "tasks": [
      {
        "title": "Analyze Sales Data",
        "description": "Review sales figures for Q2.",
        "date": "2025-08-09",
        "category": "Analysis",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix Checkout Bug",
        "description": "Resolve issue in checkout flow.",
        "date": "2025-08-10",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
]

const Admint = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]
// 1.37

export const setLocalStorage =()=>{
    localStorage.setItem('employees', JSON.stringify(Employees));
    localStorage.setItem('admin', JSON.stringify(Admint));
}
export const getLocalStorage =()=>{
const Employees = JSON.parse(localStorage.getItem('employees'));
const Admin = JSON.parse(localStorage.getItem('admin'));
console.log(Employees, Admin);
}