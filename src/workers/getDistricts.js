import produce from 'immer';

export const getDistricts = (data) => {
  console.log('data', data)
  let districts = {};

  Object.keys(data).map((stateCode) => {
    Object.keys(data[stateCode]?.districts || {}).map((districtName) => {
      districts = produce(districts || {}, (draftDistricts) => {
        const districtKey = `${districtName}-${stateCode}`;
        draftDistricts[districtKey] = data[stateCode].districts[districtName];
        draftDistricts[districtKey].districtName = districtName;
        draftDistricts[districtKey].stateCode = stateCode;
      });
      return null;
    });
    return null;
  });
  console.log('districts', districts)
  postMessage(districts);
};
