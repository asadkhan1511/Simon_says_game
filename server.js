const express = require("express");
const app = express();
const PORT = 3000;

// Serve static files from public folder
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`✅ Simon Says game running at http://localhost:${PORT}`);
});
