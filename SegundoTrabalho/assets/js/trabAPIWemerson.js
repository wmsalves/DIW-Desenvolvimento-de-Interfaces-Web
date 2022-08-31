function functions() {
    myGit();
    apiGit2();
    apiGit3();
    apiGit4();
    apiGit5();
    apiGit6();
    apiGit7();
    apiGit8();
    apiGit9();
    apiGit210();
}



function myGit() {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/Veidoido');

    xhr.onload = function () {

        let dados = JSON.parse(this.responseText);

        let profileString = `<div class="profile_photo col-12 col-md-12 col-lg-3 text-center">
                                <a href="${dados.html_url}" target="_blank">
                                    <img class="profile_photo rounded-3 border border-primary border-2" src="${dados.avatar_url}" alt="">
                                </a>    
                            </div>

                            <div class="profile row align-items-center">
                                <div class="profile_name">
                                    <a href="${dados.html_url}" target="_blank">
                                        <h3 class="nome"><strong>${dados.name}</strong></h3>
                                    </a>    
                                    <p>${dados.bio}</p>
                                </div>
                                <div class="profile_socials">
                                    <div class=profile_icons align-bottom>
                                        <a href="${dados.html_url}" target="_blank"><i class="fab fa-github"></i></a>
                                        <a href="https://www.instagram.com/wmsalves/" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a href="https://www.linkedin.com/in/wemerson-alves-ab18681a0/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                        <a href="https://open.spotify.com/user/veidoido?si=16cd4e44ad82432e" target="_blank"><i class="fab fa-spotify"></i></a>
                                        <a href="https://steamcommunity.com/id/wdsvei/" target="_blank"><iclass="fab fa-steam"></i></a>
                                    </div>  
                                </div>
                            </div> `

        document.getElementById('profile').innerHTML = profileString;
    }


    xhr.send();
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function apiGit2() {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/repos/airbnb/javascript');

    xhr.onload = function () {

        let dados = JSON.parse(this.responseText);

        let string = `  <div class="d-flex justify-content-center overflow-hidden" style="height:60px">
                            <h4><strong>${dados.name}</strong></h4>
                        </div>`

        document.getElementById('rep1a').innerHTML = string;
    }
    xhr.send();
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function apiGit3() {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/airbnb');

    xhr.onload = function C() {

        let dados = JSON.parse(this.responseText);

        let string = `    <div class="d-flex justify-content-center">
                                    <img class="rounded-3" style="width: 100%; max-width: 200px; height: auto;"src="${dados.avatar_url}" alt="">
                                </div>
                                <div class="d-flex justify-content-center">
                                    <h6>Por: <strong>${dados.name}</strong></h6>
                                </div> `

        document.getElementById('rep2a').innerHTML = string;
    }
    xhr.send();
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function apiGit4() {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/repos/airbnb/javascript');

    xhr.onload = function () {

        let dados = JSON.parse(this.responseText);
        let data = new Date(dados.updated_at);

        let string = `  <p id="parag" class="overflow-hidden"style="text-align: justify;height:92px">Description:<br><strong>${dados.description}</strong></p>
                        <p style="text-align: justify;font-size: small;">Updated: <strong>${data.toLocaleDateString()}</strong><br>
                        Stars: <strong>${dados.stargazers_count}</strong></p>
                        <div class="d-flex justify-content-end">
                            <a href="${dados.html_url}" target="_blank"><button type="button" class="btn btn-outline-primary btn-sm">Ver Repositório</button></a>
                        </div>`


        document.getElementById('rep3a').innerHTML = string;
    }
    xhr.send();
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function apiGit5(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/repos/trekhleb/javascript-algorithms');

    xhr.onload = function (){

        let dados = JSON.parse(this.responseText);

        let string = `  <div class="d-flex justify-content-center overflow-hidden" style="height:60px">
                            <h4><strong>${dados.name}</strong></h4>
                        </div>`

        document.getElementById('rep1b').innerHTML = string;
    }
    xhr.send();
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function apiGit6(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/trekhleb');

    xhr.onload = function (){

        let dados = JSON.parse(this.responseText);

        let string = `    <div class="d-flex justify-content-center">
                                    <img class="rounded-3" style="width: 100%; max-width: 200px; height: auto;"src="${dados.avatar_url}" alt="">
                                </div>
                                <div class="d-flex justify-content-center">
                                    <h6>Por: <strong>${dados.name}</strong></h6>
                                </div> `
        
        document.getElementById('rep2b').innerHTML = string;            
    }
    xhr.send();
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function apiGit7(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/repos/trekhleb/javascript-algorithms');

    xhr.onload = function (){

        let dados = JSON.parse(this.responseText);
        let data = new Date (dados.updated_at);

        let string = `  <p id="parag" class="overflow-hidden"style="text-align: justify;height:92px">Description:<br><strong>${dados.description}</strong></p>
                        <p style="text-align: justify;font-size: small;">Updated em: <strong>${data.toLocaleDateString()}</strong><br>
                        Stars: <strong>${dados.stargazers_count}</strong></p>
                        <div class="d-flex justify-content-end">
                            <a href="${dados.html_url}" target="_blank"><button type="button" class="btn btn-outline-primary btn-sm">Ver Repositório</button></a>
                        </div>`

        
        document.getElementById('rep3b').innerHTML = string;                        
    }
    xhr.send();
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function apiGit8(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/repos/twbs/bootstrap');

    xhr.onload = function (){

        let dados = JSON.parse(this.responseText);

        let string = `  <div class="d-flex justify-content-center overflow-hidden" style="height:60px">
                            <h4><strong>${dados.name}</strong></h4>
                        </div>`

        document.getElementById('rep1c').innerHTML = string;
    }
    xhr.send();
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function apiGit9(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/twbs');

    xhr.onload = function (){

        let dados = JSON.parse(this.responseText);

        let string = `    <div class="d-flex justify-content-center">
                                    <img class="rounded-3" style="width: 100%; max-width: 200px; height: auto;"src="${dados.avatar_url}" alt="">
                                </div>
                                <div class="d-flex justify-content-center">
                                    <h6>Por: <strong>${dados.name}</strong></h6>
                                </div> `
        
        document.getElementById('rep2c').innerHTML = string;            
    }
    xhr.send();
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function apiGit10(){

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/repos/twbs/bootstrap');

    xhr.onload = function (){

        let dados = JSON.parse(this.responseText);
        let data = new Date (dados.updated_at);

        let string = `  <p id="parag" class="overflow-hidden"style="text-align: justify;height:92px">Description:<br><strong>${dados.description}</strong></p>
                        <p style="text-align: justify;font-size: small;">Updated: <strong>${data.toLocaleDateString()}</strong><br>
                        Stars: <strong>${dados.stargazers_count}</strong></p>
                        <div class="d-flex justify-content-end">
                            <a href="${dados.html_url}" target="_blank"><button type="button" class="btn btn-outline-primary btn-sm">Ver Repositório</button></a>
                        </div>`

        
        document.getElementById('rep3c').innerHTML = string;                        
    }
    xhr.send();
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/


function search(){
    let itemBusca = document.getElementById('Search').value;
    let xhr = new XMLHttpRequest;
    xhr.onload = showResult;
    xhr.open('GET', `https://api.github.com/search/repositories?q=${itemBusca}`);
    xhr.send();
    
}
document.getElementById('btnSearch').addEventListener('click', search);

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

function showResult(){
    let show = document.getElementById('result');
    let string = ``
    let dados = JSON.parse(this.responseText);
    for(i=0;i<3;i++){
        let mostrapesquisa = dados.items[i];
        let data = new Date (mostrapesquisa.updated_at);
        string = string + ` <div class="col12 border border-primary rounded-3 retornoPesquisa">
                            <img class="imgpequisa rounded-3";" src="${mostrapesquisa.owner.avatar_url}">
                                <p><strong>${mostrapesquisa.name}</strong><br><span style="font-size: small;">${mostrapesquisa.owner.login}</span></p>
                                <p>${mostrapesquisa.description}<br><span style="font-size: small;">Última atualização: ${data.toLocaleDateString()}</span></p>
                                <a href="${mostrapesquisa.html_url}" target="_blank"><button type="button" class="btn btn-sm btn-outline-primary ">Ver Repositório</button></a>
                            </div>`;
        var option = document.createElement("option");
        option.text = data.toLocaleDateString();
        option.value = data.toLocaleDateString();
        
        var returnapi = document.getElementById("returnapi");
        returnapi.appendChild(option);                       

    }
    show.innerHTML = string;
}