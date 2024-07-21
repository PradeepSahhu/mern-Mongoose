const imageModel = require("../Model/image.model");

const imageBase64 = async (req, res) => {
  //   const { UID, Name, Section, Group, sort, select } = req.query;

  let apiData = imageModel.find(req.query);

  // console.log(queryObject);
  const myData = await apiData;
  res.status(200).json({ myData, ngHits: myData.length });

  // const apiData = await imageModel.find({}); //? returns promise
};

const imageBase64Testing = async (req, res) => {
  const apiData = await imageModel.find({}); //? returns promise
  res.status(200).json({ apiData });
};

const firstYear = (req, res) => {
  res.send("This is first Year student API");
};
const firstYearTesting = (req, res) => {
  res.send("This is first Year student Testing API");
};

module.exports = {
  imageBase64,
  imageBase64Testing,
  firstYear,
  firstYearTesting,
};
