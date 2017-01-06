import { inject, injectable, named } from "inversify";
import Warrior from "../../interfaces/warrior";
import Battle from "../../interfaces/battle";
import SERVICE_IDENTIFIER from "../../constants/identifiers";
import TAG from "../../constants/tags";
import { ConfigProvider, IConfig } from "../../async_config";

@injectable()
class EpicBattle implements Battle {

    @inject(SERVICE_IDENTIFIER.WARRIOR) @named(TAG.CHINESE) public warrior1: Warrior;
    @inject(SERVICE_IDENTIFIER.WARRIOR) @named(TAG.JAPANESE) public warrior2: Warrior;
    @inject(SERVICE_IDENTIFIER.CONFIG_PROVIDER) private configProvider: ConfigProvider;
    private config: IConfig;

    public async fight() {
        await this.init();
        let desc = `FIGHT with token #{this.config.token}!
                ${this.warrior1.name} (${this.warrior1.weapon.name})
                vs
                ${this.warrior2.name} (${this.warrior2.weapon.name})`;
        return desc;
    }

    private async init() {
        if (this.config) { return this.config; }
        this.config = await this.configProvider();
        return Promise.resolve(this.config);
    }
}

export default EpicBattle;
