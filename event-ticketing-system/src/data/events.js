export const events = [
  {
    id: 1,
    name: "Music Concert",
    date: "2024-09-15",
    location: "New Delhi",
    description: "A grand music concert featuring best singers",
    ticketPrice: 200,

    seats: Array(50).fill(false),
    reserved: Array(50).fill(false),
  },
  {
    id: 2,
    name: "Tech Conference",
    date: "2024-10-20",
    location: "Banglore",
    description:
      "A conference discussing the latest in technology and innovation.",
    seats: Array(50).fill(false),
    reserved: Array(50).fill(false),
    ticketPrice: 200,
  },
  {
    id: 3,
    name: "Food Festival",
    date: "2024-11-05",
    location: "Mumbai",
    description:
      "A festival showcasing diverse cuisines from around the world.",
    seats: Array(50).fill(false),
    reserved: Array(50).fill(false),
    ticketPrice: 200,
  },
];
