// Generate a random ID (you can use UUID library for better uniqueness)
const generateRandomId = () => Math.random().toString(36).substring(2, 15);

// Generate a random date within a range
const generateRandomDate = () => {
  const start = new Date(2020, 0, 1); // January 1, 2020
  const end = new Date(); // Current date
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const generateDummyData = () => {
  const classNames = ["Elite", "FSA"];
  const randomClassName =
    classNames[Math.floor(Math.random() * classNames.length)];

  return {
    _id: generateRandomId(),
    class: randomClassName,
    college: "KMIT",
    Date: generateRandomDate(),
    user_name: Math.floor(Math.random() * 1000000).toString(), // Random 6-digit number
    total_time: Math.random() * 100000, // Random time value
  };
};

// Example usage to generate dummy data
module.exports = generateDummyData;
