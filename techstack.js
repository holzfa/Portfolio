const techStack = [
  { title: "Git", subtitle: "Versionen Kontrolle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", bg: "#451a03" },
  { title: "Figma", subtitle: "Design Werkzeug", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", bg: "#1e3a29" },
  { title: "C#", subtitle: "Native Windows Programme", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", bg: "#3d294a" },
  { title: "Kotlin", subtitle: "Java aber Besser", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg", bg: "#371840" },
  { title: "Linux", subtitle: "Arch & Fedora", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fedora/fedora-original.svg", bg: "#1c2052" },
  { title: "Rider", subtitle: "DotNet Entwicklung", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rider/rider-original.svg", bg: "#8a6213" },
  { title: "IntelliJ IDEA", subtitle: "Kotlin Entwicklung", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg", bg: "#6b1230" }
];
const techContainer = document.getElementById("tech-stack");
techContainer.innerHTML = techStack.map(item => `
  <div class="tech-card">
    <div class="icon-box" style="--badge-bg: ${item.bg}">
      <img src="${item.icon}" alt="${item.title}">
    </div>
    <div class="card-info">
      <h3 class="tech-card-title">${item.title}</h3>
      <p class="tech-card-subtitle">${item.subtitle}</p>
    </div>
  </div>
`).join("");
