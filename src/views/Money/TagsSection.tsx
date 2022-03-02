import styled from 'styled-components'
import React, { useState } from 'react'
import { useTags } from 'useTags'

const Wrapper = styled.section`
  background-color: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ul {
    margin: 0 -12px;

    > li {
      background-color: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;

      &.selected {
        background: #8bb91c;
      }
    }
  }

  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`

type Props = {
  value: string[]
  onChange: (selected: string[]) => void
}

const TagsSection: React.FC<Props> = props => {
  const { tags, setTags } = useTags()

  const selectedTags = props.value

  const onAddTag = () => {
    const tagName = window.prompt('请输入你要添加的标签名')
    //弹出对话框，若点击取消，控制台得到的就是 null
    if (tagName !== null) {
      setTags([...selectedTags, tagName])
    }
  }

  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag)
    if (index >= 0) {
      //如果这个 tag 在选中的 tags 数组中，那就 filter 出其他的 tag
      props.onChange(selectedTags.filter(t => t !== tag))
    } else {
      //如果这个 tag 不在选中的 tags 数组中，就加到 selectedTags 数组中
      props.onChange([...selectedTags, tag])
    }
  }

  const getClass = (tag: string) =>
    selectedTags.indexOf(tag) >= 0 ? 'selected' : ''

  return (
    <Wrapper>
      <ul>
        {tags.map(tag => (
          <li
            key={tag}
            onClick={() => {
              onToggleTag(tag)
            }}
            className={getClass(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}

export default TagsSection
