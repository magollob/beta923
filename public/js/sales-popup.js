// Notificação de vendas - Vanilla JavaScript (sem dependências)

const NAMES = [
  // Nomes masculinos (90%)
  "Lucas S.", "Gabriel M.", "Rafael O.", "Matheus C.", "Felipe A.",
  "Bruno T.", "Diego R.", "André L.", "Thiago N.", "Vitor H.",
  "Eduardo P.", "Gustavo F.", "Rodrigo B.", "Marcelo K.", "João V.",
  "Carlos E.", "Pedro I.", "Leandro W.", "Daniel Q.", "Caio Z.",
  "Henrique J.", "Tiago S.", "Álvaro R.", "Cristiano B.", "Leonardo M.",
  "Fabio T.", "Sergio P.", "Robson K.", "Yuri F.", "Vinícius L.",
  "Mauricio N.", "Renato C.", "Julio E.", "Davi A.", "Wagner H.",
  // Nomes femininos (10%)
  "Ana P.", "Juliana M.", "Fernanda S.",
];

const COURSE_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect fill='%23000' width='40' height='40'/%3E%3C/svg%3E";

function getRandomName() {
  return NAMES[Math.floor(Math.random() * NAMES.length)];
}

function getRandomTime() {
  // entre 17 e 59 minutos atrás
  const minutes = Math.floor(Math.random() * (59 - 17 + 1)) + 17;
  return `${minutes} minutos atrás`;
}

function createNotification() {
  const container = document.createElement("div");
  container.className = "buyer-notification-container";
  
  const notification = document.createElement("div");
  notification.className = "buyer-notification";
  
  const imageImg = document.createElement("img");
  imageImg.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%204%2C%202026%2C%2008_52_22%20PM-SBND9FEZMCDxCXTG6X07nACx3I5yG1.png";
  imageImg.alt = "Domínio do Jiu-Jitsu";
  imageImg.className = "notification-image";
  
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "notification-image-wrapper";
  imageWrapper.appendChild(imageImg);
  
  const content = document.createElement("div");
  content.className = "notification-content";
  
  const name = getRandomName();
  const time = getRandomTime();
  
  const nameEl = document.createElement("p");
  nameEl.className = "notification-name";
  nameEl.textContent = `${name} comprou`;
  
  const timeEl = document.createElement("p");
  timeEl.className = "notification-time";
  timeEl.textContent = time;
  
  const courseEl = document.createElement("p");
  courseEl.className = "notification-course";
  courseEl.textContent = "Domínio do Jiu-Jitsu";
  
  content.appendChild(nameEl);
  content.appendChild(timeEl);
  content.appendChild(courseEl);
  
  const progressBar = document.createElement("div");
  progressBar.className = "notification-progress";
  
  notification.appendChild(imageWrapper);
  notification.appendChild(content);
  notification.appendChild(progressBar);
  
  container.appendChild(notification);
  document.body.appendChild(container);
  
  // Animar entrada
  setTimeout(() => {
    container.classList.add("visible");
  }, 10);
  
  // Remover após 4 segundos
  setTimeout(() => {
    container.classList.remove("visible");
    setTimeout(() => {
      container.remove();
    }, 300);
  }, 4000);
}

function initSalesNotifications() {
  // Primeira notificação após 4 segundos
  setTimeout(() => {
    createNotification();
  }, 4000);
  
  // Notificações a cada 15 segundos
  setInterval(() => {
    createNotification();
  }, 15000);
}

// Iniciar quando o DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSalesNotifications);
} else {
  initSalesNotifications();
}
