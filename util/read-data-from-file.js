import path from 'path'
import fs from 'fs/promises'

const readDataFromFile = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return data
}

export default readDataFromFile