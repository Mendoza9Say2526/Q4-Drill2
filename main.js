function checkIndex() {
    
    let temp = +document.getElementById('temp').value;
    let humidity = +document.getElementById('humidity').value;
    
    // Validate inputs
    if (temp !== temp || humidity !== humidity || humidity < 0 || humidity > 100) {
        window.alert('Please enter valid temperature and humidity (0-100%).');
        return;
    }
    
    let heatIndex = temp + (0.33 * humidity) - 4;
    heatIndex = Math.round(heatIndex * 100) / 100; 

    switch (true) {
        case heatIndex <= 27:
            status = 'Comfortable / Cool';
            statusClass = 'comfortable';
            break;
        case heatIndex <= 32:
            status = 'Warm';
            statusClass = 'warm';
            break;
        case heatIndex <= 37:
            status = 'Hot';
            statusClass = 'hot';
            break;
        case heatIndex <= 41:
            status = 'Very Hot / Caution';
            statusClass = 'caution';
            break;
        default:
            status = 'Extreme Heat / Danger';
            statusClass = 'danger';
            break;
    }
    
    
    document.getElementById('result').innerHTML = `
        <div class="alert alert-info">
            <p>Heat Index: ${heatIndex} °C</p>
            <p class="${statusClass}">Status: ${status}</p>
        </div>
    `;
}