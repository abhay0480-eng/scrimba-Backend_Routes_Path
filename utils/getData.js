
import path from 'node:path'
import fs from 'node:fs/promises'


export const getData = async () => {

    try {
        const filepath = path.join('data', 'data.json')
        const data = await fs.readFile(filepath, 'utf8')
        const parsedData = JSON.parse(data)
        return parsedData

    } catch (error) {
        console.log(error)
        return []
    }
}