

export const mergeSort = function(nums) {
  if(nums.length<=1) return nums;
  const animations = [];
  const temparr = nums.slice();
  mergeSortHelper(nums,temparr,0,nums.length-1,animations);
  //tester(temparr)
  return animations;
};
const mergeSortHelper = (temparr,nums,l,r,animations) => {
  
  if(l==r) return;
  let md = Math.floor((l + r) / 2);

  mergeSortHelper(nums,temparr,l,md,animations);
  mergeSortHelper(nums,temparr,md+1,r,animations);
  merge(nums,temparr,l,md,r,animations);
  //console.log('pushed1')
  
};

const merge = (nums,temparr,l,md,r,animations) => {

  let i = l, j= md+1,k = l;


  while(i<=md && j<=r){

    animations.push([i,j]);
    animations.push([i,j]);
    //console.log(animations)

    

    if(temparr[i] <= temparr[j]){
      animations.push([k,temparr[i]]);
      nums[k++] = temparr[i++];
    }
    else{
      animations.push([k,temparr[j]]);
      nums[k++] = temparr[j++];
    }
  }

  while(i<=md){
    animations.push([i,i]);
    animations.push([i,i]);
    animations.push([k,temparr[i]]);
    nums[k++] = temparr[i++];
  }
  while(j<=r){
    animations.push([j,j]);
    animations.push([j,j]);
    animations.push([k,temparr[j]]);
    nums[k++] = temparr[j++];
  }


}



function arraysEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null) return false;
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
    console.log('im in tester')
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