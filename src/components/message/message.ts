import { createApp } from "vue";
import Message from "./Message.vue";
import { MessageInfo } from "@/types/interface";

const message = (messageInfo: MessageInfo) => {
  const defaultInfo: MessageInfo = {
    type: "default",
    message: "",
    timeout: 3000
  };
  const retInfo = Object.assign(defaultInfo, messageInfo);
  const messageInstance = createApp(
    Message,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    retInfo as any
  );

  const mountNode = document.createElement("div");

  document.body.appendChild(mountNode);
  messageInstance.mount(mountNode);
  setTimeout(() => {
    messageInstance.unmount(mountNode);
    document.body.removeChild(mountNode);
  }, retInfo.timeout);
};

message.info = message;

message.success = (messageInfo: Omit<MessageInfo, "type">) => {
  message(Object.assign({ type: "success" }, messageInfo) as MessageInfo);
};

message.error = (messageInfo: Omit<MessageInfo, "type">) => {
  message(Object.assign({ type: "error" }, messageInfo) as MessageInfo);
};

export default message;
