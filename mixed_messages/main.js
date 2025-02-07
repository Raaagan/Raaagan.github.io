// Mixed Messages Data
const mixedMessages = {
  cars: [
    "Golf Cart",
    "Cadillac",
    "City Bus",
    "Your Kids Hid Your Keys",
    "Lincoln",
    "Ambulance"
  ],
  candyDish: [
    "Werthers",
    "Lifesavers",
    "Andes Mints",
    "Butterscotch",
    "Strawberry Hard Candy",
    "Dads Rootbeer Barrels"
  ],
  mobility: [
    "Cane",
    "Walker",
    "Wheelchair",
    "Motorized Scooter",
    "A lot of Assistance",
    "Segway"
  ],
  medicalDevice: [
    "Hearing Aid",
    "Glasses",
    "Diapers",
    "Dentures",
    "Pacemaker",
    "Glass Eye"
  ],
  grandChildren: [1, 3, 5, 10, 12, 15]
};

// Function to return randomized messages
function randomizer(obj) {
  return {
    transport: obj.cars[Math.floor(Math.random() * obj.cars.length)],
    candy: obj.candyDish[Math.floor(Math.random() * obj.candyDish.length)],
    mobility: obj.mobility[Math.floor(Math.random() * obj.mobility.length)],
    accessory:
      obj.medicalDevice[Math.floor(Math.random() * obj.medicalDevice.length)],
    grandchildren:
      obj.grandChildren[Math.floor(Math.random() * obj.grandChildren.length)]
  };
}

// Function to generate and display messages
function mixedMessageGenerator() {
  const messages = randomizer(mixedMessages);

  document.getElementById(
    "transport"
  ).textContent = `Your mode of transportation: ${messages.transport}`;
  document.getElementById(
    "candy"
  ).textContent = `Your candy dish stays stocked with: ${messages.candy}`;
  document.getElementById(
    "mobility"
  ).textContent = `You can't get around without: ${messages.mobility}`;
  document.getElementById(
    "accessory"
  ).textContent = `Your favorite fashion accessory is: ${messages.accessory}`;
  document.getElementById(
    "grandchildren"
  ).textContent = `The number of grandchildren you have: ${messages.grandchildren}`;
}

// Event listener for the button
document
  .getElementById("generateBtn")
  .addEventListener("click", mixedMessageGenerator);
