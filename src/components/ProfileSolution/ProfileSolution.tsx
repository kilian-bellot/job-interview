import axios from "axios";
import { FC, useEffect, useState } from "react";

const Username = ({ username }: { username: string }) => {
  return <div data-testid="username">Hi {username}!</div>;
};

export interface Address {
  number: string;
  street: string;
  city: string;
  province: string;
  country: string;
}

const Addresses: FC<{ addresses: Address[] }> = ({ addresses }) => {
  return (
    <ul data-testid="address-list">
      {addresses.map((address, idx) => {
        const { number, street, city, province, country } = address;
        return (
          <span
            key={idx}
          >{`${number} ${street} ${city} ${province} ${country}`}</span>
        );
      })}
    </ul>
  );
};

export interface ProfileProps {
  username: string;
  isLoggedIn: boolean;
  showAddresses: boolean;
}

const Profile: FC<ProfileProps> = ({ username, isLoggedIn, showAddresses }) => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!showAddresses) return;
    (async () => {
      try {
        const { status, data } = await axios.get(
          `/api/v1/addresses?username=${username}`
        );

        if (status !== 200) {
          setIsError(true);
          return;
        }

        setAddresses(data);
      } catch (e) {
        console.error(e);
        setIsError(true);
      }
    })();
  }, [showAddresses, username]);

  if (!isLoggedIn) return null;

  return (
    <div>
      <Username username={username} />
      {showAddresses && !isError && <Addresses addresses={addresses} />}
    </div>
  );
};

export default Profile;
