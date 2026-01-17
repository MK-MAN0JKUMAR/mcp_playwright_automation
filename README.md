# Playwright Automation using MCP & GitHub Copilot

## Overview
This project demonstrates how **AI-assisted test automation** can be used in a **controlled, professional way** to generate and maintain Playwright tests using:
* Playwright
* GitHub Copilot
* Playwright MCP (Model Context Protocol)
* JavaScript (Node.js)

The goal is **not to blindly generate tests with AI**, but to show how AI can support an SDET while keeping full engineering control over test quality, stability, and structure.

This repository contains a **real end-to-end automation flow** for booking.com, including search, date selection, and data extraction.
---



## Why this project exists
Most AI-generated automation projects:
* create multiple messy files
* use unstable locators
* dump screenshots everywhere
* fail in interviews


This project shows the **correct way**:
* one clean test file
* one business flow
* stable locators
* readable, maintainable code
* clear separation between exploration and final automation
---


## Tech Stack
* **Playwright** – End-to-end browser automation
* **JavaScript (Node.js)** – Test language
* **GitHub Copilot** – AI-assisted code generation
* **Playwright MCP** – AI execution & context layer
* **VS Code** – Development environment
---


## Project Structure
```
mcp_playwright_automation/
│
├── tests/
│   └── booking_search.spec.js   # Single clean E2E flow
│
├── testcontext/
│   └── contextprerequest.txt    # AI prompt & exploration notes
│
├── playwright.config.js         # Playwright configuration
├── package.json
├── .gitignore
└── README.md
```


---
## Automated Scenario
The test automates the following real user flow:
1. Open booking.com
2. Close the initial popup
3. Enter destination (New Delhi)
4. Select travel dates (30 Jan 2026 – 31 Jan 2026)
5. Click search
6. Take full screenshot and store in screenshot folder

This validates both **UI flow** and **data extraction capability**.
---



## Future Improvements
* Add Page Object Model (POM)
* Add CI integration (GitHub Actions)
* Add parallel execution
* Add API + UI hybrid tests
* Add data-driven test support
---



## Author
**Manoj Kumar**
SDET-I | Software Test Engineer | Automation (Selenium, Playwright, API, Performance)
---

