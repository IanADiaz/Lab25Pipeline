const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});


PORT = 8608;

app.listen(PORT,() => console.log(`Server running on http://localhost:${PORT}`));
