import log from "../utils/log";

var users = ["Jim", "Sally", "Bob"];

var getUsers = () => {
	log.log("[userDao.getUsers]");
	var promise = new Promise((resolve) => {
		var clonedArray = JSON.parse(JSON.stringify(users))

		log.log("[userDao.getUsers] SUCCESS");
		setTimeout(() => {
			resolve(clonedArray);
		}, 1000);
	});
	return promise;
};

var addUser = (user) => {
	log.log("[userDao.addUser]", user);
	var promise = new Promise((resolve) => {
		log.log("[userDao.addUser] SUCCESS");
		setTimeout(() => {
			users.push(user);
			resolve();
		}, 1000);
	});
	return promise;
};

var userDao = {
	getUsers: getUsers,
	addUser: addUser
};

export default userDao;
