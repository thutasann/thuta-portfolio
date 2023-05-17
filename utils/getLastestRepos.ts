'use server'

import { IRepos } from '@/types/typings'

export async function getLastestRepos() {
  const token = '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'

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  const repos: IRepos[] = await fetch('https://api.github.com/users/thutasann/repos?sort=author-date-asc', { headers })
    .then(response => response.json())
    .catch(error => console.error(error))

  const latestRepos = repos?.slice(0, 6)

  return latestRepos
}
