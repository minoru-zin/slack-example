require("dotenv").config();
import axios from "axios";

async function notifyAdmin(message: string): Promise<void> {
  try {
    const webhookUrl = process.env.YOUR_SLACK_WEBHOOK_URL; // Slackで生成したWebhook URLを設定
    console.log(webhookUrl);
    if (!webhookUrl) {
      throw new Error("webhookUrl is undefined");
    }
    await axios.post(webhookUrl, {
      text: message,
    });
    console.log("Slackにメッセージを送信しました:", message);
  } catch (error) {
    console.error("Slackへのメッセージ送信中にエラーが発生しました:", error);
  }
}

// 使用例
const message = "サーバでエラーが発生しました。詳細はログを確認してください。";

notifyAdmin(message);
