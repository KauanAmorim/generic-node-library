const fetch = require('node-fetch')

function treatError(error) {
    throw new Error(error.message)
}

async function checkStatus(arrayLinks) {
    try {
        const linksStatus = Promise.all(
            arrayLinks.map(async link => {
                const res = await fetch(link)
                return { status: res.status, statusText: res.statusText }
            })
        )
        return linksStatus
    } catch(error) {
        treatError(error)
    }
}

function generateArrayLinks(arrayLinks) {
    return arrayLinks.map(
        (objectLink) => Object.values(objectLink).join()
    )
}

async function validateLinks(links) {
    try {

        const arrayLinks = generateArrayLinks(links)
        const linksStatus = await checkStatus(arrayLinks)
        
        const resultados = links.map((object, indice) => {
            return { ...object, status: linksStatus[indice].status, statusText: linksStatus[indice].statusText }
        })

        return resultados
    } catch (err) {
        treatError(err)
    }
}

module.exports = validateLinks