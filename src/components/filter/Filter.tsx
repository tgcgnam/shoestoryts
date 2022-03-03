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
      <br />
      <Form.Item>
        <Select value={value} onChange={handleChange}>
          <Select.Option value="default">Mặc định</Select.Option>
          <Select.Option value="hTl">Giá cao &gt; thấp</Select.Option>
          <Select.Option value="lTh">Giá thấp &gt; cao</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
}

export default Filter;
