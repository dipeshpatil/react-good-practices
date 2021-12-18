const screen = {
  width: window.screen.width,
  height: window.screen.height,
};

const config = {
  appName: "IMPRIMEX",
  isDark: JSON.parse(localStorage.isDark ?? null) || false,
  isDevice: screen.width >= 320 && screen.width <= 450,
};

export default config;
