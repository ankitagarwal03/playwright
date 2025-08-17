# Playwright API Testing Framework

This is a Playwright-based API testing framework that provides a structured approach to testing REST APIs.

## Project Structure

```
├── tests/
│   ├── api/           # API test files
│   ├── utils/         # Utility classes and helpers
│   ├── config/        # Configuration files
│   └── data/          # Test data files
├── playwright.config.ts
└── package.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

- Run all tests:
```bash
npm test
```

- Run only API tests:
```bash
npm run test:api
```

- Run only UI tests:
```bash
npm run test:ui
```

- View test report:
```bash
npm run report
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
API_BASE_URL=your_api_base_url
```

## Writing Tests

Example API test:

```typescript
import { test, expect } from '@playwright/test';
import { APIClient } from '../utils/apiClient';

test.describe('API Tests', () => {
    let apiClient: APIClient;

    test.beforeEach(async () => {
        apiClient = new APIClient();
        await apiClient.init();
    });

    test('should get user details', async () => {
        const response = await apiClient.get('/api/users/1');
        expect(response.status()).toBe(200);
    });
});
```

## Features

- Base API client for making HTTP requests
- Environment-based configuration
- HTML test reports
- TypeScript support
- Modular and maintainable test structure 