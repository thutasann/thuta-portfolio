import { atom } from 'recoil'

export const tagState = atom<string | 'all'>({
  key: 'tag-state',
  default: '',
})
