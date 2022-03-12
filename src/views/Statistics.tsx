import React, { useState } from 'react'
import dayjs from 'dayjs'
import Layout from '../components/Layout'
import CategorySection from './Money/CategorySection'
import styled from 'styled-components'
import { RecordItem, useRecords } from 'hooks/useRecords'
import { useTags } from 'hooks/useTags'

const CategorySectionWrapper = styled.div`
  background-color: #fffbe5;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const { records } = useRecords()
  const { getTagNameById } = useTags()
  const hash: { [K: string]: RecordItem[] } = {}

  const selectedRecords = records.filter(r => r.category === category)

  selectedRecords.map(r => {
    const key = dayjs(r.createdAt).format('YYYY-MM-DD')
    if (!(key in hash)) {
      hash[key] = []
    }
    return hash[key].push(r)
  })

  const arr = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0
    if (a[0] > b[0]) return -1
    if (a[0] < b[0]) return -1
    return 0
  })
  return (
    <Layout>
      <CategorySectionWrapper>
        <CategorySection
          value={category}
          onChange={value => setCategory(value)}
        ></CategorySection>
      </CategorySectionWrapper>
      {arr.map(([date, records]) => (
        <div>
          <Header>{date}</Header>

          <div>
            {records.map(r => {
              return (
                <Item>
                  <div className="tags">
                    {r.tagIds.map(tagId => (
                      <span key={tagId}>{getTagNameById(tagId)}</span>
                    ))}
                  </div>
                  <div className="note">{r.note && <div>{r.note}</div>}</div>

                  <div className="amount">￥{r.amount}</div>
                </Item>
              )
            })}
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Statistics
