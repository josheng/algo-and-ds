
// let fetchItemsToDisplay = (items, sortParameter, sortOrder, itemsPerPage, pageNumber) => {
//   let sortedArr = [];
//   let resultArr = [];
//   let counter = 0;
//   let pageIndex = itemsPerPage * pageNumber;
//   if (sortOrder === 0) {
//     for (let i = 1; i <= items.length; i++) {
//       if (items[counter] && !items[i]) {
//         sortedArr.push(items[counter]);
//       } else if (items[counter][sortParameter] < items[i][sortParameter] ) {
//         sortedArr.push(items[counter]);
//         counter++;
//       }
//       else {
//         sortedArr.push(items[i]);
//       }
//     }
//   } else {
//     for (let i = 1; i <= items.length; i++) {
//       if (items[counter] && !items[i]) {
//         sortedArr.push(items[counter]);
//       } else if (items[counter][sortParameter] > items[i][sortParameter]) {
//         sortedArr.push(items[counter]);
//         counter++;
//       } else {
//         sortedArr.push(items[i]);
//       }
//     }
//   }

//   console.log(sortedArr);
//   sortedArr.slice(pageIndex, itemsPerPage).forEach(element => resultArr.push(element[0]))
//   console.log(resultArr);
// }
let fetchItemsToDisplay = (items, sortParameter, sortOrder, itemsPerPage, pageNumber) => {
  let pageIndex = itemsPerPage * pageNumber;
  let resultArr = [];

  let pivot = (arr, start = 0, end = arr.length - 1) => {
    const swap = (arr, index1, index2) => {
      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    };

    let pivot = arr[start][sortParameter];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i][sortParameter]) {
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    }

    swap(arr, start, swapIndex);
    return swapIndex;
  }

  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }

  quickSort(items);

  if (sortOrder === 0) {
    items
      .slice(pageIndex, itemsPerPage)
      .forEach((element) => resultArr.push(element[0]));
  } else{
    items
      .reverse()
      .slice(pageIndex, itemsPerPage)
      .forEach((element) => resultArr.push(element[0]));
  }
  console.log(resultArr);
  return resultArr;
}



// fetchItemsToDisplay([['p1', '1', '2'], ['p2', '2', '1']], 1, 0,1,0)
// fetchItemsToDisplay([['owjevtkuyv', '58584272', '62930912' ],['rpaqgbjxik', '9425650', '96088250'],['dfbkasyqcn', '37469674', '46363902'],['vjrrisdfxe', '18666489', '88046739']], 2, 1,2,0)

let arr = [
  ["yebjtghusw", "10409950", "43930908"],

  ["lpdvemrzng", "1067830", "737010"],

  ["qslptzkkso", "10999767", "90865749"],

  ["jmnnorclms", "11359538", "41194230"],

  ["cbswzjkrgm", "13695261", "387531"],

  ["vgpcykukyw", "13946964", "3580604"],

  ["xygiipiyag", "1750761", "32943248"],

  ["avoquwwfqh", "17841064", "72704825"],

  ["setwqqojic", "18597613", "1746564"],

  ["nxmrefmjxi", "20238291", "59334299"],

  ["kesdrjduqk", "20410884", "34301024"],

  ["odrwhsbowv", "2124399", "38014219"],

  ["wdadruodtq", "21399692", "53023505"],

  ["imyaahhqzi", "22453193", "1785324"],

  ["dfpwpqpdqf", "24194247", "47767913"],

  ["iwwaxwgrrn", "25306954", "37099905"],

  ["uiygwupgvo", "25803481", "97180739"],

  ["aqioqzwlsc", "26335456", "44639265"],

  ["rlrajumuwj", "27405152", "65590449"],

  ["dsidfkkaug", "28115950", "94858599"],

  ["ubivjiqaxe", "29291127", "90004372"],

  ["jociqgfcll", "29379968", "15367013"],

  ["lnrbaourig", "29850151", "49477927"],

  ["lphjslpbnl", "29944361", "2175438"],

  ["gqnruzpoez", "3191060", "49940378"],

  ["dpzxektsix", "33269040", "15403904"],

  ["vlprtxrejo", "34135521", "38943120"],

  ["wlbjrhrdpi", "35064260", "14498542"],

  ["oawbugvxki", "35924716", "8074340"],

  ["rlsvnwvevw", "36133693", "54084728"],

  ["scygfldcjg", "37588628", "96764711"],

  ["jweegluxad", "39539985", "1271504"],

  ["ybozidwoya", "39737767", "89817486"],

  ["oyikqypgrf", "4060759", "14281543"],

  ["sqcckgrdew", "41220384", "11031820"],

  ["dllixiqzcs", "42854250", "33825872"],

  ["ocopoouvml", "44311015", "22680931"],

  ["pxqzkbssau", "47331458", "56055748"],

  ["cvadmvkkoq", "49538726", "26082626"],

  ["vnpmjvlxna", "50736683", "2103143"],

  ["oocyoupjqg", "5122375", "65084924"],

  ["uivdbwynqh", "51549708", "76826303"],

  ["wrqxjixhnk", "5179756", "70096189"],

  ["ulujrxjfkr", "53173820", "32174166"],

  ["pejufmhkue", "53529471", "30051495"],

  ["avytgtwjeb", "53927661", "79979884"],

  ["ekbzfanedz", "5561272", "48181504"],

  ["yjbabvquyx", "58575848", "66843675"],

  ["wsfftignux", "58936035", "69658799"],

  ["oegnqncrrb", "59347027", "55054801"],

  ["naatwdkauu", "60001732", "29660345"],

  ["xdpvqyzlxx", "60759055", "7286794"],

  ["ghjuzphkhu", "62313384", "13606886"],

  ["ifqnyrvqll", "63565776", "68793783"],

  ["eueonnbhyg", "65552726", "61739861"],

  ["wglscmjdnv", "67265863", "77754807"],

  ["nvmznvzsel", "68136501", "78182144"],

  ["nlhlowigoo", "70912245", "49748653"],

  ["nliqrtrpxr", "71375949", "19699817"],

  ["qkmhizumoj", "71642134", "23694350"],

  ["zucibjuowv", "72552539", "7903922"],

  ["nuobmassxk", "74715523", "35025034"],

  ["scenjewxad", "74719183", "49365"],

  ["fwsxwqmyon", "75512460", "84852109"],

  ["orfagdftnh", "77089329", "32903894"],

  ["okpssuualb", "78161767", "77500184"],

  ["xgvbfxkfzy", "80387942", "34607052"],

  ["zdcpejgolb", "8176804", "66151732"],

  ["hptpfjsuhg", "83897325", "26351820"],

  ["uzamdhgqjc", "85861999", "58188143"],

  ["xfeqlcnoyz", "86370532", "98373998"],

  ["ismqhppzdp", "91911158", "98182758"],

  ["wbpsucrgpt", "92034872", "31335731"],

  ["rjxfslmptb", "92040", "5694188"],

  ["fxflgmddpc", "92511689", "75568861"],

  ["tywaandkgz", "92694278", "25559780"],

  ["udlkcomidc", "92959878", "64455021"],

  ["dbhgarjgzk", "93457758", "59183281"],

  ["zwjpzuhjub", "9401289", "59327102"],

  ["pxqnzfclmi", "9407806", "79390454"],

  ["xvknktfhwl", "94268835", "6052538"],

  ["vgpvirjnnk", "94270553", "19508698"],

  ["slpximdcsq", "94551142", "55818993"],

  ["pcfcvqzmfx", "94686481", "28472850"],

  ["qbaeguvhfh", "98262878", "90641425"],
];
let res = [];
console.log(arr.slice(2,1));
