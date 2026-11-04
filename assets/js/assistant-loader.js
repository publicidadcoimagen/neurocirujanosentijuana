/* Keep the official Sofia widget; download it only when the patient opens it. */
(function () {
  const launcher = document.getElementById("dr-assistant-launcher");
  const status = document.getElementById("dr-assistant-status");
  const message = document.getElementById("dr-assistant-message");
  const phone = document.getElementById("dr-assistant-phone");
  const nativeRoot = "JotformAgent-019a3268dbe17b5c832b8ce9b508f1d589ea";
  let requested = false;
  let observer;
  let timeout;

  function openNativeWidget() {
    const avatar = document.getElementById(nativeRoot)?.querySelector(".ai-agent-chat-avatar");
    if (!avatar) return false;
    observer?.disconnect();
    clearTimeout(timeout);
    launcher.hidden = true;
    status.hidden = true;
    avatar.click();
    return true;
  }

  function showFallback() {
    observer?.disconnect();
    clearTimeout(timeout);
    launcher.disabled = false;
    launcher.setAttribute("aria-busy", "false");
    message.textContent = "El asistente está tardando en cargar. ";
    phone.hidden = false;
    status.hidden = false;
  }

  launcher.addEventListener("click", function () {
    if (openNativeWidget()) return;
    launcher.disabled = true;
    launcher.setAttribute("aria-busy", "true");
    message.textContent = "Cargando asistente…";
    phone.hidden = true;
    status.hidden = false;
    observer = new MutationObserver(openNativeWidget);
    observer.observe(document.body, { childList: true, subtree: true });
    timeout = setTimeout(showFallback, 30000);

    if (!requested) {
      requested = true;
      const script = document.createElement("script");
      script.src = "https://cdn.jotfor.ms/agent/embedjs/019a3268dbe17b5c832b8ce9b508f1d589ea/embed.js";
      script.async = true;
      script.onerror = function () {
        requested = false;
        script.remove();
        showFallback();
      };
      document.body.appendChild(script);
    }
  });
})();
