// Add your code here
function submitData(name, email) {
    let formData = {name: name, email: email};
    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    };

    return fetch('http://localhost:3000/users', configObject)
        .then(function(response){
            return response.json();
        })
        .then(function(object){
            let idElem = document.createElement('p');
            let nameElem = document.createElement('p');
            let emailElem = document.createElement('p');
            idElem.innerHTML = object.id;
            nameElem.innerHTML = object.name;
            emailElem.innerHTML = object.email;
            document.body.appendChild(idElem);
            document.body.appendChild(nameElem);
            document.body.appendChild(emailElem);
        })
        .catch(function(error){
            let errorElem = document.createElement('p');
            errorElem.innerHTML = error.message;
            document.body.appendChild(errorElem);
        });
}

submitData();
