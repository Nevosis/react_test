import { configLog } from "./config";

var log = {
	info(message) {
		if (configLog.info) console.info(message);
	},
	log(message) {
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
