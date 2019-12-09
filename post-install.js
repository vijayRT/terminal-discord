const fs = require("fs");
const path = require("path");
const default_config = {
  token: "",
  max_name_length: null,
  align: false,
  separator: ":",
  history_length: null,
  default_guild: null,
  default_channel: null,
  mention_color: "#A52D00",
  default_color: "#FFFFFF",
  prompt: ">",
  show_date: true,
  show_time: true,
  use_nickname: true,
  select_count: 8,
  color_support: true,
  show_embeds: true,
  repeat_name: true,
  right_bound: false
};
if (process.env.SUDO_UID !== undefined) {
  console.log("Script is running as root user, aborting...");
  process.exit(0);
}
let homedir = process.env.HOME;
let configDirPath;
if (fs.existsSync(path.join(homedir, ".config"))) {
  configDirPath = path.join(homedir, ".config", "terminal-discord");
} else {
  configDirPath = path.join(homedir, ".terminal-discord");
}
let configFilePath = path.join(configDirPath, "config.json");
console.log(`Does config directory exist: ${fs.existsSync(configDirPath)}`);
console.log(`Does config file exist: ${fs.existsSync(configFilePath)}`);
if (!fs.existsSync(configDirPath)) {
  console.log(`Generating config directory at ${configDirPath}`);
  fs.mkdirSync(configDirPath);
}
if (!fs.existsSync(configFilePath)) {
  console.log(`Generating default configuration file at ${configFilePath}`);
  fs.writeFileSync(
    configFilePath,
    JSON.stringify(default_config, undefined, 4)
  );
} else {
  console.log("terminal-discord config already exists.");
}
