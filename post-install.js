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
fs.writeFileSync(path, JSON.stringify(default_config, undefined, 4));
