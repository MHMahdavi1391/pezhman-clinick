fetch('ads.json')
  .then(response => response.json())
  .then(data => {
    const adsSection = document.getElementById('adsSection');
    data.ads.forEach(ad => {
      const box = document.createElement('div');
      box.className = 'ad-box';
      box.innerHTML = `
        <img src="${ad.image}" alt="${ad.title}">
        <h3>${ad.title}</h3>
        <p>${ad.description}</p>
      `;
      adsSection.appendChild(box);
    });
  });


