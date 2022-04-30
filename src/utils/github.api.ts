import { repoType, userType } from '@/types/githubType'
import axios from 'axios'

export class GithubApi {
  static async getUser(userName: string): Promise<userType> {
    const userApi = await axios.get(`https://api.github.com/users/${userName}`)

    const user: userType = {
      photo: userApi.data.avatar_url,
      name: userApi.data.name,
      followers: userApi.data.followers,
      following: userApi.data.following,
      location: userApi.data.location,
    }

    return user
  }

  static async getRepos(userName: string): Promise<repoType[]> {
    const repos: repoType[] = []

    const reposApi = await axios.get(
      `https://api.github.com/users/${userName}/repos`
    )

    for (const data of reposApi.data) {
      const languagesApi = await axios.get(
        `https://api.github.com/repos/${userName}/${data.name}/languages`
      )

      const languages: string[] = []

      for (const lang in languagesApi.data) {
        languages.push(lang)
      }

      const repo: repoType = {
        name: data.name,
        visibility: data.visibility,
        description: data.description,
        languages,
      }

      repos.push(repo)
    }

    return repos
  }
}
