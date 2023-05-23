function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if (!formText) {
        document.querySelector('.msgError').innerHTML = 'Name input not empty';
        document.querySelector('.subjectivity').innerHTML = '';
        document.querySelector('.confidence').innerHTML = '';
        document.querySelector('.agreement').innerHTML = '';
        document.querySelector('.irony').innerHTML = '';
        document.querySelector('.scoreTag').innerHTML = '';
    } else {
        Client.checkForName(formText);
    }
}

export { handleSubmit }
