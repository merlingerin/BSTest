import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Http } from "./services/HttpService";
import AuthorizationService from "./services/AuthorizationService";
import { IUpcomingFlight } from "./interfaces";

export class Api {
  http: AxiosInstance;
  baseUrl: string;
  authorization: AuthorizationService = new AuthorizationService(
    "https://dev-api.blue-style.cz/account/v1"
  );
  upcomingFlights: Http<IUpcomingFlight[]>;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.http = Axios.create({
      baseURL: baseUrl,
      timeout: 7000
    });
    this.setAuthorizationsHeaders();
    this.upcomingFlights = new Http<IUpcomingFlight[]>(
      this.http,
      "/Definitions/getUpcomingFlights"
    );
  }

  private setAuthorizationsHeaders() {
    this.http.interceptors.request.use(async (config: AxiosRequestConfig) => {
      let credentials = this.getCredentials();
      if (
        !credentials.Token ||
        parseInt(credentials.ExpiresIn + "") < new Date().getTime()
      ) {
        try {
          await this.authorization.createToken();
          credentials = this.getCredentials();
        } catch (error) {
          console.log(error);
        }
      }
      return {
        ...config,
        headers: {
          Authorization: `${credentials.TokenType} ${credentials.Token}`
        }
      };
    });
  }

  private getCredentials() {
    const store: Storage = window["localStorage"];
    return {
      Token: store.getItem("token"),
      TokenType: store.getItem("tokenType"),
      ExpiresIn: store.getItem("expiresIn")
    };
  }
}
const flightApi = new Api("https://dev-api.blue-style.cz/homework/v1");
export default flightApi;
