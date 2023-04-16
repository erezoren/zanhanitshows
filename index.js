const KEY = `ef9f1af2-bac5-11eb-8529-0242ac130003`;
const NAMESPACE = "zanhanit-shows.onrender.com";
const COUNT_URL = `https://api.countapi.xyz`;

const counter = document.querySelectorAll('.cnt-span');

const getCount = async () => {
  const response = await fetch(`https://api.countapi.xyz/hit/zanhanit-shows.onrender.com/visits`);
  const data = await response.json();
  setValue(data.value);
};

const setValue = (num) => {
  var str = num.toString().padStart(6, "0");
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    counter[index].innerHTML = element;
  }
};

getCount()
