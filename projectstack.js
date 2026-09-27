const projectStack = [
  {
    title: "Aero",
    icon: "https://raw.githubusercontent.com/Aero-Language/Aero-Docs/refs/heads/main/aero_dark.svg",
    badges: ["C#", "Compiler", "Backend"],
    description: "Eine strikte und kompilierte Programmiersprache, die Performance mit intuitivem Syntax kombiniert.",
    url: "https://github.com/Aero-Language/Luft"
  },
  {
    title: "JsonVS",
    icon: "https://raw.githubusercontent.com/holzfa/JsonVS/refs/heads/master/jsonvs_dark.svg",
    badges: ["C#", "Parser", "Json"],
    description: "Ein JSON Parser, aber es ist ein Datei System.",
    url: "https://github.com/holzfa/JsonVS"
  },
  {
    title: "Acli",
    icon: "https://raw.githubusercontent.com/Aero-Language/Acli/refs/heads/master/acli_dark.svg",
    badges: ["C#", "Cli", "Posix"],
    description: "Der einfache Weg für eine Cli.",
    url: "https://github.com/Aero-Language/Acli"
  }
  // {
  //   title: "",
  //   icon: "",
  //   badges: [],
  //   description: "",
  //   url: ""
  // }
];
const projectStackContainer = document.getElementById("project-stack");
projectStackContainer.innerHTML = projectStack.map(item => `
  <div class="project-card">
      <div class="project-card-header">
        <img src="${item.icon}" alt="${item.title}" class="project-title-icon" />
        <h3 class="project-card-title">${item.title}</h3>
      </div>

      <p class="project-description">${item.description}</p>

      <div class="project-card-footer">
        <div class="badge-grid">
          ${item.badges.map(badge => `<span class="badge">${badge}</span>`).join("")}
        </div>
        ${item.url ? `
          <a href="${item.url}" target="_blank" class="project-link-btn" aria-label="Open ${item.title}">
            <span class="symbol important">open_in_new</span>
          </a>
        ` : ''}
      </div>
    </div>
`).join("");

const projectFooterContainer = document.getElementById("project-footer");
projectFooterContainer.innerHTML = projectStack.map(item => `
  <a href="${item.url}" class="footer-link">${item.title}</a>
`).join("");
