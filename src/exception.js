export const callMe = (name) => {
  if (name === "Yosep") {
    throw new Error("Ups my exception happens");
  } else {
    return "OK";
  }
};
