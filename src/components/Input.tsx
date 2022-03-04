import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  align-items: center;

  > span {
    margin-right: 16px;
    white-space: nowrap;
  }

  > input {
    display: block;
    width: 100%;
    height: 44px;
    background: none;
    border: none;
  }
`

// Props 接受一个 label 属性，因为需要使用到 ref onBlur defaultValue 等属性
// 不想一个个传入，可以直接从 input 元素上继承属性
type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = props => {
  const { label, ...rest } = props

  return (
    <Label>
      <span>{label}</span>
      <input {...rest} />
    </Label>
  )
}

export { Input }
