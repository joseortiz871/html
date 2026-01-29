document.getElementById('divisorForm').addEventListener('submit',
    function (event) {
        event.preventDefault();
        const numero1 = parseInt(document.getElementById('numero1').value);
        const numero2 = parseInt(document.getElementById('numero2').value);
        const divisorList = document.getElementById('divisorList');
        const divisorList2 = document.getElementById('divisorList2');
        divisorList.innerHTML = '';
        divisorList2.innerHTML = '';

        for (let i = 1; i <= numero1; i++) {
            if (numero1 % i === 0) {
                const listItem = document.createElement('li');
                listItem.textContent = i;
                divisorList.appendChild(listItem);
            }
        }

         for (let i = 1; i <= numero2; i++) {
            if (numero2 % i === 0) {
                const listItem = document.createElement('li');
                listItem.textContent = i;
                divisorList2.appendChild(listItem);
            }
        }
    });

    