import mitt from "mitt";

export const getEmitter = () => {
  return mitt();
};
