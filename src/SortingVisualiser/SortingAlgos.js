
const merge = (nums,temparr,l,r,animations) => {
  
  let md = l+(r-l)/2;
  let i = l, j= md+1,k = l;

  while(i<=md && j<=r){

    animations.push([i,j]);
    if(temparr[i] >= temparr[j]){
      nums[k++] = temparr[i++];
    }
    else{
      nums[k++] = temparr[j++];
    }
  }

  while(i<=md){
    nums[k++] = temparr[i++];
  }
  while(j<=r){
    nums[k++] = temparr[j++];
  }


}
const mergeSortHelper = (nums,temparr,l,r,animations) => {
  if(l<=r) return;
  let md = l+(r-l)/2;
  
  mergeSortHelper(nums,temparr,l,md,animations);
  mergeSortHelper(nums,temparr,md+1,r,animations);
  merge(nums,temparr,l,r,animations);
  console.log('pushed1')
  
}
export const mergeSort = function(nums) {
  if(nums.length<=1) return nums;
  const animations = [[-1,-1],[2,4]];
  const temparr = nums.slice();
  mergeSortHelper(nums,temparr,0,nums.length-1,animations);
  return animations
};



function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}


export const tester = (nums) =>{
  
  for(let i=0;i<100;i++){
    let arr = []
    let len = randomize(1,1000);
    for(let j =0;j<len;j++)
      arr.push(randomize(-1000,1000));
    let myarr = mergeSort(arr);
    let sortedarray = arr.sort((a,b)=>(a-b))

    if(arraysEqual(myarr,sortedarray)) 
    console.log(true);
    else
    console.log(false)
  }

}



  export function randomize(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }