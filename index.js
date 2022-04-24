const somePromise = fetch('https://reqres.in/api/users?page=2')

somePromise
    .then( (data) => {return data.json()} )
    .then(result => {
        console.log(result)
        const userArr = result.data
        for(let i=0; i< userArr.length; i++){
            // console.log(userArr[i])
            const newElement = document.createElement('p')
            newElement.classList.add('card' );
            newElement.innerText = 
            `First Name : ${userArr[i].first_name}, 
            Last Name : ${userArr[i].last_name},
            Email ID : ${userArr[i].email}`

            const imageElement = document.createElement('img')
            imageElement.classList.add('image','card');
            
            imageElement.src = `${userArr[i].avatar}`
            document.querySelector('h4').appendChild(imageElement)
            document.querySelector('h4').appendChild(newElement)
        }        
    })
    .catch( error => console.log("got some error - ", error))

