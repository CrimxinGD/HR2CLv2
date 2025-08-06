fetch('challengelist.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('challenge-list');
    data.forEach(entry => {
      const div = document.createElement('div');
      div.className = 'challenge-entry';
      div.innerHTML = `
        <h2>${entry.name}</h2>
        <p><strong>Creator:</strong> ${entry.creator}</p>
        <p><strong>Verifier:</strong> ${entry.verifier}</p>
        <p><a href="${entry.video}" target="_blank">Watch Video</a></p>
      `;
      list.appendChild(div);
    });
  });
