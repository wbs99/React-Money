import { useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`

type Props = {
  value: string
  onChange: (value: string) => void
}

const NoteSection: React.FC<Props> = props => {
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null)
  //相当于 Vue 中 .lazy 修饰符的作用，只关心离开 input 区域后的 value
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value)
    }
  }
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里输入备注"
          value={note}
          onChange={e => {
            props.onChange(e.target.value)
          }}
          onBlur={onBlur}
          ref={refInput}
        />
      </label>
    </Wrapper>
  )
}

export default NoteSection
