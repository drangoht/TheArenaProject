import { findPath  } from "./index";


console.log(findPath([1,0],[2,1],[
	[0,1,1,0],
	[0,0,1,0],
]));

console.log(findPath([2,1],[1,0],[
	[0,1,1,0],
	[0,0,1,0],
]));


console.log(findPath([1,0],[3,1],[
	[0,1,1,0],
	[0,0,1,1],
]));

console.log(findPath([1,0],[3,2],[
	[0,1,1,0],
	[0,0,1,1],
    [0,0,0,1],
]));

console.log(findPath([3,2],[1,0],[
	[0,1,1,0],
	[0,0,1,1],
    [0,0,0,1],
]));
console.log(findPath([0,0],[0,0],[
	[1],
]));