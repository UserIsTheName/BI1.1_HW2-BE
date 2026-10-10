const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const hotels = [
  {
    id: 1,
    name: "Bansara Royale",
    location: "Katwa, West Bengal",
    rating: 4.2,
    pricePerNight: "₹3,244",
  },
  {
    id: 2,
    name: "Babua Hotel",
    location: "Katwa, West Bengal",
    rating: 4.7,
    pricePerNight: "Contact for price",
  },
  {
    id: 3,
    name: "Utsav Inn",
    location: "Katwa, West Bengal",
    rating: 4.0,
    pricePerNight: "Contact for price",
  },
  {
    id: 4,
    name: "Annapurna Hotel & Restaurant",
    location: "Katwa, West Bengal",
    rating: 4.0,
    pricePerNight: "Contact for price",
  },
  {
    id: 5,
    name: "Sonar Bangla Hotel And Restaurant",
    location: "Katwa, West Bengal",
    rating: 1.0,
    pricePerNight: "Contact for price",
  },
];

app.get("/", (req, res) => {
  res.status(200).json(hotels);
});

const PORT = 5000;
app.listen(process.env.PORT || PORT, () =>
  console.log("server is running on 5000"),
);

const findByHotelName = async (hotel) => {
  const HotelInfo = hotels.find((h) => h.name === hotel);
  return HotelInfo;
};
app.get("/FindByName/:hotelName", async (req, res) => {
  const hotelName = req.params.hotelName;
  const hotelInfo = await findByHotelName(hotelName);
  if (!hotelInfo) {
    res.status(404).json({ message: "Hotel Not Found" });
  } else {
    res.status(200).json(hotelInfo);
  }
});
