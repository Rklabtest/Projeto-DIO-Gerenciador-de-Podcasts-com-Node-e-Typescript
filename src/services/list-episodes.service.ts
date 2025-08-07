import { PodcastTransferModel } from '../models/podcast-transfer-model'
import { repositoryPodcast } from '../repositories/podcasts-repository'
import { StatusCode } from '../utils/http-code'

// é esta função que deve retornar os dados, e não o controller
export const serviceListEpisodes = async () : Promise<PodcastTransferModel> => {

  let responseFormat : PodcastTransferModel = {
    statusCode : 0,
    body: []
  }

  const data = await repositoryPodcast()

  responseFormat.statusCode = data.length ? StatusCode.OK : StatusCode.NoContent
  responseFormat.body = data

  return responseFormat
}