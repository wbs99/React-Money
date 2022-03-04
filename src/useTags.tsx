import { createId } from 'lib/createId'
import { useState } from 'react'

const defaultTags = [
  { id: createId(), name: '衣' },
  { id: createId(), name: '食' },
  { id: createId(), name: '住' },
  { id: createId(), name: '行' },
]

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags)

  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0]

  const findIndex = (id: number) => {
    let result = -1
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i
        break
      }
    }
    return result
  }

  const updateTag = (id: number, tagName: string) => {
    const index = findIndex(id)
    const tagsClone = JSON.parse(JSON.stringify(tags))
    tagsClone.splice(index, 1, { id: id, name: tagName })
    setTags(tagsClone)
  }

  const deleteTag = (id: number) => {
    const index = findIndex(id)
    const tagsClone = JSON.parse(JSON.stringify(tags))
    tagsClone.splice(index, 1)
    setTags(tagsClone)
  }

  return {
    tags,
    setTags,
    findTag,
    findIndex,
    updateTag,
    deleteTag,
  }
}
export { useTags }
