import log from "../utils/log";

var getUsers = () => {
	log.log("[userDao.getUsers]");
	var promise = new Promise((resolve) => {
		log.log("[userDao.getUsers] SUCCESS");
		setTimeout(() => {
			var users = ["Jim", "Sally", "Bob"];
			resolve(users);
		}, 1000);
	});
	return promise;
};

var userDao = {
	getUsers: getUsers
};

export default userDao;
