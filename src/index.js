module.exports = function reverse (n) {

  let res = 0;
    while(n != 0)
    {
        res = (res * 10) + n % 10;
        n = Math.trunc(n / 10);
    }
    if(res < 0){
      res = -res;
    }
    return res;

}
