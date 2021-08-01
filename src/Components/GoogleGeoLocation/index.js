import axios from "axios";
//import Geocode from "react-geocode";

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
function success(pos) {
  //var crd = pos.coords;
  // console.log("Your current position is:");
  // console.log(`Latitude : ${crd.latitude}`);
  // console.log(`Longitude: ${crd.longitude}`);
  // console.log(`More or less ${crd.accuracy} meters.`);
  // getLocationFromIP();
  //getLocation(crd.latitude,crd.longitude);
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

export const getLatLong = () => {
  if (navigator.geolocation) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state === "granted") {
          //console.log(result.state);
          //If granted then you can directly call your function here
          navigator.geolocation.getCurrentPosition(success);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {
          //If denied then you have to show instructions to enable location
        }

        result.onchange = function () {
          //console.log(result.state);
        };
      });
  } else {
    alert("Sorry Not available!");
  }
};

export async function getLocationFromIP() {
  try {
    const { data: response } = await axios.get(
      "http://www.geoplugin.net/json.gp"
    );
    return response.geoplugin_city;
  } catch (error) {
    console.log(error);
  }
}

// export const getLocation = (lat,long) => {
//   Geocode.fromLatLng(lat,long).then(
//       (response) => {
//         const address = response.results[0].formatted_address;
//         let city, state, country;
//         for (let i = 0; i < response.results[0].address_components.length; i++) {
//           for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
//             switch (response.results[0].address_components[i].types[j]) {
//               case "locality":
//                 city = response.results[0].address_components[i].long_name;
//                 break;
//               case "administrative_area_level_1":
//                 state = response.results[0].address_components[i].long_name;
//                 break;
//               case "country":
//                 country = response.results[0].address_components[i].long_name;
//                 break;
//               default: return null;
//             }
//           }
//         }
//         console.log({city, state, country});
//         console.log({address});

//         return city;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
// }
