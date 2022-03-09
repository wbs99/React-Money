import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import TagsSection from './Money/TagsSection'
import NoteSection from './Money/NoteSection'
import CategorySection from './Money/CategorySection'
import NumberPadSection from './Money/NumberPadSection'
import { useRecords } from 'hooks/useRecords'

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

type Category = '-' | '+'

const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0,
}

function Money() {
  const [selected, setSelected] = useState(defaultFormData)

  const { addRecord } = useRecords()

  const xxx = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    })
  }

  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功')
      setSelected(defaultFormData)
    }
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
        onOk={submit}
      ></NumberPadSection>
    </MyLayout>
  )
}

export default Money
