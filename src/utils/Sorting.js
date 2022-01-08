export const sortByRank = ( a, b ) => {
    if ( a.data.rank < b.data.rank ){
      return -1;
    }
    if ( a.data.rank > b.data.rank){
      return 1;
    }
    return 0;
}
