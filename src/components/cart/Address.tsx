import { useState, useEffect } from "react";

function useLocationForm(shouldFetchInitialLocation: any) {
  const [state, setState] = useState({
    cityOptions: [],
    districtOptions: [],
    wardOptions: [],
    selectedCity: null,
    selectedDistrict: null,
    selectedWard: null,
  });

  useEffect(() => {
    // First-load logic
  }, []);

  function onCitySelect(option: any) {
    // Logic khi chọn Tỉnh/Thành
  }

  function onDistrictSelect(option: any) {
    // Logic khi chọn Phường/Xã
  }

  function onWardSelect(option: any) {
    // Logic khi chọn Quận/Huyện
  }

  return { state, onCitySelect, onDistrictSelect, onWardSelect };
}

export default useLocationForm;
