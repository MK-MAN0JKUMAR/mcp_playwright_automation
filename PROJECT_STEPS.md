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
* You can also create an this folder by going in folder 
```bash
mkdir mcp_playwright_automation
cd mcp_playwright_automation
```


---
## 2. Playwright Installation
### 2.1 This command run in same folder that we created earlier via VSCode
### 2.2 Initialize Playwright (correct command)
```bash
npm init playwright@latest
```

### 2.3 Selected options
* JavaScript
* Tests folder: tests/
* Install Playwright browsers: Yes
* Add GitHub Actions: No (for now)
* Yes all if any thing get for acceptance  
---


## 3. Initial Cleanup (important)
Deleted unnecessary auto-generated artifacts:
```file
playwright-report/
test-results/
```

Updated `.gitignore`:
```file
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
...
 projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
*/
...

```

## 5. Final Project Structure
```structure
mcp_playwright_automation/
 ├─ tests/
 │   └─ booking_search.spec.js
 ├─ testcontext/
 │   └─ context_prompt.txt
 ├─ playwright.config.js
 ├─ package.json
 ├─ .gitignore
 └─ README.md
```


---
## 6. Create folder and file as in Structure
### 6.1 booking_search.spec.js
### 6.2 context_prompt.txt

* Created only ONE test file:
```file
tests/booking_search.spec.js
mcp_playwright_automation/testcontext
* testcontext/context_prompt.txt
```

* In context_prompt.txt file - Copy and Paste below content
```text
You are acting as a Senior Automation Tester writing production-ready Playwright tests.

You MUST follow these rules strictly:

1. Use Playwright MCP tools to execute steps one by one before generating code.
   - Do not write test code until all steps are executed successfully.
   - Observe real DOM, selectors, and navigation.

2. Locator Strategy (mandatory):
   - Prefer data-testid
   - If not available, use role-based locators
   - Avoid XPath unless absolutely required
   - Never use brittle CSS chains

3. Test Design Rules:
   - One test = one business flow
   - Clear test name describing user intent
   - No hard waits (no timeout / sleep)
   - Use auto-waiting and expect assertions only

4. Assertions (mandatory):
   - Validate page state, not just actions
   - At least one assertion per logical step
   - Assert visibility, text, or URL change

5. Code Standards:
   - Use @playwright/test
   - Use async/await properly
   - No duplicated logic
   - Clean, readable structure
   - Add comments only where logic is non-obvious

6. Output Rules:
   - Generate only final test code
   - Save file in /tests directory
   - Use JavaScript (not TypeScript)
   - Follow Playwright best practices

7. Execution:
   - Run the test
   - Fix failures if any
   - Emit code only after test passes
```
---


## 7. Go to Copilot Chat in VSCode and Enter Your STR with above file context_prompt.txt(for use file you can drag and drop)
```text
Generate ONE Playwright test file for booking.com flow:
1. Open https://www.booking.com/
2. Close popup: //div[@class='a5c71b0007']
3. Enter "New Delhi" in destination
4. Select dates: 30 Jan 2026 – 31 Jan 2026
5. Click search
6. Print top 10 hotels:
   - Hotel Name
   - Hotel Rating
   - Charge
   - Room Type

Rules:
- One spec file only
- No screenshots 
- No exploration
- Stable locators only
- One clean business flow
- Save as booking_search.spec.js
- headed mode
```
* Note: If the element is not found correctly, you can also provide the XPath directly as i used for close the popup


### 7.1 During the first execution, the Agent will ask for your permission. You have two options:
* Review and allow the action once.
* Select 'Always Allow' so the Agent does not ask for permission again.

### 7.2 Cleanup after generation
* Removed prompt comment
* Kept only final code
---



## 8. Automated Scenario Implemented
The final test performs:
1. Open booking.com
2. Close popup
3. Enter destination (New Delhi)
4. Select dates (30 Jan 2026 – 31 Jan 2026)
5. Click search
6. Extract top 10 hotels
7. Print hotel details to console
---


## 9. Test Execution
Ran test locally:
```bash
npx playwright test booking_search.spec.js --reporter=line --headed
```


Verified:
* Test passes
* No unnecessary screenshots
* No extra files created
---


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
---

## 12. Purpose of this file
This file proves:
* how the project was built step by step
* that the automation was controlled and intentional
* that AI usage was professional, not blind generation

This is useful for reviewers, and future maintenance.
