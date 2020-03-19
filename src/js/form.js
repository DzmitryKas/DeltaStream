const form = (state) => {
    const block = document.querySelector ('.form'),
          inputs = document.querySelectorAll('.form__input'),
          blockThanks = document.querySelector('#js-thanks')
    
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: 'POST',
            body: data            
        });

        return await res.text();
    }

    const clearInputs = () => {
        inputs.forEach((item) => {
            item.value = '';
        })
    }

    block.addEventListener( 'submit', (e) => {
        e.preventDefault();

        const formData = new FormData(block)
        if (block.getAttribute('data-param') === "end") {
            for (let key in state) {
                formData.append(key, state[key]);
            }
        }

        postData('assets/server.php', formData)
            .then(res => {
                console.log(res)
            })
            .finally(() => {
                clearInputs();
                blockThanks.classList.add('fixed');
            })
    })
}



export default form;