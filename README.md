# Node API Proxy Server

* Server used for hiding API keys, rate limiting and caching. 
* This uses the [OpenWeather API](https://openweathermap.org/api) but you can easily change it to whatever public API you are using.

#

In this we can hide our public API keys by using our own server because in a lot of cases when you use a third-party API like the Github API or Twitter or in our case 
we're going to be using Open Weather API, a lot of times you need to include your API key directly in the url when you make your request  So here I have a very simple 
just client-side Vanilla JavaScript Weather app that uses Open Weather API and we can just put in a city name and it just you know gets the the temperature but if I open
up my source code here and I look in my main.js you'll see that in this fetch weather function I'm making a request directly to open weather map and I have my API key or 
my app id directly in my client-side code which you really don't want to show.

So there's a few ways around this and in one way is to just have your own server your own API proxy server which is kind of like a middleman that you can make requests to
and then store your API key on the server so that's what I want to do and in addition to that how we can add things like rate limiting so people can only
make a certain amount of requests per a certain amount of time and we'll show you how to add some caching.

#

## Usage

### Install dependencies

```bash
npm install
```

### Run on http://localhost:5000

```bash
npm run dev
```

#

### Add public API info

Rename **.env.example** to **.env** and edit the values

If the public API URL is **https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIkey}**

- API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
- API_KEY_NAME = "appid"
- API_KEY_VALUE = "YOUR API KEY"

#

You can add on any other query params as needed when hitting the /api endpoint such as https://yourdomain/api?q=detroit without having to add your key in the client
- Add new routes as you see fit
- Change rate limiting and caching to desired values

