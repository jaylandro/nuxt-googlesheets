const { GoogleSpreadsheet } = require("google-spreadsheet");

module.exports = async (req, res) => {
  const doc = new GoogleSpreadsheet(
    "1n00dYwTmy7QJgIKUz_Buf7t7zYssNlScLz4yXumOQGo"
  );
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });

  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[1];
  const rows = await sheet.getRows();
  const rowsContent = rows.map(({ Name, Twitter }) => ({
    Name,
    Twitter,
  }));

  res.setHeader("Content-Type", "application/json");
  res.json({
    body: rowsContent,
  });
};
