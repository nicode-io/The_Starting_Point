Array.prototype.myCustomFeature = 'cool!';

var arr = ['Nico', 'Deno', 'Nic'];

for (var name in arr) {
    console.log(name + ': ' + arr[name]);
}
/*
0: Nico
1: Deno
2: Nic
myCustomFeature: cool!  => here we have an unexpected value coming from the custom prototype

DON'T use for in with Array
 */



