// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeWeather();
    loadEvents();
    updateImpactStats();
});

// Weather data fetching and display
async function initializeWeather() {
    const weatherWidget = document.querySelector('.weather-widget');
    try {
        // TODO: Implement weather API integration
        const weatherData = {
            temperature: '25°C',
            condition: 'Sunny',
            windSpeed: '10 km/h',
            waveHeight: '0.5m'
        };
        
        weatherWidget.innerHTML = `
            <div class="weather-info">
                <h3>${weatherData.condition}</h3>
                <p>Temperature: ${weatherData.temperature}</p>
                <p>Wind Speed: ${weatherData.windSpeed}</p>
                <p>Wave Height: ${weatherData.waveHeight}</p>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherWidget.innerHTML = '<p>Weather data unavailable</p>';
    }
}

// Event loading and display
function loadEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    const sampleEvents = [
        {
            title: 'Weekend Beach Cleanup',
            date: '2025-06-08',
            location: 'Sunset Beach',
            participants: 25
        },
        {
            title: 'Youth Ocean Warriors',
            date: '2025-06-15',
            location: 'Marine Bay',
            participants: 40
        },
        {
            title: 'Corporate Beach Day',
            date: '2025-06-22',
            location: 'East Coast',
            participants: 100
        }
    ];

    eventsGrid.innerHTML = sampleEvents.map(event => `
        <div class="event-card fade-in">
            <h3>${event.title}</h3>
            <p>📅 ${formatDate(event.date)}</p>
            <p>📍 ${event.location}</p>
            <p>👥 ${event.participants} participants</p>
            <button class="cta-button">Join Event</button>
        </div>
    `).join('');
}

// Impact statistics
function updateImpactStats() {
    const impactStats = document.querySelector('.impact-stats');
    const stats = [
        { label: 'Beaches Cleaned', value: '50+' },
        { label: 'Active Members', value: '1,200' },
        { label: 'Trash Collected', value: '5,000 kg' }
    ];

    impactStats.innerHTML = stats.map(stat => `
        <div class="stat-card fade-in">
            <h3>${stat.value}</h3>
            <p>${stat.label}</p>
        </div>
    `).join('');
}

// Utility functions
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
});
