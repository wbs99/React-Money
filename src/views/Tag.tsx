import { Button } from 'components/Button'
import Icon from 'components/Icon'
import Layout from 'components/Layout'
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

const Tag: React.FC = () => {
  const { findTag } = useTags()

  let { id } = useParams<Params>()
  const tag = findTag(parseInt(id))
  return (
    <Layout>
      <Topbar>
        <Icon name="left"></Icon>
        <span>编辑标签</span>
        <Icon></Icon>
      </Topbar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="在这里输入备注" />
        </label>
      </div>
      <div>{tag.name}</div>
      <div>
        <Button>删除标签</Button>
      </div>
    </Layout>
  )
}

export default Tag
