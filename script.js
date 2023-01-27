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
                    <h1 class="card-title">Nome do documento</h1>
                    <div class="card-actions">
                        <div class="card-action toggle-switch">
                            <label class="switch">
                                ${
                                    alert.alerts
                                        ? `<input id="switch-alerts-${index}" type="checkbox" checked>`
                                        : `<input id="switch-alerts-${index}" type="checkbox">`
                                }                                <span class="slider round"></span>
                            </label>
                            <p>Alertas</p>
                        </div>
                        <button id="alert-logs-${index}" class="button-secondary button-small">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243-1.415-1.415L8.667 12z" />
                            </svg>
                            Ver logs
                        </button>
                        <button id="alert-details-${index}" class="button-secondary button-small" onclick="addAlertDetails(${index})">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" "/></svg>
                            Ver datelhes
                        </button>
                        <button id="alert-edit-${index}" class=" button-secondary button-small">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" />
                                    </svg>
                                    Editar
                        </button>
                        <button id="alert-delete-${index}" class="button-secondary button-small" onclick="deleteAlert(${index})">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                            </svg>
                            Deletar
                        </button>
                    </div>
        `;
        document.getElementById("cards").innerHTML += element;
    });
};

const addAlertDetails = (index) => {
    let detailsEl = `
                <!-- Modal content -->
                <div id="view-alert" class="modal-content">
                    <h1>Nome do alerta</h1>
                    <span id="close-details-${index}" class="close">&times;</span>
                    <label for="">Quando enviar os alertas</label>
                    <p>${allAlerts[index].time}</p>
                    <div class="toggle-switch">
                        <label class="switch">
                            ${
                                allAlerts[index].alerts
                                    ? `<input id="switch-alerts-${index}" type="checkbox" checked>`
                                    : `<input id="switch-alerts-${index}" type="checkbox">`
                            }   
                            <span class=" slider round"></span>
                        </label>
                        <p>Enviar alertas</p>
                    </div>
                    <label for="">Grupo de usuários a serem alertados</label>
                    <p>${allAlerts[index].userGroups}</p>
                    <label for="">Usuários a serem alertados</label>
                    <p>${allAlerts[index].users}</p>
                    <div id="view-alert--actions">
                        <button class="button-secondary button-medium">
                            <svg id="alert-edit-${index}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z" />
                            </svg>
                            Editar alerta</button>
                        <button class="button-secondary button-medium">
                            <svg id="alert-delete-${index}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                            </svg>
                            Deletar alerta</button>
                    </div>
                </div>
    `;

    let modal = document.getElementById("alert-details");
    modal.innerHTML += detailsEl;
    modal.style.display = "block";

    // // Get the <span> element that closes the modal
    var span = document.getElementById(`close-details-${index}`);

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        modal.innerHTML = "";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal.innerHTML = "";
        }
    };
};

const deleteAlert = (index) => {
    const deleteEl = `
    <div id="view-alert" class="modal-content">
                    <h1>Deletar alerta ${allAlerts[index].name}?</h1>
                    <span id="close-delete-${index}" class="close">&times;</span>
                    <p>Tem certeza que deseja deletar o alerta ${allAlerts[index].name}? Esta ação não pode ser desfeita.</p>
                    <div id="view-alert--actions">
                        <button id="close-delete-${index}" class="button-secondary button-medium">
                            Cancelar</button>
                        <button id="btn-alert-delete-${index}" class="button-primary button-medium">
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zM9 4v2h6V4H9z" />
                            </svg>
                            Deletar alerta</button>
                    </div>
                </div>
    `;
    let modal = document.getElementById("alert-delete");
    modal.innerHTML += deleteEl;
    modal.style.display = "block";

    let btn = document.getElementById(`btn-alert-delete-${index}`);

    console.log(btn);

    btn.onclick = () => {
        allAlerts = allAlerts.splice(index, 1);
        modal.style.display = "none";
        modal.innerHTML = "";
        listAllAlerts();
        addAlertSuccess("O alerto foi deletado com sucesso!");
    };

    var span = document.getElementById(`close-delete-${index}`);

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        modal.innerHTML = "";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal.innerHTML = "";
        }
    };
};

const addAlertSuccess = (text) => {
    let message = document.getElementById("success-message--alert");
    document.getElementById("success-message--text").innerHTML = text;
    message.classList.add("active-animation");
    setTimeout(() => message.classList.remove("active-animation"), 7000);
};

window.onload = listAllAlerts();
