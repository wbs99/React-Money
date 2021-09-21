import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  font-size: 24px;

  > ul {
    display: flex;
    background-color: #c4c4c4;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;

      &.selected::after {
        content: "";
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const CategorySection: React.FC = () => {
  const [categoryList] = useState<("-" | "+")[]>(["+", "-"]); //只能是 - 和 + 的数组
  const [category, setCategory] = useState("-");
  const categoryMap = { "-": "支出", "+": "收入" };
  return (
    <Wrapper>
      <ul>
        {categoryList.map((item) => (
          <li
            className={category === item ? "selected" : ""}
            onClick={() => {
              setCategory(item);
            }}
            key={item}
          >
            {categoryMap[item]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default CategorySection;
