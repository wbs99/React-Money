import React, { useState } from 'react'
import dayjs from 'dayjs'
import Layout from '../components/Layout'
import CategorySection from './Money/CategorySection'
import styled from 'styled-components'
import { useRecords } from 'hooks/useRecords'
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
function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const { records } = useRecords()
  const { getTagNameById } = useTags()

  return (
    <Layout>
      <CategorySectionWrapper>
        <CategorySection
          value={category}
          onChange={value => setCategory(value)}
        ></CategorySection>
      </CategorySectionWrapper>

      <div>
        {records.map(r => {
          return (
            <Item>
              <div className="tags">
                {r.tagIds.map(tagId => (
                  <span>{getTagNameById(tagId)}</span>
                ))}
              </div>
              <div className="note">{r.note && <div>{r.note}</div>}</div>
              {/* {dayjs(r.createdAt).format('YYYY-MM-DD')} */}

              <div className="amount">￥{r.amount}</div>
            </Item>
          )
        })}
      </div>
    </Layout>
  )
}

export default Statistics
