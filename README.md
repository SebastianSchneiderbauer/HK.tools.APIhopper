# APIhopper

<p align="center">
	<img src="logo.svg" alt="APIhopper Logo">
</p>

<p align="center">
	<strong>A lightweight tool for managing and rotating multiple API keys</strong>
</p>

---

## Overview

APIhopper is a Node.js utility that allows you to manage multiple API keys for the same service, enabling automatic failover and load distribution. When one API key reaches its limit or fails, the system automatically switches to the next available key.

## ✨ Features

- **Automatic API Key Rotation** - Seamlessly switch between multiple API keys
- **Error Handling** - Built-in validation and error management
- **Simple Integration** - Easy to integrate into existing projects
- **Status Monitoring** - Track API key usage and status
- **Flexible Configuration** - Support for multiple API services

## USAGE: Basic Example

```javascript
import { callAPI, addAPIkeyCollection, getAPIname } from "./apihopper.js";

// Add API key collection
addAPIkeyCollection([
    "marketstack",             	// Service name
    "status",                 	// validation field
    "200",                    	// successCode
    process.env.MARKETSTACK_API_KEY_FAKE,  // made up key
    process.env.MARKETSTACK_API_KEY_REAL   // actual key
]);
//if your api returns JSON, a response is only accepted when the validation field´s value is equal to the successCode. This should normally be a field that contains a error code if a request is faulty (wrong APIkey, link, etc.)

// Make API call with automatic key rotation
//use APIKEY as a placeholder for key insertion by APIhopper
const result = await callAPI(0, "http://api.marketstack.com/v1/eod?access_key=APIKEY&symbols=AAPL");
console.log(result);
```

### API Reference

#### `addAPIkeyCollection(keys)`
Adds a collection of API keys. A collection is to be created for every different api you want to use.
- `keys`: Array containing `[serviceName, statusField, successCode, ...apiKeys]`

#### `callAPI(index, call)`
Makes an API call using the specified key collection.
- `index`: Index of the API key collection to use
- `call`: API endpoint URL (use "APIKEY" placeholder for key insertion)

#### `getAPIname(index)`
Retrieves the name of the API service at the specified index.

## Run the demo

1. **Clone the repository**
   ```bash
   git clone https://github.com/HerrKleiderbauer/HK.tools.APIhopper.git
   cd HK.tools.APIhopper
   ```

2. **Navigate to the project folder**
   ```bash
   cd project
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Get your API keys**
   - Create a free [MarketStack API key](https://marketstack.com/) (free tier required)

5. **Create environment file**
   ```bash
   touch .env
   ```

6. **Add your real and a made up API key to .env**
   ```env
   MARKETSTACK_API_KEY_FAKE=your_fake_key_here
   MARKETSTACK_API_KEY_REAL=your_real_api_key_here
   ```

7. **run the project from the console**
   ```
   node index.js
   ```

## ⚠️ Disclaimer

**Important:** This tool is provided as-is for educational and development purposes. The author holds no responsibility if your API keys get suspended or rate-limited due to using this program. Please ensure you comply with the terms of service of any APIs you use.