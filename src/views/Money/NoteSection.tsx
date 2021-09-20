import { useRef, useState } from "react";
import styled from "styled-components";

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
`;

const NoteSection: React.FC = () => {
  const [note, setNote] = useState("");
  const refInput = useRef<HTMLInputElement>(null);
  //相当于 Vue 中 .lazy 修饰符的作用，只关心离开 input 区域后的 value
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里输入备注"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
          onBlur={onBlur}
          ref={refInput}
        />
      </label>
    </Wrapper>
  );
};

export default NoteSection;
