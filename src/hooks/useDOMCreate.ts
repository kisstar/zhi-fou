import { onUnmounted } from "vue";

// 挂载点的唯一标识
let uid = 0;

function useDOMCreate(id: string | number) {
  const teleportNode = document.createElement("div");

  teleportNode.id = (id || uid++) + "";
  document.body.appendChild(teleportNode);
  onUnmounted(() => {
    document.body.removeChild(teleportNode);
  });
}

export default useDOMCreate;
