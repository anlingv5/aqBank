//题库
const aqData = [
{
	"title":"我国与境外有关气象服务机构之间回复和索取境内外的飞行气象情报由( )完成。",
	"options":[{
		"label":"机场气象台或机场气象站",
		"value":"A"
	},{
		"label":"民航气象监视台",
		"value":"B"
	},{
		"label":"民航地区气象中心",
		"value":"C"
	},{
		"label":"民航气象中心",
		"value":"D"
	}],
	"answer":["D"],
	"explan":"",
	"status":"",
	"current":[]
},
{
	"title":"()应当按照气象情报制作的规定，以缩写明语形式制作、发布重要气象情报。",
	"options":[{
		"label":"机场气象台或机场气象站",
		"value":"A"
	},{
		"label":"民航气象监视台",
		"value":"B"
	},{
		"label":"民航气象中心",
		"value":"C"
	},{
		"label":"民航地区气象中心",
		"value":"D"
	}],
	"answer":["B"],
	"explan":"",
	"status":"",
	"current":[]
},{
	"title":"根据《中国民用航空气象工作规则》，( )是中层重要天气预告图的发布机构。",
	"options":[{
		"label":"机场气象台或机场气象站",
		"value":"A"
	},{
		"label":"民航地区气象中心",
		"value":"B"
	},{
		"label":"民航气象监视台",
		"value":"C"
	},{
		"label":"民航气象中心",
		"value":"D"
	}],
	"answer":["B","D"],
	"explan":"",
	"status":"",
	"current":[]
},{
	"title":"根据《中国民用航空气象工作规则》，( )是低层区域预报的制作和发布机构。",
	"options":[{
		"label":"民航地区气象中心",
		"value":"A"
	},{
		"label":"民航气象监视台",
		"value":"B"
	},{
		"label":"机场气象台或机场气象站",
		"value":"C"
	},{
		"label":"民航气象中心",
		"value":"D"
	}],
	"answer":["A","B","C"],
	"explan":"",
	"status":"",
	"current":[]
}];

function getArrayItems(arr, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length>0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    return return_array;
}

const dataBank = getArrayItems(aqData,3);

export default ({
	dataBank
}) 