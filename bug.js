```javascript
// pages/api/test.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
```
This API route works correctly in Next.js 14, but in Next.js 15, it throws an error: `TypeError: Cannot read properties of undefined (reading 'status')`.