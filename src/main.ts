import container from "./config/ioc_config";
import SERVICE_IDENTIFIER from "./constants/identifiers";
import Battle from "./interfaces/battle";

// Composition root
let epicBattle = container.get<Battle>(SERVICE_IDENTIFIER.BATTLE);

epicBattle.fight().then(console.log);
