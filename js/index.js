function displayIcons(items, list) {
  items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="${item.link}" target="_blank" rel="noopener" aria-label="${item.name}">
        <span class="tooltip">
          <span class="tooltiptext">${item.name}</span>
          ${item.logo}
        </span>
      </a>
    `;
    list.appendChild(li);
  });
}

function displayProjects(items, list) {
  items.forEach(item => {
    const li = document.createElement('li');

    if (item.code && item.video) {
      li.innerHTML = `
        <a class="project-link" href="${item.link}" target="_blank" rel="noopener">
          ${item.name}
          <p>${item.description}</p>
        </a>
        <p>
          <a class="details-link" href="${item.code}" target="_blank" rel="noopener">code</a>
          <a class="details-link" href="${item.video}" target="_blank" rel="noopener">video</a>
        </p>
      `;
      list.appendChild(li);
    } else {
      li.innerHTML = `
        <a class="project-link" href="${item.link}" target="_blank" rel="noopener">
          ${item.name}
          <p>${item.description}</p>
        </a>
      `;
      list.appendChild(li);
    }
    
  });
}

fetch('../data/data.json')
.then(response => response.json())
.then(data => {
  
  // Tools
  const tools = data.tools;
  const toolList = document.querySelector('.tool-list');
  displayIcons(tools, toolList);

  // Projects
  const projects = data.projects;
  const projectList = document.querySelector('.project-list');
  displayProjects(projects, projectList);

  // Social
  const social = data.social;
  const socialList = document.querySelector('.social-list');
  displayIcons(social, socialList);

});
