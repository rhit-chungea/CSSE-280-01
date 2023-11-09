document.addEventListener('DOMContentLoaded', async () => {
    // const toIndex = document.getElementById('toIndex');
    // const fromIndex = document.getElementById('fromIndex');
    // const moveButton = document.getElementById('moveButton');
    
    
    try {
    const response = await fetch('/getmonths');
    if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
    }
    const monthContainer = document.getElementById('monthBox');
    let index = 0;
    const months = await response.json();
    
    months.forEach(month => {
    const monthDiv = document.createElement('div');
    monthDiv.className = 'month';
    monthDiv.innerHTML = `<p>${index}: ${months[index]}</p>`;
    monthContainer.appendChild(monthDiv);
    index += 1;
    });
    } catch (error) {
    console.error('Error fetching months:', error);
    }
    });
    const moveButton = document.getElementById('moveButton');
    moveButton.addEventListener('click', function() {
        
        const toIndex = document.getElementById('toIndex').value;
        const fromIndex = document.getElementById('fromIndex').value;
        fetch(`/move/${fromIndex}/${toIndex}`, {method: 'PUT'})
        .then(response => response.json())
        .then(newMonths => {
            console.log(newMonths)
            const monthContainer = document.getElementById('monthBox');
            
            monthContainer.innerHTML = '';
            for (const monthIndex in newMonths) {
                const month = newMonths[monthIndex];
                const monthDiv = document.createElement('div');
                monthDiv.className = 'month';
                monthDiv.innerHTML = `<p>${monthIndex}: ${month}</p>`;
                monthContainer.appendChild(monthDiv);
                
                }
                const summaryDiv = document.createElement('div');
                summaryDiv.className = 'summary';
                summaryDiv.innerHTML = `<p>The month ${newMonths[toIndex]} got changed from index ${fromIndex} to index ${toIndex}</p>`;
                monthContainer.appendChild(summaryDiv);
            });
        

    })
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function() {
        // fetch(`/setmonths`, {method: 'POST'})
        // .then(response =>{
        //     if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        //     }
        
        // return response.json();})
        // .then(newMonths => {
            const newMonths = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
            console.log(newMonths)
            const monthContainer = document.getElementById('monthBox');
            
            monthContainer.innerHTML = '';
            for (const monthIndex in newMonths) {
                const month = newMonths[monthIndex];
                const monthDiv = document.createElement('div');
                monthDiv.className = 'month';
                monthDiv.innerHTML = `<p>${monthIndex}: ${month}</p>`;
                monthContainer.appendChild(monthDiv);
                
                }
                
            });

    // })
