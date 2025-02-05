# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections in asynchronous route handlers.  The server randomly throws an error, showcasing the need for robust error handling in asynchronous code.

## Problem

The `bug.js` file contains an Express.js server with a route that simulates an asynchronous operation.  This operation randomly throws an error, but the error isn't properly handled, leading to a crash or unexpected behavior.  This is a classic example of a difficult to debug issue since the error isn't always reproduced.

## Solution

The `bugSolution.js` file demonstrates how to properly handle this type of error using `async/await` and `try...catch` blocks. By wrapping the asynchronous code in a `try...catch`, any errors are caught and managed gracefully. The improved error handling provides more resilient server behavior.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `node bug.js` to start the server with the unhandled error.
5. Run `node bugSolution.js` to start the server with the fixed error handling.
6. Send requests to `http://localhost:3000/` and observe the behavior.

## Key Learning Points

* Always wrap asynchronous operations in `try...catch` blocks for error handling. This is especially important in Express.js route handlers where errors can easily go unhandled.
* Using `async/await` improves code readability and simplifies error handling in asynchronous functions.
* Proper error handling ensures application stability and robustness.