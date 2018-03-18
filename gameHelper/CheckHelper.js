/**
 * Created by Administrator on 2018/3/18.
 */
var CCheckHelper = {
    KEYS:require('./nnCheck/nn'),
    Card2Key:{
        1:1,
        2:2,
        3:3,
        4:4,
        5:5,
        6:6,
        7:7,
        8:8,
        9:9,
        10:0,
        11:'J',
        12:'Q',
        13:'K'
    },
    NTypeDes:{
        0:"无牛",
        1:"牛一",
        2:"牛二",
        3:"牛三",
        4:"牛四",
        5:"牛五",
        6:"牛六",
        7:"牛七",
        8:"牛八",
        9:"牛九",
        10:"牛牛",
        11:"四花",
        12:"五花",
        13:"炸弹",
        14:"小牛牛"
    },
    CardsToKey:function(cards)
    {
          var key = "";
        for(var i=0;i<cards.length;i++)
        {
            key += this.Card2Key[cards[i]];
        }
        return key;
    },
    CheckNNType:function(cards)
    {
        cards.sort(function(l,r){return l-r});
        if(cards.length == 5)
        {
            var key = this.CardsToKey(cards);
            var n = this.KEYS[key];
            return n?n:0;
        }
        return 0;
    }
}



console.log(CCheckHelper.NTypeDes[CCheckHelper.CheckNNType([1,1,2,2,3])])