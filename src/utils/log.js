import { configLog } from "./config";
//FLUTTERSHY : https://vignette4.wikia.nocookie.net/mlp/images/d/d6/Fluttershy_ID_S1E17.png
var log = {
	info(message) {
		if (configLog.info) console.info(message);
	},
	log(message) {
		console.log(console);
		if (configLog.log) console.log(message);
	},
	warn(message) {
		if (configLog.warn) console.warn(message);
	},
	error(message) {
		if (configLog.error) console.error(message);
	}
};

export default log;
