import fs from 'fs'
import path from 'path'
import { PodcastModel } from '../models/podcast-model'

const pahtData = path.join(__dirname, '../repositories/podcasts.json')
const langguage = 'utf-8'

export const repositoryPodcast = async (podcastName? : string) : Promise<PodcastModel[]> => {
  const readData = fs.readFileSync(pahtData, langguage)
  let jsonFile = JSON.parse(readData) 

  if(podcastName) {
    jsonFile = jsonFile.filter((podcast : PodcastModel) => podcast.podcastName === podcastName)
  }

  return jsonFile
}