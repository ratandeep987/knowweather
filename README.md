# 🌤 KnowWeather

A responsive weather app built with React that shows real-time weather data for any city in the world.

![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)
![OpenWeatherMap](https://img.shields.io/badge/API-OpenWeatherMap-orange?style=flat)
![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-purple?style=flat)

---

## 📸 Preview

> Search any city and instantly get live weather information with a beautiful glassmorphism UI.

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡 Shows temperature, feels like, humidity, wind speed and pressure
- 🖼 Live weather icons from OpenWeatherMap
- ⚠️ Error handling for invalid city names
- ⏳ Loading state while fetching data
- 📱 Fully responsive — works on mobile and laptop
- ✨ Glassmorphism UI with smooth animations

---

## 🛠 Tech Stack

- **React JS** — UI and state management
- **OpenWeatherMap API** — live weather data
- **CSS3** — glassmorphism design, animations, responsive layout

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/knowweather.git
cd knowweather
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get your free API key

- Go to [openweathermap.org](https://openweathermap.org)
- Sign up for a free account
- Go to **API Keys** tab and copy your key

### 4. Add your API key

Open `src/App.js` and replace the API key:

```js
const API_KEY = 'your_api_key_here';
```

### 5. Start the app

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
knowweather/
├── public/
│   └── index.html
├── src/
│   ├── App.js        ← main component
│   ├── App.css       ← all styles
│   └── index.js      ← entry point
├── package.json
└── README.md
```

---

## 🧠 Concepts Used

| Concept | Where used |
|---|---|
| `useState` | city, weather, loading, error state |
| `async/await` | fetching data from API |
| `fetch()` | calling OpenWeatherMap API |
| Conditional rendering | show loading, error, weather card |
| Controlled input | search input with onChange |
| Event handling | button click, Enter key press |

---

## 🌐 API Reference

This app uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current):

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

---

## 📱 Responsive Breakpoints

| Screen | Max Width |
|---|---|
| Mobile | 480px and below |
| Laptop/Desktop | Above 480px |

---

## 🔮 Future Improvements

- [ ] 5-day weather forecast
- [ ] Toggle between °C and °F
- [ ] Auto-detect user location
- [ ] Save last searched city
- [ ] Dark / Light mode toggle

---

## 👨‍💻 Author
Ratan Deep

Built with ❤️ while learning React JS.
