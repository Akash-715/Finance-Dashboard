# Finvora - Finance Dashboard UI

A responsive and interactive finance dashboard built as part of a frontend assignment.  
The application helps users view financial summaries, explore transactions, understand spending behavior, and switch between basic frontend-only roles such as **Viewer** and **Admin**.

---

## Project Overview

This project simulates a simple personal finance dashboard where users can:

- View their **total balance**, **income**, and **expenses**
- Explore and search through transactions
- Visualize spending using charts
- Switch between **Viewer** and **Admin** roles
- Add and delete transactions (Admin only)
- Understand monthly spending patterns and insights

The project is built fully on the frontend using **mock data + local state persistence**, without backend dependency.

---

## Features

### 1. Dashboard Overview
- Summary cards:
  - Total Balance
  - Income
  - Expenses
- Time-based visualization:
  - **Balance Trend Line Chart**
- Category-based visualization:
  - **Spending Breakdown Pie Chart**

### 2. Transactions Section
- Displays:
  - Date
  - Description
  - Category
  - Type (Income / Expense)
  - Amount
- Includes:
  - Search functionality
  - CSV export
  - Delete action for Admin

### 3. Role-Based UI (Frontend Simulation)
- **Viewer**
  - Can only view dashboard data
- **Admin**
  - Can add new transactions
  - Can delete transactions

Role switching is simulated from the frontend for demonstration purposes.

### 4. Insights Section
Shows useful spending insights such as:
- Highest spending category
- Total expenses
- Monthly expense comparison
- Spending observations
- Savings Rate

### 5. Recent Transactions
A separate card displays the latest few transactions in a cleaner, more compact format.

### 6. Theme Support
- Light Mode
- Dark Mode

### 7. Data Persistence
Transactions and UI preferences are persisted using **localStorage**.

---

## Tech Stack

- **React.js**
- **Context API** (State Management)
- **CSS** (Component-based styling)
- **Recharts** (Charts)
- **React Icons** (Icons)

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── charts/
│   │   ├── BalanceChart.jsx
│   │   ├── CategoryPie.jsx
│   │   └── IncomeExpenseChart.jsx
│   ├── AddTransactionModal.jsx
│   ├── Insights.jsx
│   ├── Navbar.jsx
│   ├── RecentTransactions.jsx
│   ├── Sidebar.jsx
│   └── Transaction.jsx
│
├── context/
│   └── AppContext.jsx
│
├── data/
│   └── mockData.js
│
├── pages/
│   └── Dashboard.jsx
│
├── styles/
│   ├── dashboard.css
│   ├── navbar.css
│   ├── sidebar.css
│   ├── transaction.css
│   ├── insights.css
│   ├── recentTransactions.css
│   ├── balancechart.css
│   ├── incomeExpenseChart.css
│   └── piechart.css
│
├── App.jsx
└── main.jsx
```

---

## State Management Approach

State is managed using **React Context API**.

The global context stores:
- Transactions data
- Selected role
- Search term
- Theme (Light / Dark)
- Sidebar state

This keeps the app simple and organized without needing Redux or other external state libraries.

---

## How the Assignment Requirements Were Addressed

### 1. Dashboard Overview
Implemented summary cards and visual charts to provide a quick financial overview.

### 2. Transactions Section
Created a searchable and exportable transactions table with role-based actions.

### 3. Basic Role-Based UI
Simulated **Viewer** and **Admin** roles using frontend state.  
Admin gets access to add/delete transaction actions.

### 4. Insights Section
Added insights such as:
- Top spending category
- Monthly comparisons
- Savings Rate

### 5. State Management
Used **Context API** to handle app-wide state cleanly.

### 6. UI / UX Expectations
- Responsive layout
- Light / Dark mode
- Mobile sidebar
- Clean visual hierarchy
- Handles empty transaction state

### 7. Documentation
This README explains the project structure, approach, and feature implementation.

### 8. Attention to Detail
Added:
- CSV export
- Recent transactions card
- Theme switching
- Role simulation
- Local persistence
- Responsive charts and sidebar

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

---

## Required Packages

Make sure these are installed:

```bash
npm install recharts react-icons
```

---

## Notes About Data

The project uses **mock transaction data** spread across multiple months for better charting and monthly comparison.

Added or deleted transactions are stored in **localStorage** so that UI changes remain after refresh.

If needed, local data can be reset manually in browser console:

```js
localStorage.removeItem("transactions");
```

---

## Assumptions Made

- No backend/API integration was required for this assignment.
- Role-based access is simulated only on the frontend.
- Data is static/mock but persisted locally for better UX.
- Sorting, insights, and charts are all derived from frontend state.

---
