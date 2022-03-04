import { Button } from 'components/Button'
import { Center } from 'components/Center'
import Icon from 'components/Icon'
import { Input } from 'components/Input'
import Layout from 'components/Layout'
import { Space } from 'components/Space'
import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useTags } from 'useTags'

type Params = {
  id: string
}

const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  line-height: center;
  padding: 14px;
  background: white;
`
const InputWrapper = styled.div`
  background-color: white;
  padding: 0 16px;
  margin-top: 8px;
`

const Tag: React.FC = () => {
  const { findTag, updateTag } = useTags()

  let { id } = useParams<Params>()
  const tag = findTag(parseInt(id))
  return (
    <Layout>
      <Topbar>
        <Icon name="left"></Icon>
        <span>编辑标签</span>
        <Icon></Icon>
      </Topbar>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          placeholder="标签名"
          value={tag.name}
          onChange={e => {
            updateTag(tag.id, e.target.value)
          }}
        />
      </InputWrapper>

      <Center>
        <Space />
        <Space />
        <Space />
        <Button>删除标签</Button>
      </Center>
    </Layout>
  )
}

export default Tag
