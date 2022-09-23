const fs = require("fs");
// здесь необходимо перечислить ключи из файла ENV, а точнее - из ENV netlify
fs.writeFileSync(
  "./.env",
  `
    GOOGLE_CLIENT_ID=${process.env.GOOGLE_CLIENT_ID}\n
    API_URL=${process.env.API_URL}\n
  `,
);
