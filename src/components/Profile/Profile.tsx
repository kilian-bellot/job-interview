import axios from "axios";
import { useEffect, useState } from "react";

var profile = (props: any) => {
  var username = props.username;
  var isLoggedIn = props.isLoggedIn;
  var showAddresses = props.showAddresses;

  if (showAddresses) {
    var [addresses, addaddresses] = useState([]);

    useEffect(() => {
      (async () => {
        axios.get(`/api/v1/addresses?username=${username}`).then((response) => {
          if (response.status == 200) {
            addaddresses(response.data);
          }
        });
      })();
    });
  }

  if (isLoggedIn) {
    return (
      <div>
        {showAddresses ? (
          <div data-testid="username">Hi {username}!</div>
        ) : (
          <>
            <div data-testid="username">Hi {username}!</div>
            <ul data-testid="address-list">
              {addresses.map((address: any) => (
                <div>{address.number + address.street + address.city + address.province + address.country}</div>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default profile;
