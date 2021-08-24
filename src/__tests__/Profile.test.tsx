import Profile from "../components/Profile/Profile";
import { render, waitFor, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import axios from "axios";

jest.mock("axios");
const mockedAxiosGet = mocked(axios.get);

const setup = (props: any = { username: "aUsername", isLoggedIn: true, showAddresses: true }) => {
  render(<Profile {...props} />);
};

describe("Profile", () => {
  it.todo("should call API to retrieve username");
  it.todo("should display username");
  it.todo("should display username and addresses");
});
