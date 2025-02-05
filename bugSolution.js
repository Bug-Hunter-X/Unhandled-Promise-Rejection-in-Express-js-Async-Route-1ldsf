const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    // Simulate an asynchronous operation that might throw an error
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (Math.random() < 0.5) {
      throw new Error('Something went wrong!');
    }
    res.send('Hello from Express!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server Error');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));