document.addEventListener("DOMContentLoaded", function () {

  // Detectar si estamos en index
  const isHome =
    window.location.pathname === "/" ||
    window.location.pathname.includes("index.html");

  // Posición dinámica
  const sidePosition = isHome ? "left:20px;" : "right:20px;";

  const buttons = `
  
  <!-- BOTÓN LLAMAR -->
  <a href="tel:+526646351809"
  onclick="gtag('event','click_call',{'event_category':'contact','event_label':'telefono'});"
  style="
    position:fixed;
    bottom:80px;
    ${sidePosition}
    background:#0A84FF;
    color:white;
    padding:12px 16px;
    border-radius:50px;
    font-weight:bold;
    text-decoration:none;
    box-shadow:0 4px 12px rgba(0,0,0,0.3);
    z-index:9999;
    font-family:Arial,sans-serif;
  ">
  Llamar
  </a>

  <!-- BOTÓN WHATSAPP -->
  <a href="https://wa.me/5215559404497"
  target="_blank"
  onclick="gtag('event','click_whatsapp',{'event_category':'contact','event_label':'whatsapp'});"
  style="
    position:fixed;
    bottom:20px;
    ${sidePosition}
    background:#25D366;
    color:white;
    padding:12px 16px;
    border-radius:50px;
    font-weight:bold;
    text-decoration:none;
    box-shadow:0 4px 12px rgba(0,0,0,0.3);
    z-index:9999;
    font-family:Arial,sans-serif;
  ">
  WhatsApp
  </a>

  `;

  document.body.insertAdjacentHTML("beforeend", buttons);

});
