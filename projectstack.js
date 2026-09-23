const projectStack = [
  {
    title: "Aero",
    icon: "https://raw.githubusercontent.com/Aero-Language/Aero-Docs/refs/heads/main/aero_dark.svg",
    badges: ["C#", "Compiler", "Backend", "Alpha"],
    description: "Eine strikte und kompilierte Programmiersprache, die Performance mit intuitivem Syntax kombiniert.",
    url: "https://github.com/Aero-Language"
  },
  // {
  //   title: "",
  //   icon: "",
  //   badges: [],
  //   description: "",
  //   url: ""
  // }
];
const projectContainer = document.getElementById("project-stack");
projectContainer.innerHTML = projectStack.map(item => `
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
