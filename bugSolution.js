```javascript
// pages/api/test.js
export default function handler(req, res) {
  // Add a check to ensure 'res' is defined before accessing its properties
  if (res) {
    res.status(200).json({ text: 'Hello' });
  } else {
    console.error('Response object is undefined');
  }
}
```