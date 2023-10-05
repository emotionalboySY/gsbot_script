module.exports = {
	apps: [{
		name: "app",
		script: "./index.js",
		watch: [
			"index.js"
		],
		instances: 1,
		error_file: "./error.log",
		out_file: "./out.log",
		log_file: "./log.log"
	}]
}