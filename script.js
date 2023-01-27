let allAlerts = [
    {
        name: "Documento 15 dias",
        time: "15 dias antes",
        alerts: false,
        users: ["Todos"],
        userGroups: ["Todos"],
    },
    {
        name: "Documento 45 dias",
        time: "45 dias antes",
        alerts: true,
        users: ["Barbara", "Francis Santos"],
        userGroups: ["Todos"],
    },
];

/* Listando alertas existentes*/
const listAllAlerts = () => {
    document.getElementById("cards").innerHTML = "";
    allAlerts.forEach((alert, index) => {
        let element = `
            <div id="card-alert-${index}" class="card">
                <div class="card-title">
                    <p>${alert.name}</p>
                    <div class="card-icons">

                        <svg id="alert-edit-${index}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" />
                        </svg>
                        <svg id="alert-delete-${index}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                        </svg>
                    </div>
                </div>
                <p>Alertar ${alert.time}</p>
                <div class="card-actions">
                    <div class="card-action toggle-switch">
                        <label class="switch">
                        ${
                            alert.alerts
                                ? `<input id="switch-alerts-${index}" type="checkbox" checked>`
                                : `<input id="switch-alerts-${index}" type="checkbox">`
                        }
                            
                            <span class="slider round"></span>
                        </label>
                        <p>Alertas</p>
                    </div>
                    <div id="alert-logs-${index}" class="card-action">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243-1.415-1.415L8.667 12z" />
                        </svg>
                        <p>Ver logs</p>
                    </div>
                    <div id="alert-details-${index}" class="card-action" onclick='openViewAlert(${index})'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" "/></svg>
                        <p>Ver detalhes</p>
                    </div>
                </div>
            </div>
        `;
        document.getElementById("cards").innerHTML += element;
    });
};

window.onload = listAllAlerts();
