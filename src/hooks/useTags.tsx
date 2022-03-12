import { useUpdate } from 'hooks/useUpdate'
import { createId } from 'lib/createId'
import { useEffect, useState } from 'react'

const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([])

  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
    if (localTags.length === 0) {
      localTags = [
        { id: createId(), name: '衣' },
        { id: createId(), name: '食' },
        { id: createId(), name: '住' },
        { id: createId(), name: '行' },
      ]
    }
    setTags(localTags)
  }, [])

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags))
  }, tags)

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
    setTags(tags.map(tag => (tag.id === id ? { id, name: tagName } : tag)))
  }

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }

  const addTag = () => {
    const tagName = window.prompt('请输入你要添加的标签名')
    if (tagName !== null && tagName !== '') {
      setTags([...tags, { id: createId(), name: tagName }])
    }
  }

  const getTagNameById = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0]
    return tag ? tag.name : ''
  }

  return {
    tags,
    setTags,
    findTag,
    findIndex,
    updateTag,
    deleteTag,
    addTag,
    getTagNameById,
  }
}
export { useTags }
