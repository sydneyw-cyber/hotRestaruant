const searchBtn = document.getElementById('search-btn');
      const statsEl = document.getElementById('stats');
      const nameEl = document.getElementById('name');
      const roleEl = document.getElementById('role');
      const ageEl = document.getElementById('age');
      const fpEl = document.getElementById('force-points');

      searchBtn.addEventListener('click', () => {
        let searchedCharacter = document
          .getElementById('character-search')
          .value.trim();

        // Using a RegEx Pattern to remove spaces from searchedCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        searchedCharacter = searchedCharacter.replace(/\s+/g, '').toLowerCase();

        fetch(`/api/characters/${searchedCharacter}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const { name, role, age, forcePoints } = data;

            if (data) {
              statsEl.setAttribute('style', 'display: inline');
              nameEl.textContent = name;
              roleEl.textContent = role;
              ageEl.textContent = age;
              fpEl.textContent = forcePoints;
            } else {
              nameEl.textContent =
                'The force is not strong with this one. Your character was not found.';
                statsEl.setAttribute('style', 'display: none');
            }
          })
          .catch((error) => {
            console.error(error);
          });
      });