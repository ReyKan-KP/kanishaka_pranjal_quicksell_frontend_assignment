const avatars = {};

function getRandomAvatar() {
  const avatarUrls = [
    "https://iili.io/d6L32lS.png",
    "https://iili.io/dP3p6MB.png",
    "https://iili.io/dP3p4nV.png",
    "https://iili.io/dP3y2cX.png ",
    "https://iili.io/dP3pynp.png ",
  ];
  const randomIndex = Math.floor(Math.random() * avatarUrls.length);
  return avatarUrls[randomIndex];
}

export function getAvatar(userId) {
  if (!avatars[userId]) {
    avatars[userId] = getRandomAvatar();
  }
  return avatars[userId];
}
