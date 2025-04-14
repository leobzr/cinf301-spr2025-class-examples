const axios = require('axios');

async function getPage() {
    try {
        let response = await axios.get('http://localhost:3020/user/4/book/3');
        Object.keys(response.data).forEach(
            key => console.log(`${key} has value ${response.data[key]}`)
        );
    } catch (error) {
        console.error(`Access failed: ${error}`);
    }
}

getPage();