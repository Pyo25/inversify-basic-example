
import { injectable } from "inversify";

export interface IConfig {
  token: string;
  initialize(): Promise<IConfig>;
}

export type ConfigProvider = () => Promise<IConfig>;

@injectable()
export class Config implements IConfig {

  public token: string;

  public initialize(): Promise<IConfig> {
    console.log("initializing config ...");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("config initialized ...");
        this.token = "abc";
        resolve(this);
      }, 3000);
    });
  }
}
