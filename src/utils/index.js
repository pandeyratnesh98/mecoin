export const CONTENTS = [
  {
    id: 0,
    title: "Convenient Transactions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,etium maecenas sed urna",
    icon: require("../../assets/spaceship.png"),
  },
  {
    id: 1,
    title: "Safe & Secuired",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,etium maecenas sed urna",
    icon: require("../../assets/shield.png"),
  },
  {
    id: 2,
    title: "Keep in touch",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,etium maecenas sed urna",
    icon: require("../../assets/candle-stick.png"),
  },
];

export const getImageWidthHeight = (id) => {
  switch (id) {
    case 0:
      return { width: 120, height: 180 };
    case 1:
      return { width: 120, height: 160 };
    case 2:
      return { width: 160, height: 200 };
    default:
      return { width: 120, height: 180 };
  }
};

export const getStyles = (id, type) => {
  switch (id) {
    case 0:
      return type === "sm"
        ? { position: "absolute", right: 1, bottom: 1, marginRight: 80 }
        : {
            position: "absolute",
            left: 1,
            top: 1,
            marginLeft: 50,
          };
    case 1:
      return type === "sm"
        ? {
            position: "absolute",
            right: 1,
            top: 1,
            marginRight: 50,
          }
        : {
            position: "absolute",
            left: 1,
            bottom: 1,
            marginLeft: 50,
          };
    case 2:
      return type === "sm"
        ? {
            position: "absolute",
            right: 1,
            bottom: 1,
            marginRight: 50,
          }
        : {
            position: "absolute",
            left: 1,
            top: 1,
            marginLeft: 50,
          };

    default:
      return type === "sm"
        ? {
            position: "absolute",
            left: 1,
            top: 1,
            marginLeft: 50,
          }
        : {
            position: "absolute",
            left: 1,
            top: 1,
            marginLeft: 50,
          };
  }
};
