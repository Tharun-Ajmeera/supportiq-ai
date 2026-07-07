// Temporary service
// Your teammate will replace these functions with Gemini API later.

export async function sendMessageToAI(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        reply: `AI Response for: "${message}"`,
        ticketCreated: false,
        ticketId: null,
      });
    }, 1200);
  });
}