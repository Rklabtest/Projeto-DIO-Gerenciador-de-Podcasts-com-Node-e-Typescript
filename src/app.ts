import * as http from 'http'
import { getFilterEpisodes, getListEpisodes } from './controlers/podcastsController'
import { Routes } from './routes/routes'
import { HttpMethod } from './utils/http-method'

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {

  //queryString -> endpoint + ? + parâmetro
  const baseUrl = request.url?.split('?')[0]
  
  // retornar a lista de episódios
  if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response)
  }

  // filtrar episódios
  if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODES)  {
    await getFilterEpisodes(request, response)
  }
}