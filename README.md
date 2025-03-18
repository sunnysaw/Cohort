# Quote Generator - MERN Stack

## Overview
The **Quote Generator** is a full-stack web application built using the **MERN Stack** (MongoDB, Express.js, React.js, and Node.js). This project allows users to generate random quotes, add new quotes, and store them in a database. It provides a user-friendly interface for browsing and managing inspirational quotes.

## Features
- Generate random quotes
- Fetch quotes from a database
- Add new quotes
- Delete quotes (if applicable)
- API integration for quote retrieval
- Responsive UI built with React

## Tech Stack
- **Frontend**: React.js, Axios, Tailwind CSS (or any chosen UI library)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **API Handling**: RESTful API, Axios
- **Authentication**: (Optional, if implemented)

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (LTS version recommended)
- MongoDB (local or cloud-based via MongoDB Atlas)

### Setup
#### Clone the repository:
```bash
git clone https://github.com/your-username/quote-generator.git
cd quote-generator
```

#### Backend Setup:
```bash
cd server
npm install
```

Create a `.env` file in the server directory and add:
```plaintext
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:
```bash
npm start
```

#### Frontend Setup:
```bash
cd ../client
npm install
npm start
```

## API Endpoints
### **Quotes API**
| Method | Endpoint         | Description          |
|--------|----------------|----------------------|
| GET    | /api/quotes    | Fetch all quotes    |
| GET    | /api/quotes/:id | Fetch a quote by ID |
| POST   | /api/quotes    | Add a new quote     |
| DELETE | /api/quotes/:id | Delete a quote      |

## Usage
- Open `http://localhost:3000` in your browser.
- Click the **Generate Quote** button to fetch random quotes.
- Use the form to add new quotes.

## Future Enhancements
- Implement user authentication (JWT/Auth0)
- Add categories for quotes
- Improve UI/UX with animations
- Deploy to **Vercel** (Frontend) and **Render/Heroku** (Backend)

## Deployment
### **Frontend** (Vercel/Netlify):
```bash
npm run build
```

### **Backend** (Render/Heroku):
```bash
git push heroku main
```

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For queries, reach out via [8084401051] or visit [your GitHub profile](https://github.com/sunnysaw).

