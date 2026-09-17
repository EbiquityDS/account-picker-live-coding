# Account picker — live coding (45 minutes)

Vue 3 + Pinia exercise.
## Setup (during the call)

```bash
npm install
npm run dev
```

Node 22 recommended. When the app is running, coding time starts.

## User story

As a user, I can see my accounts, choose one, and the rest of the app uses that account.

## API

`GET /api/accounts` — already mocked in Vite.

Example item:

```json
{ "id": "acc-1", "name": "Nordic Retail 2026", "organisation": "Acme Foods" }
```

To test the error state: `GET /api/accounts?fail=1` (or temporarily change the fetch URL).

A helper lives in `src/api/accounts.js` (`fetchAccounts()`). You may use it or call `fetch` yourself.

`AppHeader` already reads `selectedAccount` from Pinia. Your job is to load the list and write the selection into the store.

## Must-have

1. Load accounts from `GET /api/accounts`
2. Render the list (name + organisation)
3. Clicking an account stores it in **Pinia** and the header shows `Working in: …`
4. Loading, empty, and error states

## Stretch (only if must-have is done)

- Filter the list by name
- Persist the selection to `localStorage` and restore on refresh
