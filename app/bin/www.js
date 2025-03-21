"use strict";

const app = require("../app");
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`서버 실행 중: http://localhost:${PORT}`);
});
