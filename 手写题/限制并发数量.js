function request(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${url}请求完毕`);
        }, 2000);
    })
}

function mutiRequest(urls, max) {
    const data = [].concat(urls)
    let current = 0

    function next() {
        const url = data.shift()
        if(url && current < max) {
            current++
            request(url).then(res => {
                console.log(res)
                current--
                next()
            })
        }
    }
    
    for(let i = 0; i < max; i++) {
        next()
    }
    
}

const urls = [1,2,3,4,5,6]

mutiRequest(urls, 2)