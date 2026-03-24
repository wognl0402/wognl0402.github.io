(function () {
  function renderAwards(container) {
    if (!window.AWARDS || !container) return;
    var html = window.AWARDS.map(function (a) {
      var icon = a.icon ? '<span style="font-size: 1.1em; margin-bottom:-15px;color: black">' + a.icon + '</span> ' : '';
      return '<div style="font-size: 1.1em; margin-bottom:-15px;color: black">' + icon + '<b>' + (a.name || a.title) + '</b>, ' + (a.year || "") + '</div><br>';
    }).join('');
    container.innerHTML = html;
  }

  function renderPapers(container) {
    if (!window.PAPERS || !container) return;
    var html = window.PAPERS.map(function (p) {
      var links = (p.links || []).map(function (l) {
        return '<a href="' + l.url + '" target="_blank">[' + l.label + ']</a>';
      }).join(' ');
      var equalNote = p.equalNote ? '<br/>(' + p.equalNote + ')<br />' : '';
      var authorsStr = (p.authors || []).map(function (a) {
        return (p.boldAuthors || []).indexOf(a) >= 0 ? '<b>' + a + '</b>' : a;
      }).join(', ');
      var media;
      if (p.video) {
        var videoType = p.video.slice(-4) === '.m4v' ? 'video/x-m4v' : 'video/mp4';
        media = '<video style="width:100%" autoplay muted loop playsinline><source src="' + p.video + '" type="' + videoType + '"></video>';
      } else if (p.image) {
        media = '<a href="' + p.image + '" data-lightbox=""><img style="width:100%" src="' + p.image + '" /></a>';
      } else {
        var projectUrl = (p.links || []).find(function (l) { return l.label === 'Project Page'; });
        media = projectUrl
          ? '<a href="' + projectUrl.url + '" target="_blank" style="display:block;width:100%;padding:50% 0;background:#eee;color:#666;text-align:center;text-decoration:none;">View Project</a>'
          : '<div style="width:100%;padding:50% 0;background:#eee;color:#999;text-align:center;">—</div>';
      }
      return '<tr><td class="image-container">' + media + '</td><td><b>' + (p.title || '') + '</b><br />' +
        authorsStr + equalNote + '<br />' +
        '<i>' + (p.venue || '') + '</i><br />' + links + '</td></tr>';
    }).join('');
    container.innerHTML = html;
  }

  function renderProjects(container) {
    if (!window.PROJECTS || !container) return;
    var html = window.PROJECTS.map(function (p) {
      var subtitle = (p.subtitleHtml || (p.subtitle ? p.subtitle : '')) ? (p.subtitleHtml || p.subtitle) + '<br />' : '';
      var venue = p.venue ? '<i>' + p.venue + '</i><br /><br/>' : '';
      var linksHtml = (p.links || []).map(function (l) {
        var ext = /^https?:\/\//i.test(l.url);
        return '<a href="' + l.url + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : '') + '>[' + l.label + ']</a>';
      }).join(' ');
      var desc = p.descriptionHtml || (p.description || '');
      var media;
      if (p.video) {
        var vType = p.video.slice(-4) === '.mov' ? 'video/quicktime' : (p.video.slice(-4) === '.m4v' ? 'video/x-m4v' : 'video/mp4');
        media = '<video style="width:100%" autoplay muted loop playsinline><source src="' + p.video + '" type="' + vType + '"></video>';
      } else {
        media = '<a href="' + (p.image || '#') + '" data-lightbox=""><img style="width:100%" src="' + (p.image || '') + '" /></a>';
      }
      return '<tr><td>' + media + '</td><td><b>' + (p.title || '') + '</b><br />' +
        subtitle + venue + desc + (linksHtml ? '<br />' + linksHtml : '') + '</td></tr>';
    }).join('');
    container.innerHTML = html;
  }

  function renderSkills(container) {
    if (!window.SKILLS || !container) return;
    var html = Object.keys(window.SKILLS).map(function (label) {
      return '<tr><td style="text-align:right"><b>' + label + '</b></td><td>' + window.SKILLS[label] + '</td></tr>';
    }).join('');
    container.innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var awardsEl = document.getElementById('awards-list');
    var papersBody = document.getElementById('papers-body');
    var projectsBody = document.getElementById('projects-body');
    var skillsBody = document.getElementById('skills-body');

    renderAwards(awardsEl);
    renderPapers(papersBody);
    renderProjects(projectsBody);
    renderSkills(skillsBody);
  });
})();
