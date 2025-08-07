import { PodcastTransferModel } from '../models/podcast-transfer-model'
import { repositoryPodcast } from '../repositories/podcasts-repository'
import { StatusCode } from '../utils/http-code'

export const serviceFilterEpisodes = async (podcastName : string | undefined) : Promise<PodcastTransferModel> => {

  let responseFormat : PodcastTransferModel = {
    statusCode: 0,
    body: []
  }

  const queryString = podcastName?.split('?p=')[1] || ''
  const data = await repositoryPodcast(queryString)

  // verificando se há conteúdo
  responseFormat.statusCode = data.length ? StatusCode.OK : StatusCode.NoContent
  responseFormat.body = data

  return responseFormat
}