const fetch = require('node-fetch')

async function checkStatus(arrayLinks) {
    const linksStatus = Promise.all(
        arrayLinks.map(async link => {
            const res = await fetch(link)
            return res.status
        })
    )
    return linksStatus
}

function generateArrayLinks(arrayLinks) {
    return arrayLinks.map(
        (objectLink) => Object.values(objectLink).join()
    )
}

async function validateLinks(links) {
    const arrayLinks = generateArrayLinks(links)
    const linksStatus = await checkStatus(arrayLinks)
    
    const resultados = links.map((object, indice) => {
        return { ...object, status: linksStatus[indice] }
    })

    return resultados
}

module.exports = validateLinks