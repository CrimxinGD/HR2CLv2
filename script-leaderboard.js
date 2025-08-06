fetch('leaderboard.json')
  .then(res => res.json())
  .then(data => {
    // Sort by score descending
    data.sort((a, b) => b.score - a.score);

    const container = document.getElementById('leaderboard-container');

    data.forEach((entry, index) => {
      const div = document.createElement('div');
      div.className = 'challenge-entry';
      div.innerHTML = `
        <h2>#${index + 1} - ${entry.player}</h2>
        <p><strong>Challenge:</strong> ${entry.challenge}</p>
        <p><strong>Score:</strong> ${entry.score}</p>
      `;
      container.appendChild(div);
    });
  });
