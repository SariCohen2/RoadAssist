const basicUrl = "http://127.0.0.1:8080";  
document.addEventListener('DOMContentLoaded', (event) => {
    loadFilters();
    loadHelpRequests();
});


async function loadFilters() {
    // Load locations
    const locationResponse = await fetch(`${basicUrl}/api/locations`);
    const locations = await locationResponse.json();
    const locationFilter = document.getElementById('location-filter');
    locationFilter.innerHTML = '<option value="">All</option>';
    locations.forEach(location => {
        const option = document.createElement('option');
        option.value = location._id;
        option.textContent = location.name;
        locationFilter.appendChild(option);
    });

    // Load priorities
    const priorityResponse = await fetch(`${basicUrl}/api/priorities`);
    const priorities = await priorityResponse.json();
    const priorityFilter = document.getElementById('priority-filter');
    priorityFilter.innerHTML = '<option value="">All</option>';
    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority._id;
        option.textContent = priority.priorityName;
        priorityFilter.appendChild(option);
    });
}

async function loadHelpRequests() {
    const location = document.getElementById('location-filter').value;
    const status = document.getElementById('status-filter').value;
    const priority = document.getElementById('priority-filter').value;

    let query = '/api/helprequests?';
    if (location) query += `location=${location}&`;
    if (status) query += `status=${status}&`;
    if (priority) query += `priority=${priority}`;
    query = query.slice(-1) === '&' ? query.slice(0, -1) : query;  // Remove trailing ampersand

    const response = await fetch(`${basicUrl}${query}`);
    const helpRequests = await response.json();
    const helpRequestsList = document.getElementById('help-requests-list');
    helpRequestsList.innerHTML = '';
    helpRequests.forEach(request => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>🗺️Location:</strong> ${request.location_id.name} <br>
            <strong>📃Description:</strong> ${request.problemDescription} <br>
            <strong>📞Contact:</strong> ${request.contactPhoneNumber} <br>
            <strong>📊Status:</strong> ${request.status} <br>
            <strong>🚨Priority:</strong> ${request.priority_id.priorityName} <br>
            <strong>👨‍👩‍👧‍👦People Stuck:</strong> ${request.numberOfPeopleStuck} <br><br>
            <button onclick="volunteerForRequest('${request._id}')">I want to volunteer🚁</button>
        `;
        helpRequestsList.appendChild(li);
    });
}

let currentHelpRequestId = null;

function volunteerForRequest(helpRequestId) {
    currentHelpRequestId = helpRequestId;
    document.getElementById('volunteer-section').style.display = 'block';
}

async function volunteer() {
    const volunteerId = document.getElementById('volunteer-id').value;
    const response = await fetch(`${basicUrl}/api/volunteers/${volunteerId}`);
    alert(response.status)
    if (response.status === 404) {
        alert('Volunteer not found. Please register as a new volunteer.');
        return;
    }

    const volunteer = await response.json();
    await updateHelpRequestStatus('processing', volunteer._id);
}

function showNewVolunteerForm() {
    document.getElementById('new-volunteer-form').style.display = 'block';
}

async function registerNewVolunteer() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const phone = document.getElementById('phone').value;

    const response = await fetch(`${basicUrl}/api/volunteers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, phone })
    });

    const volunteer = await response.json();
    await updateHelpRequestStatus('processing', volunteer._id);
}

async function updateHelpRequestStatus(status, volunteerId) {
    const response = await fetch(`${basicUrl}/api/helprequests/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: currentHelpRequestId, status, volunteerId })
    });

    const helpRequest = await response.json();
    
    alert(`Help request status updated to ${helpRequest.status}\n"your Id for next time is:"${helpRequest._id}`);

    document.getElementById('volunteer-section').style.display = 'none';
    loadHelpRequests();
}
document.addEventListener('DOMContentLoaded', (event) => {
    loadFilters();
    loadHelpRequests();
});

// const basicUrl = 'http://localhost:5000';  // Make sure this points to your backend URL

// async function loadFilters() {
//     // Load locations
//     const locationResponse = await fetch(`${basicUrl}/api/locations`);
//     const locations = await locationResponse.json();
//     const locationFilter = document.getElementById('location-filter');
//     locationFilter.innerHTML = '<option value="">All</option>';
//     locations.forEach(location => {
//         const option = document.createElement('option');
//         option.value = location._id;
//         option.textContent = location.name;
//         locationFilter.appendChild(option);
//     });

//     // Load priorities
//     const priorityResponse = await fetch(`${basicUrl}/api/priorities`);
//     const priorities = await priorityResponse.json();
//     const priorityFilter = document.getElementById('priority-filter');
//     priorityFilter.innerHTML = '<option value="">All</option>';
//     priorities.forEach(priority => {
//         const option = document.createElement('option');
//         option.value = priority._id;
//         option.textContent = priority.priorityName;
//         priorityFilter.appendChild(option);
//     });
// }

// async function loadHelpRequests() {
//     const location = document.getElementById('location-filter').value;
//     const status = document.getElementById('status-filter').value;
//     const priority = document.getElementById('priority-filter').value;

//     let query = '/api/helprequests?';
//     if (location) query += `location=${location}&`;
//     if (status) query += `status=${status}&`;
//     if (priority) query += `priority=${priority}`;
//     query = query.slice(-1) === '&' ? query.slice(0, -1) : query;  // Remove trailing ampersand

//     const response = await fetch(`${basicUrl}${query}`);
//     const helpRequests = await response.json();
//     const helpRequestsList = document.getElementById('help-requests-list');
//     helpRequestsList.innerHTML = '';
//     helpRequests.forEach(request => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <strong>Location:</strong> ${request.location_id.name} <br>
//             <strong>Description:</strong> ${request.problemDescription} <br>
//             <strong>Contact:</strong> ${request.contactPhoneNumber} <br>
//             <strong>Status:</strong> ${request.status} <br>
//             <strong>Priority:</strong> ${request.priority_id.priorityName} <br>
//             <strong>People Stuck:</strong> ${request.numberOfPeopleStuck} <br>
//             <button onclick="volunteerForRequest('${request._id}')">I Volunteer</button>
//         `;
//         helpRequestsList.appendChild(li);
//     });
// }

// function volunteerForRequest(helpRequestId) {
//     currentHelpRequestId = helpRequestId;
//     document.getElementById('volunteer-section').style.display = 'block';
//     document.getElementById('new-volunteer-form').style.display = 'block';
//     document.getElementById('volunteer-id-section').style.display = 'none';
//     alert("...");
// }

// function showNewVolunteerForm() {
//     document.getElementById('volunteer-id-section').style.display = 'none';
//     document.getElementById('new-volunteer-form').style.display = 'block';
// }

// async function registerNewVolunteer() {
//     const firstName = document.getElementById('first-name').value;
//     const lastName = document.getElementById('last-name').value;
//     const phone = document.getElementById('phone').value;

//     const response = await fetch(`${basicUrl}/api/volunteers`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ firstName, lastName, phone })
//     });

//     const volunteer = await response.json();
//     document.getElementById('new-volunteer-form').style.display = 'none';
//     document.getElementById('volunteer-id-section').style.display = 'block';
//     document.getElementById('volunteer-id-section').textContent = `Your Volunteer ID: ${volunteer._id}`;
// }
