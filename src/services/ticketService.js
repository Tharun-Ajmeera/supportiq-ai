// Mock Ticket Service
// Your teammate will replace these functions with Firestore later.

const mockTickets = [
  {
    id: "SUP-2045",
    customer: "John Smith",
    subject: "Refund Request",
    status: "Open",
    priority: "High",
    createdAt: "10:30 AM",
  },
  {
    id: "SUP-2046",
    customer: "Emma Watson",
    subject: "Payment Failed",
    status: "Resolved",
    priority: "Medium",
    createdAt: "Yesterday",
  },
  {
    id: "SUP-2047",
    customer: "Alex Johnson",
    subject: "Delivery Delay",
    status: "Pending",
    priority: "Low",
    createdAt: "Yesterday",
  },
];

export async function getTickets() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockTickets), 500);
  });
}