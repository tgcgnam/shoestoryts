import { useState, useEffect } from "react";
import { Cascader } from "antd";

function SelectCity() {
  const [citys, setCitys] = useState <{}[]>();

  console.log(citys);
  useEffect(() => {
    const fecthData = async () => {
      const data = await fetch(`https://provinces.open-api.vn/api/?depth=3`);
      const json: {}[] = await data.json();
      const datamap = json.map<{
        value: string;
        label: string;
        children: [];
      }>((item: any) => {
        return {
          value: item.codename,
          label: item.name,
          children: item.districts.map((item: any) => ({
            value: item.codename,
            label: item.name,
            children: item.wards.map((item: any) => ({
              value: item.short_codename,
              label: item.name,
            })),
          })),
        };
      });

      setCitys(datamap);
    };
    fecthData().catch(console.error);
  }, []);

  return (
    <div>
      <Cascader options={citys} />
    </div>
  );
}

export default SelectCity;
