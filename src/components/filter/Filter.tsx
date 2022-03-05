import { Form, Select } from "antd";
import { useState } from "react";

function Filter({ updateFilter }: any) {
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
    updateFilter(e.target.value);
  };
  return (
    <>
      <Form.Item>
        <Select onChange={handleChange} defaultValue={"default"}>
          <Select.Option value="default">Bộ lọc</Select.Option>
          <Select.Option value="hTl">Giá : cao &gt; thấp</Select.Option>
          <Select.Option value="lTh">Giá : thấp &gt; cao</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
}

export default Filter;
