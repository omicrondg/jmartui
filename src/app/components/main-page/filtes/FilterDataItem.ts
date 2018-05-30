export class FilterDataItem {
  value: any;
  fieldName: string;

  public static fillContainer(filterDataState: FilterDataItem[], fieldName: string, value: any) {
    // console.log(filterDataState);
    const itemIndex = filterDataState.findIndex(x => {
      return x.fieldName === fieldName;
    });
    // console.log(itemIndex);
    if (itemIndex !== -1) {
      if (value === 'All') {
        filterDataState.splice(itemIndex, 1);
      } else {
        filterDataState[itemIndex].value = value;
      }
    } else {
      filterDataState.push(Object.assign(new FilterDataItem(), <FilterDataItem>{
        fieldName: fieldName,
        value: value
      }));
    }
  }
}
