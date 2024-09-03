# Mobile Automation Challenge

## Installation Instructions for Running API Tests with Postman

#### Install Postman Standalone Client
[Download Postman for macOS (64-bit)](https://app.getpostman.com/app/download/osx64)

#### Install Newman CLI
```bash
npm install newman -g
```

#### Navigate to `tests/specs/api` and run tests
```bash
newman run OpenLib.postman_collection.json
```

##### NOTE: You can do a bit of performance testing by using `-n`
```bash
newman run OpenLib.postman_collection.json -n 100
```

## Instructions for Running API Tests Using WebDriverIO
```bash
npm run test:api
```

## Instructions for Running App Tests Using WebDriverIO
```bash
npm run test:app
```

## Environment

1. **Emulator**
   - **appiumVersion:** '1.6.1'
   - **browserName:** ''
   - **platformName:** 'Android'
   - **platformVersion:** '8.0.0'
   - **deviceName:** 'Nexus 5X API 26'
2. **Java Version:**
   - java version "1.8.0_172"
   - Java(TM) SE Runtime Environment (build 1.8.0_172-b11)
   - Java HotSpot(TM) 64-Bit Server VM (build 25.172-b11, mixed mode)
3. **Node Version:**
   - v9.11.1
