function checkForName(inputText) {
    const postData = async (url = '', dataReq = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': "application/json",
            },
            // Body data type must match "Content-Type" header
            body: JSON.stringify(dataReq),
        });

        try {
            const dataRes = await response.json();
            return dataRes;
        } catch (error) {
            console.log('error', error);
        }
    };

    postData('/add', {inputText}).then((data) => {
        console.log('dataaaaaaaaaaaaaaaa' + data);
        document.querySelector('.msgError').innerHTML = '';
        document.querySelector('.subjectivity').innerHTML = 'Subjectivity : ' + data.subjectivity;
        document.querySelector('.confidence').innerHTML = 'Confidence : ' + data.confidence;
        document.querySelector('.agreement').innerHTML = 'Agreement : ' + data.agreement;
        document.querySelector('.irony').innerHTML = 'Irony : ' + data.irony;
        document.querySelector('.scoreTag').innerHTML = 'Score Tag : ' + data.score_tag;
    });
}

export { checkForName }
