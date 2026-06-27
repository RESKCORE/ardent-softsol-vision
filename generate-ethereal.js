import nodemailer from "nodemailer";
import fs from "fs";

async function generateAccount() {
  console.log("Generating Ethereal account...");
  let testAccount = await nodemailer.createTestAccount();
  console.log("Account created:", testAccount.user);
  
  let envContent = `# ⚠️ Ethereal test account credentials (DO NOT USE IN PRODUCTION)
SMTP_HOST=smtp.ethereal.email
SMTP_PORT=587
SMTP_USER=${testAccount.user}
SMTP_PASS=${testAccount.pass}
`;

  fs.writeFileSync(".env", envContent);
  console.log("Updated .env with new credentials!");
}

generateAccount().catch(console.error);
