export const config = {
  base_url: "",

  status: [
    { id: 0, name: "New", color: "#7c9235", color2: "yellow-300" },
    { id: 1, name: "Open", color: "#4a3bb3", color2: "blue-300" },
    { id: 2, name: "On Hold", color: "#d44444", color2: "red-300" },
    { id: 3, name: "Solved", color: "#812192", color2: "indigo-300" },
    { id: 4, name: "Closed", color: "#717171", color2: "green-300" },
  ],

  priority: [
    { id: 1, name: "Low", color: "green-600" },
    { id: 2, name: "Medium", color: "blue-600" },
    { id: 3, name: "High", color: "yellow-600" },
    { id: 4, name: "Critical", color: "red-600" },
  ],

  category: [
    { id: 1, name: "Billing & Return", color: "black" },
    { id: 2, name: "Marketing", color: "black" },
    { id: 3, name: "Sales", color: "black" },
    { id: 4, name: "Support", color: "black" },
  ],
};
