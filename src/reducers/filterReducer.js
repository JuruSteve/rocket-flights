export const filterReducer = (state, action)=>{
    const compareDates = (d1, d2) => {
        if (d1 > d2) {
          return -1
        } else if (d1 < d2) {
          return 1
        } else {
          return 0
        }
      }
    switch (action.type) {
        case "MOST_RECENT":
            return {
                ...state,
                launches.filter(item => item.upcoming == false)
                .sort((a, b) => {
                  let d1 = new Date(a.launch_date_utc)
                  let d2 = new Date(b.launch_date_utc)
                  return compareDates(d1, d2)
                })
            };
        case "FAILURE":
            return {
                ...state,
                launches.filter(item => item.launch_success !== false)
                .sort((a, b) => {
                  let d1 = new Date(a.launch_date_utc)
                  let d2 = new Date(b.launch_date_utc)
                  return compareDates(d1, d2)
                })
            }
            break;
    
        default:
            break;
    }
}