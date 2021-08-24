import Profile from "../components/ProfileSolution/ProfileSolution";
import { render, waitFor, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import axios from "axios";

jest.mock("axios");
const mockedAxiosGet = mocked(axios.get);

const setup = (props: any = { username: "aUsername", isLoggedIn: true, showAddresses: true }) => {
  render(<Profile {...props} />);
};

describe("Profile", () => {
  it("should call API to retrieve username", async () => {
    mockedAxiosGet.mockResolvedValue({ data: [] });
    setup();
    await waitFor(() => {
      expect(mockedAxiosGet).toHaveBeenCalled();
    });
  });
  it("should display username", () => {
    setup({ showAddresses: false });
    const username = screen.getByTestId("username");
    expect(username).toBeInTheDocument();
  });
  it("should display username and addresses", async () => {
    mockedAxiosGet.mockResolvedValue({
      data: [{ number: "33", street: "rue ontario", city: "montreal", province: "QC", country: "canada" }],
    });
    setup();
    const addressList = screen.getByTestId("address-list");
    await waitFor(() => {
      expect(addressList).toBeInTheDocument();
    });
  });
});
