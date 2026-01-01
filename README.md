# 🌐 Node API Proxy Server

A secure, production-ready proxy server for hiding API keys, implementing rate limiting, and caching responses. Built with Node.js and Express.

[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4+-blue.svg)](https://expressjs.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🎯 Features

- 🔐 **API Key Protection** - Keep your API keys secure on the server side
- ⚡ **Rate Limiting** - Prevent abuse with configurable request limits
- 💾 **Response Caching** - Improve performance and reduce API calls
- 🌤️ **Weather App Demo** - Includes a beautiful weather application UI
- 🔄 **Flexible Configuration** - Easy to adapt for any public API
- 🎨 **Modern UI** - Responsive design with glassmorphism effects

## 🚀 Why Use an API Proxy?

When working with third-party APIs (OpenWeather, GitHub, Twitter, etc.), you typically need to include your API key in client-side requests. This exposes your credentials to anyone who inspects your code.

**The Problem:**

```javascript
// ❌ API key exposed in client-side code
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY`
);
```

**The Solution:**

```javascript
// ✅ API key hidden on server
fetch(`/api?q=London`);
```

This proxy server acts as a secure middleman, handling API authentication on the server while your client makes simple requests to your own endpoints.

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- An API key from [OpenWeather API](https://openweathermap.org/api) (free tier available)

## ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/SaketKothari/api-proxy-server.git
cd api-proxy-server
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Rename `.env.example` to `.env` and add your API credentials:

```env
API_BASE_URL=https://api.openweathermap.org/data/2.5/weather
API_KEY_NAME=appid
API_KEY_VALUE=your_openweather_api_key_here
```

4. **Start the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:5000](http://localhost:5000)

## 🔧 Configuration

### Environment Variables

The `.env` file structure is designed to work with any public API:

```env
# Base URL of the API (without query parameters)
API_BASE_URL=https://api.example.com/endpoint

# The query parameter name for the API key
API_KEY_NAME=apiKey

# Your actual API key value
API_KEY_VALUE=your_secret_key
```

### Rate Limiting

Customize rate limits in your server configuration:

- Default: 100 requests per 15 minutes per IP
- Adjust as needed based on your API's limits

### Caching

Configure cache duration to reduce redundant API calls:

- Responses are cached to improve performance
- Configurable TTL (Time To Live)

## 🎨 Usage Examples

### Basic Weather Query

```javascript
// Client-side request
fetch("/api?q=London")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### With Additional Parameters

```javascript
// Add any query parameters your API supports
fetch("/api?q=NewYork&units=metric")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

## 📁 Project Structure

```
api-proxy-server/
├── index.js              # Main server file
├── package.json          # Dependencies and scripts
├── .env                  # Environment variables (create from .env.example)
├── middleware/
│   └── error.js         # Error handling middleware
├── routes/
│   └── index.js         # API routes
└── public/              # Client-side files
   ├── index.html       # Main HTML file
   ├── style.css        # Styles with modern design
   └── main.js          # Client-side JavaScript
```

## 🔌 Adapting for Other APIs

This proxy server is designed to be flexible. To use it with different APIs:

1. Update the `.env` file with your API's base URL and key format
2. Modify the routes in `routes/index.js` if needed
3. Adjust the client-side code in `public/main.js` to handle your API's response format

### Example: GitHub API

```env
API_BASE_URL=https://api.github.com/users
API_KEY_NAME=Authorization
API_KEY_VALUE=token your_github_token
```

## 🛡️ Security Features

- ✅ API keys stored securely in environment variables
- ✅ Rate limiting to prevent abuse
- ✅ CORS configuration
- ✅ Error handling middleware
- ✅ Input validation

## 🚀 Deployment

This server can be deployed to various platforms:

- **Heroku**: `git push heroku main`
- **Vercel**: Deploy with Vercel CLI
- **Railway**: Connect GitHub repository
- **DigitalOcean**: Deploy on App Platform

Remember to set environment variables in your deployment platform!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SaketKothari/api-proxy-server/issues).

## 📧 Contact

For questions or support, please open an issue in the GitHub repository.

---

Made with ❤️ using Node.js and Express
