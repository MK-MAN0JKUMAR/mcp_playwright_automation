# Project Execution Steps – Playwright MCP Automation

This file documents **every step performed** to build this project from zero to GitHub-ready state. It is written so anyone can reproduce the same setup without confusion.
---


## 1. Environment Setup
### 1.1 Install Node.js
* Installed Node.js (v18+)
* Verified installation:
```bash
node -v
npm -v
```


### 1.2 Create Project Folder
```bash
mkdir mcp_playwright_automation
cd mcp_playwright_automation
```


---
## 2. Playwright Installation
### 2.1 Initialize Playwright (correct command)
```bash
npm init playwright@latest
```



### 2.2 Selected options
* JavaScript
* Tests folder: tests/
* Install Playwright browsers: Yes
* Add GitHub Actions: No (for now)
---


## 3. Initial Cleanup (important)
Deleted unnecessary auto-generated artifacts:
```
playwright-report/
test-results/
```

Updated `.gitignore`:
```
node_modules/
playwright-report/
test-results/
```


---
## 4. Playwright Configuration Fix
Updated `playwright.config.js` to avoid screenshot spam:


```js
use: {
  screenshot: 'only-on-failure',
  trace: 'retain-on-failure',
  video: 'retain-on-failure'
}
```


---
## 5. Create Single Test File (professional rule)
Created only ONE test file:
```
tests/booking_search.spec.js
```
Rule followed:
* One business flow
* One spec file
* No exploration in final code
---


## 6. Copilot Prompt Usage (correct method)
### 6.1 Prompt placement
* Prompt pasted as comment at top of `booking_search.spec.js`
* Cursor placed below comment
* Copilot generated code inside same file


### 6.2 Prompt used
```text
You are a Senior SDET.
Generate ONE Playwright test file for booking.com flow.
Do not create multiple files.
```


### 6.3 Cleanup after generation
* Removed prompt comment
* Kept only final code
---


## 7. Automated Scenario Implemented
The final test performs:
1. Open booking.com
2. Close popup
3. Enter destination (New Delhi)
4. Select dates (30 Jan 2026 – 31 Jan 2026)
5. Click search
6. Extract top 10 hotels
7. Print hotel details to console
---


## 8. Test Execution
Ran test locally:
```bash
npx playwright test booking_search.spec.js
```


Verified:
* Test passes
* No unnecessary screenshots
* No extra files created
---


## 9. Final Project Structure
```
mcp_playwright_automation/
 ├─ tests/
 │   └─ booking_search.spec.js
 ├─ testcontext/
 │   └─ contextprerequest.txt
 ├─ playwright.config.js
 ├─ package.json
 ├─ .gitignore
 └─ README.md
```


---
## 10. GitHub Preparation
Steps before push:
* Removed node_modules
* Removed reports
* Verified README
* Committed only clean code

```bash
git init
git add .
git commit -m "Initial Playwright MCP automation project"
```

---
## 11. Key Rules Followed
* AI used as assistant, not decision maker
* Exploration separated from final code
* One flow = one file
* Clean repo structure
* Interview-ready documentation
---

## 12. Purpose of this file
This file proves:
* how the project was built step by step
* that the automation was controlled and intentional
* that AI usage was professional, not blind generation

This is useful for reviewers, interviewers, and future maintenance.
