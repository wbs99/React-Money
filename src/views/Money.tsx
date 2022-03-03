import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import TagsSection from './Money/TagsSection'
import NoteSection from './Money/NoteSection'
import CategorySection from './Money/CategorySection'
import NumberPadSection from './Money/NumberPadSection'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
    note: '',
    category: '-' as Category,
    amount: 0,
  })

  const xxx = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    })
  }

  return (
    <MyLayout>
      <TagsSection
        value={selected.tagIds}
        onChange={tagIds => xxx({ tagIds })}
      ></TagsSection>
      <NoteSection
        value={selected.note}
        onChange={note => xxx({ note })}
      ></NoteSection>
      <CategorySection
        value={selected.category}
        onChange={category => xxx({ category })}
      ></CategorySection>
      <NumberPadSection
        value={selected.amount}
        onChange={amount => xxx({ amount })}
        onOk={() => {}}
      ></NumberPadSection>
    </MyLayout>
  )
}

export default Money
