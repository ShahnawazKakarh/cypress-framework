# Cypress End-to-End Testing

This project uses [Cypress](https://www.cypress.io/) for end-to-end testing of web applications.

## 📦 Project Structure

cypress/

├── e2e/ # Test specifications

├── fixtures/ # Test data

├── support/ # Support utilities and setup

cypress.config.js # Cypress configuration file


# Commands

├── node_modules/.bin/cypress run

├── node_modules/.bin/cypress run --headed

├── node_modules/.bin/cypress run --browser chrome

├── node_modules/.bin/cypress run --spec cypress/e2e/sk-testing/online-store/"file_name_to_run.js"

├── node_modules/.bin/cypress run --spec cypress/e2e/sk-testing/online-store/*
