import axios from 'axios'

// 定义获取指定id链接的函数
function getLinkById(id) {
    return axios.get('/api/links', {
        params: {
            id: id
        },
    })
        .then(response => response.data)
}

export { getLinkById }
