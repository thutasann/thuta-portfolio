'use server'

import { IRepos } from '@/types/typings'
import axios from 'axios'

export async function getLastestRepos() {
  const token = process.env.GITHUB_TOKEN

  const repos: IRepos[] = await axios
    .get('https://api.github.com/users/thutasann/repos?sort=author-date-asc', {
      headers: {
        Authorization: `token ${token}`,
      },
    })
    .then(response => response.data)
    .catch(error => console.error(error))

  const latestRepos = repos?.slice(0, 6)

  return latestRepos
}
