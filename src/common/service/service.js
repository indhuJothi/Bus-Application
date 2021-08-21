import data from "../../user.json";
import busdata from "../../bus.json";
import bushistory from "../../busHistory.json";
import userhistory from "../../userHistory.json";
let jsondata = data;
let busjson = busdata;
let bushistoryjson = bushistory;
let userhistoryjson = userhistory;
console.log(jsondata);
console.log(busjson);
export default function validateLogin(mobilenum, valpassword) {
  let returnval;
  jsondata.user.filter((element) => {
    if (
      element.mobile === parseInt(mobilenum) &&
      element.password === valpassword
    ) {
      returnval = true;
    }
  });
  return returnval;
}

export function getPassword(mobilenum, valpassword) {
  let jsonpass;
  jsondata.user.filter((element) => {
    if (
      element.mobile === parseInt(mobilenum) &&
      element.password === valpassword
    ) {
      jsonpass = element.password;
    }
  });
  return jsonpass;
}

export function getMobile(mobilenum, valpassword) {
  let jsonmobile;
  jsondata.user.filter((element) => {
    if (
      element.mobile === parseInt(mobilenum) &&
      element.password === valpassword
    ) {
      jsonmobile = element.password;
    }
  });
  return jsonmobile;
}

export function getEmail(mobilenum, valpassword, email) {
  let jsonemail;
  jsondata.user.filter((element) => {
    if (
      element.mobile === parseInt(mobilenum) &&
      element.password === valpassword &&
      element.email === email
    ) {
      jsonemail = element.email;
    }
  });
  return jsonemail;
}

export function getUsername(mobilenum) {
  let username;
  jsondata.user.filter((element) => {
    if (element.mobile === parseInt(mobilenum)) {
      username = element.name;
    }
  });
  return username;
}

export function getUseremail(mobilenum) {
  let useremail;
  jsondata.user.filter((element) => {
    if (element.mobile === parseInt(mobilenum)) {
      useremail = element.email;
    }
  });
  return useremail;
}

export function getBusdetails(from, to) {
  let busdatas = [];
  busjson.bus.filter((element) => {
    if (element.from === from && element.to === to) {
      console.log(element.from);
      console.log(element.to);
      busdatas = element;
    }
    console.log(element);
  });
  console.log(busdatas);
  return busdatas;
}

// export function get

export function getBushistory() {
  let bushistory;
  return (bushistory = bushistoryjson.userbusbooking);
}

export function getFinaldata() {
  let finaldata;
  return (finaldata = userhistory.buspassanger);
}

export function seatCount(busno, selectedseat) {
  let busseatcount;
  busjson.bus.map((element) => {
    if (element.busno == busno) {
      element.NoOfSeats = element.NoOfSeats - selectedseat;
      busseatcount = element.NoOfSeats;
    }
    console.log(element);
  });
  console.log(busseatcount);
  return busseatcount;
}
